import { ComponentFixture, TestBed } from '@angular/core/testing'

import { APCSServicesJanitorialComponent } from './apcs.services.janitorial.component'

describe('ServicesComponent', () => {
  let component: APCSServicesJanitorialComponent
  let fixture: ComponentFixture<APCSServicesJanitorialComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APCSServicesJanitorialComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(APCSServicesJanitorialComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
