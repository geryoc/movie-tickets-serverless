import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../../modules/material-module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() onMenuClicked = new EventEmitter<void>();

  menuToggle() {
    this.onMenuClicked.emit();
  }
}
