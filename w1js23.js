const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    
    const bukanAngka = parseInt(nilaiAwal,nilaiAkhir)
    if(isNaN(bukanAngka)) {
    return console.log('nilai bukan angka')
    }
  
    if(nilaiAwal >= nilaiAkhir) {
        return console.log('Nilai awal harus lebih kecil dari nilai akhir')
    } 
    if(dataArray.length <= 5) {
        return console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
    
    let hasilArray = dataArray.map(dataArr => (dataArr >= nilaiAwal && dataArr <= nilaiAkhir) ? dataArr : undefined)
    .filter(dataArr => dataArr !== undefined).sort((a, b) => a - b);
    if (hasilArray.length === 0) {
    return console.log("Nilai tidak ditemukan");
  }
return console.log(hasilArray);
}


// seleksiNilai('s', 20 , [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(5, 17 , [2, 25, 4])
// seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])


