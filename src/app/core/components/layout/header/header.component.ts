import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public BreadCrumb = [];
  constructor(
    private route: ActivatedRoute,
    private user: UserService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.BreadCrumb = data.breadcrumb;
    });
  }

}
