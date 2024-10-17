import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, CommonModule],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  darkModeService: DarkModeService = inject(DarkModeService);
}
