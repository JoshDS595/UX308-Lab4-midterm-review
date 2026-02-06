// input parameter

export function mowlawn(width, length) {
    // processing
    let area = width * length;
    if (area <= 5) {
        return "5 minutes";
    } else if (area <= 10) {
        return "10 minutes";
    } else if (area <= 15) {
        return "15 minutes";
    } else if (area <= 20) {
        return "20 minutes";
    } else if (area <= 30) {
        return "30 minutes";
    } else {
        return "60 minutes";
    }
}
// output

if (import.meta.main){
    console.log(`for a lawn with width 4 and length 2, mowing time is ${mowlawn(4, 2)}`)
}