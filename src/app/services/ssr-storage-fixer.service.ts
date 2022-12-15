import { Injectable } from '@angular/core';
import { PlatformChekService } from './platform-check.service';


class Storage implements Storage {
  [name: string]: any;
  readonly length!: number;
  clear(): void { }
  getItem(key: string): string | null { return null; }
  key(index: number): string | null { return null; }
  removeItem(key: string): void { }
  setItem(key: string, value: string): void { }
}


@Injectable({ providedIn: 'root' })
export class StorageService implements Storage {

  private storage: Storage;

  constructor(platflormCheckerSrv: PlatformChekService) {

    if (platflormCheckerSrv.isBrowser) {
      this.storage = sessionStorage //localStorage;
    }
    else {
      this.storage = new Storage();
    }
  }

  [name: string]: any;

  length!: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}