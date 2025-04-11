function myFunction() {
    document.getElementById("result").innerHTML =
        document.getElementById("demo").firstChild.nodeValue;
    document.getElementById("result1").innerHTML =
        document.getElementById("result").childNodes[0].nodeValue;
}