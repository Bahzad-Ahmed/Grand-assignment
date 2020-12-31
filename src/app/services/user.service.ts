import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addAccount(account){
    this.postUser(account);
  }
  changestat(updateInfo: {id: number, newStatus: string}){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/update-user`,updateInfo)
  }

  getUser(){
    return this.httpClient.get<any>(`${environment.apiBaseRoute}/get-user`)
  }

  postUser(data: any){
    console.log("here")
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/post-user`,data)
    
  }

  getUsers(){
    return this.httpClient.get<any>(`${environment.apiBaseRoute}/get-users`)
  }
}
