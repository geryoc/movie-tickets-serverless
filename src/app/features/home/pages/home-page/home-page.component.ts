import { Component } from '@angular/core';
import { HomeContainerComponent } from '../../components/home-container/home-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
