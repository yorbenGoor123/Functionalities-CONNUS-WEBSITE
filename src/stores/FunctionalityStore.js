import { decorate, observable, action } from "mobx";
import FunctionalityService from "../services/FunctionalityService";

class FunctionalityStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.functionalityService = new FunctionalityService(this.rootStore.firebase);
        this.functionalities = [];
    }

    async getFunctionality () {
        await this.functionalities.push(this.functionalityService.getFunctionalities());
    }

    findFunctionalityById(id){
        return this.functionalities.find(functionality => functionality.id === id);
    }
}

decorate(FunctionalityStore, {
    functionalities: observable,
    addFunctionality: action,
    findFunctionalityById: action
})

export default FunctionalityStore;