import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }

}
