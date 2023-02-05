const names = [
    "Abigail","Alexandra","Alison",
    "Amanda","Angela","Bella",
    "Carol","Caroline","Carolyn",
    "Deirdre","Diana","Elizabeth",
    "Ella","Faith","Olivia","Penelope"
]

function searchName(query, max, arr) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase())).splice(0,max);
}

console.log(searchName('el',3, names));