import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import BlogApi from "../../services/BlogApi";


class BlogList extends Component {

    // component'deki isim
    static displayName = "Blog_List"

    // constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            blogList: [],
        }

        // Bind
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.view = this.view.bind(this)
        this.delete = this.delete.bind(this)
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

    // Functions

    // Create
    create() {
        alert("create success")
    }

    // Update
    update(id) {
        alert(id)
    }

    // View
    view(id) {
        alert(id)
    }

    // Delete
    delete(id) {
        alert(id)
    }

    render() {
        // object destructing
        const {t} = this.props
        const {blogList} = this.state
        return (
            <React.Fragment>
                <h1 className={"text-center display-4 text-uppercase"}>Blog List</h1>
                <div className={"d-flex gap-2 my-4"}>
                    <button
                        className={"btn btn-primary d-flex justify-content-center align-items-center gap-2"}
                        onClick={this.create}
                    >
                        <i className="fa-solid fa-plus"></i>
                        Blog Create
                    </button>

                    <button
                        className={"btn btn-danger d-flex justify-content-center align-items-center gap-2"}
                    >
                        <i className={"fa-solid fa-trash"}></i>
                        Blog All Delete
                    </button>
                </div>
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

                                {/* Update */}
                                <td className={"text-center"}>
                                    <i
                                        className="fa-solid fa-pen-nib text-primary"
                                        style={{'cursor': 'pointer'}}
                                        onClick={() => this.update(temp.id)}
                                    ></i>
                                </td>

                                {/* View */}
                                <td className={"text-center"}>
                                    <i
                                        className="fa-solid fa-binoculars text-warning"
                                        style={{'cursor': 'pointer'}}
                                        onClick={() => this.view(temp.id)}
                                    ></i>
                                </td>

                                {/* Delete */}
                                <td className={"text-center"}>
                                    <i
                                        className={"fa-solid fa-trash text-danger"}
                                        style={{'cursor': 'pointer'}}
                                        onClick={() => {
                                            if (window.confirm(`Are you sure to delete ${temp.id}`)) {
                                                this.delete(temp.id)
                                            } else {
                                                window.alert("Silme işlemi iptal edildi!")
                                            }
                                        }}
                                    ></i>
                                </td>
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