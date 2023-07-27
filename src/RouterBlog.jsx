import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class RouterBlog extends Component {
    // display name
    static displayName = "Router_Blog"
    constructor(props) {
        super(props);

        // State
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        );
    }
}

// Class Adı aşağıda gösterilmesi
// export default RouterBlog

// Higher Order Component
export default withTranslation()(RouterBlog);