import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressModel } from '../models/address.model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() userName: string;
  @Output() selectedAddress = new EventEmitter<AddressModel>();
  address: AddressModel[];
  addr: AddressModel = new AddressModel();
  editAddr: AddressModel = new AddressModel();
  constructor(private service: AddressService) { }

  ngOnInit(): void { 
    this.address = this.service.getAddressList(this.userName)
  }
  
  isChecked(e: any, addr: AddressModel){
    if(e.target.checked){
      addr.defaultType = addr.type
    }
  }

  refresh(){
    this.addr = new AddressModel();
  }

  saveAddress() {
    if((this.address.indexOf(this.addr)) == -1){
      this.service.saveAddress(this.addr)
      setTimeout(()=> {
        this.address = this.service.getAddressList(this.userName)
      }, 400);
    }
    else{
      alert("This address is already present!")
    }
    this.refresh()
  }

  removeAddress(index: number){
    var ans = confirm('Are you sure you want to delete?')
      if(ans){
        this.service.removeAddress(index);
    }
  }

  updateAddress(index: number){
    this.service.updateAddress(this.editAddr)
    setTimeout(()=> {
      this.address = this.service.getAddressList(this.userName)
    }, 400);
    this.refresh()
  }

  onEdit(index: number){
    this.editAddr =JSON.parse(JSON.stringify(this.address[index])) 
  }

  selectAddress(addr: AddressModel){
    this.selectedAddress.emit(addr)
  }

}
