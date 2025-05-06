import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialComponent } from './social/social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  anoAtual: number = new Date().getFullYear()
  ngOnInit(): void {
    
  }
}
