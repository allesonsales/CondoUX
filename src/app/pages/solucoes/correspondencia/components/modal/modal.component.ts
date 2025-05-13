import { CommonModule } from '@angular/common';
// import { Component, Input, Output } from '@angular/core';
// import { EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   imports: [CommonModule],
//   templateUrl: './modal.component.html',
//   styleUrl: './modal.component.css',
// })
// export class ModalComponent {
//   @Input() isOpen = false;
//   @Output() closeModal = new EventEmitter<boolean>();

//   fecharModal() {
//     this.closeModal.emit();
//   }
// }

// src/app/modal/modal.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../../../../modal.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private modalSubscription!: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalSubscription = this.modalService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  fecharModal() {
    this.modalService.closeModal();
    document.body.classList.remove('no-scroll');
  }
}
