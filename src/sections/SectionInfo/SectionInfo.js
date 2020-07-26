import React from 'react';

import style from './SectionInfo.module.css'

const SectionInfo = ({direction, title, text, illustration}) => {
    return (
        <div className= {(direction === "right" ? style.detailPageSectionInfo__wrapper: style.directionLeft)}>
            <div className={style.detailPageSectionInfo__paragraphs}>
                <h2 className={style.detailPageSectionInfo__title}>{title}</h2>
                <p className={style.detailPageSectionInfo__paragraph}>{text}</p>
            </div>

            <img src={illustration} alt="imageConnect"></img>
        </div>
    );
};

export default SectionInfo;