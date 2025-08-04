export function formatDate(d){
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() + 1 ? '0' + d.getMonth() : d.getMonth();
    let year = d.getFullYear();
    return `${day}/${month}/${year}`;
}
