import React from 'react';
import Header from '../../pages/landing/Header';
import style from './HeaderFunctionalities.module.css';

const HeaderFunctionalities = () => {
    return (
        <>
       <Header />
       <div className={style.backgroundWrapper}>
       </div>
       </>
    );
};

export default HeaderFunctionalities;