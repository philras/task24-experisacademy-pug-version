

const content = document.querySelector('.content');
const sidebar = document.querySelector('#sidebar').getBoundingClientRect();

content.style.marginLeft = `${sidebar.width}px`;

$(document).ready(function() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
});

