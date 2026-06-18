// rendert die dialog_area
function renderDialog() {
    for (let i = 0; i < content.length; i++) {
        document.getElementById("dialog_area").innerHTML += dialogHtml(i);
    }
}

// HTML Code für die Dialoge
function dialogHtml(i) {
    return `
    <dialog aria-labelledby="dialogTitle" aria-describedby="dialogDescribtion" id="${content_alt[i]}_dialog">
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
                <img src="../assets/img/content/${content[i]}" alt="${content_alt[i]}" id="${content_alt}">
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

// öffnet den Dialog
function openDialog(dialog_tag) {
    dialog_ref = document.getElementById(dialog_tag);
    dialog_ref.showModal();
}
// schließt den Dialog
function closeDialog() {
    dialog_ref.close();
}

// Logik für die Pfeiltasten im Dialog
function arrowButton(i, direction) {
    // rechte Pfeiltaste Logik
    if (direction == "forward") {
        // vom letzten item zum ersten springen
        if (i == (content.length - 1)) {
            closeDialog();
            openDialog(content_alt[0] + "_dialog");
        }
        // nächstes item aufrufen
        else {
            closeDialog();
            openDialog(content_alt[i + 1] + "_dialog");
        }
    }
    // linke Pfeiltaste Logik
    else if (direction == "backward") {
        // vom ersten item zum letzten springen
        if (i == 0) {
            closeDialog();
            openDialog(content_alt[content.length - 1] + "_dialog");
        }
        // vorheriges item aufrufen
        else {
            closeDialog();
            openDialog(content_alt[i - 1] + "_dialog");
        }
    }
}

// Logik für den schließenden Dialog sobald man außerhalb der Box Clickt
function enableDialogOutsideClickClose(i) {
    const dialogs = document.querySelectorAll("dialog");

    dialogs.forEach((dialog) => {
        dialog.addEventListener("click", function (event) {
            const rect = dialog.getBoundingClientRect();

            const isInDialog =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            if (!isInDialog) {
                dialog.close();
            }
        });
    });
}