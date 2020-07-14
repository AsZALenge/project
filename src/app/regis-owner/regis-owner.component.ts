import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyServiceService } from '../shared/service/my-service.service';

@Component({
  selector: 'app-regis-owner',
  templateUrl: './regis-owner.component.html',
  styleUrls: ['./regis-owner.component.css']
})
export class RegisOwnerComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: MyServiceService) { }

  registerFormDorm: FormGroup

  ngOnInit(): void {
    this.registerFormDorm = this.fb.group({
      dorm_owner: ['', [Validators.required, Validators.minLength(4)]],
      dorm_password: ['', [Validators.required, Validators.minLength(4)]],
      dorm_name: ['', [Validators.required, Validators.minLength(4)]],
      dorm_citizen: ['', [Validators.required, Validators.minLength(4)]],
      dorm_tel: ['', [Validators.required, Validators.minLength(4)]],
      dorm_address: ['', [Validators.required, Validators.minLength(10)]],
      dorm_numbank: ['', [Validators.required, Validators.minLength(4)]],
      dorm_namebank: ['', [Validators.required, Validators.minLength(4)]],
      dorm_img: ['', [Validators.required, Validators.minLength(10)]],

    });
  }
  //save
  submitFormDorm() {
    debugger
    //notfound
    if (this.registerFormDorm.invalid) {
      return false;

    } else {//success
      console.log(this.registerFormDorm.value)

      //register
      this.myService.registerdorm(this.registerFormDorm.value).subscribe(
        (res) => console.log(res),
        (error) => console.log(error)
      );

    }
  }

  resetForm() {
    this.registerFormDorm.reset();
  }

  get form() { return this.registerFormDorm.controls; }
}
