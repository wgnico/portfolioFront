import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NzImageModule, NzDividerModule],
  templateUrl: './inicio.component.html'
})
export default class InicioComponent {

}
