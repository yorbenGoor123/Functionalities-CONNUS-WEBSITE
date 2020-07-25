import { decorate, observable, action } from "mobx";

class FunctionalityStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.functionalities = [];
    }

    addFunctionality (functionality) {
        this.functionalities.push(functionality);
    }
}

decorate(FunctionalityStore, {
    functionalities: observable,
    addFunctionality: action
})

export default FunctionalityStore;