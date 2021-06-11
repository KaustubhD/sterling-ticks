import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  title ='otp';
  form : FormGroup;
  formInput =['input1','input2','input3','input4','input5','input6'];
  @ViewChildren('formRow') rows: any;

  ngOnInit(): void {
  }

  constructor() { 
    this.form = this.toFormGroup(this.formInput);
  }

  toFormGroup(elements: any[]){
    const group:any = {};

    elements.forEach((key: string | number) =>{
      group[key]=new FormControl('',Validators.required);
    });
    return new FormGroup(group);
  }

  keyUpEvent(event: { keyCode: number; which: number; }, index: number){
    let pos=index;
    if(event.keyCode == 8 && event.which ==8){
      pos= index-1;
    }
    else{
      pos=index+1;
    }
    if(pos>-1 && pos< this.formInput.length){
      this.rows._results[pos].nativeElement.focus();
    }
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
