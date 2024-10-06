const color = document.getElementById('r');

function hello() {
    let x = Math.ceil(Math.random() * 10 + 1);
    var it = 0;

    console.log(x);
    while (it < 20) {
        it++;
        if (it === x) {
            color.style.backgroundColor = "green";
            check();
            break;
        }
    }
}

var done = false;

function pause() {
    done = true;
}

function check() {
    if (color.style.backgroundColor === "green") {
        var i = 0;
        var t = document.getElementById('p');
        console.log("reached");
        updateParagraph(t, i);
    }
}

function updateParagraph(element, count) {
    if (!done && count<=1000) {
        element.innerHTML = count;
        count++;
        setTimeout(()=>{
            updateParagraph(element, count);
        }, 10);
    } else {
        console.log("Paused");
    }
}

setTimeout(hello, 5000);
