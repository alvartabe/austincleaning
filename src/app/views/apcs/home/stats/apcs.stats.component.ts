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
      image: this.icons1Img,
      title: 'Customized Cleaning Plans',
      description:
        'APCS provides tailored cleaning and maintenance solutions to fit each client’s unique needs. From daily to bi-weekly services, we ensure your business gets exactly the care it deserves.',
    },
    {
      image: this.icons2Img,
      title: 'Professional-Grade Equipment',
      description:
        'Our advanced cleaning tools, like HEPA vacuums and no-dip mops, ensure high standards and prevent cross-contamination. We use color-coded microfiber rags for safe, effective cleaning.',
    },
    {
      image: this.icons3Img,
      title: 'Comprehensive Services',
      description:
        'With APCS, you get a one-stop solution for all your cleaning needs. From floor care to window cleaning, save time and money by working with a single trusted partner.',
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
