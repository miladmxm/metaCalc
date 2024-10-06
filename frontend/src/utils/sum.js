const sum = (n1, n2) => {
    const s = (n1 + n2 )*1000
    return Math.round(s)/1000
    // return (n1 * 1000 + n2 * 1000) / 1000
}
export default sum