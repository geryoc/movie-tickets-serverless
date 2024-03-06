import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/modules/material-module';
import { LayoutNavbarComponent } from './shared/components/layout/layout-navbar/layout-navbar.component';
import { LayoutSidenavMenuComponent } from './shared/components/layout/layout-sidenav-menu/layout-sidenav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    LayoutNavbarComponent,
    LayoutSidenavMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showSidenav: boolean = true;

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
}
