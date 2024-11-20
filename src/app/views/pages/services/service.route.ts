import { Route } from '@angular/router'
import { ServiceV2Component } from './service-v2/service-v2.component'
import { ServiceV1Component } from './service-v1/service-v1.component'
import { ServiceDetailV1Component } from './service-detail-v1/service-detail-v1.component'
import { ServiceDetailV2Component } from './service-detail-v2/service-detail-v2.component'
import { APCSServicesJanitorialComponent } from '@views/apcs/services/janitorial/apcs.services.janitorial.component'

export const SERVICE_ROUTE: Route[] = [
  {
    path: 'janitorial-cleaning-services',
    component: APCSServicesJanitorialComponent,
    data: { title: 'Janitorial Cleaning Services' },
  },
]
