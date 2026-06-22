function contentHtml(img, alt) {
    return ` 
    <button type="button" onclick="openDialog(${alt})" onkeyup="openWithEnter()"}">
        <img src="../assets/img/content/${img}" alt="${alt}" id="${alt}" >
    </button> 
    `
}

function dialogHtml(i) {
    return `
        ${dialogHeader(i)}
        <section>
            <img src="../assets/img/content/${content[i]}" alt="${contentAlt[i]}" id="${contentAlt}">
        </section>
        ${dialogFooter(i)}
    `
}

function dialogHeader(i) {
    return `
        <header class="dialog_header">
            <h2 id="dialogTitle">
                ${content[i]}
            </h2>
            <button onclick="closeDialog()">
                <img class="close_default" src="../assets/img/navigation/close_default.svg" alt="close_button">
                <img class="close_hover" src="../assets/img/navigation/close_hover.svg" alt="close_button_with_hover_effect">
                <img class="close_click" src="../assets/img/navigation/close_while_pressing.svg" alt="close_button_with_click_effect">
            </button>
        </header>
    `
}

function dialogFooter(i) {
    return `
        <footer class="dialog_footer">
            <button class="leftArrowButton" id="leftArrowButton" onclick="arrowButton('backward')">
                <img class="leftImg" src="../assets/img/navigation/arrow_default.svg" alt="leftArrowButton">
                <img class="leftImgHover" src="../assets/img/navigation/arrow_hover.svg" alt="leftArrowButton">
            </button>

            <p>${i + 1}/${content.length}</p>
            <button class="rightArrowButton" id="rightArrowButton" onclick="arrowButton('forward')">
                <img class="rightImg" src="../assets/img/navigation/arrow_default.svg" alt="rightArrowButton">
                <img class="rightImgHover" src="../assets/img/navigation/arrow_hover.svg" alt="rightArrowButton">
            </button>
        </footer>
    `
}