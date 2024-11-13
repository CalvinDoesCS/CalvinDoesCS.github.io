function selectButton(selected) {
    const buttons = document.querySelectorAll('#certification li button');
    const selectedButton = document.getElementById(`${selected}Btn`);
    buttons.forEach(button => {
        if(button.id === selectedButton.id){
            selectedButton.classList.remove('bg-zinc-800');
            selectedButton.classList.add('bg-blue-300');
        }else{
            button.classList.remove('bg-blue-300');
            button.classList.add('bg-zinc-800');
        }
    });

    const set = new Set(Array.from(document.getElementsByClassName(selected)));
    // Show or Hide Certification based on selected
    const allContentSections = document.querySelectorAll('#certification-container div');
    allContentSections.forEach(content => {
        if(set.has(content)){
            content.classList.remove('hidden');
            content.classList.add('block');
        }else{
            content.classList.add('hidden');
        }
    })
}

window.onload = async () => {

    // Job Phrase Loop

    const phrases = ["Frontend Development", "Backend Developement", "Fullstack Development", "Machine Learning"];
    const el = document.getElementById("job-text");
    writePhraseLoop(el, phrases);

    // Nav Bar Movement

    const navCircle = document.getElementById("nav-circle");
    const navLine = document.getElementById("nav-line");

    window.addEventListener("scroll", () => {
        const yPosition = window.scrollY;
        const windowHeight = document.body.scrollHeight;
        const navLineHeight = navLine.offsetHeight + 10;
        const navCircleStartPos = navCircle.offsetHeight / 4;
        const yPercentage = yPosition / windowHeight;
        let navCirclePosition = navLineHeight * yPercentage;


        navCircle.style.transform = `translateY(${navCircleStartPos + navCirclePosition}px) translateX(-50%)`;

    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        effect: "coverflow",
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 20,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
          },
          
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

}