function selectButton(selected) {
    // Reset all buttons to default state
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('bg-blue-500'); // Remove selected background color
        button.classList.add('bg-zinc-800'); // Reset background to default
    });

    // Add selected style to clicked button
    const selectedButton = document.getElementById(`${selected}Btn`);
    selectedButton.classList.add('bg-blue-500'); // Change background color for selected button

    // Hide all content sections
    const allContentSections = document.querySelectorAll('#content div');
    allContentSections.forEach(content => content.classList.add('hidden'));

    // Show the content for the selected button
    const selectedContent = Array.from(document.getElementsByClassName(selected));
    console.log(selectedContent);
    selectedContent.forEach((content) => {
        content.classList.remove('hidden');
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



}