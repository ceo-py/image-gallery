async function ApiCreateUser({username, password}) {

    const url = `http://127.0.0.1:3000/register`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    }
    const response = await fetch(url,
        options)
    return await response.json()
}

export default ApiCreateUser