
const themeSwitcher = document.getElementById('themeSwitch');
themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('dark'); 
    var x = 1;
    if (x != 1) {
        document.getElementById("themeSwitch").value = "Dark Theme";
        value == 1
    } else {
        document.getElementById("themeSwitch").value = "Light Theme";
        x == 0
    }
})

function disappear() {
    document.getElementById('notes').value = '';
    var x = document.getElementById("cancel");
    var y = document.getElementById("save");
    var z = document.getElementById("notes");
    if (x.style.display === "none") {
        x.style.display = "block";
        z.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function newElement() {
    var notesArray = [
        {title:"note one", body:"some text 1"},
        {title:"note two", body:"some text 12"}
    ]

    var li = document.createElement("li");
    var inputValue = document.getElementById("notes").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write note down!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById('notes').value = '';

}
