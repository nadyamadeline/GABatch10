// bus tugas 3
class Bus {
    constructor(sopir,penumpang,trayek,kas){
        this.sopir = sopir,
        this.penumpang = penumpang,
        this.trayek = trayek,
        this.kas = kas
    }
    penumpangNaik = function(name){
        if (this.penumpang.length == 2){ // sengaja pakai 2 to simplify function testing
            console.log(`Maaf ${name}, bus sudah penuh!`)
        } else if (this.penumpang.includes(name)){
            console.log(`${name} sudah di dalam bus.`);
        } else {
            this.penumpang.push(name);
            return this.penumpang;
        }
    }
    penumpangTurun = function(name,tarif){
        this.kas += tarif;
        if (this.penumpang.length == 0){
            console.log(`Bus masih kosong! Apakah sopir ${this.sopir} mau diturunkan??`)
        } else if (this.penumpang.includes(name) == false){
            console.log(`Siapa itu ${name}?? Apakah anda yakin ada ${name} di dalam bus??`)
        } else {
            for (let i = 0; i < this.penumpang.length;i++){
                if (name == this.penumpang[i]){
                    this.penumpang.splice(i,1);
                }
            }
        }
    }
}

const myBus1 = new Bus('Paijo',[],['Jakarta','Surabaya'],0);
myBus1.penumpangTurun('Ani',200000); // tes waktu bus masih kosong
myBus1.penumpangNaik('Abdul'); 
myBus1.penumpangNaik('Abdul'); // tes saat penumpang sudah di dalam bus
myBus1.penumpangNaik('Nana');
myBus1.penumpangTurun('Kirby'); // tes saat penumpang yg mau turun tidak ada di dlm bus
myBus1.penumpangNaik('Desi'); // tes saat bus sudah penuh
myBus1.penumpangTurun('Nana',200000);
console.log(myBus1);