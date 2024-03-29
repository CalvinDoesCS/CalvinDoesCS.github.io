let animationTimeout;
function typeWriter(txt, speed, i) {
    return new Promise(resolve => {
        function type() {
            if (i < txt.length) {
                document.getElementById("job-text").innerHTML += txt.charAt(i);
                i++;
                animationTimeout = setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

function typeDeleter(speed) {
    return new Promise(resolve => {
        function deleteText() {
            let txt = document.getElementById("job-text").innerHTML;
            if (txt.length > 0) {
                document.getElementById("job-text").innerHTML = txt.slice(0, -1);
                animationTimeout = setTimeout(deleteText, speed);
            } else {
                resolve();
            }
        }
        deleteText();
    });
}

async function animationTyper() {
    clearAnimation();
    try {
        let job_titles = ['Frontend Development', 'Backend Development', 'Fullstack Development', 'Machine Learning'];

        for (let index = 0; index < job_titles.length; index++) {
            await typeWriter(job_titles[index], 50, 0);
            await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay between typing and deletion
            await typeDeleter(50);
            await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay after deletion
        }
    } catch (error) {
        console.error('Error in animationTyper:', error);
    }
}

function clearAnimation() {
    document.getElementById("job-text").innerHTML = "";
    clearTimeout(animationTimeout);
}
animationTyper();
setInterval(animationTyper, 13400);

