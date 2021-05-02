window.footer = function () {
  function getMainPageLinks() {
    return getPageLinks(window.constant.MAIN_PAGES);
  }

  function getServicePageLinks() {
    return getPageLinks(window.constant.SERVICE_PAGES);
  }

  function getPageLinks(pages) {
    let html = '';
    for (let i = 0; i < pages.length; i++) {
      html += `<div><a href="${pages[i].url}" class="btn btn-link link ${i == 0 ? `pl-0` : ``}">${pages[i].name}</a></div>`;
      if (i != pages.length - 1) {
        html += `<div class="dot"></div>`;
      }
    }
    return html;
  }

  function getSocialLinks() {
    const socialLinks = window.constant.SOCIAL_LINKS;
    let html = '';
    for (let item of socialLinks) {
      html += `<div class="mr-2"><a class="social-link" href="${item.url}" target="_blank"><i class="fa ${item.icon}"></i></a></div>`;
    }
    return html;
  }

  function getTrainingPageLinks() {
    return getPageLinks(window.constant.TRAINING_PAGES);
  }

  function getFooterHTML() {
    return `<marquee behavior="scroll" direction="left" scrollamount="10" class="text-muted mt-2 notifying-text">Security Market Investments are always Subject To Market Risk And Past Performance Is Not a Guarantee Of Future Performance.</marquee>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="d-flex flex-wrap">${getMainPageLinks()}</div>
            <div class="d-flex flex-wrap">
              <span class="link no-hover pl-0">Services : </span>${getServicePageLinks()}
            </div>
            <div class="d-flex flex-wrap">
              <span class="link no-hover pl-0">Training : </span>${getTrainingPageLinks()}
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex justify-content-center p-3 p-sm-0">${getSocialLinks()}</div>
          </div>
        </div>
        <div class="knowledge-container text-justify">
          <div class="heading">Knowledge Center</div>
          <div class="cursor-default">
            With investment, your capital is at risk. The value of your portfolio can go down as well as up and you may get back less than you invest. Investing / Trading is subject to market risk. Please ensure you carefully read the <a href="https://www.sebi.gov.in/sebi_data/commondocs/ann5risk_p.pdf" target="_blank">Risk Disclosure Document</a> as prescribed by SEBI. We accept payments only in our registered bank accounts.
          </div>
        </div>
        <hr class="hr my-1"/>
        <div class="developer-container">
          Crafted with <i class="fa fa-heart heart"></i> by <a href="mailto:chandakpiyush4@gmail.com">Piyush</a>
        </div>
      </div>
    </div>`;
  };

  function getSebiNotRegisterHTML() {
    return `<div class="sebi-not-regis-banner">HSN Capital is not a SEBI registered investment advisor firm</div>`;
  }

  const obj = {
    renderHTML: function(id) {
      $(id).html(getFooterHTML());
    },
    renderSebiNotRegisterHtml: function(id) {
      $(id).html(getSebiNotRegisterHTML());
    }
  };

  return obj;
}();