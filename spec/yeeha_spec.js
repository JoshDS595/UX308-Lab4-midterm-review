import { yeeha } from "../src/yeeha.js";

describe("Testing for yeeha calculations",
    function () {
        it("tests for 1", function () {
            expect("Nada").toBe(yeeha(1));
        });
        it("tests for 3", function () {
            expect("Yee").toBe(yeeha(3));
        });
        it("tests for 7", function () {
            expect("Ha").toBe(yeeha(7));
        });
        it("tests for 21", function () {
            expect("Yee Ha").toBe(yeeha(21));
        });
    });