import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { RequestsService } from '@app/core/services/requests.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

interface IForm {
  username: string;
  password: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  public form: IForm = {
    username: '',
    password: ''
  };
  public bodyClass: any = 'login-state';
  public formErrors: Array<any> = [];
  public isRequesting: Boolean = false;
  public doneDialog = false;

  findFieldErrorMessage (fieldName: string) {
    const error = this.formErrors.find(x => x.location === fieldName);
    return error ? error.message : '';
  }

  constructor (private requests: RequestsService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {
    this.formErrors = [];
  }

  changeInput (field , value) {
    this.form[field] = value;
  }

  async signup () {

    this.isRequesting = true;
    let result;
    try {
      this.formErrors = [];
      result = await this.requests.SignupUser(this.form.username , this.form.password);
      this.isRequesting = false;
      if (result.error && result.error.errors) {
        this.formErrors = result.error.errors;
      }
      if (result.data && result.data.items && result.data.items.length) {
        this.doneDialog = true;
      }
    } catch (error) {
      this.isRequesting = false;
      alert('Unexpected error occured.');
      console.error(result, error);
    }
  }

  ngOnInit() {
    this.document.body.classList.add(this.bodyClass);
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.bodyClass);
  }
}
