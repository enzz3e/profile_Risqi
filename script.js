const textElement = document.querySelector('.container h1 u');
const text = textElement.textContent;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        index = 0;
        textElement.textContent = '';
        setTimeout(typeWriter, 100);
    }
}
typeWriter();