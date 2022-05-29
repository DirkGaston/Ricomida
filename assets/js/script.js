$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
    $("h4").dblclick(function () {
        $(this).css({
            "color": "red",
        });

    });
    $(".card-title").click(function () {
        $(".card-text").toggle();
        $(".card img").toggle();
    });
});



// Tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})