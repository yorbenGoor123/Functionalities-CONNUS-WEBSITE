import React from 'react';
import Dropdown from '../../components/DropDown/Dropdown';
import iconFunc from '../../assets/iconFunProfessionalNetwork.svg';
import style from './DropDownMenu.module.css';
import {useStore} from '../../hooks/index';

const DropDownMenu = () => {

    const {functionalityStore} = useStore();

    let functionalityArray = [];
    for (let i = 1; i<= functionalityStore.functionalities.length; i++){
      let functionality = functionalityStore.functionalities.find(functionality => functionality.sorted === i);
      functionalityArray.push(functionality);
    }

    console.log(functionalityArray);

    return (
        <div className={style.dropDownMenu}>

            {functionalityArray.map(functionality => (
                <Dropdown key={functionality.id} icon={functionality.icon} title={functionality.title} description={functionality.description} /> 
            ))}
           
        </div>
    );
};

export default DropDownMenu;