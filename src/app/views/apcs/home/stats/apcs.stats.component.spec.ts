import { ComponentFixture, TestBed } from '@angular/core/testing'

import { APCSStatsComponent } from './apcs.stats.component'

describe('APCSStatsComponent', () => {
  let component: APCSStatsComponent
  let fixture: ComponentFixture<APCSStatsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APCSStatsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(APCSStatsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
