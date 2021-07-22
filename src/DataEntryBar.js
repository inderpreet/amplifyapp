import React, {useState, useEffect} from 'react';
import FileSelectComponent from "./FileSelectComponent";

const DataEntryBar = (setImg, i) => {
    const [images, setImages] = useState([]);

    // useEffect( ()=>{
    // }, [images]);

    return (
        <>
            <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={0} />
            <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={1} />
            <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={2} />
            <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={3} />
            <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={4} />
            <div className="row">
                Test Image
                {images[0]}
                {images[1]}
                {images[2]}
                {images[3]}
                {images[4]}
            </div>

            <div className="input-group data-entry-group">
                        <span className="input-group-text">
                            Text1
                        </span>
                <input className="form-control" type="text" aria-label="Text1"/>
            </div>

            <div className="input-group data-entry-group">
                        <span className="input-group-text">
                            Text2
                        </span>
                <input className="form-control" type="text" aria-label="Text2"/>
            </div>

            <div className="input-group data-entry-group">
                        <span className="input-group-text">
                            Bullet List
                        </span>
                <textarea className="form-control" rows="5"/>
            </div>
        </>
    );
}

export default DataEntryBar;
