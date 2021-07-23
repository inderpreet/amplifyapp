import React, {useState} from 'react';
import FileSelectComponent from "./FileSelectComponent";

const DataEntryBar = (setImg, i) => {
    const [images, setImages] = useState([]);

    // useEffect( ()=>{
    // }, [images]);

    return (
        <div className="custom-group shadow">
            <div className="row">
                <span className="fw-bold ">Image Selection and Text Entry</span>
                <span className="fst-italic">Please select images for preview</span>
            </div>
            <div className="row">
                <div className="col">
                    <span>Image 1</span>
                    <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={0}/>
                </div>
                <div className="col">
                    <span>Image 2</span>
                    <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={1}/>
                </div>
                <div className="col">
                    <span>Image 3</span>
                    <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={2}/>
                </div>
                <div className="col">
                    <span>Image 4</span>
                    <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={3}/>
                </div>
                <div className="col">
                    <span>Image 5</span>
                    <FileSelectComponent imageUrl={images} setImageUrl={setImages} index={4}/>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    {images[0]}*/}
            {/*    {images[1]}*/}
            {/*    {images[2]}*/}
            {/*    {images[3]}*/}
            {/*    {images[4]}*/}
            {/*</div>*/}
            <br/>
            <div className="row">
                <span className="fw-bold">Please Enter Text for Preview</span>
            </div>
            <div className="row">

                <div className="col">
                    {/*@TODO convert Single Line Text Entry into a React Component for Reuse*/}
                    <div className="input-group data-entry-group ">
                        <span className="input-group-text">
                            Text1
                        </span>
                        <input className="form-control" type="text" aria-label="Text1"/>
                    </div>
                </div>

                <div className="col">
                    <div className="input-group data-entry-group">
                        <span className="input-group-text">
                            Text2
                        </span>
                        <input className="form-control" type="text" aria-label="Text2"/>
                    </div>
                </div>

            </div>
            {/*End Row*/}

            <div className="row">
                {/*@TODO convert Multi-Line Text Entry into a React Component for Reuse*/}
                <div className="col-lg-4">
                    <div className="input-group data-entry-group">
                        <span className="input-group-text">
                            Bullet List
                        </span>
                        <textarea className="form-control" rows="5"/>
                    </div>
                </div>

            </div>
            {/*End Row*/}
            <hr/>
        </div>
    );
}

export default DataEntryBar;
