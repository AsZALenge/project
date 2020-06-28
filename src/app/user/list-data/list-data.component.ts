import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/shared/service/user-service.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private userService: UserServiceService
  ) {
    this.dataList = userService.getUserList();
  }

  ngOnInit(): void {
    // this.getDataList();
  }

  // getDataList() {
  //   console.log('LOG DATALIST 1 >>::', this.userService.getUserList());
   
  //   console.log('LOG DATALIST 1 >>::', this.userService.getUserList());

  // }

  deleteData(data){
    console.log("LOG Fn() daleteData >>::",data);
    
  }
}
