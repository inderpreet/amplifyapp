import React from 'react';
import FileSelectComponent from "./FileSelectComponent";
import DataEntryBar from "./DataEntryBar";
import Footer from "./Footer";

const MyComponent = () => {
    return (
        <div className="container-fluid main-container-class">
            <div className="app-title">
                {/*<h1>Social Media Badge Generator</h1>*/}
            </div>

            <div className="row top-menu">
                <DataEntryBar/>
            </div>
            {/*top menu ends*/}

            {/*main content area*/}
            <div className="row square-badge">
                Final Mosiac
            </div>

            {/*Footer section*/}
            <Footer/>

        </div>
    );
};

export default MyComponent;
