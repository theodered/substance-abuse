import { StoriesTwoModule } from './stories-two.module';

describe('StoriesTwoModule', () => {
  let storiesModule: StoriesTwoModule;

  beforeEach(() => {
    storiesModule = new StoriesTwoModule();
  });

  it('should create an instance', () => {
    expect(storiesModule).toBeTruthy();
  });
});
