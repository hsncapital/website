window.modals = function () {
  function getTelegramModal() {
    return `<div id="telegram-modal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body p-0">
            <button type="button" class="btn close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="content-wrapper">
              <div class="main-text">
                <div class="d-flex justify-content-center mb-3">
                  <div class="telegram-icon"></div>
                </div>
                <div class="h2 text-uppercase mb-0"> Join us on </div>
                <div class="highlight telegram">Telegram</div>
                <a href="https://t.me/hsncaptail" class="text-default btn-link" target="_blank">https://t.me/hsncaptail</a>
              </div>
              <div class="join-us-person-wrapper">
                <div class="join-us-person"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  const obj = {
    renderTelegramModal: function(id) {
      $(id).html(getTelegramModal());
      setTimeout(function() {
        $('#telegram-modal').modal({show: true});
      }, 600);
    }
  };

  return obj;
}();