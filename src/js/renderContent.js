
// Array mit Dateinamen der img´s
let content = [
    "Property 1=alaska-810433_1280.jpg-2.png",
    "Property 1=anime-8788959_1280.jpg-2.png",
    "Property 1=atmosphere-8752835_1280.png-2.png",
    "Property 1=blue-tit-8521052_1280.jpg-2.png",
    "Property 1=hurricane-92968_1280.jpg-2.png",
    "Property 1=lake-2896379_1280.jpg-2.png",
    "Property 1=moorente-8783210_1280.jpg-2.png",
    "Property 1=sea-2563389_1280.jpg-2.png",
    "Property 1=snow-bunting-6781122_1280.jpg-2.png",
    "Property 1=snow-leopard-cubs-8039138_1280.jpg-2.png",
    "Property 1=travel-8785493_1280.jpg-2.png",
    "Property 1=winter-1675197_1280.jpg-2.png"
]

// Array mit alternativ Texten
let content_alt = [
    "img_of_alaska",
    "img_anime_city",
    "img_atmosphere",
    "img_blue_bird",
    "img_hurricane",
    "img_lake",
    "img_moorente",
    "img_sea",
    "img_snow_bunting",
    "img_snow_leopard",
    "img_mountain",
    "img_winter_tree"
]

function renderContent() {
    let maxRowItems = 7;
    let rowsDone = 0;
    let newRow = false;
    let currentClassName = "";
    let rows = 0;
    let rest = 0;
    let currentId = "";

    document.getElementById("content_area").innerHTML = ""; // clear content_area

    // ermittle, wie viele Reihen benötigt werden und wie viele items in der letzten Reihe liegen
    if (content.length > maxRowItems) {
        rows = Math.floor(content.length / maxRowItems); // wie oft 7 reinpasst
        rest = content.length % maxRowItems;
    }

    // erstellt einzelnd die Reihen in denen der content dargestellt wird! 
    for (let i = 0; i < content.length; i++) {
        if (newRow || i == 0) // neue Reihe, Container erzeugen
        {
            currentClassName = "content_row";
            // letzter Reihe zusätzliche Klasse zuweisen
            if (rowsDone == rows) {
                document.getElementById("content_area").innerHTML += lastContainerHtml(currentClassName, rowsDone, rest)
                currentId = currentClassName + rowsDone;
            }
            // neue Reihe erstellen
            else {
                document.getElementById("content_area").innerHTML += containerHtml(currentClassName, rowsDone)
                currentId = currentClassName + rowsDone;
            }
            newRow = false;
        }

        if (rowsDone == rows) // letzte Reihe rendern
        {
            // dann auf .lastRow css zugreifen!
            currentClassName = "content_row lastRow" + (7 - rest);
            document.getElementById(currentId).innerHTML += contentHtml(content[i], content_alt[i]);
        }
        else if (rowsDone < rows) // die ersten Reihen rendern
        {
            document.getElementById(currentId).innerHTML += contentHtml(content[i], content_alt[i]);
        }

        if ((i + 1) % maxRowItems === 0) // letztes item dieser Reihe erfassen
        {
            rowsDone++;
            newRow = true;
        }
    }
}

// returned den contentHTML-Code
function contentHtml(img, alt) {
    return ` 
    <img src="../assets/img/content/${img}" alt="${alt}">
    `
}
// returned einen <div> Container, in den der Content geladen wird
function containerHtml(className, num) {
    return `
    <div class="${className}" id="${className + num}"> 

    </div>
    `
}
// returned den letzten Container mit angepasster Anzahl, damit dieser zentriert bleibt
function lastContainerHtml(className, num, restNum) {
    return `
    <div class="${className} lastRow${restNum}" id="${className + num}"> 

    </div>
    `
}


// Anschließend Displays erzeugen 

// Anschließend die button logiken implementieren