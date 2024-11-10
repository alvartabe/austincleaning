import { ComponentFixture, TestBed } from '@angular/core/testing'

import { APCSHomeIntroComponent } from './apsc.home-intro.component'

describe('HeroComponent', () => {
  let component: APCSHomeIntroComponent
  let fixture: ComponentFixture<APCSHomeIntroComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APCSHomeIntroComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(APCSHomeIntroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
