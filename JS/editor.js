function setAttributeCustom(style, id) {
    const textArea = document.getElementById('textarea');
    const element = document.getElementById(id);
    if(textArea.classList.value.includes(style)){
        textArea.classList.remove(style);
        element.classList.remove("bg-blue-400")
    }else{
        textArea.classList.add(style)
        element.classList.add("bg-blue-400")
    }
    
}

document.getElementById('bold').addEventListener('click',()=>{
    setAttributeCustom("font-bold","bold")
})

document.getElementById('italic').addEventListener('click',()=>{
    setAttributeCustom("italic",'italic')
})
document.getElementById('underline').addEventListener('click',()=>{
    setAttributeCustom("underline","underline")
})