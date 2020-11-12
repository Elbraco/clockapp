

$('#more-less a').click(function () {
    console.log('cest moi');
    $('.item').toggleClass('block');
    $('#main-quotes').toggleClass('none')
    $('.location').toggleClass('test1')


    if ($('#more').text() === 'More') {

        $('#more').text('Less')
        $('#arrow-down').attr('src', 'assets/desktop/icon-arrow-up.svg')


    } else if ($('#more').text() === 'Less') {

        $('#more').text('More')
        $('#arrow-down').attr('src', 'assets/desktop/icon-arrow-down.svg')

    }

});
