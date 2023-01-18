showNotes()

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addTxt')
    let addTitle = document.getElementById('addTitle')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = ""
    addTitle.valu=''
    console.log(notesObj);

    showNotes()
})

function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach(function (element, index) {
        html += ` <div class="card mx-2 my-2" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id='${index}'onclick="deleteNote(this.id)" class="btn btn-primary">delete note</button>
        </div>
    </div>`


    });
    let noteselm = document.getElementById(`notes`)
    if (noteselm.length != 0) {
        noteselm.innerHTML = html
    } 
    else {
        noteselm.innerHTML = `nothing to show ! use 'add a note' section above to add notes`

    }
}

// delete note fn

function deleteNote(index) {
    // console.log('m deleting', index);

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes()

}

let search=document.getElementById('searchTxt')
search.addEventListener('input',function(){
   
    let inputVal=search.value;
    //  console.log('input event fired',inputVal);
     letnoteCard=document.getElementsByClassName('noteCard')
     Array.from(noteCard).forEach(function(element){
         let cardTxt=element.getElementsByTagName('p')[0].innerText;
         if(cardTxt.includes(inputVal)){
             element.style.display='block'
         }
         else{
            element.style.display='none'  
         }
     })

})




