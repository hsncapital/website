window.header = function () {
  function getTabs(tabs, activePageId) {
    let html = '';
    for (let tab of tabs) {
      if (!tab.subPages) {
        html += getTabHTML(tab, activePageId);
        continue;
      }
      let subHTML = '';
      for(let subPage of tab.subPages) {
        subHTML += getTabHTML(subPage, activePageId);
      }
      html += `<li class="nav-item mr-2 dropdown cursor-pointer">
          <a class="dropbtn nav-link" ${tab.url ? `href="${tab.url}"` : ''}>${tab.name}</a>
          <ul class="dropdown-menu">${subHTML}</ul>
        </li>`;
    }
    return html;
  }

  function getTabHTML(tab, activePageId) {
    return `<li class="nav-item"><a class="nav-link ${tab.id == activePageId ? 'active' : ''}" href="${tab.url}">${tab.name}</a></li>`;
  }

  function getNavbarHTML(tabs, activePageId) {
    return `<nav class="navbar navbar-expand-md bg-white sticky-top">
      <div class="container">
        <a class="navbar-brand" href="${window.constant.HOME_PAGE.url}">
        <img src='./images/logo.png' class="logo"/>
          HSN Capital
        </a>
        <div class="hamburger navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
          <div class="hamburger-line"></div><div class="hamburger-line"></div><div class="hamburger-line"></div>
        </div>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ml-auto">${getTabs(tabs, activePageId)}</ul>
        </div>
      </div>
    </nav>`;
  };

  const obj = {
    renderNavbar: function(id, tabs, activePageId) {
      $(id).html(getNavbarHTML(tabs, activePageId));
    }
  };
  return obj;
}();
