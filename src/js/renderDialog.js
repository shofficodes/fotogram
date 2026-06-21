// render dialog_area
function renderDialog() {
    for (let i = 0; i < content.length; i++) {
        document.getElementById("dialog_area").innerHTML += dialogHtml(i);
    }
}

// HTML code for dialogs
function dialogHtml(i) {
    return `
    <dialog aria-labelledby="dialogTitle" aria-describedby="dialogDescribtion" id="${content_alt[i]}_dialog" onkeyup="if(event.key === 'ArrowLeft') {arrowButton(${i}, 'backward')}; if(event.key === 'ArrowRight') {arrowButton(${i}, 'forward')}">
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

function openDialog(dialog_tag) {
    dialog_ref = document.getElementById(dialog_tag);
    dialog_ref.showModal();
}

function closeDialog() {
    dialog_ref.close();
}

// logic for arrow-keys in dialog
function arrowButton(i, direction) {
    // right arrow key
    if (direction == "forward") {
        // jump from last to first item
        if (i == (content.length - 1)) {
            closeDialog();
            openDialog(content_alt[0] + "_dialog");
        }
        // load next item
        else {
            closeDialog();
            openDialog(content_alt[i + 1] + "_dialog");
        }
    }
    // left arrow key
    else if (direction == "backward") {
        // jump from first to last item
        if (i == 0) {
            closeDialog();
            openDialog(content_alt[content.length - 1] + "_dialog");
        }
        // call previous item
        else {
            closeDialog();
            openDialog(content_alt[i - 1] + "_dialog");
        }
    }
}

// close dialog by clicking outside the box
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