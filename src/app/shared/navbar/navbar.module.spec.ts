import { NavbarModule } from './navbar.module';

describe('SharedModule', () => {
  let sharedModule: NavbarModule;

  beforeEach(() => {
    sharedModule = new NavbarModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
