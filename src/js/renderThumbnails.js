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
let contentAlt = [
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

function renderThumbnails() {
    document.getElementById("content_area").innerHTML = "";
    createRow();
}

function createRow() {
    for (let i = 0; i < content.length; i++) {
        document.getElementById("content_area").innerHTML += contentHtml(content[i], contentAlt[i]);
    }
}

function openWithEnter(event) {
    if (event.key === 'Enter') {
        openDialog('content_dialog')
    }
}