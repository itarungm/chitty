import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  CHIT_DETAILS_KEY_NAME ='chits'
  constructor() { }

 // Set local storage
 setChitDetails(data:any):void {
  try{
    data = JSON.stringify(data);
    // TODO:: NEED TO ENCRYPT FOR SECURITY
    localStorage.setItem(this.CHIT_DETAILS_KEY_NAME, data); 
  }
  catch(err){
    console.error('Error saving to localStorage', err);
  }
}

// Get local storage
getChitDetails(){
  try{
    let decodedData:any;
    let chits = localStorage.getItem(this.CHIT_DETAILS_KEY_NAME);
    if(chits){
      decodedData = JSON.parse(chits);
    }
    else{
      decodedData = localStorage.getItem(this.CHIT_DETAILS_KEY_NAME);
    }
    let decodedDataType = typeof decodedData;
    if(decodedDataType == 'object' || decodedDataType == 'string' || decodedDataType == 'boolean' || decodedDataType == 'number'){
      return decodedData;
    }
  }
  catch (e) {
    console.error('Error getting data from localStorage', e);
    return null;
  }
}



}
