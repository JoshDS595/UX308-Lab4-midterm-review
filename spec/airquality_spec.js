import {airquality} from "../src/airquality.js";

describe("Testing for air quality index",
    function () {
        it("tests for AQI of 25", function () {
            expect("Good").toBe(airquality(25));
        });
        it("tests for AQI of 75", function () {
            expect("Moderate").toBe(airquality(75));
        });
            it("tests for AQI of 125", function () {
                expect("Unhealthy for Sensitive Groups").toBe(airquality(125));
            });
        });