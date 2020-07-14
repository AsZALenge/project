import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyServiceService } from '../shared/service/my-service.service';

@Component({
  selector: 'app-regis-user',
  templateUrl: './regis-user.component.html',
  styleUrls: ['./regis-user.component.css']
})
export class RegisUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: MyServiceService) { }

  registerFormUser: FormGroup

  ngOnInit(): void {
    this.registerFormUser = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(4)]],
      user_password: ['', [Validators.required, Validators.minLength(4)]],
      user_citizen: ['', [Validators.required, Validators.minLength(4)]],
      user_email: ['', [Validators.required, Validators.minLength(4)]],
      user_gender: ['', [Validators.required]],
      user_tel: ['', [Validators.required, Validators.minLength(10)]],

    });
  }
  //save
  submitForm() {
    debugger
    //notfound
    if (this.registerFormUser.invalid) {
      return false;

    } else {//success
      console.log(this.registerFormUser.value)

      //register
      this.myService.registeruser(this.registerFormUser.value).subscribe(
        (res) => console.log(res),
        (error) => console.log(error)
      );

    }
  }

  resetForm() {
    this.registerFormUser.reset();
  }

  get form() { return this.registerFormUser.controls; }

}
