import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {



  public form = {
    email: null,
  };
  public error = null;


  constructor(
    private UserService: UserService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
  }



  onSubmit(){
      this.UserService.sendPasswordResetLink(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.snotifyService.error(error.error.error)
      );
  }

  handleResponse(res){
    console.log(res);
    this.form.email = null;
  }

}
