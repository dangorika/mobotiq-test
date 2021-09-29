popup({ button: ".js-popup-open" });

export default function popup(props) {
  $(props.button).each(function() {
    openPopup(this);
  });


  $(".js-popup-close").on("click", function(e) {
    e.preventDefault();

    var popup = $(this).closest(".popup");
    popup.fadeOut(200);
  });

  function openPopup(link) {
    $(link).on("click", function(e) {
        e.preventDefault();

        var targetPopupData = $(link).data("target-popup");
        var targetPopup = $('[data-popup="' + targetPopupData + '"]');

        targetPopup.fadeIn(100);
    });
  }
}
