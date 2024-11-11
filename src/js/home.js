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

        console.log("%d, %d, %f", yPosition, windowHeight,  yPercentage)
        navCircle.style.transform = `translateY(${navCircleStartPos + navCirclePosition}px) translateX(-50%)`;

    });

}