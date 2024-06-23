function setAttributeCustom(style, id) {
    const textArea = document.getElementById('textarea');
    const element = document.getElementById(id);
    if (textArea.classList.value.includes(style)) {
        textArea.classList.remove(style);
        element.classList.remove("bg-blue-400")
    } else {
        textArea.classList.add(style)
        element.classList.add("bg-blue-400")
    }
}

function setAttributeForInputCustom(id) {
    const textArea = document.getElementById('textarea');
    const elementValue = document.getElementById(id).value;
    const listItem = textArea.classList.value.split(" ");

    textArea.classList.replace(String(listItem[0]), `text-[${elementValue}px]`);
    console.log(textArea);
}

document.getElementById('bold').addEventListener('click', () => {
    setAttributeCustom("font-bold", "bold")
})
document.getElementById('italic').addEventListener('click', () => {
    setAttributeCustom("italic", 'italic')
})
document.getElementById('underline').addEventListener('click', () => {
    setAttributeCustom("underline", "underline")
})
document.getElementById('text-left').addEventListener('click', () => {
    setAttributeCustom("text-left", "text-left")
})
document.getElementById('text-center').addEventListener('click', () => {
    setAttributeCustom("text-center", "text-center")
})
document.getElementById('text-right').addEventListener('click', () => {
    setAttributeCustom("text-right", "text-right")
})
document.getElementById('text-justify').addEventListener('click', () => {
    setAttributeCustom("text-justify", "text-justify")
})


document.getElementById('text-size').addEventListener('keyup', () => {
    setAttributeForInputCustom('text-size')
})
document.getElementById('text-size').addEventListener('click', () => {
    setAttributeForInputCustom('text-size')
})
document.getElementById('uppercase-lowercase').addEventListener('click', () => {
    setAttributeCustom('uppercase', 'uppercase-lowercase');
})


function setAttributeForColorCustom(id) {
    const textArea = document.getElementById('textarea');
    const elementValue = document.getElementById(id).value;
    const listItem = textArea.classList.value.split(" ");

    textArea.classList.replace(String(listItem[1]), `text-[${elementValue}]`);
    console.log(textArea);
}

document.getElementById('color-box').addEventListener('input', () => {
    setAttributeForColorCustom('color-box');
})