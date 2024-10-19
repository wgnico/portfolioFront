import { Component } from '@angular/core';
import { Proyecto } from '../../shared/models/proyecto.model';
import { ProyectosService } from '../../../services/proyectos.service';
import { SkillsbarComponent } from "../../shared/skillsbar/skillsbar.component";
import { RouterLinkWithHref,  } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SkillsbarComponent,RouterLinkWithHref, ],
  templateUrl: './inicio.component.html'
})
export default class InicioComponent {  

  projects: Proyecto[] = [];

  constructor( private proyectoService: ProyectosService) {
  }

  ngOnInit(): void {
    this.projects = this.proyectoService.getProyectos();
  }
  

}
