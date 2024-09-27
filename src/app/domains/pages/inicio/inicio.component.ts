import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NzImageModule, NzDividerModule, NzCardModule,NzGridModule,NzTabsModule, NzIconModule, NzListModule],
  templateUrl: './inicio.component.html'
})
export default class InicioComponent {

  

}
