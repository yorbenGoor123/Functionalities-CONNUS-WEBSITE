import React from 'react';
import style from './DetailFunctionalities.module.css'
import HeaderFunctionalities from '../../sections/HeaderFunctionalities/HeaderFunctionalities';

const DetailFunctionalities = () => {
    return (
        <div className={style.detailWrapper}>
           <HeaderFunctionalities />
           <p>Detail page functionalities</p>
        </div>
    );
};

export default DetailFunctionalities;