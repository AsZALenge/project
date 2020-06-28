import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUserList() {
      const dataList = [
       {
          id: 1,
          nameFull: 'นายวีรพล สันประเดิม',
          name: 'กอล์ฟ',
          mobile: '22222222222'
        },
        {
          id: 1,
          nameFull: 'นายฟหกฟหก',
          name: 'ฟหหหหก',
          mobile: '1111111111'
        }
      ]; 
      return dataList;
    }

  }
