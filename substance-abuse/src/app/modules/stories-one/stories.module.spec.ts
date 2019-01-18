import { StoriesOneModule } from './stories-one.module';

describe('StoriesTwoModule', () => {
  let storiesModule: StoriesOneModule;

  beforeEach(() => {
    storiesModule = new StoriesOneModule();
  });

  it('should create an instance', () => {
    expect(storiesModule).toBeTruthy();
  });
});
