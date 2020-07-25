import {decorate, action, observable} from 'mobx'

class UiStore {
    constructor () {
        this.dropdown = false;
        this.sortedFunctionalities = []
    }

    viewDropdown () {
        this.dropdown = true;
    }

    disableDropdown() {
        this.dropdown = false;
    }

    setSorted (functionality) {
        this.sortedFunctionalities.push(functionality);
    }
}


decorate(UiStore, {
    dropdown: observable,
    viewDropdown: action,
    disableDropdown: action,
    setSorted: action
})

const uiStore = new UiStore();

export default UiStore;

export {uiStore};