import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CasesComponent } from './cases.component'

describe('CasesComponent', () => {
  let component: CasesComponent
  let fixture: ComponentFixture<CasesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CasesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
