import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/layout/layout.component';
// import { ProyectosComponent } from './domains/pages/proyectos/proyectos.component';





export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
        children: [
            {
                path:"",
                loadComponent: ()=>import(`./domains/pages/inicio/inicio.component`)
            },
            {
                path:"acercademi",
                loadComponent: ()=>import(`./domains/pages/acercademi/acercademi.component`)
            },
            {
                path:"proyectos/:id",
                loadComponent: ()=>import('./domains/pages/proyectos/proyectos.component')
            }
        ]
    }
];
