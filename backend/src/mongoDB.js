const {MongoClient, ObjectId} = require("mongodb");
const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const pathToEnvFile = path.resolve(__dirname, '../../.env');
dotenv.config({path: pathToEnvFile});

const [user, password] = [process.env.USERNAME_DB, process.env.PASSWORD_DB]
const uriEU = `mongodb+srv://${user}:${password}@cluster0.9cewhel.mongodb.net/?retryWrites=true&w=majority`;

let dbEU;

async function connectToMongoDBEU() {
    const client = new MongoClient(uriEU);
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        dbEU = client.db('Image-Collection');

    } catch (e) {
        console.error('Error connecting to MongoDB Atlas:', e);
        throw e;
    }
}

async function connectToCollection(collectionName) {

    if (!dbEU) {
        await connectToMongoDBEU();
    }
    const collections = await dbEU.listCollections().toArray();
    const existingCollection = collections.find((collection) => collection.name === collectionName);

    if (!existingCollection) {
        throw new Error(`Collection ${collectionName} does not exist.`);
    }

    return dbEU.collection(collectionName)

}

async function findMultipleRecords(collectionName, query, searchByField) {

    const collection = await connectToCollection(collectionName);
    const querySet = {[searchByField]: {"$regex": query}};
    return await collection.find(querySet).toArray();

}

async function findSingleRecord(collectionName, query) {
    const collection = await connectToCollection(collectionName);
    return await collection.findOne(query)
}

async function addUserToDB(collectionName, {email, password}, res) {
    const collection = await connectToCollection(collectionName);
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await collection.insertOne(
            {
                email,
                password: hashedPassword
            }
        )
        const token = jwt.sign({'_id': result.insertedId}, 'shhhhh');
        await addSessionToDb({token})
        return res.status(200).json({
                'message': `${email} was created successfully!`,
                'token': token
            }
        )
    } catch (e) {
        if (e.code === 11000) {
            return res.status(200).json({
                    'message': `Duplicate Email ${email}`
                }
            )
        } else {
            return res.status(200).json({
                    'message': `There was a problem creating user!`
                }
            )
        }
    }

}

async function addSessionToDb(session) {
    const collection = await connectToCollection('Sessions');
    await collection.insertOne(
        session
    )
}


async function addUserProfile(userId, displayName) {
    const collection = await connectToCollection(process.env.VITE_REACT_DB_USERPROFILE);

    try {
        await collection.insertOne({
            userId: new ObjectId(userId),
            displayName,
            email: '',
            avatarUrl: '',
            youtubeLink: '',
            githubLink: '',
            about: '',
        });

        console.log(`Added user profile for user with ID ${userId}`);
    } catch (e) {
        if (e.code === 11000) {
            console.error(`User profile already exists for user with ID ${userId}`);
        } else {
            console.error(`Error adding user profile: ${e.message}`);
        }
    }
}

async function deleteUserFromDB(collectionName, username) {
    const collection = await connectToCollection(collectionName);
    try {
        const result = await collection.findOne({username});
        if (!result) {
            const output = `User not found : ${username}`;
            console.log(output);
            return output;
        } else {
            const output = `Deleted User : ${username}`;
            await collection.deleteOne({username: username});
            const collectionProfie = await connectToCollection(process.env.VITE_REACT_DB_USERPROFILE);
            collectionProfie.deleteOne({userId: result._id});
            console.log(output);
            return output;
        }
    } catch (e) {
        throw new Error(e);
    }
}

async function queryDbEuCollection(res, collectionName, query, searchByField) {
    const results = await findMultipleRecords(collectionName, query, searchByField);
    res.json(results)
}

// eslint-disable-next-line no-undef
module.exports = {
    addUserToDB,
}