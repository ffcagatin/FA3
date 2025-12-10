function replaceAll() {
    let str = document.getElementById("txtInput1").value;
    console.log(str);

    let newStr = str.replaceAll(' ','');
    document.getElementById("txtResult1").innerHTML = newStr;

}

function countCharacters() {
    let input = document.getElementById("txtInput2").value;
    let trimmed = input.trim();
    let count = trimmed.length;

    document.getElementById("txtResult2").textContent = count;
}