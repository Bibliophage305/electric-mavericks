const navbarElement = document.getElementById("navbar");

navbarElement.classList.add('navbar', 'navbar-dark', 'navbar-expand-lg', 'sticky-top');

const navLinks = [
  { text: "Home", href: "https://electricmavericks.co.uk/" },
  { text: "Contact", href: "https://electricmavericks.co.uk/contact" },
  { text: "Repertoire", href: "https://electricmavericks.co.uk/repertoire" },
  { text: "Reviews", href: "https://electricmavericks.co.uk/reviews" },
  { text: "FAQ", href: "https://electricmavericks.co.uk/faq" },
];

const navbarContent = navLinks
  .map(
    (link) =>
      `<a class="nav-link text-light" href="${link.href}">${link.text}</a>`
  )
  .join("");

navbarElement.innerHTML = `
        <div class="container-fluid justify-content-end">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i id="navbar-hamburger" class="bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    ${navbarContent}
                </div>
            </div>
        </div>
    `;
