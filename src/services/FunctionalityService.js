import 'firebase/firestore';
import {functionalityConverter} from "../models/Journey";

class FunctionalityService {
    constructor(firebase){
        this.db = firebase.firestore()
    }

    getJourneys = async () => {
        const functionalities = await this.db
        .collection("Functionality")
        .withConverter(functionalityConverter)
        .get();
    
        return functionalities.docs.map(doc => doc.data());
    
      };
}

export default FunctionalityService;