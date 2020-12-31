import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: any[]=[]

  constructor(private userService: UserService){
    this.userService.getUsers().subscribe((response:any)=>{
      this.accounts = response;
    })
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.userService.changestat(updateInfo).subscribe((response)=>{
      console.log('response:',response);
    });
    window.location.reload();
    
  }
}
