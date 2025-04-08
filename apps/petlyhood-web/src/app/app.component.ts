import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PetlyhoodExampleComponent } from '@petlyhood-frontend/petlyhood-core';

@Component({
  imports: [PetlyhoodExampleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'petlyhood-web';
}
