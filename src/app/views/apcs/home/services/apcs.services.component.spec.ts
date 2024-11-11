import { ComponentFixture, TestBed } from '@angular/core/testing'

import { APCSServicesComponent } from './apcs.services.component'

describe('ServicesComponent', () => {
  let component: APCSServicesComponent
  let fixture: ComponentFixture<APCSServicesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APCSServicesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(APCSServicesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
