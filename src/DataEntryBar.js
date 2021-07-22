import React, {useState, useEffect} from 'react';
import FileSelectComponent from "./FileSelectComponent";

const DataEntryBar = () => {
    const [image, setImage] = useState("");

    useEffect( ()=>{
        console.log("Changed " + image);
    })

    return (
        <>
            <FileSelectComponent setText={setImage}/>

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
};

export default DataEntryBar;
