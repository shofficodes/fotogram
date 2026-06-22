// return contentHTML-code
function contentHtml(img, alt) {
    return ` 
    <img src="../assets/img/content/${img}" alt="${alt}" id="${alt}" onclick="openDialog('${alt}_dialog')" tabindex="0" onkeyup="if(event.key === 'Enter') {openDialog('${alt}_dialog');}">
    `
}

// HTML code for dialogs
function dialogHtml(i) {
    return `
    <dialog aria-labelledby="dialogTitle" aria-describedby="dialogDescribtion" id="${contentAlt[i]}_dialog" onkeyup="if(event.key === 'ArrowLeft') {arrowButton(${i}, 'backward')}; if(event.key === 'ArrowRight') {arrowButton(${i}, 'forward')}">
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

            <section>
                <img src="../assets/img/content/${content[i]}" alt="${contentAlt[i]}" id="${contentAlt}">
            </section>

            <footer class="dialog_footer">
                <button class="leftArrowButton" id="leftArrowButton" aria-label="Close button" onclick="arrowButton(${i}, 'backward')">
                    <img class="leftImg" src="../assets/img/navigation/arrow_default.svg" alt="leftArrowButton">
                    <img class="leftImgHover" src="../assets/img/navigation/arrow_hover.svg" alt="leftArrowButton">
                </button>

                <p>${i + 1}/${content.length}</p>
                <button class="rightArrowButton" id="rightArrowButton" aria-label="Close button" onclick="arrowButton(${i}, 'forward')">
                    <img class="rightImg" src="../assets/img/navigation/arrow_default.svg" alt="rightArrowButton">
                    <img class="rightImgHover" src="../assets/img/navigation/arrow_hover.svg" alt="rightArrowButton">
                </button>
            </footer>
        </dialog>
`
}