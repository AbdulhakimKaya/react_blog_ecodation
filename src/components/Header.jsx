import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import OtherLanguageReusability from "../internationalization/OtherLanguageReusability";

class Header extends Component {
    // display name
    static displayName = "Header"

    constructor(props) {
        super(props);

        // State
        this.state = {}
    }

    render() {
        const {logo, t} = this.props
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <i className={logo}></i>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        {t('homepage')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {t('about')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {t('blog')}
                                    </a>
                                </li>
                                {/*<li className="nav-item dropdown">*/}
                                {/*    <a*/}
                                {/*        className="nav-link dropdown-toggle"*/}
                                {/*        href="#"*/}
                                {/*        role="button"*/}
                                {/*        data-bs-toggle="dropdown"*/}
                                {/*        aria-expanded="false"*/}
                                {/*    >*/}
                                {/*        Dropdown*/}
                                {/*    </a>*/}
                                {/*    <ul className="dropdown-menu">*/}
                                {/*        <li>*/}
                                {/*            <a className="dropdown-item" href="#">*/}
                                {/*                Action*/}
                                {/*            </a>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*            <a className="dropdown-item" href="#">*/}
                                {/*                Another action*/}
                                {/*            </a>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*            <hr className="dropdown-divider"/>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*            <a className="dropdown-item" href="#">*/}
                                {/*                Something else here*/}
                                {/*            </a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                            </ul>
                            <OtherLanguageReusability/>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default withTranslation()(Header);