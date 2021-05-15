window.constant = function () {
  const PAGES = {
    HOME: 'home',
    ABOUT: 'about-us',
    CONTACT_US: 'contact-us',
    PAYMENT: 'payment',
    EQUITY_CASH: 'equity-cash',
    FUTURE_N_OPTION: 'future-n-option',
    INDEX_SPECIAL: 'index-special',
    COMMODITY: 'commodity',
    TRAINING: 'Training',
    TRAINING_L1: 'level1',
    TRAINING_L2: 'level2',
    JOURNEY_WITH_US: 'journey-with-us',
    TRADING: 'trading',
    SERVICES: 'services',
    DEMAT_ACCOUNT: 'demat-account'
  };
  const HOME_PAGE = {
    id: PAGES.HOME,
    name: 'Home',
    url: './index.html'
  };

  const ABOUT_PAGE = {
    id: PAGES.ABOUT,
    name: 'About Us',
    url: './about-us.html'
  };

  const PAYMENT_PAGE ={
    id: PAGES.PAYMENT,
    name: 'Payment',
    url: './payment.html'
  };

  const CONTACT_US = {
    id: PAGES.CONTACT_US,
    name: 'Contact Us',
    url: './contact-us.html'
  };

  const EQUITY_CASH_PAGE = {
    id: PAGES.EQUITY_CASH,
    name: 'Equity Cash',
    description: 'A product designed for traders who aim to grab high potential trades from Cash market.',
    url: './equity-cash.html'
  };


  const FUTURE_N_OPTION_PAGE = {
    id: PAGES.FUTURE_N_OPTION,
    name: 'Future and Option',
    description: 'Futures and options are the major types of stock derivatives traded in a share market.',
    url: './future-and-option.html'
  };

  const INDEX_SPECIAL_PAGE = {
    id: PAGES.INDEX_SPECIAL,
    name: 'Index Special',
    description: 'Index Trading is a type of trading of a group of stocks which make up the index.',
    url: './index-special.html'
  };

  const COMMODITY_PAGE = {
    id: PAGES.COMMODITY,
    name: 'Commodity',
    description: 'A commodity trader is an individual or business that focuses on investing in physical substances like oil, gold, or agricultural products.',
    url: './commodity.html'
  };

  const TRAINING_L1_PAGE = {
    id: PAGES.TRAINING_L1,
    name: 'Level 1',
    url: './training.html#level1'
  };

  const TRAINING_L2_PAGE = {
    id: PAGES.TRAINING_L2,
    name: 'Level 2',
    url: './training.html#level2'
  };

  const JOURNEY_WITH_US = {
    id: PAGES.JOURNEY_WITH_US,
    name: 'Journey With Us',
    url: './training.html#journey-with-us'
  };

  const DEMAT_ACCOUNT = {
    id: PAGES.DEMAT_ACCOUNT,
    name: 'Open Demat Account',
    url: 'https://upstox.com/open-demat-account/?f=ET2875'
  };

  const SOCIAL_LINKS = [
    {
    name: 'Facebook',
    icon: 'fa-facebook',
    url: 'https://www.facebook.com/'
  },
  {
    name: 'Twitter',
    icon: 'fa-twitter',
    url: 'https://www.twitter.com/'
  },
  {
    name: 'Telegram',
    icon: 'fa-telegram',
    url: 'https://t.me/hsncaptail'
  }];

  function trim(sentence, maxLimit) {
    if (sentence.length > maxLimit) {
      return `${sentence.substring(0, maxLimit)}...`;
    }
    return sentence;
  }

  const obj = {
    HOME_PAGE, ABOUT_PAGE, PAYMENT_PAGE, CONTACT_US, EQUITY_CASH_PAGE, FUTURE_N_OPTION_PAGE, INDEX_SPECIAL_PAGE, COMMODITY_PAGE, PAGES, SOCIAL_LINKS, DEMAT_ACCOUNT,
    MAIN_PAGES: [HOME_PAGE, ABOUT_PAGE, PAYMENT_PAGE, CONTACT_US, DEMAT_ACCOUNT],
    SERVICE_PAGES: [EQUITY_CASH_PAGE, FUTURE_N_OPTION_PAGE, INDEX_SPECIAL_PAGE, COMMODITY_PAGE],
    TRAINING_PAGES: [TRAINING_L1_PAGE, TRAINING_L2_PAGE, JOURNEY_WITH_US],
    NAVIGATION: [
      HOME_PAGE,
      ABOUT_PAGE,
      { name: 'Services', subPages: [EQUITY_CASH_PAGE, FUTURE_N_OPTION_PAGE, INDEX_SPECIAL_PAGE, COMMODITY_PAGE]},
      { name: 'Training', id: PAGES.TRAINING, url: './training.html', subPages: [TRAINING_L1_PAGE, TRAINING_L2_PAGE, JOURNEY_WITH_US]},
      PAYMENT_PAGE,
      CONTACT_US
    ],
    trim,
    CLARITY_ID: "6iv4l0qdpm"
  };
  // || "6faf2w32y5"

  return obj;
}();
