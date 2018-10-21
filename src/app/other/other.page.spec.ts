import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPage } from './other.page';

describe('OtherPage', () => {
  let component: OtherPage;
  let fixture: ComponentFixture<OtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
