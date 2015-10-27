//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('#event0').popover({
    content: "O que é o Unix, como surgiu, e o que foi desenvolvido a partir dele.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event1').popover({
    content: "Aprende como podes contribuir para o mundo Linux a partir do testemunho de um colega teu.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event2').popover({
    content: "Lanche para ajudar a digerir tanta informação!",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event3').popover({
    content: "Conheces uma ferramenta útil e gostavas de partilhá-la com os teus colegas? Esta é a tua oportunidade! Fala connosco e podes apresentar a tua ferramenta neste espaço.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event4').popover({
    content: "Conheces uma ferramenta útil e gostavas de partilhá-la com os teus colegas? Esta é a tua oportunidade! Fala connosco e podes apresentar a tua ferramenta neste espaço.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event5').popover({
    content: "Ementa a definir",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event6').popover({
    content: "Para ti isto é tudo a mesma coisa? Nem sabes o que é? Vem perceber a diferença e como estes conceitos mudaram o mundo das aplicações livres.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event7').popover({
    content: "Conheces uma ferramenta útil e gostavas de partilhá-la com os teus colegas? Esta é a tua oportunidade! Fala connosco e podes apresentar a tua ferramenta neste espaço.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event8').popover({
    content: "Painel onde poderás ouvir os teus colegas a discutir sobre qual a melhor distribuição de Linux, e as suas principais diferenças.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});
$('#event9').popover({
    content: "Tudo o que é bom acaba. Junta-te a nós para acabar este evento em grande.",
    placement: "bottom",
    trigger: "hover",
    viewport: "#events"
});