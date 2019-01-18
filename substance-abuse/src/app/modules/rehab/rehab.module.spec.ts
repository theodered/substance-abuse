import { RehabModule } from './rehab.module';

describe('RehabModule', () => {
  let rehabModule: RehabModule;

  beforeEach(() => {
    rehabModule = new RehabModule();
  });

  it('should create an instance', () => {
    expect(rehabModule).toBeTruthy();
  });
});
