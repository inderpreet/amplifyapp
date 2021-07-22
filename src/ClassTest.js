import React, {Component} from 'react';
import FileSelectComponent from "./FileSelectComponent";
import DataEntryBar from "./DataEntryBar";
import Footer from "./Footer";

class ClassTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div className="container-fluid main-container-class">
                <div className="app-title">
                    {/*<h1>Social Media Badge Generator</h1>*/}
                </div>

                <DataEntryBar/>
                {/*top menu ends*/}

                {/*main content area*/}
                <div className="row square-badge">
                    Final Mosiac
                </div>

                {/*Footer section*/}
                <Footer/>
            </div>
        );
    }
}

export default ClassTest;