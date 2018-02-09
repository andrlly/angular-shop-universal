import {Inject, Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { ApiService } from "../../shared/services/api.service";
import { User } from "../../shared/models/user.model";
import {AppStorage} from "../../../forStorage/universal.inject";

@Injectable()
export class AuthService {

    user_id: number;

    constructor(private apiService: ApiService,
                @Inject(AppStorage) private appStorage: Storage
    ) {
    }

    // private isAuthenticated = false;

    // login(user) {
    //     this.isAuthenticated = true;
    //     window.localStorage.setItem('user', JSON.stringify(user));
    // }

    logout() {
        // this.isAuthenticated = false;
        this.appStorage.clear();
    }

    isLoggedIn() {
        // return this.isAuthenticated;
        return this.appStorage.getItem('user');
    }

    // find user by email
    attemptAuth(type, credentials): Observable<User> {
        const route = type === 'login' ? '/auth' : '/registration';
        return this.apiService.post('user' + route, credentials)
            .map((user) => {
                console.log(user);
                this.appStorage.setItem('user', JSON.stringify(user.user_id));
                this.user_id = user.user_id;
                return user.user_id;
            });
    }

    getUser(id) {
        return this.apiService.get(`user/${id}`);
    }

}