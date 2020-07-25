import React from 'react';
import { uiStore } from '../../stores/UiStore';
import Dropdown from '../../components/DropDown/Dropdown';
import { useObserver } from 'mobx-react-lite';
import DropDownMenu from '../../containers/DropDownMenu/DropDownMenu';

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
        <ul>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Functionalities</li>
        </ul>

        {uiStore.dropdown ? 
        <DropDownMenu />
        : null}
      </header>
    ));
};

export default Header;