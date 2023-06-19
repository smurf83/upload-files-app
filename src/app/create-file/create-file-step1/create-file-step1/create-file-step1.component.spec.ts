import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileStep1Component } from './create-file-step1.component';

describe('CreateFileStep1Component', () => {
  let component: CreateFileStep1Component;
  let fixture: ComponentFixture<CreateFileStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFileStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFileStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
