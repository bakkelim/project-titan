import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
describe('AppComponent', () => {

  @Component({
    selector: 'titan-login',
    template: '<div></div>',
  })
  class MockLoginComponent {
  }

  @Component({
    selector: 'titan-navbar',
    template: '<div></div>',
  })
  class MockNavbarComponent {
  }

  @Component({
    // tslint:disable-next-line:component-selector
    selector: 'router-outlet',
    template: '<div></div>',
  })
  class MockRouterComponent {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockLoginComponent,
        MockRouterComponent,
        MockNavbarComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'titan'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('titan');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to titan!');
  // }));
});
