import { Component } from '@angular/core';
import { AuthComponent } from '@petlyhood-frontend/petlyhood-core';

@Component({
  imports: [AuthComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'petlyhood-web';
}
