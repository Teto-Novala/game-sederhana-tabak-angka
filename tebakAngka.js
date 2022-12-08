alert('tebak angka dari 1-10');

var x = 9;
var com = Math.floor(Math.random() * x) + 1;
console.log(com);


    for(var i = 3; i >=1; i--){

        var p = prompt('masukkan angka\nanda memiliki ' + i + ' kesempatan');

        if(p == com){
            alert('angka anda benar\nkomputer memilih angka ' + com);
            i = false;
        } else if(p < com){
            alert('angka anda terlalu RENDAH');
        } else if(p > com){
            alert('angka anda terlalu TINGGI');
        } else {
            alert('anda memasukan yg bukan dipilihan');
        }

        if (i == true){
            alert('kesempatan anda habis');
        } 
    }
alert('terima kasih telah bermain');










