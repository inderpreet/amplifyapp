import React, {Component} from 'react';
import DataEntryBar from "./DataEntryBar";
import Footer from "./Footer";

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
                    Final Mosiac
                    {this.state.images[0]}
                    {this.state.images[1]}
                    {this.state.texts[0]}
                    {/*{this.state.bulletPoints[0]}*/}
                    <ul>
                        <li>Test List Item</li>
                        {this.renderList(this.state.bulletPoints[0])}
                    </ul>
                </div>
                {/*Footer section*/}
                <Footer/>
            </div>
        );
    }
}

export default ClassTest;