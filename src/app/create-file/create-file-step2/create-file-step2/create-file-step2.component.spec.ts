import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileStep2Component } from './create-file-step2.component';

describe('CreateFileStep2Component', () => {
  let component: CreateFileStep2Component;
  let fixture: ComponentFixture<CreateFileStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFileStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFileStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
