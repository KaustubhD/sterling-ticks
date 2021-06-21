import { Injectable } from '@angular/core';
import { AddressModel } from '../components/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  address: AddressModel[] =[
	// {
//     "id": 101,
//     "userName": "Mark Henry",
//     "phoneNo": 9281127310,
//     "type": "home",
//     "defaultType": "home",
//     "address": "221B, Baker Street",
//     "city": "Srinagar",
//     "state": "Jammu & Kashmir",
//     "country": "India",
//     "pincode": 123456
//     },{
//     "id": 102,
//     "userName": "Mark Henry",
//     "phoneNo": 9281127310,
//     "type": "work",
//     "defaultType": "home",
//     "address": "7G, ABC Street, DEF Colony",
//     "city": "Jaipur",
//     "state": "Rajasthan",
//     "country": "India",
//     "pincode": 654321
// }
];

  editedAddress: AddressModel = new AddressModel();
  getAddressList(userName: string){
    return this.address
  }

  saveAddress(addr: AddressModel){
    this.address.push(addr)
  }

  removeAddress(index: number){
    this.address.splice(index, 1)
  }

  updateAddress(addr: AddressModel){
   let index = this.address.findIndex(item => item.id == addr.id)
   this.address[index] = addr;
  }
}
