import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
    return StoreModule.provideStore({});
}
