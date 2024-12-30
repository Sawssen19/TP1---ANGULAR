import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">À Propos</h2>
        <div class="card">
          <div class="personal-info">
            <p><i class="fas fa-calendar"></i> 26/08/1995</p>
            <p><i class="fas fa-flag"></i> Tunisienne</p>
            <p><i class="fas fa-map-marker-alt"></i> Route de Korba, Beni Khalled, 8021, Nabeul, Tunisie</p>
            <p><i class="fas fa-phone"></i> (+216) 90397950</p>
            <p><i class="fas fa-envelope"></i> sawssen.yazidi&#64;sesame.com.tn</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}