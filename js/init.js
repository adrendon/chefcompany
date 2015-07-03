jQuery(function() {

  $(document).ready(function() {

    //tabs

    (function ($) {
      $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

      $('.tab ul.tabs li a').click(function (g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabsItem').not('div.tabsItem:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabsItem:eq(' + index + ')').slideDown();

        g.preventDefault();
      } );
    })(jQuery);

    //fecha nacimiento

    $('.datePicker').datepicker({
      showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
      constrainInput: false
    });

    //formulario

    $("#ok").hide();
    $("#form").validate({
        rules: {
            name: { required: true, minlength: 2},
            anos: { required: true},
        },
        messages: {
            name: "Debe introducir su nombre.",
            anos : "Debe introducir solo números.",
        },
        submitHandler: function(form){
            var dataString = 'name='+$('#name').val()+'...';
            $.ajax({
                type: "POST",
                url:"send.php",
                data: dataString,
                success: function(data){
                    $("#ok").html(data);
                    $("#ok").show();
                    $("#form").hide();
                }
            });
        }
    });

  });

});