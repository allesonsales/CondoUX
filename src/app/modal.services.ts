import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject(false);

  isOpen$ = this.isOpenSubject.asObservable();

  openModal() {
    this.isOpenSubject.next(true);
  }

  closeModal() {
    this.isOpenSubject.next(false);
  }
}
