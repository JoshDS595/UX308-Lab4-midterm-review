// spec/hello_spec.js

import { hello } from '../src/hello.js'

describe("testing hello", function() {
    it("says hello to Rich", function() {
      let sHello = hello("Rich");
      expect(sHello).toBe("Hello Rich!");
    });
    it("says hello to Biff", function() {
      let sHello = hello("Biff");
      expect(sHello).toBe("Hello Biff!");
    });
    it("says hello world", function() {
      let sHello = hello();
      expect(sHello).toBe("Hello world!");
    });

  });
  
  