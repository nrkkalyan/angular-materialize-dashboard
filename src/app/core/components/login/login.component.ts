import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { UserService } from '@app/core/services/user.service';
import { Router } from '@angular/router';
import { RequestsService } from '@app/core/services/requests.service';
import { ActivatedRoute } from '@angular/router';
import { IResponse } from '@app/core/definitions';

interface IForm {
  username: string;
  password: string;
  remember: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private redirect = '';
  public formErrors: Array<any> = [];
  public isRequesting: Boolean = false;
  public Response: IResponse = null;
  public form: IForm = {
    password: '',
    remember: false,
    username: ''
  };
  public bodyClass: any = 'login-state';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private requests: RequestsService
  ) { }

  ngOnInit() {
    this.user.logout();
    this.route.data.subscribe((data: any) => {
      if (data.redirect) {
        this.redirect = data.redirect;
      } else {
        console.warn('When login is successful, we wont redirect to anywhere because it\'s not specified on any route');
      }
    });
    this.document.body.classList.add(this.bodyClass);
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.bodyClass);
  }
  changeInput (field , value) {
    this.form[field] = value;
  }
  findFieldErrorMessage (fieldName: string) {
    const error = this.formErrors.find(x => x.location === fieldName);
    return error ? error.message : '';
  }
  async login() {
    this.isRequesting = true;
    let result;
    try {
      this.formErrors = [];
      result = await this.requests.authenticateUser(this.form.username , this.form.password);
      this.isRequesting = false;
      if (result.error && result.error.errors) {
        this.Response = result;
        this.formErrors = result.error.errors;
      }
      if (result.data && result.data.items && result.data.items.length) {
        this.user.User = result.data.items[0];
        if (this.redirect) {
          this.router.navigateByUrl(this.redirect);
        }
      }
    } catch (error) {
      this.isRequesting = false;
      alert('Unexpected error occured.');
      console.error(result, error);
    }
  }
}
