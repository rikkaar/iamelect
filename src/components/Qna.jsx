import React, {useState} from 'react';
import arrow from "../assets/icons/selectArrow.svg"

const Qna = ({qna}) => {
    const q = qna.q
    const a = qna.a
    const [qnaOpen, setQnaOpen] = useState(false)

    return (
        <div
            key={q}
            className={"qna__item"}
            onClick={e => setQnaOpen(!qnaOpen)}
        >
            <div className={"qna__item__q__wrapper"}>
                <h3 className={"qna__item__q"}>{q}</h3>
                <div className={qnaOpen
                    ? "qna__item__arrow qna__item__arrow-opened"
                    : "qna__item__arrow qna__item__arrow-closed"}></div>
            </div>

            <div className="qna__item__a__wrapper">
                {qnaOpen
                    ? a.map(ans => {
                        return (
                            <p key={ans} className={"qna__item__a"}>{ans}</p>
                        )
                    })
                    : null
                }
            </div>
        </div>
    )
};

export default Qna;