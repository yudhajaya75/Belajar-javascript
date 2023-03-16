document.getElementById("byid").innerHTML =
    "this is example of getElementById"

const element = document.getElementsByTagName("p");
document.getElementById("bytagname").innerHTML =
    "This is example of get ElementByTag" + element[0]
        .innerHTML;

const className = document.getElementsByClassName("intro");
document.getElementById("byclassname").innerHTML =
    className[1].innerHTML + "Get ElementByClass"

console.log(element);