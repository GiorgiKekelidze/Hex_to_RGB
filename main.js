let inpt = document.getElementById("main_input")
let convert = document.getElementById("convert")
let rdin = document.getElementById("rdin")
let grin = document.getElementById("grin")
let blin = document.getElementById("blin")
let rdzo = document.getElementById("rdzo")
let grzo = document.getElementById("grzo")
let blzo = document.getElementById("blzo")
let cclr = document.getElementById("cclr")
let clrpreview = document.getElementById("prvw")
convert.addEventListener("click",(e)=>{
    e.preventDefault()
    try{
        inpt.value = inpt.value.replace('#', '');
        const r = parseInt(inpt.value.substring(0, 2), 16); 
        const g = parseInt(inpt.value.substring(2, 4), 16); 
        const b = parseInt(inpt.value.substring(4, 6), 16); 
        console.log(r)
        rdin.value=r;
        grin.value=g;
        blin.value=b;
        rdzo.value=r/255;
        grzo.value=g/255;
        blzo.value=b/255;
        cclr.value = `rgb(${r}, ${g}, ${b})`;
        clrpreview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    catch(err){
            alert(err)
        }

})