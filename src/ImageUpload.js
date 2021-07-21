
import React from "react";
import brand from "./assets/img/bot-row.png";

const ImageUpload = (props) =>{
    return (
        <div className="App image-frame container">
            <div className="row top-row align-items-center">
                <div className="col-9 h2">
                    <br/>    {props.greybox}   
             {/* Detached Backsplit 5 Bunglow <br/>For Sale In Brampton */}
                 
                </div>
                <div className="col h3 top-row-right" style={{ color: "white" }}>
                    {props.redbox}
                </div>
            </div>
            <div className="row row-two">
                <div className="col-8">
                    <div className="row g-1 mt-0">
                        <div className="col">
                            <div className="img1">
                                {props.imagePreview}
                            </div>
                        </div>
                        <div className="col">
                            <div className="img2">
                                {props.imagePreview1}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="img3">
                                {props.imagePreview2}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col align-items-center g-0">
                    <div className="row desc g-0">
                        <ul>
                            <li>{props.whitebox1}</li>
                            <li>{props.whitebox2}</li>
                            <li>{props.whitebox3}</li>
                            <li>{props.whitebox4}</li>
                            <li>{props.whitebox5}</li>
                        </ul>
                    </div>
                    <div className="row g-1">
                        <div className="col">
                            <div className="img4">
                                {props.imagePreview3}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-bottom">
                <img src={brand} alt="brand image" className="brand" />
            </div>

        </div>
    );
}



export default ImageUpload;
