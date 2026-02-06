import { SquareFeetPerAcre } from "../src/SquareFeetPerAcre.js";

describe("Testing for Square feet per acre calculations",
    function () {
        it("tests for 1 acre", function () {
            expect("43560").toBe(SquareFeetPerAcre(1));
        });
        it("tests for 5 acres", function () {
            expect("217800").toBe(SquareFeetPerAcre(5));
        });
        it("tests for 10 acres", function () {
            expect("435600").toBe(SquareFeetPerAcre(10));
        });
    });