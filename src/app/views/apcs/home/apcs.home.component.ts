import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { APCSFooter1Component } from './component/footer1/apcs.footer1.component'
import Rellax from 'rellax'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'
import { APCSHomeIntroComponent } from './home-into/apsc.home-intro.component'
import { APCSStatsComponent } from './stats/apcs.stats.component'
import { APCSTesimonialsComponent } from './tesimonials/apcs.tesimonials.component'
import { APCSServicesComponent } from './services/apcs.services.component'

@Component({
  selector: 'apcs-app-home',
  standalone: true,
  imports: [
    TopbarComponent,
    ScrollToModule,
    APCSFooter1Component,
    APCSHomeIntroComponent,
    APCSStatsComponent,
    APCSTesimonialsComponent,
    APCSServicesComponent
  ],
  templateUrl: './apcs.home.component.html',
  styles: `
    :host(app-home) {
      display: contents;
    }
  `,
  providers: [ScrollToService],
})
export class APCSHomeComponent {
  ngOnInit(): void {
    new Rellax('.rellax')
  }
}
