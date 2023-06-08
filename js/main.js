let allInput = document.querySelectorAll('.input100');
let hasilBox = document.querySelector('.hasil-box');

for(let i = 0; i < allInput.length; i++){
    allInput[i].addEventListener('keyup', (e)=>{
        if(allInput[i].value != ''){
            allInput[i].classList.add('has-val');
        }

        else{
            allInput[i].classList.remove('has-val');
        }
    });
}

function factorial(x){
    let res = 1n;
    for(let i = 2; i <= x; i++) res *= BigInt(i);
    return res;
}

function c(x, y){
    let a = factorial(x);
    let b = factorial(x-y);
    let cc = factorial(y);
    let result = BigInt(a/b/cc);
    return result;
}

function brute(x, y){
    if(x==1){
        return [0, 0];
    }

    else if(x==2){
        return [0, 1];
    }

    else if(x==3){
        return [1, 0];
    }

    else if(x==4){
        return [1, 1];
    }

    else if(x==5){
        return [1, 2];
    }

    else if(x==6){
        return [1, 3];
    }

    else if(x==7){
        return [2, 2];
    }

    else if(x==8){
        return [2, 3];
    }

    else if(x==9){
        return [2, 4];
    }

    else if(x==10){
        return [2, 4];
    }
}
document.addEventListener('submit', (e)=>{
    hasilBox.innerHTML = '';
    hasil.style.flex = '1.5';
    let baris = allInput[0].value;
    let kolom = allInput[1].value;

    let total = baris*kolom;

    let fil = document.createElement('div');
    fil.style.display = 'flex';
    fil.style.alignItems = 'center';
    fil.style.justifyContent = 'center';
    fil.style.gap = `10px`;

    let p = document.createElement('div');
    p.classList.add("posisi");
    p.textContent = " ";
    fil.appendChild(p);
    for(let i = 0; i < kolom; i++){
        p = document.createElement('div');
        p.classList.add("posisi");
        p.textContent = `${i+1}`;
        fil.appendChild(p);
    }

    hasilBox.appendChild(fil);

    for(let i = 0; i < baris; i++){
        fil = document.createElement('div');
        fil.style.display = 'flex';
        fil.style.alignItems = 'center';
        fil.style.justifyContent = 'center';
        fil.style.gap = `10px`;
        let pos = document.createElement('div');
        pos.classList.add("posisi");
        pos.textContent = `${String.fromCharCode(65+i)}`;

        fil.appendChild(pos);
        fil.classList.add("sep");
        for(let j = 0; j < kolom; j++){
            pos = document.createElement('div');
            pos.classList.add("seat");
            
            fil.appendChild(pos);
        }

        hasilBox.appendChild(fil);
    }


    hasilBox.innerHTML += '<div class="result" style="height: 100px"></div>';

    let r = document.querySelectorAll('.hasil-box .seat');     
    let res;

    let st1, st2;

    let test = setInterval(function(){
        st1 = setTimeout(
            function(){
                let ar = Math.floor(Math.random() * (baris-1)) + 1;
                let br = Math.floor(Math.random() * (kolom-1)) + 1;
                res = Math.floor((ar-1)*kolom+br);
                if(res < r.length){
                    r[res].style.backgroundColor = 'green';
                }
            }
            , 10
        );

        st2 = setTimeout(
            function(){
                r[res].style.backgroundColor = 'red';
            }
            , 50
        );
        
    }, 100);

    setTimeout(()=>{
        clearInterval(test);
    }, 1100);

    setTimeout(()=>{
        clearInterval(test);
        console.clear();
        let f = document.querySelectorAll('.sep');
        let final = document.createElement('div');
        let ress = document.querySelector('.result');

        // let bagiKolom = Math.ceil(kolom/3);
        // let bagiBaris = Math.ceil(baris/3);

        // bagiBaris = (bagiBaris%2!=0)?bagiBaris-1:bagiBaris;
        // bagiKolom = (bagiKolom%2!=0)?bagiKolom-1:bagiKolom;

        // for(let i = bagiBaris; i <= 2*bagiBaris; i++){
        //     for(let j = bagiKolom; j <= 2*bagiKolom; j++){
        //         res = (i*kolom)+j;
        //         console.log(res);

        //         r[res].style.backgroundColor = 'green';
        //     }
        // }

        let bagiBaris = brute(baris, 0)[0];
        let bt = brute(baris, 0)[1];
        let bagiKolom = brute(kolom, 0)[0];
        let kt = brute(kolom, 0)[1];
        let kursiHijau = 0;
        for(let i = bagiBaris; i <= bagiBaris+bt; i++){
            for(let j = bagiKolom; j <= bagiKolom+kt; j++){
                res = (i*kolom)+j;
                console.log(res);
                r[res].style.backgroundColor = 'green';
                ++kursiHijau;
            }
        }

        let terakhir = (kursiHijau*100 / (baris*kolom)).toFixed(2);
        ress.style.flexDirection = `column`;
        ress.style.fontSize = `37px`;
        ress.innerHTML = `<div>Probabilitas = ${terakhir}%</div>`;
    }, 1320);


});