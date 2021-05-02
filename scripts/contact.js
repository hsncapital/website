window.contact = function() {
  const phoneNumber = '+919670986272';
  const email = 'support@hsncapital.in';

  function getContainerHTML() {
    return `<div class="contact-container">
      <div class="container">
        <div class="row">
          <div class="col-md-1 d-none d-md-block"></div>
          <div class="col-md-4 d-none d-md-block">
            <img src="./images/contact.png" alt="Contact" class="img-fluid">
          </div>
          <div class="col-md-6">
            <div class="text-center">
              <div class="heading">Need Help with Investing</div>
              <div class="sub-heading text-muted mt-2 mb-3">
                Get call to get help from an expert.
              </div>${contactLinks()}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function getInfoBarHTML() {
    return `<div class="top-navigation">
      <div class="container clearfix">
        <div class="support-text">
          Facing Issue with our service
          <a class="btn app-button app-button-round app-btn-sm ml-3" href="./contact-us.html">Contact Us</a>
        </div>
        <div class="social-links">${getSocialLinks()}</div>
      </div>
    </div>`;
  }

  function getSocialLinks() {
    const socialLinks = window.constant.SOCIAL_LINKS;
    let html = '';
    for (let item of socialLinks) {
      html += `<div class="mr-2"><a class="social-link" href="${item.url}" title="${item.name}" target="_blank"><i class="fa ${item.icon}"></i></a></div>`;
    }
    return html;
  }

  function getContactBoxHTML(hideContainer, verticalFlow) {
    return `<div class="${hideContainer ? '' : 'container'}">
      <div class="contacting-container">
        <div class="contacting-card">
          <div class="d-flex align-items-center justify-content-center mb-4 ${verticalFlow ? 'flex-column' : 'flex-row'}">
            <div class="phone-icon d-none d-md-block">
              <i class="fa fa-phone"></i>
            </div>
            <div class="help-text">
              Need Help with Investing
            </div>
          </div>${contactLinks(!verticalFlow)}
        </div>
      </div>
    </div>`;
  }

  function contactLinks(horizontal, hideContactPage) {
    const orHtml = `<div class="small text-muted mx-3 my-2"> OR </div>`;
    return `<div class="d-sm-flex text-center align-items-center justify-content-center flex-wrap ${horizontal ? 'flex-row' : 'flex-column'}">
      ${hideContactPage ? '' : `<a href="./contact-us.html" class="btn app-button app-button-round"> Contact Us </a> ${orHtml}`}
      <a href="${getWhatsappLink('I am your customer and i need your help')}" target="_blank" class="btn app-button app-button-round"> Whatsapp Us </a>
      ${orHtml}
      <div class="text-muted">
        Call at <a href="tel:${phoneNumber}" class="ml-1 btn-link">${phoneNumber}</a>
      </div>
      ${orHtml}
      <div class="text-muted">
        Mail at
        <a href="mailto:${email}" class="ml-1 btn-link">${email}</a>
      </div>
    </div>`;
  }

  function getWhatsappLink(msg) {
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${msg}&app_absent=0`;
  }

  const obj = {
    renderContainer: function(id) {
      $(id).html(getContainerHTML());
    },
    renderInfoBar: function(id) {
      $(id).html(getInfoBarHTML());
    },
    renderContactBox: function(id, hideParentContainer, verticalFlow) {
      $(id).html(getContactBoxHTML(hideParentContainer, verticalFlow));
    },
    renderOnlyExternalLinks: function(id) {
      $(id).html(contactLinks(true, true));
    }
  };
  return obj;
}();