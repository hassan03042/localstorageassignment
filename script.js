// //set item
// //get item
// //remove item
// //clear

// //local storage hamesha string mai record save kerta hai

// //set item record add kerta hai

// //                    👇key hai         👇value hai
// localStorage.setItem("email", "muhammadhassan0692@gmail.com")

// //get item key ko get kerkay value daidaita hai (get data from local storage)
// var email = localStorage.getItem("email")


// //array ya object ko local storage mai store kerna without string

// //JSON.stringify() kay methhod say string ko array ya object mai store kersaktay hain
// var todos = ["Fajr", "Zuhr", "Asr", "Maghrib", "Isha"];
// var todoString = JSON.stringify(todos);
// localStorage.setItem("todo", todoString);
// console.log(typeof todoString); // string

// var todo = localStorage.getItem("todo")

// //string say phirse array/object mai kernay kayliye JSON.parse()
// var todoArray = JSON.parse(todo)
// console.log( typeof todoArray); // object

var fullName =  document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var user_email = document.getElementById('user_email');
var logincontainer = document.getElementById('login_container');
var homecontainer = document.getElementById('home_container');
var note = document.getElementById('note');
var subject = document.getElementById('subject');



function loginuser() {
    if (!fullName.value || !email.value || !password.value) 
    return alert ('Please Enter The Information');

    localStorage.setItem('userName', fullName.value)
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('subject', subject.value);
    checkisuserlogin()

}   

function checkisuserlogin() {
    var email = localStorage.getItem('email');
    var name = localStorage.getItem('userName');
    if (email) {
        logincontainer.style.display = 'none';
       homecontainer.style.display = 'block';
       user_email.innerHTML = name;
    }
    else{
        logincontainer.style.display = 'grid';
       homecontainer.style.display = 'none';
    }
}

checkisuserlogin();


function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    checkisuserlogin()
}

function submitnote() {
    var email = localStorage.getItem("email");

    var obj = {
        email : email,
        note : note.value,
        subject : subject.value
    };

    saveValueToLocalStorage(obj);
    note.value = "";
}

function saveValueToLocalStorage(obj){
    var notes = localStorage.getItem("notes");

    if (notes){
        notes = JSON.parse(notes);
        notes.push(obj);
        localStorage.setItem ("notes" , JSON.stringify(notes));

    }else {
        notes = [obj];
        localStorage.setItem ("notes" , JSON.stringify(notes));
    }

    displayusernotes()
}

function displayusernotes() {
    var notes = localStorage.getItem ('notes');
    var list = document.getElementById('list');
    console.log(subject.value);
    list.innerHTML = "";
    
    if (notes) {
        notes = JSON.parse(notes);
        notes.forEach(function (data, ind) {
            var lielement = ` <li style="border:2px solid rgb(198, 198, 198); padding: 7px; margin:10px">
         ${data.note}
         <p>${data.email}</p>
         <p class='subjectLi' >${data.subject}</p>
        </li>`
        list.innerHTML += lielement;
        });
    }
}

displayusernotes()


function loginuser() {
    if (!fullName.value || !email.value || !password.value) 
        return alert ('Please Enter The Information');

    var existingEmail = localStorage.getItem('email');
    if (existingEmail && existingEmail !== email.value) {
        // Clear saved notes only when a new user signs up with a different email
        localStorage.removeItem(existingEmail + '_notes');
    }

    localStorage.setItem('userName', fullName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('subject', subject.value);

    checkisuserlogin();
}

function submitnote() {
    var email = localStorage.getItem('email');

    var obj = {
        email: email,
        note: note.value,
        subject: subject.value
    };

    saveValueToLocalStorage(obj);
    note.value = "";
}

function saveValueToLocalStorage(obj) {
    var email = localStorage.getItem('email');
    var notesKey = email + '_notes';
    var notes = localStorage.getItem(notesKey);

    if (notes) {
        notes = JSON.parse(notes);
        notes.push(obj);
        localStorage.setItem(notesKey, JSON.stringify(notes));
    } else {
        notes = [obj];
        localStorage.setItem(notesKey, JSON.stringify(notes));
    }

    displayusernotes();
}

function displayusernotes() {
    var email = localStorage.getItem('email');
    var notesKey = email + '_notes';
    var notes = localStorage.getItem(notesKey);
    var list = document.getElementById('list');
    list.innerHTML = "";

    if (notes) {
        notes = JSON.parse(notes);
        notes.forEach(function(data, ind) {
            var lielement = ` <li style="border:2px solid rgb(198, 198, 198); padding: 7px; margin:10px">
             ${data.note}
             <p>${data.email}</p>
             <p class='subjectLi'>${data.subject}</p>
            </li>`;
            list.innerHTML += lielement;
        });
    }
}

function checkisuserlogin() {
    var email = localStorage.getItem('email');
    var name = localStorage.getItem('userName');
    if (email) {
        logincontainer.style.display = 'none';
        homecontainer.style.display = 'block';
        user_email.innerHTML = name;
        displayusernotes();
    } else {
        logincontainer.style.display = 'grid';
        homecontainer.style.display = 'none';
    }
}

checkisuserlogin();


function submitnote() {
    var noteText = note.value.trim(); // Trim any leading/trailing whitespace
    if (noteText === "") {
        alert("Please add a note before saving.");
        return; // Exit the function if textarea is empty
    }

    var email = localStorage.getItem('email');

    var obj = {
        email: email,
        note: noteText,
        subject: subject.value
    };

    saveValueToLocalStorage(obj);
    note.value = "";
}
