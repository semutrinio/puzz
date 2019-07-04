var row, col;
var numArray, cellsArray, length, randomSelect;
var cell_00, cell_01, cell_02, cell_03, cell_10, cell_11, cell_12,
    cell_13, cell_20, cell_21, cell_22, cell_23, cell_30, cell_31,
    cell_32, cell_33;
 
function myFunction() {
    numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    length = numArray.length;
    cellsArray = [cell_00, cell_01, cell_02, cell_03, cell_10, cell_11, cell_12,
        cell_13, cell_20, cell_21, cell_22, cell_23, cell_30, cell_31,
        cell_32, cell_33];
    numberTable();
}
 
function numberTable() {
    cell_00 = document.getElementById("cell_0,0");
    cell_01 = document.getElementById("cell_0,1");
    cell_02 = document.getElementById("cell_0,2");
    cell_03 = document.getElementById("cell_0,3");
    cell_10 = document.getElementById("cell_1,0");
    cell_11 = document.getElementById("cell_1,1");
    cell_12 = document.getElementById("cell_1,2");
    cell_13 = document.getElementById("cell_1,3");
    cell_20 = document.getElementById("cell_2,0");
    cell_21 = document.getElementById("cell_2,1");
    cell_22 = document.getElementById("cell_2,2");
    cell_23 = document.getElementById("cell_2,3");
    cell_30 = document.getElementById("cell_3,0");
    cell_31 = document.getElementById("cell_3,1");
    cell_32 = document.getElementById("cell_3,2");
    cell_33 = document.getElementById("cell_3,3");
 
    cell_00.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_01.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_02.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_03.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_10.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_11.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_12.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_13.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_20.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_21.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_22.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_23.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_30.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_31.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_32.addEventListener("click", function() {insertTable(numArray);}, false);
    cell_33.addEventListener("click", function() {insertTable();}, false);
}
 
function insertTable(numArray) {
 
    //randomSelect = Math.floor (Math.random() * numArray.length);
 
    for (var i = 0; i <= 15 ; i++ )
        numArray[i] = i;
 
    for (row = 0; row < cellsArray.length; ++row)
    {
        for (col = 0; col < cellsArray.length; ++col);
 
    }
}
 
 
function moveNum() {
    row = 1;
    col = 1;
    var cell = [][];
 
    if (top != -1 && cell[top][col])
        top = row - 1;
    else if (bottom != 4 && cell[bottom][col]
        bottom = row + 1);
    else if (left != -1 && cell[left][row]
        left = col - 1);
    else if (right != -1 && cell[right][row]
        right = col + 1);
 
}
 
 
window.addEventListener("load", myFunction, false);