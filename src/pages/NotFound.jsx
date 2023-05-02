import React from 'react';
import {useNavigate} from 'react-router-dom'
import AnimatedPage from "../components/AnimatedPage.jsx";
import { Helmet } from 'react-helmet';

const NotFound = () => {
    let navigate = useNavigate()

    return (
        <AnimatedPage>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className={"centerModal"}>
                <div className={"error404__content"}>
                    <h1 className={"error404__status h1"}>404</h1>
                    <h1 className={"body1"}>Такой страницы не существует :(</h1>
                    <button className={"btn-blur error404__btn btn-font"} onClick={() => navigate('/')}>Вернуться на главную
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default NotFound;
