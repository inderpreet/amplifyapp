import { React , Component} from "react";
import ImageUpload from "./ImageUpload";
import {Link } from 'react-router-dom'


export default class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '', imagePreviewUrl: ''};
        this.state = {greybox: ''};
        this.state = {redbox: ''};
        this.state = {whitebox1: ''};
        this.state = {whitebox2: ''};
        this.state = {whitebox3: ''};
        this.state = {whitebox4: ''};
        this.state = {whitebox5: ''};
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
    myChangeHandler3 = (event) => {
        this.setState({whitebox2: event.target.value});
    }
    myChangeHandler4 = (event) => {
        this.setState({whitebox3: event.target.value});
    }
    myChangeHandler5 = (event) => {
        this.setState({whitebox4: event.target.value});
    }
    myChangeHandler6 = (event) => {
        this.setState({whitebox5: event.target.value});
    }


    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleSubmit1(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
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

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    _handleImageChange1(e) {
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
                imagePreviewUrl3: reader.result
            });
        }

        reader.readAsDataURL(file)
    }


    render() {

        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img className="img-container"  src={imagePreviewUrl}/>);
        } else {
            imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let greybox = null;
        let redbox = null;
        let whitebox1 = null;
        let whitebox2 = null;
        let whitebox3 = null;
        let whitebox4 = null;
        let whitebox5 = null;
        let {imagePreviewUrl1} = this.state;
        let imagePreview1 = null;
        if (imagePreviewUrl1) {
            imagePreview1 = (<img className="img-container" src={imagePreviewUrl1}/>);
        } else {
            imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let {imagePreviewUrl2} = this.state;
        let imagePreview2 = null;
        if (imagePreviewUrl2) {
            imagePreview2 = (<img className="img-container" src={imagePreviewUrl2}/>);
        } else {
            imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let {imagePreviewUrl3} = this.state;
        let imagePreview3 = null;
        if (imagePreviewUrl3) {
            imagePreview3 = (<img className="img-container" src={imagePreviewUrl3}/>);
        } else {
            imagePreview3 = (<div className="previewText">Please select an Image for Preview</div>);
        }


        return (
            <div className="float-container">
                <div className="float-child">
                    <ImageUpload imagePreview={imagePreview} imagePreview1={imagePreview1} imagePreview2={imagePreview2}
                                 imagePreview3={imagePreview3} greybox={this.state.greybox} redbox={this.state.redbox}
                                 whitebox1={this.state.whitebox1}
                                 whitebox2={this.state.whitebox2} whitebox3={this.state.whitebox3}
                                 whitebox4={this.state.whitebox4}
                                 whitebox5={this.state.whitebox5}/>
                </div>

                <div className="float-child">
                    <div className="Text">
                        Select Images For Upload
                    </div>
                    <div className="Image-Uplaod-Box">
                        <form className="File-Input" onSubmit={(e) => this._handleSubmit(e)}>
                            <div className="Text1"> Image1</div>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange(e)}/>

                        </form>
                        <form className="File-Input" onSubmit={(e) => this._handleSubmit1(e)}>
                            <div className="Text1"> Image2</div>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange1(e)}/>
                        </form>

                        <form className="File-Input" onSubmit={(e) => this._handleSubmit2(e)}>
                            <div className="Text1"> Image3</div>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange2(e)}/>
                        </form>
                        <form className="File-Input" onSubmit={(e) => this._handleSubmit3(e)}>
                            <div className="Text1"> Image4</div>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e) => this._handleImageChange3(e)}/>
                        </form>
                    </div>

                    <div className="Text">
                        Change Text
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

                            <p className="Text1">Enter your White Box Text:</p>
                            <textarea id="markdown-content" onChange={this.myChangeHandler2}
                                      defaultValue={this.state.value}/>
                            <textarea id="markdown-content" onChange={this.myChangeHandler3}
                                      defaultValue={this.state.value}/>
                            <textarea id="markdown-content" onChange={this.myChangeHandler4}
                                      defaultValue={this.state.value}/>
                            <textarea id="markdown-content" onChange={this.myChangeHandler5}
                                      defaultValue={this.state.value}/>
                            <textarea id="markdown-content" onChange={this.myChangeHandler6}
                                      defaultValue={this.state.value}/>
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

