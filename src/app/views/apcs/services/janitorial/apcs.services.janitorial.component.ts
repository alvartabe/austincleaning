import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopbarComponent } from '@components/topbar/topbar.component';
import { APCSFooter1Component } from '@views/apcs/home/component/footer1/apcs.footer1.component';

@Component({
  selector: 'apcs-services-janitorial',
  standalone: true,
  imports: [CommonModule, TopbarComponent, APCSFooter1Component],
  templateUrl: './apcs.services.janitorial.component.html',
  styles: ``,
})
export class APCSServicesJanitorialComponent {

  imageServices = 'assets/img/apcs/janitorial.jpeg';
  marketing = 'assets/img/services/icons/marketing.svg';
  servicesData = [
    {
      image: this.marketing,
      head: 'Covid-19 Cleaning',
      content: 'Specialized cleaning to maintain a safe environment.',
    },
    {
      image: this.marketing,
      head: 'Janitorial Cleaning Services',
      content: 'Comprehensive cleaning tailored to your needs.',
    },
    {
      image: this.marketing,
      head: 'Day Porter Services',
      content: 'On-site support to keep facilities clean throughout the day.',
    },
    {
      image: this.marketing,
      head: 'Floor Care Services',
      content: 'Expert floor maintenance for a polished look.',
    },
    {
      image: this.marketing,
      head: 'Green Cleaning Services',
      content: 'Eco-friendly cleaning solutions for a sustainable future.',
    },
    {
      image: this.marketing,
      head: 'Carpet Cleaning',
      content: 'Deep cleaning to keep carpets fresh and stain-free.',
    },
    {
      image: this.marketing,
      head: 'Pressure Washing',
      content: 'High-powered cleaning for exterior surfaces.',
    },
    {
      image: this.marketing,
      head: 'Pet Waste Disposal',
      content: 'Efficient and sanitary pet waste management.',
    },
    {
      image: this.marketing,
      head: 'High Ceiling Dusting',
      content: 'Dust removal in hard-to-reach areas.',
    },
    {
      image: this.marketing,
      head: 'Window Cleaning',
      content: 'Sparkling clean windows inside and out.',
    },
    {
      image: this.marketing,
      head: 'Waste Management',
      content: 'Reliable waste disposal and recycling services.',
    },
    {
      image: this.marketing,
      head: 'Post Construction Cleaning',
      content: 'Detailed cleaning after construction projects.',
    },
    {
      image: this.marketing,
      head: 'Facility Management',
      content: 'Full-service facility maintenance solutions.',
    },
    {
      image: this.marketing,
      head: 'HVAC Cleaning',
      content: 'Air quality improvement through HVAC cleaning.',
    },
    // {
    //   image: this.marketing,
    //   head: 'Water Damage Restoration',
    //   content: 'Rapid response to water damage for restoration.',
    // },
  ];
  
}
