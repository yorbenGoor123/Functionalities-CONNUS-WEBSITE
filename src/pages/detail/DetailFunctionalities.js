import React from 'react';
import imageConnect from '../../assets/detailpages/01-content-creator/illustrationConnect.svg';
import style from './DetailFunctionalities.module.css'
import HeaderFunctionalities from '../../sections/HeaderFunctionalities/HeaderFunctionalities';
import HeaderImage from '../../assets/detailpages/01-content-creator/headerImage.svg'
import SectionInfo from '../../sections/SectionInfo/SectionInfo';
const DetailFunctionalities = () => {
    return (
        <div className={style.detailWrapper}>
           <HeaderFunctionalities />
           
           <div className={style.detailPageLanding}>
               <div className={style.detailPageLanding__info}>
                    <p className={style.detailPageLanding__info__number}>01</p>
                    <p className={style.detailPageLanding__info__title}>Professional network</p>
               </div>
                <img className={style.detailPageLanding__headerImage} src={HeaderImage} alt="headerImage"></img>
           </div>

           
            <ul className={style.detailPage__MenuItems}>
                <li className={style.detailPage__MenuItem}>What are other content creators up to?</li>
                <li className={style.detailPage__MenuItem}>Connect with the world. </li>
                <li className={style.detailPage__MenuItem}>Share tips, tricks, and insights.</li>
                <li className={style.detailPage__MenuItem}>On the road or at your desk?</li>
            </ul>

            <SectionInfo title="What are other content creators up to?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." illustration={imageConnect} direction="right" />
           
        </div>
    );
};

export default DetailFunctionalities;