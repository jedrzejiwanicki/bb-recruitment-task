import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {MyAccount} from '../model/my-account';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AccountHttpService {
  constructor(private http: HttpClient) {
  }

  public getMyAccount(): Observable<MyAccount> {
    return this.http.get<MyAccount>(`${environment.API_URL}/me`);
  }

  public updateMyAccount(account: MyAccount): Observable<MyAccount> {
    return this.http.put<MyAccount>(`${environment.API_URL}/me`, account);
  }
}
