
import React from "react";
import brand from "./assets/img/bot-row.png";
import Text from "./Text"



const ImageUpload3 = (props) =>{
    return (
        <div className="App image-frame container">
            <div className="row top-row align-items-center">
                <div className="col-9 h4">
                    <br/>    {props.greybox}
                    {/* Detached Backsplit 5 Bunglow <br/>For Sale In Brampton */}

                </div>
                <div className="col h4 top-row-right" style={{ color: "white" }}>
                    {props.redbox}
                </div>
            </div>
            <div className="row row-two">
                <div className="col-8">
                    <div className="row g-1 mt-0">
                        <div className="col">
                            <div className="img1soldout">"
                                {props.whitebox1}
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="img5soldout">
                                {props.imagePreview2}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img6soldout">
                                {props.imagePreview1}
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



export default ImageUpload3;