    
    var today = new Date();var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'.';var dateTime = date;
    const swals = Swal.mixin({
        allowOutsideClick: false,
    });
    async function mulai(){
        await swals.fire('Lihat ini sampai akhir ya ツ');
        setTimeout(showDiv, 900);play();                                      
    }            
    mulai();


async function expl(){setTimeout(duar,200);}

const body = document.querySelector("body");
function createHeart() {
const heart = document.createElement("div");
heart.className = "fas fa-heart";
heart.style.left = (Math.random() * 90)+"vw";
heart.style.animationDuration = (Math.random()*3)+2+"s"
body.appendChild(heart);
}
setInterval(function name(params) {
var heartArr = document.querySelectorAll(".fa-heart")
if (heartArr.length > 100) {
heartArr[0].remove()
}
},100)
</script>