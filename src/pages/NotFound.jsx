import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


const NotFound = () => {
    let navigate = useNavigate()

    return (
        <div className={"centerModal"}>
            <div className={"error404__content"}>
                <h1 className={"error404__status"}>404</h1>
                <h1>Такой страницы не существует :(</h1>
                <button className={"btn-blur error404__btn"} onClick={() => navigate('/')}>Вернуться на главную</button>
            </div>
        </div>
    );
};

export default NotFound;
