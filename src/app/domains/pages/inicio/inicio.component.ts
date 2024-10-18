import { Component } from '@angular/core';
import { Proyecto } from '../../shared/models/proyecto.model';
import { ProyectosService } from '../../../services/proyectos.service';
import { SkillsbarComponent } from "../../shared/skillsbar/skillsbar.component";
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SkillsbarComponent],
  templateUrl: './inicio.component.html'
})
export default class InicioComponent {

  imagePreviewOptions = {
    nzMaskClosable: true,    
    nzRotate: 180,
    nzScaleStep: 0.5
  };

  projects: Proyecto[] = [];

  constructor( private proyectoService: ProyectosService) {
  }

  ngOnInit(): void {
    this.projects = this.proyectoService.getProyectos();
  }
  

}
