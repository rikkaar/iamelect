import React from 'react';
import Qna from "./Qna.jsx";

const QnaList = ({qnaList}) => {
    return (
        <section className={"qna container"}>
            <h2 className={"title qna__title"}>Вопрос-ответ</h2>
            {qnaList.map((block, index) => {
                return <Qna
                    key={index}
                    qna={block}/>
            })}
        </section>
    );
};

export default QnaList;