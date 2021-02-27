$(document).on(typeof Turbolinks === 'undefined' ? 'ready' : 'turbolinks:load', function() {
  let editor, updatedJson;
  $('.administrate-jsoneditor').each(function(index) {

    if ($(this).querySelectorAll(".jsoneditor").length > 0) {
      return;
    }

    let $current = $(this).find("textarea");

    let options = {
      onChange: function () {
        try {
          updatedJson = editor.get();
        } catch (err) {
          console.log(err);
        }

        $current.val(JSON.stringify(updatedJson));
      },
      onError: function(err) {
        alert(err.toString());
      },
      navigationBar: false,
      search: false,
      enableSort: false,
      enableTransform: false,
      mode: 'tree',
      modes: ['text', 'tree'],
    };

    let editor = new JSONEditor(this, options);

    editor.set(JSON.parse($current.val()));
  });
});
