
// Array with img names
let content = [
    "alaska-810433_1280.jpg",
    "hurricane-92968_1280.jpg",
    "snow-bunting-6781122_1280.jpg",
    "anime-8788959_1280.jpg",
    "lake-2896379_1280.jpg",
    "snow-leopard-cubs-8039138_1280.jpg",
    "atmosphere-8752835_1280.png",
    "moorente-8783210_1280.jpg",
    "travel-8785493_1280.jpg",
    "blue-tit-8521052_1280.jpg",
    "sea-2563389_1280.jpg",
    "winter-1675197_1280.jpg"
]

// Array with img alternative names 
let content_alt = [
    "img_of_alaska",
    "img_hurricane",
    "img_snow_bunting",
    "img_anime_city",
    "img_lake",
    "img_snow_leopard",
    "img_atmosphere",
    "img_moorente",
    "img_mountain",
    "img_blue_bird",
    "img_sea",
    "img_winter_tree"
]

// amount of items pro row
let maxRowItems = 7;

// render content 
function renderThumbnails() {
    let rowsDone = 0;
    let newRow = false;
    let currentClassName = "";
    let rows = 0;
    let rest = 0;
    let currentId = "";

    document.getElementById("content_area").innerHTML = ""; // clear content_area

    // get rest amount of items in last row 
    if (content.length > maxRowItems) {
        rows = Math.floor(content.length / maxRowItems); // wie oft 7 reinpasst
        rest = content.length % maxRowItems;
    }

    // create single row with contents
    for (let i = 0; i < content.length; i++) {
        if (newRow || i == 0) // new row, create container
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

        if (rowsDone == rows) // render last row
        {
            // dann auf .lastRow css zugreifen!
            currentClassName = "content_row lastRow" + (7 - rest);
            document.getElementById(currentId).innerHTML += contentHtml(content[i], content_alt[i]);
        }
        else if (rowsDone < rows) // render first rows
        {
            document.getElementById(currentId).innerHTML += contentHtml(content[i], content_alt[i]);
        }

        if ((i + 1) % maxRowItems === 0) // get last item of row
        {
            rowsDone++;
            newRow = true;
        }
    }
}

// return contentHTML-code
function contentHtml(img, alt) {
    return ` 
    <img src="../assets/img/content/${img}" alt="${alt}" id="${alt}" onclick="openDialog('${alt}_dialog')" tabindex="0" onkeyup="if(event.key === 'Enter') {openDialog('${alt}_dialog');}">
    `
}
// returned a new <div> Container for upcoming content
function containerHtml(className, num) {
    if(maxRowItems === 7)
    {
    return `
    <div class="${className}" id="${className + num}"> 

    </div>
    `
    }
    else{
        return `
    <div class="${className} lastRow${maxRowItems}" id="${className + num}"> 

    </div>
    `
    }
}
// returned last container with different lenght for centering content
function lastContainerHtml(className, num, restNum) {
    return `
    <div class="${className} lastRow${restNum}" id="${className + num}"> 

    </div>
    `
}