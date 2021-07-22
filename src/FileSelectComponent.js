import React, {useEffect, useState} from 'react';

const FileSelectComponent = ({setImageUrl, imageUrl, index}) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");
    const onFileSelect = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const updateUrl = (html) => {
        if(imageUrl){
            let temp = imageUrl.slice(); // create a clone
        temp[index] = html;
        setImageUrl(temp);
        }

    }

    useEffect(() => {
        if (imagePreviewUrl) {
            updateUrl(<img src={imagePreviewUrl} alt="Image"/>);
        } else {
            updateUrl(<div>No Image yet</div>);
        }
    }, [imagePreviewUrl]);

    return (
        <>
            <div className="input-group data-entry-group">
                <input type="file" onChange={onFileSelect}/>
            </div>
        </>
    );
};

export default FileSelectComponent;
