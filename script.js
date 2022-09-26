
    console.log("yo");
    const notepadbox = document.querySelector('.notepadbox')
    const notepad = document.querySelector('.notepad')
    const newpad = document.querySelector('.addnewpad');
    const deletebtn = document.querySelector('.deletebtn')
newpad.addEventListener('click', function() {
   addNotepad();
})
const addbtn = document.querySelector('.fa-solid');
addbtn.addEventListener('click', function() {
    addNotepad();
})

function addNotepad() {
    const newNote = document.createElement('div');
    newNote.classList = "notebox";
    newNote.innerHTML = `
   <div class="btn"> <button class="delete-btn">x</button><button class="copybtn"><i class="fa-regular fa-clipboard"></i></button>
   </div>
    <textarea class="textarea"/></textarea>`;

    newNote.querySelector('.delete-btn').addEventListener(
        "click",
        function() {
            newNote.remove();
        }
    )
    notepadbox.appendChild(newNote);
document.querySelector('.copybtn').onclick = function() {
    document.querySelector('.textarea').select();
    document.execCommand('copy');
}

document.querySelector('.b').onclick = function() {
    document.querySelector('.textarea').style.fontWeight = "bold";
}
document.querySelector('.u').onclick = function() {
    document.querySelector('.textarea').style.textDecoration = "underline";
}
   
}
