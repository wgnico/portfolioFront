import { Component, inject } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DarkModeService } from '../../../services/dark-mode.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzMenuModule,NzIconModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }

}
