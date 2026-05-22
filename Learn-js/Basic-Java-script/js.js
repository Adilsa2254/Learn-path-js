function replace1(){
    document.getElementById('image1-for-replace').src='/Learn-js/Resorce/image.png';
}

function replace2(){
    document.getElementById('image1-for-replace').src='/Learn-js/Resorce/image1.png';
}

function ganti_text(){
    document.getElementById('demo').innerHTML='Hallooooo Hallo saya tampilan ke-2 nihhh!!';
}

function munculkan_date(){
    document.getElementById('Date').innerHTML=Date();
}


function munculkan_hasil(){
    let y = document.getElementById('number1');
    let x = document.getElementById('number2');

    function munculkan_hasil(x, y){
        let hasil = y + x
        return hasil; 
    }
    
    document.getElementById('hasil').innerHTML = 'hitung sendiri';
}

