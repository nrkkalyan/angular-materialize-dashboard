import { Injectable } from '@angular/core';
import { random } from 'lodash';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '@app/core/definitions';

@Injectable()
export class ActionsService {

  constructor (private store: Store<AppState>) {

  }

}
