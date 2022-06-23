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

  private selectedNew = new BehaviorSubject<string>('');

  constructor() {}

  getSidebarStatus(): BehaviorSubject<number> {
    return this.rightSidebarStatus;
  }

  setSidebarStatus(status: number): void {
    this.rightSidebarStatus.next(status);
  }

  getSelectedNew(): BehaviorSubject<string> {
    return this.selectedNew;
  }

  setSelectedNew(id: string): void {
    this.selectedNew.next(id);
  }
}
