//-------------------------- WPL 1 ------------------------------
let schoolBollen= document.querySelectorAll(".schoolprojecten-bollen");
let arrowLeft= document.getElementsByClassName("arrow-icon")[0];
let arrowRight= document.getElementsByClassName("arrow-icon")[1];

function getWindowWidth() {
    if (window.innerWidth!=null) {
        return window.innerWidth;
    } else {
        return document.body.clientWidth;
    }
}
if (getWindowWidth() <= 768) {
    schoolBollen.forEach((item, i) => {
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width / 2;

        arrowRight.addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        arrowLeft.addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
else {
    schoolBollen.forEach((item, i) => {
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width / 5;

        arrowRight.addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        arrowLeft.addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
