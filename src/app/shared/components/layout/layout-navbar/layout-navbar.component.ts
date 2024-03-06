import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../modules/material-module';

@Component({
  selector: 'app-layout-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './layout-navbar.component.html',
  styleUrl: './layout-navbar.component.css',
})
export class LayoutNavbarComponent {
  @Output() menuClicked = new EventEmitter<void>();

  menuButtonClicked() {
    this.menuClicked.emit();
  }
}
