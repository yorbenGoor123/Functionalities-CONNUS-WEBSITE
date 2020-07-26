import React from 'react';
import { uiStore } from '../../stores/UiStore';
import Dropdown from '../../components/DropDown/Dropdown';
import { useObserver } from 'mobx-react-lite';
import DropDownMenu from '../../containers/DropDownMenu/DropDownMenu';
import style from './Header.module.css';
import logo from '../../assets/logo.svg'

const Header = () => {

  const handleMouseEnter = () => {
    uiStore.viewDropdown();  
 
  }

  const handleMouseLeave = () => {
    uiStore.disableDropdown();
    
  
  }

    return useObserver(() => (
    <header className={style.websiteHeader}>
    
      <img src={logo} alt="logo"></img>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.navMenu}>
        
        <ul className={style.menu__items}>
          <li className={style.menu__item}>Functionalities</li>
        </ul>

        {uiStore.dropdown ? 
        <div >
        <DropDownMenu  />
        </div>
        : null}

      </div>
    </header>
    ));
};

export default Header;