
import { linecalculation } from "../src/linecalculation.js";

describe("Testing for linecalculation calculations",
    function () {
        it("tests for slope 2", function () {
            expect(2).toBe(linecalculation(1, 2, 3, 6));
        });
        it("tests for slope -1", function () {
            expect(-1).toBe(linecalculation(2, 3, 4, 1));
        });
        it("tests for slope 0.5", function () {
            expect(0.5).toBe(linecalculation(0, 0, 4, 2));
        });
    });