const greetingDelayMS = 2000;
const fadeOutDuration = 1000;
const greetings = ["Welcome", "To", "Calvin's Portfolio", ""];

function changeGeetingText (greetingElement) {
  greetings.forEach((greeting,idx) =>{
    setTimeout(() => {
      greetingElement.textContent = greeting;
      greetingElement.classList.remove("animate-fadeOut");
      greetingElement.classList.add("animate-fadeIn");
    }, greetingDelayMS * idx )

    setTimeout(() => {
      greetingElement.classList.remove("animate-fadeIn");
      greetingElement.classList.add("animate-fadeOut");
    }, greetingDelayMS * idx + fadeOutDuration )
  })
}
