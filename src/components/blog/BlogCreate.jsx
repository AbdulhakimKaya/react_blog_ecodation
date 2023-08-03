import React, {Component} from 'react';
import {withTranslation} from "react-i18next";

class BlogCreate extends Component {
    static displayName = "Blog_Create"

    // constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            header: null,
            content: null,
            blogDto: {}, //object
            isRead: false, // sözleşme kuralları
        }

        // Bind
    }

    // CDM

    // Functions
    onChangeIsRead = (event) => {
        this.setState({
            isRead: event.target.checked
        })
    }

    onChangeReset = (event) => {
        this.setState({
            header: '',
            content: '',
        })
    }

    render() {
        // object destructing
        const {t} = this.props
        const {isRead} = this.state
        return (
            <React.Fragment>
                <h1 className={"text-center display-5 text-uppercase mt-5 pt-5"}>{t('blog_create')}</h1>

                <form>
                    {/* Header */}
                    <div className={"form-group mb-4"}>
                        <span>{t('blog_header')}</span>
                        <input
                            type="text"
                            className={"form-control"}
                            id={"header"}
                            name={"header"}
                            placeholder={t('blog_header')}
                            required={true}
                            autoFocus={true}
                        />
                    </div>

                    {/* Content */}
                    <div className={"form-group mb-4"}>
                        <span>{t('blog_content')}</span>
                        <textarea
                            type="text"
                            className={"form-control"}
                            id={"content"}
                            name={"content"}
                            placeholder={t('blog_content')}
                            required={true}
                            autoFocus={false}
                        />
                    </div>

                    <div className={"form-check mb-4"}>
                        <input
                            type="checkbox"
                            className={"form-check-input"}
                            id={"isReadId"}
                            name={"isReadId"}
                            onChange={this.onChangeIsRead}
                        />
                        <label htmlFor={"isReadId"} className={"form-check-label"}>Anlaşmayı okudunuz mu?</label>
                    </div>

                    <div className={"d-flex gap-2 mb-5"}>
                        {/* Submit */}
                        <button
                            className={"btn btn-primary"}
                            disabled={!isRead}
                        >
                            {t('submit')}
                        </button>

                        {/* Reset */}
                        <button
                            className={"btn btn-danger"}
                            onChange={this.onChangeReset}
                        >
                            {t('reset')}
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default withTranslation()(BlogCreate);