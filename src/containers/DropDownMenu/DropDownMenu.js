import React from 'react';
import Dropdown from '../../components/DropDown/Dropdown';
import iconFunc from '../../assets/iconFunProfessionalNetwork.svg';

const DropDownMenu = () => {
    return (
        <div>
           <Dropdown icon={iconFunc} title="1. Professional network" description="this is the professional network functionality of the app." /> 
        </div>
    );
};

export default DropDownMenu;