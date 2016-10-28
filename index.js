(function() {

  function newQuestion() {
    $("#add-edit").slideDown("slow");
  }

  function cancelAddEdit() {
      $("#add-edit").slideUp();
      $("#new-text").val("");
  }

  function addListItem() {
    var text = $("#new-text").val();

    $("#questions-list").append('<li class="list-group-item">' +
    '<span class="badge pull-left col-xs-1">?</span>' + text +
    '<span><a href="#" class="col-xs-offset-7">Edit</a></span>' +
    '<span class="delete glyphicon glyphicon-trash pull-right" aria-hidden="true"><a href="#"></a></span></li>');
    $("#add-edit").slideUp();
    $("#new-text").val("");
  }

  function removeListItem() {
    $(this).parent().remove();
  }

  function editQuestion() {
    var text = $(this:first-child).val();

    $('.editable').attr('contenteditable', 'true');
    $('#new-text').append(text);
    newQuestion();
    $("new-text").val("")

  }

  $(document).ready(function() {
      // $('div').fadeIn('slow');
      $("#add").on('click', addListItem);

      $(".delete").on('click', removeListItem);

      $(document).on('click', '.delete', removeListItem);

      $("#new-question").on('click', newQuestion);

      $(".edit").on('click', editQuestion);

      $("#cancel").on('click', cancelAddEdit);

      // $("#questions-list").sortable();
      // $("#questions-list").disableSelection();
  });
})();
