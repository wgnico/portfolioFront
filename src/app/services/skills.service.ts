import { Injectable } from '@angular/core';
import { Skills } from '../domains/shared/models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: Skills[] = [
    {
      tec: 'Angular',
      class: 'devicon-java-plain'
    }
  ]

  constructor() { }
}
