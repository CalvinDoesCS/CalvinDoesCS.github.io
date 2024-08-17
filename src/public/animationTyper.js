function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
}
const phrases = ["Frontend Development", "Backend Developement", "Fullstack Development", "Machine Learning"];
const el = document.getElementById("job-text");

let sleepTime = 100;

let currPhraseIndex = 0;

const writeLoop = async () => {
    while(true){
        let currWord = phrases[currPhraseIndex % phrases.length];

        for(let i = 0; i < currWord.length; i++){
            el.innerText = currWord.substring(0,i+1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);
        for(let i = currWord.length - 1; i > 0; i--){
            el.innerText = currWord.substring(0,i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        currPhraseIndex += 1
    }
}
writeLoop();