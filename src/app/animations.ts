import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms 0s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms 0s ease-out', style({ opacity: 0 }))]),
]);

export const slideAnimation = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('500ms ease-in', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ transform: 'translateX(100%)' })),
  ]),
]);
