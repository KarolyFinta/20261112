const ujJatek = document.querySelector("#ujjatek")

const ko = document.querySelector("#ko")
const papir = document.querySelector("#papir")
const ollo = document.querySelector("#ollo")

const jatekter= document.querySelector("#jatekter")

ujJatek.addEventListener("click", function megjelenit(){

    const htmlKod=`
          <div class="csata" id="gep">
            <img src="" alt="válaszodra vár" />
          </div>
          
          <div class="csata" id="jatekos">
            <h2>Válassz</h2>
            <div class="gombok">
                <button id="ko">Kő</button>
                <button id="papir">Papír</button>
                <button id="ollo">Olló</button>
            </div>
                        <img
              src="./bad-rolls-of-toilet-paper-v0-5kdtg9gyva9e1.webp"
              alt="sret"
            />
          </div>
    `
    jatekter[0].innerHTML=""
    jatekter[0].instertAdjacentHTML("beforeend", htmlKod)
    const jatekGombok=document.querySelectorAll(".gombok button")
    jatekGombok[0].addEventListener("click", kivalaszt)
})

function kivalaszt(){
    console.log("kivalaszt")
}