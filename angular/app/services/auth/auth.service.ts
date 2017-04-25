import { Injectable } from '@angular/core';
import { Api } from '../api';
import { Broadcaster } from '../broadcaster';
import { EVENTS } from '../../events';

@Injectable()
export class Auth {
    private session: any = {};
    private isAuthenticated: boolean = false;

    constructor(private api: Api,
                private broadcaster: Broadcaster) {
    }

    /**
     * Authenticate the user using credentials.
     *
     * @param credentials
     * @returns {Observable<R>}
     */
    login(credentials: any) {
        return this.api.post('auth', credentials).do(
            (response) => this.authSuccessTasks(response),
            (error) => this.authFailureTasks(error)
        );
    }

    /**
     * Use token to verify and get user object from server.
     *
     * @param token
     * @returns {Observable<R>}
     */
    verify(token: string) {
        return this.api.get('auth', {data: {token: token}}).do(
            (response) => this.authSuccessTasks(response),
            (error) => this.authFailureTasks(error)
        );
    }

    /**
     * Logout user. Successful logout will blacklist the token.
     *
     * @returns {Observable<R>}
     */
    logout() {
        return this.api.delete('auth', {token: this.session.token})
            .do((response) => {
                this.broadcaster.broadcast(EVENTS.AUTH.LOGOUT_SUCCESS, response);

                delete this.session.token;
            }, (error) => {
                this.broadcaster.broadcast(EVENTS.AUTH.LOGOUT_FAILURE, error);
            });
    }

    private authSuccessTasks(response: any) {
        this.broadcaster.broadcast(EVENTS.AUTH.LOGIN_SUCCESS, response);

        this.isAuthenticated = true;
        this.session.user = response.user;
        this.session.token = response.token;

        this.api.addDefaultHeader('Authorization', 'Bearer ' + response.token);

        localStorage.setItem('token', response.token || localStorage.getItem('token'));
    }

    private authFailureTasks(error: any) {
        localStorage.removeItem('token');
        this.broadcaster.broadcast(EVENTS.AUTH.LOGIN_FAILURE, error);
    }
}
