import React, {useEffect, useState} from 'react';

const FileSelectComponent = ({setText}) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    const [imgHtml, setImgHtml] = useState("blank");

    const onFileSelect = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file);
        console.log(file);
    }

    useEffect(() => {
        if (imagePreviewUrl) {
            setImgHtml( <img src={imagePreviewUrl} alt="Image"/> );
        } else {
            setImgHtml( <div>No Image yet</div>);
        }
    }, [imagePreviewUrl]);

    return (
        <>
            <div className="input-group data-entry-group">
                <input type="file" onChange={onFileSelect}/>
            </div>
            {/*Un-comment the block below to see preview of the component*/}
            {/*<div className="row">*/}
            {/*    {imgHtml}*/}
            {/*</div>*/}
        </>
    );
};

export default FileSelectComponent;
