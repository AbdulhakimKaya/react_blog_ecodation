import React from 'react';
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import OtherLanguageService from "./OtherLanguageService";

function OtherLanguageReusability(props) {
    const internationalizationService = (languageButtonTrigger) => {
        const {i18n} = props
        i18n.changeLanguage(languageButtonTrigger)
        OtherLanguageService.headerAccessLanguageServices(languageButtonTrigger)
    }

    return (
        <React.Fragment>
            <ul className={"list-group list-group-numbered"}>
                <li className={"list-group-item active"}>
                    <Link className={"btn btn-primary"} onClick={() => internationalizationService('tr')}>
                        <img src="../assets/flags/tr.jpg" alt=""/>
                    </Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={"btn btn-primary"} onClick={() => internationalizationService('en')}>
                        <img src="../assets/flags/en.jpg" alt=""/>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default withTranslation()(OtherLanguageReusability);