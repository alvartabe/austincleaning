import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Navigation, Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'apcs-tesimonials',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './apcs.tesimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class APCSTesimonialsComponent {

  avatar13Img = 'assets/img/avatar/13.jpg'
  avatar14Img = 'assets/img/avatar/14.jpg'
  avatar11Img = 'assets/img/avatar/11.jpg'


  userData = [
    {
      image: this.avatar13Img,
      name: 'Ralph Edwards',
      role: 'Head of Marketing at Lorem Ltd.',
    },
    {
      image: this.avatar14Img,
      name: 'Annette Black',
      role: 'Strategic Advisor at Company LLC',
    },
    {
      image: this.avatar11Img,
      name: 'Darrell Steward',
      role: 'Project Manager at Ipsum Ltd.',
    },
  ]

  userList = [
    {
      comment:
        'APCS has transformed our workspace into a spotless, welcoming environment. Their team is reliable and professional, and their customized cleaning plan fits our schedule perfectly. We couldn’t be happier with the quality and attention to detail.',
      user: this.userData[0],
    },
    {
      comment:
        'The APCS team goes above and beyond! Their use of professional-grade equipment, like HEPA vacuums and color-coded microfiber rags, has made a noticeable difference in our office’s air quality and cleanliness. Highly recommend!',
        user: this.userData[1],
      },
    {
      comment:
        'Working with APCS has been a game-changer. Their one-stop approach to services, including floor care and waste management, saves us time and hassle. Their customer service is exceptional and always responsive to our needs.',
        user: this.userData[2],
      },
  ];

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#swiper-pagination1',
      clickable: true,
    },
    navigation: {
      prevEl: '#testimonials-prev',
      nextEl: '#testimonials-next',
    },
  }
}
