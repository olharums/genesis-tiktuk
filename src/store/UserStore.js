import { makeAutoObservable } from "mobx";
export default class UserStore {
  constructor() {
    this._userInfo = {};
    this._userFeed = [];
    this._isAuth = true; // must be false but we haven't a login page
    makeAutoObservable(this);
  }

  setUserInfo(userInfo) {
    this._userInfo = userInfo;
  }
  get userInfo() {
    return this._userInfo;
  }

  setUserFeed(userFeed) {
    this._userFeed = userFeed;
  }
  get userFeed() {
    return this._userFeed;
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  get isAuth() {
    return this._isAuth;
  }
}
