import React, {Component} from 'react';
import {withTranslation} from "react-i18next";

// Header, Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Router
import {Navigate, Route, Routes} from "react-router-dom";

// CRUD Components
import BlogList from "./components/blog/BlogList";
import BlogCreate from "./components/blog/BlogCreate";
import BlogUpdate from "./components/blog/BlogUpdate";
import BlogView from "./components/blog/BlogView";
import Main from "./components/Main";

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
                <Header logo={"fa-solid fa-blog"}/>

                <div className="container">
                    <Routes>
                        <Route path={"/"} element={<Main/>}/>
                        <Route path={"/blog/list"} element={<BlogList/>}/>
                        <Route path={"/blog/create"} element={<BlogCreate/>}/>
                        <Route path={"/blog/view/:id"} element={<BlogView/>}/>
                        <Route path={"/blog/update/:id"} element={<BlogUpdate/>}/>
                        <Route path={"*"} element={<Navigate to={"/"}/>}/>
                    </Routes>
                </div>

                <Footer copy={"© 2021 Copyright: "}/>
            </React.Fragment>
        );
    }
}

// Class Adı aşağıda gösterilmesi
// export default RouterBlog

// Higher Order Component
export default withTranslation()(RouterBlog);