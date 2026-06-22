let currentIndex = 0;

function renderDialog(alt) {
    for (let i = 0; i < content.length; i++) {
        if (String(contentAlt[i]).trim() === alt.alt || String(contentAlt[i]).trim() === alt) {
            document.getElementById("content_dialog").innerHTML = dialogHtml(i);
            currentIndex = i;
            document.getElementById("content_dialog").focus();
            break;
        }
    }
}

function openDialog(alt) {
    renderDialog(alt);
    dialog_ref = document.getElementById("content_dialog");
    dialog_ref.showModal();
}

function closeDialog() {
    dialog_ref.close();
}

function arrowButton(direction) {
    if (direction == "forward") {
        if (currentIndex == (content.length - 1)) {
            renderDialog(contentAlt[0]);
        }
        else {
            renderDialog(contentAlt[currentIndex + 1]);
        }
    }
    else if (direction == "backward") {
        if (currentIndex == 0) {
            renderDialog(contentAlt[content.length - 1]);
        }
        else {
            renderDialog(contentAlt[currentIndex - 1]);
        }
    }
}

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

function trackArrowKeys(event) {
    if (event.key === 'ArrowLeft') {
        arrowButton('backward')
    }
    else if (event.key === 'ArrowRight') {
        arrowButton('forward')
    }
}

document.addEventListener("keyup", (event) => {
    const dialog = document.getElementById("content_dialog");
    if (dialog.open) {
        trackArrowKeys(event.code);
    }
});
