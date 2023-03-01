import { Injectable } from '@angular/core';

import { InjectorService } from '../../services/injector-service/injector.service';
import { Session } from '../../models/auth/session';
//import { User } from '@models/auth/user';

import { SessionService } from './session.service';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class SessionViewmodel {
    private service: SessionService;

    private _session: BehaviorSubject<Session> = new BehaviorSubject<Session>(new Session());
    readonly session: BehaviorSubject<Session> = this._session;

    private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isLoggedIn: BehaviorSubject<boolean> = this._isLoggedIn;

    //private _user: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
    //readonly user: BehaviorSubject<User> = this._user;

    constructor() {
        try {
            const injector = InjectorService.getInjector();

            this.service = injector.get(SessionService);
        }
        catch (_error) {
            throw new Error(`SessionViewmodel: Failed initializing dependencies ${_error}`); 
        }

        this.subscribeSession();
        this.subscribeIsLoggedIn();
        this.subscribeUserData();
    }

    save(_session: Session): void {
        //this.service.save(_session);
        this._session.next(_session);
        this._isLoggedIn.next(true);
        //this._user.next(this.service.user()!);
    }

    remove(): void {
        //this.service.remove();
        this._session.next(undefined!);
        this._isLoggedIn.next(false);
        //this._user.next(this.service.user()!);
    }

    private subscribeSession(): void {
        //this._session.next(this.service.session()!);
    }

    private subscribeIsLoggedIn(): void {
        //this._isLoggedIn.next(this.service.isLoggedIn());
    }

    private subscribeUserData(): void {
        //this._user.next(this.service.user()!);
    }
}

