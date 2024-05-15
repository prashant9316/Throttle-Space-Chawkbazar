export default function numberWithCommas(y: number) {
    const x = y.toString();
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}