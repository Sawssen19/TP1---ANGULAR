import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header-content">
      <h1 class="header-title">Sawssen Yazidi</h1>
      <p class="header-subtitle">Développeuse Full Stack & Intégratrice Web</p>
    </header>
  `
})
export class HeaderComponent {}