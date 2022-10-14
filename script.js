window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!window.SpeechRecognition) {
    alert("Your browser does not support Speaking Detector. Please use Chrome.");
}

const regcognition = new SpeechRecognition();
regcognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

regcognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('');
    p.textContent = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    console.log(transcript);
})

regcognition.addEventListener('end', regcognition.start);
regcognition.start();