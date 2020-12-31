import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../logger.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private logger: LoggerService, private userService: UserService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
   
    this.userService.postUser(
      {
          name: accountName,
          status: accountStatus        
      }
    ).subscribe((response)=>{
      console.log('response:',response);
    });

    window.location.reload();
    // // note that you can uncomment the above mentioned line to avoid having to refresh

    this.logger.logStatusChanged(accountStatus);
  }
}
