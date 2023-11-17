import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private url = environment.ws_url;
  private socket: any;
  userInfo: any;
  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(this.userInfo){
      this.url = `${environment.ws_url}?companyId=${this.userInfo.companyId}&token=${localStorage.getItem('token')}`;
      this.socket = io(this.url);
    }

  }

  emitLoginLogout(user: any): void {
    this.socket.emit(`get-latest-login-logout-${this.userInfo.companyId}`, user);
  }
  geLoginLogout(): Observable<any[]> {
    return Observable.create((observer) => {
      this.socket.on(`login-logout-${this.userInfo.companyId}`, (data) => {
        if (data) {
          observer.next(data);
        } else {
          observer.error('Unable To Reach Server');
        }
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }
  emitUser(user: any): void {
    this.socket.emit(`get-latest-users-${this.userInfo.companyId}`, user);
  }
  getUsers(): Observable<any[]> {
    return Observable.create((observer) => {
      this.socket.on(`all-users-${this.userInfo.companyId}`, (data) => {
        if (data) {
          observer.next(data);
        } else {
          observer.error('Unable To Reach Server');
        }
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }
}
