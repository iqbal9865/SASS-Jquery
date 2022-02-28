
  $(document).ready(function () {
    $(".project-imgpopup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });  
    $('.counter').counterUp();
  });