$(function() {
  function buildHTML(comment) {
    var html = `<div class="comment__body__index">
                  <p class="comment__body__index__text">
                    <strong>${comment.user}: </strong>
                    ${comment.comment}
                  </p>
                </div>`
    return html;
  }


  $('#new_comment').on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.comment__body').append(html)
      $('#com').val('')
      $('#submit__btn').prop("disabled", false);
    })
    .fail(function() {
      alert('error');
    })
  });
});

