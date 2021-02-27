$(document).on(typeof Turbolinks === 'undefined' ? 'ready' : 'turbolinks:load', function() {
  let viewer;
  $('.administrate-jsoneditor-viewer').each(function (index) {

    if ($(this).find(".jsoneditor").length > 0) {
      return;
    }

    let $current = $(this).find("textarea");

    let options = {
      navigationBar: false,
      search: false,
      enableSort: false,
      enableTransform: false,
      mode: 'view',
      modes: [],
    };

    let viewer = new JSONEditor(this, options);

    viewer.set(JSON.parse($current.val()));
  });
});
