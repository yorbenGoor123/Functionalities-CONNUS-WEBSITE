
import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";

class FunctionalityModel {
    constructor({id, targetAudience, icon, title, description}){
        this.id = id;
        this.targetAudience = targetAudience;
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
}

const functionalityConverter = {
    toFirestore: function(functionality) {
      return {
      icon: functionality.icon,
      title: functionality.title,
      description:functionality.description,
      targetAudience:functionality.targetAudience,
      };
    },
    fromFirestore: function(snapshot, options) {
      console.log("hello");
      const data = snapshot.data(options);
      if (!rootStore.journeyStore.findJourneyById(snapshot.id)){
        return new Journey({
        id: snapshot.id,
        location: data.location,
        sorted: data.sorted,
        title: data.title,
        images: data.images,
        text: data.text,
        carrierID: data.carrierID,
        date: data.date
        });
      }
     
    }
  };

decorate(FunctionalityModel, {
    id: observable,
    targetAudience: observable,
    icon: observable,
    title: observable,
    description: observable
})

export {functionalityConverter}

export default FunctionalityStore;