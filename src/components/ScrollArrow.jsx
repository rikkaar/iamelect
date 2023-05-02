import React, {useEffect, useRef, useState} from 'react';
import {animateScroll as scroll} from 'react-scroll'


const ScrollArrow = () => {
    // const [visible, setVisible] = useState(false)
    const scrollBtn = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollBtn.current.style.opacity = 1
            } else {
                scrollBtn.current.style.opacity= 0

            }
        })

    }, []);

    return (
        <div ref={scrollBtn} className={"scrollToTop"} onClick={scroll.scrollToTop}>
            <div className="scroll-arrow"></div>
        </div>
    );
};

export default ScrollArrow;