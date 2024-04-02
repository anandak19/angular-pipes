import { GenderCheckPipe } from './gender-check.pipe';

describe('GenderCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
