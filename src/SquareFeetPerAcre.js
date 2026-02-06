// Input parameter
export function SquareFeetPerAcre(SFPA) {
    // processing
    let SquareFeetPerAcre = 43560 * SFPA;
    // output
    return (SquareFeetPerAcre.toString())
}

if (import.meta.main) {
    console.log(`3 acres of land converted to square feet is ${SquareFeetPerAcre(3)} square feet`);
}