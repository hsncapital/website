window.testimonial = function() {
  const quotes = [
    {
      context: `Investing in yourself is the best thing you can do, and as a part of investing in yourself. You should learn more about money management.`,
      owner: `Warren Buffett`
    },
    {
      context: `The question should not be how much I will profit on this trade! The true question is; will I be fine if I don't profit from this trade.`,
      owner: `Yvan Byeajee`
    },
    {
      context: `You never know what kind of setup market will present to you, your objective should be to find opportunity where risk reward ratio is best.`,
      owner: `Jaymin Shah`
    },
    {
      context: `Trade What’s Happening… Not What You Think Is Gonna Happen.`,
      owner: `Doug Gregory`
    }
  ];

  const trainingReview = [
    {
      imageUrl: ``,
      context: `Hi, I have taken the service by HSN Capital for 6 months. They always given me good service & calls as per my service. I am so happy to have service by HSN Capital.Thanks to HSN Capital team.`,
      owner: `Mitesh Barjatiya`,
      designation: `CA`,
    },
    {
      imageUrl: ``,
      context: `This is Akshay, recently I registered in HSN Capital and Mr. Himanshu guided me in good communicate towards trading with HSN Capital. I really thank full to Mr. Himanshu the way he communicate in trading.`,
      owner: `Akshay Manhotra`,
      designation: `Mech. Engineer`,
    }
  ];

  const servicesReview = [
    {
      imageUrl: ``,
      context: `I am absolutely pleased and satisfied with this company’s service. It is so great to have training with a financial advisor who is truely interested in their client’s needs, goals and performances.`,
      owner: `Anant Maheshwari`,
      designation: `Architect`,
    },
    {
      imageUrl: ``,
      context: `I have taken services form HSN Capital, it's really overwhelming, the way they put efforts to give you the complete knowledge and guidance which makes it a superb experience.`,
      owner: `Nikita Jain`,
      designation: `Housewife`,
    }
  ];

  function getQuotes() {
    let html = '';
    for (let quote of quotes) {
      html += `<div class="quote">
        <div class="marker">
          <i class="fa fa-quote-left"></i>
        </div>
        <div class="lines">${quote.context}</div>
        <div class="by">${quote.owner}</div>
      </div>`;
    };
    return html;
  }

  function getReview(reviews) {
    let html = '';
    for (let review of reviews) {
      html += `<div class="d-flex justifd-flex align-items-center justify-content-center flex-column review">`;
      if (review.imageUrl) {
        html += `<div class="image" style="background-image: url('${review.imageUrl}');"></div>`;
      }
      html += `<div class="name">${review.owner}</div>
        <div class="designation text-muted">${review.designation}</div>
        <div class="review-content">${review.context}</div>
      </div>`;
    }
    return html;
  }

  function owlCarouselHtml(html) {
    return `<div class="owl-carousel owl-theme">${html}</div>`;
  }

  function getQuotesHTML() {
    return `<div class="quote-wrapper">${owlCarouselHtml(getQuotes())}</div>`;
  }

  function getReviewsHTML(reviews) {
    return `<div class="review-wrapper"><div class="container"><div class="container-heading">Our Clients</div>${owlCarouselHtml(getReview(reviews))}</div></div>`;
  }

  const obj = {
    renderAllReviewsHTML: function(id) {
      const allReviews = servicesReview.concat(trainingReview);
      $(id).html(getReviewsHTML(allReviews));
    },
    renderServiceReviewsHTML: function(id) {
      $(id).html(getReviewsHTML(servicesReview));
    },
    renderTrainingReviewsHTML: function(id) {
      $(id).html(getReviewsHTML(trainingReview));
    },
    renderQuotesHTML: function(id) {
      $(id).html(getQuotesHTML());
    },
    triggerQuoteEvents: function() {
      $('.quote-wrapper .owl-carousel').owlCarousel( {
        loop: true,
        center: true,
        items: 1,
        autoplay: true,
        mouseDrag: false,
        dots: true,
        autoplayTimeout: 6000,
        smartSpeed: 450,
      });
    },
    triggerReviewEvents: function() {
      $('.review-wrapper .owl-carousel').owlCarousel( {
        loop: true,
        center: true,
        items: 1,
        autoplay: true,
        mouseDrag: false,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 700,
      });
    },
  };
  return obj;
}();