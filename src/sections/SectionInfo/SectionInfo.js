import React from 'react';
import imageConnect from '../../assets/detailpages/01-content-creator/illustrationConnect.svg';
import style from './SectionInfo.module.css'

const SectionInfo = ({direction}) => {
    return (
        <div className= {style.detailPageSectionInfo__wrapper}>
            <div className={style.detailPageSectionInfo__paragraphs}>
                <h2>What are other content creators up to? </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <img src={imageConnect} alt="imageConnect"></img>
        </div>
    );
};

export default SectionInfo;