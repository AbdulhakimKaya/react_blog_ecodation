import React, {Component} from 'react';
import {withTranslation} from "react-i18next";

class BlogCreate extends Component {
    static displayName = "Blog_Create"

    // constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
        }

        // Bind
    }

    // CDM

    // Functions
    render() {
        // object destructing
        const {t} = this.props
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
                            id={""}
                            name={""}
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
                            id={""}
                            name={""}
                            placeholder={t('blog_content')}
                            required={true}
                            autoFocus={false}
                        />
                    </div>

                    {/* Submit */}
                    <button className={"btn btn-primary mb-5"}>{t('submit')}</button>
                </form>
            </React.Fragment>
        );
    }
}

export default withTranslation()(BlogCreate);