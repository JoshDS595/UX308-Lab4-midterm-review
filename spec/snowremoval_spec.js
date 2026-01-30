// spec/snowremoval_spec.js

import { snowremoval } from "../src/snowremoval.js";

describe("testing for proper snow removal equipment",
function(){
    it("tests for a shovel", function(){
        expect("shovel").toBe(snowremoval(3));
    });
    it("tests for gas snow blower", function(){
        expect("gas snow blower").toBe(snowremoval(20));
    });
});