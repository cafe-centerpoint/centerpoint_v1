function hitungHari() {
    const tanggalTujuan = new Date('July 7, 2021 07:07:07').getTime();
    
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;
    let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    let jam = Math.floor( selisih % (1000 * 60 * 60* 24)/(1000*60*60));
    let menit = Math.floor( selisih % (1000 * 60 * 60) / (1000*60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    if ( jam + menit + detik <= 0 ) {
        return "Launching Today!";
    } else {
        return `Launching dalam ${jam} Jam + ${menit} Menit lagi`;
    }
    // return hitungMundur;
    // return result;
} 

module.exports = { hitungHari };