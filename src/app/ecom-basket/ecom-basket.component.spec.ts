/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcomBasketComponent } from './ecom-basket.component';

describe('EcomBasketComponent', () => {
  let component: EcomBasketComponent;
  let fixture: ComponentFixture<EcomBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
