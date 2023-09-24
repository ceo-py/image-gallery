import {useState} from "react";

const discordWebHookUrl = import.meta.env.VITE_REACT_DISCORD_WEB_HOOK_URL

function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch(discordWebHookUrl, {
                method: 'POST',
                body: formData,
            });

            if (response.status === 200) {
                const dataJson = await response.json()
                const data = dataJson.attachments[0]
                const pictureData = {
                    title: 'test',
                    filename: data.filename,
                    url: data.url,
                }
                console.log(pictureData)
                alert('Image uploaded successfully!');
            } else {
                alert('Failed to upload image.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('An error occurred while uploading the image.');
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
}

export default ImageUploader;
