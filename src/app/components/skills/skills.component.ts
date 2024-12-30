import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">Compétences</h2>
        <div class="skills-grid">
          <div class="card" *ngFor="let category of skillCategories">
            <h3>{{category.name}}</h3>
            <div class="skills-container">
              <span 
                class="skill-tag" 
                *ngFor="let skill of category.skills; let i = index"
                [style.animation-delay]="i * 0.1 + 's'">
                {{skill}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Langages de programmation',
      skills: ['Javascript', 'Java', 'Python', 'PHP']
    },
    {
      name: 'Frameworks',
      skills: ['React.js', 'Tailwind CSS']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS EC2', 'Azure', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      name: 'CMS & Outils',
      skills: ['WordPress', 'Git', 'Scrum', 'Agile']
    }
  ];
}