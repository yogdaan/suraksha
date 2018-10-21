import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPage } from './natural.page';

describe('NaturalPage', () => {
  let component: NaturalPage;
  let fixture: ComponentFixture<NaturalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
