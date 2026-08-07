/* ---------------------------------
   Nákup 2.1
   Funkce aplikace
----------------------------------*/


let nakupy = JSON.parse(
    localStorage.getItem("nakupy")
) || [];


// dnešní datum

document.getElementById("datum").value =
    new Date().toISOString().split("T")[0];



// uložení nákupu

document
.getElementById("ulozit")
.addEventListener("click", function () {


    const datum =
        document.getElementById("datum").value;

    const osoba =
        document.getElementById("osoba").value;

    const castka =
        Number(document.getElementById("castka").value);

    const poznamka =
        document.getElementById("poznamka").value;



    if (!castka) {
        alert("Zadej částku");
        return;
    }



    const novyNakup = {

        id: Date.now(),

        datum,
        osoba,
        castka,
        poznamka,
        jmeno

    };



    nakupy.push(novyNakup);



    localStorage.setItem(
        "nakupy",
        JSON.stringify(nakupy)
    );



    zobrazNakupy();



    document.getElementById("castka").value = "";
    document.getElementById("poznamka").value = "";

});




// zobrazení tabulky

function zobrazNakupy() {


    const tabulka =
        document.getElementById("tabulka");


    tabulka.innerHTML = "";



    nakupy.forEach(function(nakup) {


        const radek =
            document.createElement("tr");



        radek.innerHTML = `

        <td>${nakup.datum}</td>

        <td>${nakup.osoba}</td>

        <td>${nakup.castka} Kč</td>

        <td>${nakup.poznamka}</td>

        <td>
            <button onclick="smazat(${nakup.id})">
            Smazat
            </button>
        </td>

        `;


        tabulka.appendChild(radek);


    });


}




// mazání

function smazat(id) {


    nakupy =
        nakupy.filter(
            n => n.id !== id
        );


    localStorage.setItem(
        "nakupy",
        JSON.stringify(nakupy)
    );


    zobrazNakupy();

}



// spuštění po načtení

zobrazNakupy();
