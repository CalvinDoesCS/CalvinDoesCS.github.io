/* 
    Slider JavaScript Functions
*/
const idForSlide = [
    "slide-1",
    "slide-2",
    "slide-3",
];

function updateInformation(index) {
    idForSlide.forEach((id,indexId) => {
        const infoElement = document.getElementById(id);
        if(infoElement === null) {
            return;
        }
        if(indexId === index ){
            infoElement.className = "";
        }else{
            infoElement.className = "hidden";
        }

    })
}
let isInfoShowing = false;
function showCardInfo() {
    const infoContainer = document.getElementById('info-container');

    infoContainer.classList.toggle("hidden", isInfoShowing);

    isInfoShowing = !isInfoShowing;

}


