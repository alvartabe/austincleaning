import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ImageTextComponent } from './image-text.component'

describe('ImageTextComponent', () => {
  let component: ImageTextComponent
  let fixture: ComponentFixture<ImageTextComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ImageTextComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
