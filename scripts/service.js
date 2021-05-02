window.service = function() {
  const VIEW = {
    DARK: 'dark',
    LIGHT: 'light',
    DEFAULT: 'default'
  };

  function getServicesHTML(pageHeading, services, colorScheme, horizontalOnMobile) {
    return `<div class="services-container ${colorScheme}"><div class="container"><div class="container-heading">${pageHeading}</div>${getServiceCardsHTML(services, horizontalOnMobile)}</div></div>`;
  };

  function getServiceCardsHTML(services, horizontalOnMobile) {
    let html = '';
    if (horizontalOnMobile) {
      html += `<div class="horizontal-layout horizontal-scroll-xs">`;
      for (let service of services) {
        html += `<div class="card service-card"><div class="card-body text-center"><div class="heading">${service.name}</div>`;
        if (service.description) {
          html+= `<div class="content text-muted">${window.constant.trim(service.description, 85)}</div>`;
        }
        html += `<div class="button-wrapper"><a href="${service.url}" class="btn btn-sm app-button app-button-round">Read More</a></div></div></div>`;
      }

      html += `<div class="no-element"></div></div>`;
      return html;
    }
    html = '<div class="row justify-content-center">';
    for (let service of services) {
      html += `<div class="col-md-3 mb-3"><div class="card service-card"><div class="card-body text-center"><div class="heading">${service.name}</div><div class="button-wrapper"><a href="${service.url}" class="btn btn-sm app-button app-button-round">Read More</a></div></div></div></div>`;
    }
    html += `</div>`;
    
    return html;
  }

  const obj = {
    VIEW,
    renderAllServices: function(id, colorScheme, horizontalScrollable) {
      const html = getServicesHTML('Our Services', window.constant.SERVICE_PAGES, colorScheme || VIEW.DARK, horizontalScrollable);
      $(id).html(html);
    },
    renderOtherServices: function(id, activePageId, colorScheme, horizontalScrollable) {
      let pages = window.constant.SERVICE_PAGES;
      pages = pages.filter(page => page.id != activePageId);
      const html = getServicesHTML('Other Services', pages, colorScheme, horizontalScrollable);
      $(id).html(html);
    },
    renderTrainingList: function(id) {
      const html = getServicesHTML('Our Training Modules', window.constant.TRAINING_PAGES, VIEW.LIGHT);
      $(id).html(html);
    }
  };
  return obj;
}();