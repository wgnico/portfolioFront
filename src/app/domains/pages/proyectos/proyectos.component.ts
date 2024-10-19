import { Component, inject, Input, signal,  } from '@angular/core';
import { Proyecto } from '../../shared/models/proyecto.model';
import { ProyectosService } from '../../../services/proyectos.service';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  providers: [ProyectosService],
  templateUrl: './proyectos.component.html'
})
export default class ProyectosComponent {

  @Input() id?: string;
  
  proyecto: Proyecto | null = null;

  constructor( private proyectoService: ProyectosService) {
  }

  ngOnInit(): void {    
    if (this.id) {  // Verificar si el ID no es undefined o null
      this.proyecto = this.proyectoService.getProyectosPorId(this.id) || null;    
    } else {
      console.error('El ID es undefined');
      this.proyecto = null;
    }
    console.log(this.id);
  }

}
