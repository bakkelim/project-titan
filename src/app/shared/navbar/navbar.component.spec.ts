import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { Component } from '@angular/core';

describe('NavbarComponent', () => {
  @Component({
    // tslint:disable-next-line:component-selector
    selector: 'mat-toolbar',
    template: '<div></div>',
  })
  class MockToolbarComponent {
  }
  @Component({
    // tslint:disable-next-line:component-selector
    selector: 'mat-toolbar-row',
    template: '<div></div>',
  })
  class MockToolbarRowComponent {
  }

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        MockToolbarComponent,
        MockToolbarRowComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
