import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title">Expérience Professionnelle</h2>
        <div class="timeline">
          <div class="card" *ngFor="let exp of experiences">
            <div class="experience-header">
              <h3>{{exp.title}}</h3>
              <p class="company">{{exp.company}}</p>
              <p class="period">{{exp.period}}</p>
              <p class="location">{{exp.location}}</p>
            </div>
            <ul class="experience-tasks">
              <li *ngFor="let task of exp.tasks">{{task}}</li>
            </ul>
            <div *ngIf="exp.links" class="experience-links">
              <p><strong>Projets:</strong></p>
              <div class="links-container">
                <a *ngFor="let link of exp.links" [href]="link" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i>
                  {{link}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'INTÉGRATRICE WEB',
      company: 'CREA\'DO AGENCY',
      period: '02/05/2022 – 28/07/2023',
      location: 'Tunis, Tunisie',
      tasks: [
        'Collaboration avec les clients pour comprendre les exigences du projet',
        'Conversion des maquettes en code HTML/CSS/JavaScript responsive',
        'Intégration de fonctionnalités WordPress',
        'Optimisation des performances et de l\'accessibilité'
      ],
      links: [
        'https://ywatik.com/',
        'https://samsungstoretunisie.tn/',
        'https://creado.agency/en/home/',
        'https://hcb-outsourcing.com/'
      ]
    },
    {
      title: 'DÉVELOPPEUSE WORDPRESS',
      company: 'SENSAI TECHNOLOGIES',
      period: '02/08/2021 – 31/12/2021',
      location: 'Paris (en remote), France',
      tasks: [
        'Développement avec Divi en local',
        'Migration de sites web',
        'Configuration SEO et DNS',
        'Intégration de podcasts et Calendly'
      ],
      links: ['https://www.growsmartly.co.uk/']
    }
  ];
}