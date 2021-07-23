import React, {Component} from 'react';
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

                <div className="row">
                    <nav className="navbar navbar-light bg-light">
                        <span className="navbar-brand fw-bold">Social Media Badge Generator</span>
                    </nav>
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