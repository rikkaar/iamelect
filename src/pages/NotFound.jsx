import React from 'react';
import {useNavigate} from 'react-router-dom'
import AnimatedPage from "../components/AnimatedPage.jsx";

const NotFound = () => {
    let navigate = useNavigate()

    return (
        <AnimatedPage>
            <div className={"centerModal"}>
                <div className={"error404__content"}>
                    <h1 className={"error404__status"}>404</h1>
                    <h1>Такой страницы не существует :(</h1>
                    <button className={"btn-blur error404__btn"} onClick={() => navigate('/')}>Вернуться на главную
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default NotFound;
