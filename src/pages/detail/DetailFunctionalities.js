import React from 'react';
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

            <SectionInfo />
           
        </div>
    );
};

export default DetailFunctionalities;