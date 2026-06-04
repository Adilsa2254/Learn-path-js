//type variable in js
//string
let warna = "Kuning";
let namabelakang = "Saputra";
document.getElementById("String").innerHTML=
"warna : "+warna+"\n" + "Nama belakang : "+namabelakang+"\n";

//number
let panjang = 16;
let lebar = 17.88234;
document.getElementById("Number").innerHTML=
"panjang = "+panjang+" & "+"Lebar = "+lebar;


//Bigint
let i = 182387123123912n;
let p = BigInt(9381794392493173912);
document.getElementById("Bigint").innerHTML=
"type bigint = "+i+" type bigint = "+p;

//boolean
let boolea1 = true;
let boolea2 = false;
document.getElementById("boolean").innerHTML=
"Type boleean1 = " +boolea1+ " Type boolean2 = "+boolea2;


//objek
const person = {namadepan:"Adil", Namabelakag:"Saputra"};
document.getElementById("Objek").innerHTML=
"type objek person = "+person.namadepan +" "+ person.Namabelakag;

//array objek
const array_objek=["pisang", "mangga", "apel"];
document.getElementById("Objek_array").innerHTML=
"isi Array1: "+array_objek[0]+" | isi array2: "+array_objek[1]+" | isi array3: "+array_objek[2];

//objek date
const date = new Date("2026-05-24");
document.getElementById("Objek_date").innerHTML = "Objek date: " + date.toLocaleDateString();

//Undifine
let k;
let m;
document.getElementById("Unidifine").innerHTML=
"k : "+k+" m : "+m;

//null
let g = null;
let n = null;
document.getElementById("Null").innerHTML=
"g = "+g+ " m = "+n;

//Symbol
const f = Symbol("🤣");
const s = Symbol("😭");
document.getElementById("Symbol").innerHTML =
"s = " + s.description+ " f = " + f.description;

// how to declare varible in js
let x = 5;
let y = 6;

const fname = "Adil Saputra";
let nim = 24111003;

//cara menghitung dan mengelola variable
let z = x + y;

document.getElementById("Demo1").innerHTML="nilai x = "+x;
document.getElementById("Demo2").innerHTML="nilai y = "+y;
document.getElementById("Demo3").innerHTML="hasil = "+z;
document.getElementById('id-person').innerHTML="nama :"+fname+" Nim : "+nim;


//angka
function hasilbtn() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let h = num1 + num2;
  document.getElementById("hasil2").innerHTML = "hasil = " + h;
}



//nama
function nama_lengkap() {
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  let namalengkap = name1 + " " + name2;
  document.getElementById("hasilnama").innerHTML = "Nama lengkap: " + namalengkap;
}


function hasiljawab(a){
    a = document.getElementById("jawaban").value;
    if (a ==="banana"|a ==="Banana"|a ==="BANANA"){
        document.getElementById("texthasil").innerHTML="Jawaban anda Benar";
        document.getElementById("gambar").src='/Learn-js/Resorce/image4.png';
    } else{
        document.getElementById("texthasil").innerHTML="jawaban anda salah";
        document.getElementById("gambar").src='/Learn-js/Resorce/image3.png';
    }
}



