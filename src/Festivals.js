import { React , Component} from "react";
import ImageUpload2 from "./ImageUpload2";
import {Link } from 'react-router-dom'



export default class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '', imagePreviewUrl2: ''};
        this.state = {whitebox1: ''};
        
    }
       myChangeHandler2 = (event) => {
        this.setState({whitebox1: event.target.value});
    }
   

    _handleSubmit2(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    } 
  
    _handleImageChange2(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl2: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

  


    render() {

        

            let whitebox1 = null;
       
        

        let {imagePreviewUrl2} = this.state;
        let imagePreview2 = null;
        if (imagePreviewUrl2) {
            imagePreview2 = (<img src={imagePreviewUrl2}/>);
        } else {
            imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        }

       

        return (
            <div className="float-container">
                <div className="float-child">
                    <ImageUpload2  imagePreview2={imagePreview2}
                                 whitebox1={this.state.whitebox1}
                                />
                </div>

                <div className="float-child occasion-right">
                <form className="File-Input1">
                 <p className="Text2">Message Here</p>
                            <textarea id="markdown-content" onChange={this.myChangeHandler2}
                                      defaultValue={this.state.value}></textarea>
                            
                </form>
               <form className="File-Input1" onSubmit={(e) => this._handleSubmit2(e)}>
                            <p className="Text2"> Select  a Picture</p>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange2(e)}/>
                           </form>   
                         
                </div>
                <Link to="/">
                  <button type="button" class="btn btn-danger btn-lg backtohome1"> Back to Home!</button>
                  </Link>
               </div>

        )
    }
}



