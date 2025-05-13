import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialComponent } from './social/social.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  anoAtual: number = new Date().getFullYear();
  ngOnInit(): void {}
}
