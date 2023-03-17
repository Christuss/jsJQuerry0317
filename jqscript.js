$(function init() {
    const LIST = [{
        nev: "Béla",
        val1: "igen",
        val2: "nem"
    },
    {
        nev: "Viktor",
        val1: "igen",
        val2: "nem"
    },
    {
        nev: "Szabolcs",
        val1: "igen",
        val2: "nem"
    }];

    osszeallito(LIST);

});

function osszeallito(LIST) {
    let szoveg = "";    
    const BODY = $("body").eq(0);
    szoveg += "<table>";
    szoveg += "<tr>";
    szoveg += "<th>név</th>";
    szoveg += "<th>valami1</th>";
    szoveg += "<th>valami2</th>";
    szoveg += "</tr>";
    for (let index = 0; index < LIST.length; index++) {
        szoveg += "<tr>";
        szoveg += "<td>" + LIST[index].nev + "</td>";
        szoveg += "<td>" + LIST[index].val1 + "</td>";
        szoveg += "<td>" + LIST[index].val2 + "</td>";
        szoveg += "</tr>";
    }
    szoveg += "</table>";

    BODY.html(szoveg)
}
