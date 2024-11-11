import { ComponentFixture, TestBed } from '@angular/core/testing'

import { APCSTesimonialsComponent } from './apcs.tesimonials.component'

describe('TesimonialsComponent', () => {
  let component: APCSTesimonialsComponent
  let fixture: ComponentFixture<APCSTesimonialsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APCSTesimonialsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(APCSTesimonialsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
