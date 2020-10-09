// console.log("Js is Working.");
// localStorage.setItem('notes', ['This is note'])
shownotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    // console.log("Add btn clicked.")
    let addText = document.getElementById('addText');
    let addTitle = document.getElementById('title')
    // console.log(title);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title : addTitle.value,
        text : addText.value
    }
    if (addText.value !=null && addText.value !='' && addTitle.value !=null && addTitle.value !='' ) {
        notesObj.push(myObj);
        // console.log(JSON.stringify(notesObj));
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addText.value = '';
        addTitle.value = '';
        // console.log(notesObj);
        shownotes();
        
    }
    else {
        if (addTitle.value ==null || addTitle.value =='') {
            alert('Please enter note title')
        } else {
            alert('Please enter note')
        }
    }
});
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    let oldNotes = document.getElementById('oldNotes');
    
    notesObj.forEach(function (element,index) {
        html += `<div class="noteBox">
        <h3>${element.title}</h3>
        <p>${element.text}</p>
            <button class="btn" onclick=deleteNote(${index}) id="deleteBtn">Delete</button>
        </div>`
        
    });
    if (notesObj.length!=0) {
        oldNotes.innerHTML = html;
        
    } else {
        // console.log("NotesObj 0");
        oldNotes.innerHTML = 'Nothing to show. Please add notes to see here!'
    }
    
}
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    // console.log('delete ' + index);
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();
}
let input = document.getElementById('inputText');
input.addEventListener('input', function () {
    let inputVal = input.value;
    // console.log("fired",inputVal);
    let noteText = document.getElementsByClassName('noteBox');
    Array.from(noteText).forEach(function (element) {
        
        let mainText = element.innerText;
        if (mainText.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})

