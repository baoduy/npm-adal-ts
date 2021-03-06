import { Storage } from './storage';

export class LocalStorage implements Storage {
  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return localStorage.getItem(key);
  }
}
