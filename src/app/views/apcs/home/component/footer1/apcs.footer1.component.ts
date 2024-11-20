import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { credits } from '@states/constants'
import { footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'apcs-app-footer1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './apcs.footer1.component.html',
  styles: ``,
})

export class APCSFooter1Component {
  socialLinks = footerSocialLinks
  creditsBy = credits
  itemsList = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about-us' },
    { label: 'Services', link: '/services' },
    { label: 'Contact Us', link: '/contact-us' },
  ]
}
