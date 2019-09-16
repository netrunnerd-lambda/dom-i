const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const select = s => document.querySelector(s),
      selectAll = s => document.querySelectorAll(s);

const bh = selectAll('.bottom-content .text-content h4'), 
      bc = selectAll('.bottom-content .text-content p'),
      ch = select('.cta-text h1'),
      cb = select('.cta-text button'),
      ci = select('#cta-img'),
      cth = select('.contact h4'),
      ctc = selectAll('.contact p'),
      cr = select('footer p');
      li = select('#logo-img'),
      mi = select('#middle-img'),
      n = select('header nav'),
      nl = selectAll('header nav a'),
      th = selectAll('.top-content .text-content h4'),
      tc = selectAll('.top-content .text-content p');

// nav
const blog = document.createElement('a'),
      hdesk = document.createElement('a');

blog.innerText = 'Blog';
hdesk.innerText = 'Helpdesk';

n.prepend(blog);
n.appendChild(hdesk);

nl.forEach((e, i) => {
  e.innerText = siteContent['nav'][`nav-item-${i + 1}`];
});

nl = selectAll('header nav a');

nl.forEach(e => e.style.color = 'green');

// logo
li.setAttribute('src', siteContent['nav']['img-src']);

// cta
ch.innerText = siteContent['cta']['h1'];
cb.innerText = siteContent['cta']['button'];
ci.setAttribute('src', siteContent['cta']['img-src']);

// features
th[0].innerText = siteContent['main-content']['features-h4'];
tc[0].innerText = siteContent['main-content']['features-content'];

// about
th[1].innerText = siteContent['main-content']['about-h4'];
tc[1].innerText = siteContent['main-content']['about-content'];

// middle-img
mi.setAttribute('src', siteContent['main-content']['middle-img-src']);

// services
bh[0].innerText = siteContent['main-content']['services-h4'];
bc[0].innerText = siteContent['main-content']['services-content'];

// product
bh[1].innerText = siteContent['main-content']['product-h4'];
bc[1].innerText = siteContent['main-content']['product-content'];

// vision
bh[2].innerText = siteContent['main-content']['vision-h4'];
bc[2].innerText = siteContent['main-content']['vision-content'];

// contact
cth.innerText = siteContent['contact']['contact-h4'];
ctc[0].innerText = siteContent['contact']['address'];
ctc[1].innerText = siteContent['contact']['phone'];
ctc[2].innerText = siteContent['contact']['email'];

// copyright
cr.innerText = siteContent['footer']['copyright'];