import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import './main.css'

import cardPicture from '../assets/cat.jpg'

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Merhaba!</strong> Nasılsınız Güzel İnsanlar?
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <Link to={'/blog/list'} className={"btn btn-primary"}><img className={"w-100"} src={cardPicture} alt=""/></Link>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorum illo inventore modi molestiae
                    officiis, rem similique totam veniam voluptates?
                </p>
            </React.Fragment>
        );
    }
}

export default withTranslation()(Main);