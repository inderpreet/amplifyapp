
import React from "react";
import brand from "./assets/img/bot-row.png";
import Text from "./Text"



const ImageUpload2 = (props) =>{
    return (
        <div className="App image-frame container">
           
            <div className="row row-two">
                <div className="col-8">
                    <div className="row g-1 mt-0">
                        <div className="col">
                            <div className="occasion">"
                                {props.whitebox1}
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="img3soldout">
                                {props.imagePreview2}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="row row-bottom">
                <img src={brand} alt="brand image" className="brand2" />
            </div>

        </div>
    );
}



export default ImageUpload2;