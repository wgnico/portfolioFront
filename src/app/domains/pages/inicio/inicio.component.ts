import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NzImageModule, NzDividerModule, NzCardModule,NzGridModule ],
  templateUrl: './inicio.component.html'
})
export default class InicioComponent {

  

}
