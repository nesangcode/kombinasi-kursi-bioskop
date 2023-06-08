
let w = document.querySelector(".welcome");
let but = document.querySelector(".next");
let opening = document.querySelector(".opening");
let core = document.querySelector(".core");
let hasil = document.querySelector(".hasil");

w.innerHTML += `<p>Selamat datang!</p>`;
w.classList.add('fib');

function wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

let hm = [];
let comm = [`<p>Anggota kelompok:<br>- Vanes Angelo (D1041221003)<br>- Ferdian Destrinata (D1041221025)<br>- Arya Dwi Putra (D1041221033)`];

let cnt = 0;
but.addEventListener("click", ()=>{
    console.log(cnt);
    if(cnt==1){
        opening.classList.remove("grad");
        opening.classList.add("fou");

        setTimeout(function () {
            opening.classList.remove("zer");
            opening.classList.add("mino");
            core.classList.remove("mino");
            core.classList.add("zer");
        }, 1100);

        
        return;
    }

    hm.push(setTimeout(function () {
        w.classList.remove("fib");
        w.classList.add("fol");
    }, 0));

    

    hm.push(setTimeout(function () {
        w.style.opacity = "0";
        
    }, 1000));

    hm.push(setTimeout(function () {
        console.log(cnt);
        w.innerHTML = comm[cnt];
        console.log(comm[cnt]);
        w.classList.remove("fol");
        clearTimeout(hm[0]);
        w.classList.add("fir");
        
        
    }, 1250));

    hm.push(setTimeout(function () {
        but.innerHTML = `Mulai!`;
        but.style.backgroundColor = `green`;
        ++cnt;

    }, 2800));

    hm.push(setTimeout(function () {
        for(let el of hm){
            clearTimeout(el);
        }
    }, 2800));



    
});

