import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPlatComponent } from './form-add-plat.component';

describe('FormAddPlatComponent', () => {
  let component: FormAddPlatComponent;
  let fixture: ComponentFixture<FormAddPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
