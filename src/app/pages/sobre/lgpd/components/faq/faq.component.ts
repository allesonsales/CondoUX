import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqAtivo: boolean = false;
  faqAberto: string | null = null;

  switchFaq(faq: string) {
    this.faqAberto = this.faqAberto === faq ? null : faq;
  }
}
