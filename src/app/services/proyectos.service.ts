import { Injectable } from '@angular/core';
import { Proyecto } from '../domains/shared/models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyectos: Proyecto[] = [
    {
      id:1,
      titulo: 'AMYDA',
      descripcion: 'AMiYoDeAyer es una plataforma que permite dejar un consejo de forma anónima. Utiliza Java con Spring Boot para el backend, y Angular con TypeScript y TailwindCSS para el frontend. Los datos se almacenan en DynamoDB en AWS, y los archivos se gestionan en un Bucket S3. Docker se usa para contenedorización y Route53 para la gestión de DNS.',
      cover: 'https://res.cloudinary.com/dqpoljtf6/image/upload/v1728431110/iPhone-13-PRO-amiyodeayer.com.ar_n43cja.png',
      web:'https://amiyodeayer.com.ar',
      tipo: 'Ir al sitio'
    },
    {
      id:2,
      titulo: 'Tienda Virtual',
      descripcion: 'tienda virtual con Angular que consume una API para cargar y gestionar productos con imágenes. La plataforma permite a los usuarios explorar una amplia variedad de artículos, ver detalles específicos y añadirlos al carrito de compras.',
      cover: 'https://res.cloudinary.com/dqpoljtf6/image/upload/v1728684531/ecommerce_f4m7o1.png',
      web:'https://e-commerce-d705c.web.app',
      tipo: 'Ir al sitio'
    },
    
    {
      id:3,
      titulo: 'To Do App',
      descripcion: 'Aplicación de gestión de tareas desarrollada en Angular. Integra formularios reactivos para la creación y edición de tareas y utiliza LocalStorage para el almacenamiento local de los datos.',
      cover: 'https://res.cloudinary.com/dqpoljtf6/image/upload/v1728432258/iPhone-13-PRO-todoapp-4e3db.web.app_pyz2s2.png',
      web:'https://todoapp-4e3db.web.app/',
      tipo: 'Ir al sitio'
    },
    {
      id:4,
      titulo: 'API Pizzeria',
      descripcion: 'API que nos permite gestionar las operaciones en una pizzeria. Este proyecto me ha proporcionado una comprensión profunda de la implementación de medidas de seguridad en una aplicación Spring, así como la gestión eficiente de datos utilizando Spring Data. La estructura modular de Spring Boot ha facilitado el desarrollo y la implementación ágil de nuevas funcionalidades.',
      cover: 'https://res.cloudinary.com/dqpoljtf6/image/upload/v1728475377/api-pizzeria-spring_gw9921.png',
      web:'https://github.com/wgnico/API-Pizzeria',
      tipo: 'Ir al repositorio'
    },
    {
      id:5,
      titulo: 'API Market',
      descripcion: 'API diseñada para realizar operaciones CRUD conectada a una base de datos MySQL. Este proyecto me ha permitido mejorar mis habilidades en el diseño de arquitecturas escalables, la implementación de operaciones CRUD y la gestión eficiente de bases de datos. Además, ha fortalecido mi comprensión de los principios fundamentales de desarrollo backend.',
      cover: 'https://res.cloudinary.com/dqpoljtf6/image/upload/v1728475389/apimarket-data_msak2w.png',
      web:'https://github.com/wgnico/API-Market',
      tipo: 'Ir al repositorio'
    },
    {
      id:6,
      titulo: 'Sistema de Reservas para Hotel',
      descripcion: 'Aplicativo que permite realizar el registro y modificacon de un usuario y su reserva en una base de datos MySql. Este proyecto me brindó la oportunidad de emplear Java en su forma más pura, desde la creación de la interfaz hasta la implementación de las reglas de negocio, utilizando una lógica de programación sólida y eficiente.',
      cover: 'https://res.cloudinary.com/dqpoljtf6/image/upload/v1728475331/apphotel_twduwt.png',
      web:'https://github.com/wgnico/App-Hotel',
      tipo: 'Ir al repositorio'
    },
  ];


  constructor() { }

  getProyectos(){
    return this.proyectos;
  }

  getProyectosPorId(id: number){
    return this.proyectos.find(proyectos => proyectos.id  === id)
  }

  getProyectosPorNombre(titulo: string){
    return this.proyectos.find(proyectos => proyectos.titulo === titulo)
  }
}
