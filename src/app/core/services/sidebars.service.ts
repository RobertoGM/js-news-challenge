import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum RightSidebarStatus {
  close,
  add,
  edit,
}

@Injectable({
  providedIn: 'root',
})
export class SidebarsService {
  private rightSidebarStatus = new BehaviorSubject<number>(
    RightSidebarStatus.close
  );

  constructor() {}

  getSidebarStatus(): BehaviorSubject<number> {
    return this.rightSidebarStatus;
  }

  setSidebarStatus(status: number): void {
    this.rightSidebarStatus.next(status);
  }
}
