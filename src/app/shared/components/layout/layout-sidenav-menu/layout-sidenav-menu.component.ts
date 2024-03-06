import { Component } from '@angular/core';
import { MaterialModule } from '../../../modules/material-module';

export interface NavMenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-layout-sidenav-menu',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './layout-sidenav-menu.component.html',
  styleUrl: './layout-sidenav-menu.component.css',
})
export class LayoutSidenavMenuComponent {
  menuItems: NavMenuItem[] = [
    { text: 'Home', route: 'home' },
    { text: 'Genres', route: 'genres' },
    { text: 'Movies', route: 'movies' },
    { text: 'Theaters', route: 'theaters' },
    { text: 'Shows', route: 'shows' },
    { text: 'Account', route: 'account' },
  ];
}
