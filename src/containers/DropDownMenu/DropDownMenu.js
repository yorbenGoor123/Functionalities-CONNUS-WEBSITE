import React from 'react';
import Dropdown from '../../components/DropDown/Dropdown';
import iconFunc from '../../assets/iconFunProfessionalNetwork.svg';
import style from './DropDownMenu.module.css';
import {useStore} from '../../hooks/index';

const DropDownMenu = () => {

    const {functionalityStore} = useStore();

    return (
        <div className={style.dropDownMenu}>

            {functionalityStore.functionalities.map(functionality => (
                <Dropdown key={functionality.id} icon={iconFunc} title={functionality.title} description={functionality.description} /> 
            ))}
           
        </div>
    );
};

export default DropDownMenu;