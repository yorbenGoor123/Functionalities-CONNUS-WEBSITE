import React from 'react';
import { uiStore } from '../../stores/UiStore';
import Dropdown from '../../components/DropDown/Dropdown';
import { useObserver } from 'mobx-react-lite';
import DropDownMenu from '../../containers/DropDownMenu/DropDownMenu';
import style from './Header.module.css';

const Header = () => {

  const handleMouseEnter = () => {
    uiStore.viewDropdown();
    console.log(uiStore.dropdown);
  }

  const handleMouseLeave = () => {
    uiStore.disableDropdown();
    console.log(uiStore.dropdown);
  }

    return useObserver(() => (
    <header className="website-header">
      <div className={style.navMenu}>
      
        <ul className={style.menu__items}>
          <li className={style.menu__item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Functionalities</li>
        </ul>

        {uiStore.dropdown ? 
        <DropDownMenu />
        : null}

      </div>
    </header>
    ));
};

export default Header;