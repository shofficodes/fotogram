// render dialog_area
function renderDialog() {
    for (let i = 0; i < content.length; i++) {
        document.getElementById("dialog_area").innerHTML += dialogHtml(i);
    }
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
            openDialog(contentAlt[0] + "_dialog");
        }
        // load next item
        else {
            closeDialog();
            openDialog(contentAlt[i + 1] + "_dialog");
        }
    }
    // left arrow key
    else if (direction == "backward") {
        // jump from first to last item
        if (i == 0) {
            closeDialog();
            openDialog(contentAlt[content.length - 1] + "_dialog");
        }
        // call previous item
        else {
            closeDialog();
            openDialog(contentAlt[i - 1] + "_dialog");
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