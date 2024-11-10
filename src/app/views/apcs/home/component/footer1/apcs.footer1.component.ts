import { Component } from '@angular/core'
import { credits } from '@states/constants'

@Component({
  selector: 'apcs-app-footer1',
  standalone: true,
  imports: [],
  templateUrl: './apcs.footer1.component.html',
  styles: ``,
})
export class APCSFooter1Component {
  creditsBy = credits
  isSending = false

  subscribe() {
    this.isSending = true
  }
}
