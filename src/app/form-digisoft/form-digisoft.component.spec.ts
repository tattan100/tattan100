/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormDigisoftComponent } from './form-digisoft.component';

describe('FormDigisoftComponent', () => {
  let component: FormDigisoftComponent;
  let fixture: ComponentFixture<FormDigisoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDigisoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDigisoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
