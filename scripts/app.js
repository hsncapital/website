window.app = function() {
  const obj = {
    initialize: function(pageId) {
      const header = window.header;
      const contact = window.contact;
      const footer = window.footer;
      const service = window.service;
      const testimonial = window.testimonial;
      const modals = window.modals;

      let tabs = window.constant.NAVIGATION;

      const pageConstants = window.constant.PAGES;
      switch(pageId) {
        case pageConstants.HOME:
          service.renderAllServices('#all-service-container', service.VIEW.DARK);
          service.renderTrainingList('#training-container');
          contact.renderContainer('#contact-container');
          testimonial.renderQuotesHTML('#quotes-container');
          testimonial.triggerQuoteEvents();
          tabs = tabs.filter(tab => tab.id != pageId);
          testimonial.renderAllReviewsHTML('#review-container');
          testimonial.triggerReviewEvents();
          modals.renderTelegramModal('#join-telegram-modal');
          break;
        case pageConstants.ABOUT:
          testimonial.renderAllReviewsHTML('#review-container');
          testimonial.triggerReviewEvents();
          contact.renderContactBox('#contact-box');
          break;
        case pageConstants.TRAINING:
        case pageConstants.TRAINING_L1:
        case pageConstants.TRAINING_L2:
        case pageConstants.JOURNEY_WITH_US:
          testimonial.renderTrainingReviewsHTML('#review-container');
          testimonial.triggerReviewEvents();
          break;
        case pageConstants.EQUITY_CASH:
        case pageConstants.FUTURE_N_OPTION:
        case pageConstants.INDEX_SPECIAL:
        case pageConstants.COMMODITY: 
          service.renderOtherServices('#other-services', pageId, service.VIEW.DEFAULT, true);
          testimonial.renderServiceReviewsHTML('#review-container');
          testimonial.triggerReviewEvents();
          contact.renderContactBox('#contact-box');
          break;
        case pageConstants.SERVICES:
          contact.renderContactBox('#contact-container', true, true);
          service.renderAllServices('#all-service-container', service.VIEW.LIGHT, true);
          break;
        case pageConstants.PAYMENT:
          contact.renderContactBox('#contact-box');
          break;
      };

      contact.renderInfoBar('#app-info-bar');
      header.renderNavbar('#app-header', tabs, pageId);
      footer.renderSebiNotRegisterHtml('#sebi-not-register-container');
      footer.renderHTML('#app-footer');
    }
  };
  return obj;
}();
