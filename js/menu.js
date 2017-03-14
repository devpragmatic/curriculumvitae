function onScroll(event) {
    var scrollPos = $("#content").scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (($('#content').scrollTop() + refElement.position().top) <= scrollPos && $('#content').scrollTop() + refElement.position().top + refElement.height() > scrollPos) {
            $('#menu a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function () {
    $("#content").on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('#content').off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash;
        $target = $(target);
        var top = $('#content').scrollTop() + $target.position().top +2;
        $('#content').animate({
            'scrollTop': top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $("#content").on("scroll", onScroll);
        });
    });
    onScroll();
});
