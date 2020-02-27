//Ex01
let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let html = "";
for ( let i in array) {
    html += "row" + i + "<br/>";
    for (let j in array[i]) {
        html += j +"<br/>"
    }
}
document.getElementById("result01").innerHTML = html;

//Ex02
let array02 = ['c', 's', 'c', '2', '6', '1'];
array02.reverse();
document.getElementById("result02").innerHTML = array02.join("");

//Ex03
let array03 = [['c', 's', 'c', 2, 6, 1], ["alo", 3, 4, 5, 6, "oh"],["my", "god", "code", 4, 6, 7]];
let count = 0;
for ( let i in array03) {
    for (let j in array03[i]) {
        if (typeof array03[i][j] === "number") {
            count++;
        }
    }
}
document.getElementById("result03").innerHTML = "Số ký tự số là: " + count;

//Ex04
function showMess04() {
    let str = document.getElementById("value04").value;
    let array04 = str.split(" ");
    document.getElementById("result04").innerHTML = "Số từ là: " + array04.length;
}

//Ex05
function showMess05() {
    let array05 = (document.getElementById("value05").value).split();
    let array06 = (document.getElementById("value06").value).split();
    if (array05[0] === array06[0]) {
        document.getElementById("result05").innerHTML = "Hai chuỗi giống nhau";
    } else {
        document.getElementById("result05").innerHTML = "Hai chuỗi không giống nhau";
    }
}

//Ex06
function showMess06() {
    let symbol01 = document.getElementById("value08").value;
    let array = (document.getElementById("value07").value).split(symbol01);
    let symbol02 = document.getElementById("value09").value;
    document.getElementById("result06").innerHTML = array.join(symbol02);
}