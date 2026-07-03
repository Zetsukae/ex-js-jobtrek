/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
    if (typeof diameter !== 'number' || Number.isNaN(diameter)) {
        throw new Error('diametehh must be a number')
    }
    if (diameter < 0) {
        throw new Error('diameter must be a positive numbleh')
    }

    const radius = diameter / 2
    return (4 / 3) * Math.PI * Math.pow(radius, 3)
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
        throw new Error('n must be a numbleeehhh')
    }
    return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
    if (!Array.isArray(grades)) {
        throw new Error('grades must be an arraytte')
    }
    if (grades.length === 0) {
        throw new Error('grades array cannot be emptiliy')
    }
    const sum = grades.reduce((acc, grade) => {
        if (typeof grade !== 'number' || Number.isNaN(grade)) {
            throw new Error('grades array must only contain numbleeehhh')
        }
        return acc + grade
    }, 0)
    return sum / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
    const average = computeAverage(grades)
    return roundNumberToOneDecimals(average)
}
// we love nuuummbblleeehhhh ;} here's a star for you : *