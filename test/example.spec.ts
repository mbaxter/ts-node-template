import { hello } from '@/example';

describe('example.ts', () => {
  describe('hello()', () => {
    it("Should return 'hello world'", () => {
      const output = hello();
      expect(output).toBe('Hello World');
    });
  });
});
