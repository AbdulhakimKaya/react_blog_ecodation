import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import BlogApi from "../../services/BlogApi";


class BlogList extends Component {

    // component'deki isim
    static displayName = "Blog_List"

    // constructor
    constructor(props) {
        super(props);

        this.state = {
            blogList: [],
        }
    }

    // CDM
    componentDidMount() {
        BlogApi.blogServiceList()
            .then((response) => {
                console.log(response.data)
                this.setState({
                    blogList: response.data
                })
            })
            .catch((err) => {
                console.log('Error: ', err)
            })
    }

    render() {
        // object destructing
        const {t} = this.props
        const {blogList} = this.state
        return (
            <React.Fragment>
                <h1 className={"text-center display-4 text-uppercase"}>Blog List</h1>
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>{t('blog_id')}</th>
                        <th>{t('blog_header')}</th>
                        <th>{t('blog_content')}</th>
                        <th>{t('date')}</th>
                        <th>{t('update')}</th>
                        <th>{t('view')}</th>
                        <th>{t('delete')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        blogList.map((temp) => (
                            <tr key={temp.id}>
                                <td>{temp.id}</td>
                                <td>{temp.header}</td>
                                <td>{temp.content}</td>
                                <td>{temp.systemDate}</td>
                                <td className={"text-center"}><i className="fa-solid fa-pen-nib text-primary"></i></td>
                                <td className={"text-center"}><i className="fa-solid fa-binoculars text-warning"></i></td>
                                <td className={"text-center"}><i className={"fa-solid fa-trash text-danger"}></i></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default withTranslation()(BlogList);