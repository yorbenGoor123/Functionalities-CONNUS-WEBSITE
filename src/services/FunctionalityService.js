import 'firebase/firestore';
import {functionalityConverter} from "../models/FunctionalityModel";

class FunctionalityService {
    constructor(firebase){
        this.db = firebase.firestore()
    }

    getFunctionalities = async () => {
        const functionalities = await this.db
        .collection("Functionality")
        .withConverter(functionalityConverter)
        .get();
    
        return functionalities.docs.map(doc => doc.data());
    
      };
}

export default FunctionalityService;