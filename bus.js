// bus tugas 1
let passArr = ['Lisa',null,'Jennie',null];
function addPassenger(passName){
    if (passArr.length == 0){
        passArr.unshift(passName);
        console.log(passArr)
    } else if (passArr.includes(passName)){
        console.log(`${passName} is already in the bus.`);
        console.log(passArr);
    } else if (passArr.includes(null)){
        for (let i = 0; i < passArr.length;i++){
            if (passArr[i]== null){
                // passArr.splice(i,1,passName) OR
                passArr[i]= passName;
                console.log(passArr);
                // break;
                return passArr;
                }
            } 
        } else {
            passArr.push(passName);
            console.log(passArr)
        }
    }

addPassenger('Bambang');
addPassenger('Lisa');

// bus tugas 2
function Bus(sopir,penumpang,trayek,kas) {
    this.sopir = sopir,
    this.penumpang = penumpang,
    this.trayek = trayek,
    this.kas = kas,
    this.penumpangNaik = function(name){
        this.penumpang.push(name);
        return this.penumpang;
    },
    this.penumpangTurun = function(name,tarif){
        this.kas += tarif;
        for (let i = 0; i < this.penumpang.length;i++){
            if (name == this.penumpang[i]){
                this.penumpang.splice(i,1);
            }
        }
    }
}

let bus1 = new Bus('Paijo',[],['Jakarta','Bandung'],0)
bus1.penumpangNaik('Nana');
bus1.penumpangNaik('Diana');
bus1.penumpangTurun('Nana',100000);
console.log(bus1);
