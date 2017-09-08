import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor (
    private user: UserService
  ) {

  }

  public GetUserDisplayName () {
    if ( ! this.user.User ) {
      return '';
    }
    if (!this.user.User.firstname) {
      return '';
    }
    return this.user.User.firstname + ' ' + this.user.User.lastname;
  }

  public GetEmail () {
    if ( ! this.user.User ) {
      return '';
    }
    return this.user.User.username;
  }

  ngOnInit() {
  }

}
