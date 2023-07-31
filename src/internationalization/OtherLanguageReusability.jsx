import React from 'react';
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import OtherLanguageService from "./OtherLanguageService";

import tr from "../assets/flags/tr.jpg"
import en from "../assets/flags/en.jpg"

function OtherLanguageReusability(props) {
    const internationalizationService = (languageButtonTrigger) => {
        const {i18n} = props
        i18n.changeLanguage(languageButtonTrigger)
        OtherLanguageService.headerAccessLanguageServices(languageButtonTrigger)
    }

    return (
        <React.Fragment>
            <ul className={"navbar-nav"}>
                <li className={"nav-item active"}>
                    <Link className={"nav-link"} onClick={() => internationalizationService('tr')}>
                        <img src={tr} alt="" width={40}/>
                    </Link>
                </li>
                <li className={"nav-item"}>
                    <Link className={"nav-link"} onClick={() => internationalizationService('en')}>
                        <img src={en} alt="" width={40}/>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default withTranslation()(OtherLanguageReusability);