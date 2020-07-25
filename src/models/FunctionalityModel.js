
import { decorate, observable } from "mobx";

class FunctionalityModel {
    constructor({id, targetAudience, icon, title, description}){
        this.id = id;
        this.targetAudience = targetAudience;
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
}

decorate(FunctionalityModel, {
    id: observable,
    targetAudience: observable,
    icon: observable,
    title: observable,
    description: observable
})

export default FunctionalityStore;