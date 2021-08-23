import { React , Component} from "react";
import ImageUpload3 from "./ImageUpload3";
import {Link } from 'react-router-dom'



export default class SoldOut1 extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '', imagePreviewUrl: ''};
        this.state = {file: '', imagePreviewUrl1: ''};
        this.state = {greybox: ''};
        this.state = {redbox: ''};
        this.state = {whitebox1: ''};

    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    myChangeHandler = (event) => {
        this.setState({greybox: event.target.value});
    }
    myChangeHandler1 = (event) => {
        this.setState({redbox: event.target.value});
    }
    myChangeHandler2 = (event) => {
        this.setState({whitebox1: event.target.value});
    }

    _handleSubmit2(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }
    _handleSubmit3(e) {
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
    _handleImageChange3(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl1: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {

        let greybox = null;
        let redbox = null;
        let whitebox1 = null;
        let {imagePreviewUrl2} = this.state;
        let imagePreview2 = null;
        if (imagePreviewUrl2) {
            imagePreview2 = (<img className="img-container" src={imagePreviewUrl2}/>);
        } else {
            imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        }
        let {imagePreviewUrl1} = this.state;
        let imagePreview1 = null;
        if (imagePreviewUrl1) {
            imagePreview1 = (<img className="img-container" src={imagePreviewUrl1}/>);
        } else {
            imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div className="float-container">
                <div className="float-child">
                    <ImageUpload3 imagePreview2={imagePreview2}
                                  imagePreview1={imagePreview1}
                                  greybox={this.state.greybox} redbox={this.state.redbox}
                                  whitebox1={this.state.whitebox1}
                    />
                </div>
                <div className="float-child">
                    <div className="Text">
                        Enter Text and Message
                    </div>
                    <div className="Image-Uplaod-Box">
                        <form className="File-Input">
                            <p className="Text1">Enter your Grey Box Text:</p>
                            <textarea id="markdown-content" onChange={this.myChangeHandler}
                                      defaultValue={this.state.value}/>
                            {/* <input type='text'onChange={this.myChangeHandler}/> */}

                            <p className="Text1">Enter your Red Box Text:</p>
                            <textarea id="markdown-content" onChange={this.myChangeHandler1}
                                      defaultValue={this.state.value}/>

                            <p className="Text1">Enter your Message Here:</p>
                            <textarea id="markdown-content" onChange={this.myChangeHandler2}
                                      defaultValue={this.state.value}/>
                        </form>

                    </div>
                    <div className="Text">
                        Select an Image of New House
                    </div>
                    <div className="Image-Uplaod-Box">
                        <form className="File-Input" onSubmit={(e) => this._handleSubmit2(e)}>
                            <div className="Text1"> New House</div>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange2(e)}/>
                        </form>
                        <form className="File-Input" onSubmit={(e) => this._handleSubmit3(e)}>
                            <div className="Text1"> New House</div>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange3(e)}/>
                        </form>
                    </div>
                    <Link to="/">
                        <button type="button" class="btn btn-danger btn-lg backtohome"> Back to Home!</button>
                    </Link>
                </div>
            </div>

        )
    }
}

