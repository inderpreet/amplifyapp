import React, {Component} from 'react';
import DataEntryBar from "./DataEntryBar";
import Footer from "./Footer";
import ImageMosiac from "./ImageMosiac";

class ClassTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            images: [],
            texts: [],
            bulletPoints: [],
        };

        // this.renderList = this.renderList.bind(this)
    }

    renderList(str) {
        if (str) {
            console.log(str);
            return str.split("\n").map((i, key) => {
                return <li key={key}>{i}</li>;
            })
        }

    }

    render() {
        return (
            <div className="container-fluid main-container-class">
                <div>
                    <ImageMosiac/>
                </div>

                <div className="row">
                    <nav className="navbar navbar-light bg-light">
                        <span className="navbar-brand fw-bold">Social Media Badge Generator</span>
                    </nav>
                </div>

                <DataEntryBar images={this.state.images}
                              texts={this.state.texts}
                              bulletPoints={this.state.bulletPoints}
                              setData={(e) => {
                                  this.setState(e)
                              }}
                />
                {/*top menu ends*/}

                {/*main content area*/}
                <div className="row square-badge">
                    <div className="row">
                        <div className="col">
                            Left Column -1
                        </div>
                        <div className="col">
                            RIght Column -1
                        </div>
                    </div>
                    <div className="row" id="main-content-area">
                        <div className="col" id="left-column-container">
                            <div className="row" >
                                <div className="col" id="small-image-1">
                                    Small Image 1
                                </div>
                                <div className="col" id="small-image-2">
                                    Small Image 2
                                </div>
                            </div>
                            <div className="row" id="hero-image-container">
                                Hero image
                            </div>
                        </div>
                        <div className="col" id="right-column-container">
                            <div className="row" id="bullet-list-container">
                                <ul>
                                    <li>One</li>
                                    <li>Two</li>
                                </ul>
                            </div>
                            <div className="row" id="square-image">
                                Square Image
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        Bottom Bar
                    </div>

                    {/*Final Mosiac*/}
                    {/*{this.state.images[0]}*/}
                    {/*{this.state.images[1]}*/}
                    {/*{this.state.texts[0]}*/}
                    {/*/!*{this.state.bulletPoints[0]}*!/*/}
                    {/*<ul>*/}
                    {/*    <li>Test List Item</li>*/}
                    {/*    {this.renderList(this.state.bulletPoints[0])}*/}
                    {/*</ul>*/}
                </div>


                {/*Footer section*/}
                <Footer/>
            </div>
        );
    }
}

export default ClassTest;