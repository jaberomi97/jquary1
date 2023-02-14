$(function (){
    $(window).on('load', function () {
        // $('#preloader_container').slideUp(1000);
    })
    $(document).on('mousemove',function (e) {
        $('#curser').css ({
            left: e.pageX+ 'px',
            top: e.pageY+'px',
        })
    })
})