export function airquality(AQI) {
    if (AQI >= 0 && AQI <= 50) {
        return "Good";
    } else if (AQI >= 51 && AQI <= 100) {
        return "Moderate";
    } else if (AQI >= 101 && AQI <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (AQI >= 151 && AQI <= 200) {
        return "Unhealthy";
    } else if (AQI >= 201 && AQI <= 300) {
        return "Very Unhealthy";
    } else if (AQI > 300) {
        return "Hazardous";
    }
}
// output
if (import.meta.main) {
    console.log(`An AQI of 75 is considered ${airquality(75)}`);
}