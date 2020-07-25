import React from 'react';
import Dropdown from '../../components/DropDown/Dropdown';
import iconFunc from '../../assets/iconFunProfessionalNetwork.svg';
import style from './DropDownMenu.module.css';

const DropDownMenu = () => {
    return (
        <div className={style.dropDownMenu}>
           <Dropdown icon={iconFunc} title="1. Professional network" description="this is the professional network functionality of the app." /> 
           <Dropdown icon={iconFunc} title="1. Professional network" description="this is the professional network functionality of the app." />
        </div>
    );
};

export default DropDownMenu;