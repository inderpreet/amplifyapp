import React from 'react';

const MyComponent = () => {
    return (
        <div className="container-fluid main-container-class">
                <div className="app-title">
                    {/*<h1>Social Media Badge Generator</h1>*/}
                </div>

                <div className="row top-menu">
                    <div className="input-group data-entry-group">
                        <button className="btn btn-outline-secondary" type="button"
                                id="file-upload-button">File...
                        </button>
                    </div>

                    <div className="input-group data-entry-group">
                        <span className="input-group-text">
                            Text1
                        </span>
                    </div>
                </div>
                {/*top menu ends*/}

                {/*main content area*/}
                <div className="row square-badge">
                    Final Mosiac
                </div>

                {/*Footer section*/}
                <footer className="text-center text-lg-start bg-light text-muted">
                    {/*Social Media Section*/}
                    <section
                        className="d-flex justify-content-center
                        justify-content-lg-between p-4 border-bottom">

                        {/*left*/}
                        <div className="me-5 d-none d-lg-block">
                            <span>
                                Connect with us over Social Media
                            </span>
                        </div>
                        <div>
                            <a href="." className="me-4 text-reset">
                                <i className="bi bi-facebook"/>
                            </a>
                            <a href="." className="me-4 text-reset">
                                <i className="bi bi-twitter"/>
                            </a>
                            <a href="." className="me-4 text-reset">
                                <i className="bi bi-instagram"/>
                            </a>
                            <a href="." className="me-4 text-reset">
                                <i className="bi bi-linkedin"/>
                            </a>
                            <a href="." className="me-4 text-reset">
                                <i className="bi bi-github"/>
                            </a>
                        </div>
                    </section>

                    <div className="text-center p-4">
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://inderpreet.github.io"> Inderpreet Singh</a>
                    </div>
                </footer>
            </div>
    );
};

export default MyComponent;
