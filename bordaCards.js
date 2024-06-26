document.addEventListener("DOMContentLoaded", function () {
    function loadBorder(headers) {
        headers.forEach(header => {
            const bLeft = document.createElement("img");
            const bRight = document.createElement("img");
            const bTop = document.createElement("img");

            bLeft.src = "images/hb-l.png";
            bRight.src = "images/hb-r.png";
            bTop.src = "images/hb-t.png";

            bLeft.classList.add("card-border-bl");
            bRight.classList.add("card-border-br");
            bTop.classList.add("card-border-bt");

            header.insertBefore(bTop, header.firstChild);
            header.insertBefore(bRight, header.firstChild);
            header.insertBefore(bLeft, header.firstChild);
        });
    }

    loadBorder(document.querySelectorAll('.card-header'));
});

// Script feito pelo Horonoa