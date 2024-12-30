import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="card">
          <div class="contact-links">
            <a href="mailto:sawssen.yazidi@sesame.com.tn" class="contact-link">
              <i class="fas fa-envelope"></i>
              sawssen.yazidi&#64;sesame.com.tn
            </a>
            <a href="https://www.linkedin.com/in/sawssen-yazidi-3a4831213/" target="_blank" class="contact-link">
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://github.com/Sawssen19" target="_blank" class="contact-link">
              <i class="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}