import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projets</h2>
        <div class="project-grid">
          <div class="card" *ngFor="let project of projects">
            <h3>{{project.name}}</h3>
            <p class="project-description">{{project.description}}</p>
            <div class="project-tech">
              <span class="skill-tag" *ngFor="let tech of project.technologies">{{tech}}</span>
            </div>
            <a [href]="project.link" target="_blank" class="project-link">
              <i class="fab fa-github"></i> Voir sur GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Business App',
      description: 'Application web responsive développée à partir d\'un design Figma',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript'],
      link: 'https://github.com/Sawssen19/Responsive_Business_App_React_JS_Tailwind'
    },
    {
      name: 'GPT-3 App',
      description: 'Interface utilisateur moderne avec composants réutilisables',
      technologies: ['React.js', 'CSS BEM', 'JavaScript'],
      link: 'https://github.com/Sawssen19/Responsive_GPT-3_React_JS'
    },
    {
      name: 'Recipes App',
      description: 'Application de recettes avec intégration API et fonctionnalités de recherche',
      technologies: ['JavaScript', 'API Integration', 'DOM Manipulation'],
      link: 'https://github.com/Sawssen19/Recipes-App'
    }
  ];
}