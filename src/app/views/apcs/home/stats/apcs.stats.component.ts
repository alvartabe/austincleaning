import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'apcs-stats',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './apcs-stats.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class APCSStatsComponent {

  icons1Img:string = 'assets/img/landing/online-courses/icons/01.svg'
  icons2Img:string = 'assets/img/landing/online-courses/icons/02.svg'
  icons3Img:string = 'assets/img/landing/online-courses/icons/03.svg'

  featureData = [
    {
      icon: 'assets/img/landing/app-showcase-1/features/payments.svg',
      title: '25 years of shared experience',
      description:
        'Locally owned and operated, we bring over 25 years of shared experience.',
    },
    {
      icon: 'assets/img/landing/app-showcase-1/features/payments.svg',
      title: '60 million square feet',
      description:
        '60 million square feet of facility space, including corporate offices, healthcare centers, and large commercial properties.',
    },
    {
      icon: 'assets/img/landing/app-showcase-1/features/payments.svg',
      title: 'Austin Metro Area, with expansion into San Antonio and Houston',
      description:
        'Austin Metro Area, with expansion into San Antonio and Houston.',
    },
  ]

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 8,
    pagination: {
      el: '#iconpagination',
      clickable: true,
    },
    breakpoints: {
      '600': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  }
}
