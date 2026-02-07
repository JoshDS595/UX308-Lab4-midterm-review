export function slope(x1, y1, x2, y2) {
    const inputs = [x1, y1, x2, y2]
    if (!inputs.every(n => typeof n === 'number' && Number.isFinite(n))) {
        throw new TypeError('slope expects four finite number arguments')
    }

    const run = x2 - x1
    if (run === 0) {
        throw new Error('slope is undefined for vertical lines (run === 0)')
    }

    const rise = y2 - y1
    return rise / run
}

export function linecalculation(x1, y1, x2, y2) {
    const slp = slope(x1, y1, x2, y2)
    return slp
}

if (import.meta.main) {
    console.log(`for points (1,2) and (3,4), the slope is ${linecalculation(3, 15, 1, 3)}`)
}
