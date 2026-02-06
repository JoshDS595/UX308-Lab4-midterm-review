import {mowlawn} from "../src/mowlawn.js";

describe("testing for proper mowing time",
function(){
    it("tests for 5 minutes", function(){
        expect("5 minutes").toBe(mowlawn(5, 1));
    });
    it("tests for 20 minutes", function(){
        expect("20 minutes").toBe(mowlawn(10, 2));
    });
    it("tests for 30 minutes", function(){
        expect("30 minutes").toBe(mowlawn(15, 2));
    });
});