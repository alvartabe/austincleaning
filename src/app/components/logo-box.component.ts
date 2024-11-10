import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'component-logo-box',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="navbar-brand pe-3">
      <img src="assets/img/logos/apcs_drop.png" width="50" alt="Logo" />
    </a>
  `,
})
export class LogoBoxComponent {}
