import { ComponentFixture, TestBed } from '@angular/core/testing'

import { APCSFooter1Component } from './apcs.footer1.component'

describe('Footer1Component', () => {
  let component: APCSFooter1Component
  let fixture: ComponentFixture<APCSFooter1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APCSFooter1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(APCSFooter1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
