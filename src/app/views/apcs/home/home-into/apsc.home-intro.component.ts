import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from '@helpers/parralax-directive'
import { courses } from '@views/landings/online-courses/data'

@Component({
  selector: 'apcs-home-intro',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './apcs.home-intro.component.html',
  styles: ``,
})
export class APCSHomeIntroComponent {
  categories = courses
}
