import React, { Component } from "react";
import "./Main.css";

export class Main extends Component {
  render() {
    const softwares = [
      "Sales",
      "Marketing",
      "Analytics",
      "CAD & PLM",
      "Collaboration & Productivity",
      "Commmerce",
      "Content Management",
      "Cutomer Service",
      "Development",
      "Digital Advertisesing",
      "ERP",
      "Hosting",
      "HR",
      "IT Infrastructure",
      " IT Management",
      "Office",
      "Security",
    ];
    const services = [
      "Business Services",
      "Marketing Services",
      "Other Services",
      "Professional Servvices",
      "Staffing Services",
      "Translation Services",
      "Value-Added-Resellers(VARs)",
    ];

    return (
      <React.Fragment>
        <div class="topnav rebrand">
          <div class="topnav__inner page">
            <div class="topnav__item topnav__item--logo">
              <a id="primary-nav-logo" href="/">
                <img
                  src="https://www.g2.com/assets/rorange-logo-3ed6ec320f869ccb5d0486badcea259b8f7631843eb8c0ad402887c021bd6f88.png"
                  class="topnav__item__g2"
                />
              </a>
            </div>

            <div class="topnav__item topnav__item--search hide-for-custom-profile hide-for-print">
              <div
                class="search-box-wrapper js-search-field navbar-search"
                data-autoselect="false"
                data-hint="false"
                id="navbar-search"
                ue="typeahead"
              >
                <form
                  role="search"
                  class="rounded-search rounded-search--understated"
                  action="/search"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input name="utf8" type="hidden" value="✓" />
                  <div class="rounded-search__top">
                    <label class="rounded-search__label" for="body-query">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        contain="paint"
                        buffered-rendering="static"
                        viewBox="0 0 512 512"
                        class="c-rorange-100 icon-search nessy-only"
                      >
                        <use xlinkhref="/assets/icons/search-e6e27b86b4d4264433f5342013f05e31a2978dd1260db3bef1a1af93f9788ac1.svg#icon-search"></use>
                      </svg>
                    </label>
                    <span class="twitter-typeahead">
                      <input
                        type="text"
                        name="query"
                        id="query01"
                        value=""
                        autocomplete="off"
                        placeholder="Search for Software and Services"
                        class="ajax-search-field js-query rounded-search__input tt-input"
                        ue="match-params"
                        spellcheck="false"
                        dir="auto"
                      />
                      <pre aria-hidden="true" class="pre1"></pre>
                      <div class="tt-menu"></div>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            <ul class="topnav__item topnav__nav hide-for-custom-profile hide-for-print">
              <li class="topnav__nav__li show-for-xxlarge">
                <a
                  class="topnav__link"
                  rel="nofollow"
                  href="/wizard/new-review"
                >
                  <span>Write Review</span>
                </a>
              </li>
              <li
                class="topnav__nav__li topnav__nav__li--hoverable mega-menu-link"
                ue="mega-menu"
              >
                <a class="topnav__link" href="#">
                  Software
                </a>
                <div class="mega-menu__wrapper">
                  <ul
                    class="mega-menu mega-menu--topnav"
                    data-category-mega-menu-category-type="software"
                    ue="category-mega-menu"
                  >
                    {softwares.map((software) => {
                      return (
                        <li class="">
                          <a class="ellipsis" href="#">
                            {software}
                          </a>
                          <div class="mega-sub-menu">
                            <div >Sales</div>
                            <ul>
                              <li>
                                <a class="ellipsis" href="#">
                                  CRM
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  E-Signature
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  Sales Acceleration
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  Sales Intelligence
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                    <li class="mega-highlight">
                      <a href="#">All Categories</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                class="topnav__nav__li topnav__nav__li--hoverable mega-menu-link"
                ue="mega-menu"
              >
                <a class="topnav__link" href="#">
                  Services
                </a>
                <div class="mega-menu__wrapper">
                  <ul
                    class="mega-menu mega-menu--topnav"
                    data-category-mega-menu-category-type="service"
                    ue="category-mega-menu"
                  >
                    {services.map((service) => {
                      return (
                        <li class="">
                          <a class="ellipsis" href="#">
                            {service}
                          </a>
                          <div class="mega-sub-menu">
                            <div class="mega-menu-heading">
                              Business Services
                            </div>
                            <ul>
                              <li>
                                <a class="ellipsis" href="#">
                                  Business Filing and Licensing{" "}
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  Business Finance{" "}
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  HR Services
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  Legal Services
                                </a>
                              </li>
                              <li>
                                <a class="ellipsis" href="#">
                                  Management Consulting
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                    <li class="mega-highlight">
                      <a href="#">All Categories</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="page rebrand rebrand exception-min-view-height">
          <div class="page--with-shadow bg-white m-2 p-4" style={{height: "100vh"}}>
            <div class="text-center margin-top-double">
              <h1 class="error-text-number">404</h1>
              <div class="error-text error-text-emoter">Whoopsiedoodles!</div>
              <div class="error-text error-text-error">
                We tried really hard but we could not find the page you are
                trying to reach.
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-midnight-100 page-footer">
          <div class="page hide-for-print page-footer__page rebrand">
            <div
              id="footer-inner"
              class="page-footer__inner grid-x"
              ue="accordion"
              data-accordion-multi-expand="true"
              data-accordion-allow-all-closed="true"
            >
              <div
                class="cell large-auto page-footer__section accordion-item"
                data-accordion-item="true"
              >
                <a class="page-footer__section__link" href="#">
                  <h5 class="flex ai-fs page-footer__section__title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 100 86.6"
                      class="r-30 icon-chevron nessy-only"
                    >
                      <polygon points="100,86.6 100,28.8 50,0 0,28.9 0,86.6 50,57.7 "></polygon>
                    </svg>
                    <span>G2</span>
                  </h5>
                  <div class="page-footer__section__toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 10 7"
                      class="tiny r-180 icon-chevron-thin nessy-only"
                    >
                      <path
                        d="M 0.0010000000474974513 0.015000000596046448 L 0.0010000000474974513 3.9730000495910645 L 4.985000133514404 7.014999866485596 L 10.00100040435791 4.014999866485596 L 10.00100040435791 0.015000000596046448 L 5.000999927520752 3.015000104904175 Z"
                        id="Path-2"
                        transform="matrix(-1, 0, 0, -1, 10.002, 7.03)"
                      ></path>
                    </svg>
                  </div>
                </a>
                <ul
                  class="page-footer__section__body accordion-content"
                  data-tab-content="true"
                >
                  <li>
                    <a href="#">Vision</a>
                  </li>

                  <li>
                    <a href="#">G2 Track</a>
                  </li>

                  <li>
                    <a href="#">Learning Hub</a>
                  </li>

                  <li>
                    <a href="#">Software Reviews</a>
                  </li>

                  <li>
                    <a href="#">Add Your Product/Service</a>
                  </li>

                  <li>
                    <a href="#">Research Hub</a>
                  </li>

                  <li>
                    <a href="#">Research Agenda</a>
                  </li>

                  <li>
                    <a href="#">Compare Software</a>
                  </li>

                  <li>
                    <a href="#">Best Software Companies</a>
                  </li>

                  <li>
                    <a class="footer-anchor--pop" href="#">
                      Vendor Info
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="cell large-auto page-footer__section accordion-item"
                data-accordion-item="true"
              >
                <a class="page-footer__section__link" href="#">
                  <h5 class="flex ai-fs page-footer__section__title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 100 86.6"
                      class="r-30 icon-chevron nessy-only"
                    >
                      <polygon points="100,86.6 100,28.8 50,0 0,28.9 0,86.6 50,57.7 "></polygon>
                    </svg>
                    <span>Top Categories</span>
                  </h5>
                  <div class="page-footer__section__toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 10 7"
                      class="tiny r-180 icon-chevron-thin nessy-only"
                    >
                      <path
                        d="M 0.0010000000474974513 0.015000000596046448 L 0.0010000000474974513 3.9730000495910645 L 4.985000133514404 7.014999866485596 L 10.00100040435791 4.014999866485596 L 10.00100040435791 0.015000000596046448 L 5.000999927520752 3.015000104904175 Z"
                        id="Path-2"
                        transform="matrix(-1, 0, 0, -1, 10.002, 7.03)"
                      ></path>
                    </svg>
                  </div>
                </a>
                <ul
                  class="page-footer__section__body accordion-content"
                  data-tab-content="true"
                >
                  <li>
                    <a href="#">CRM Software</a>
                  </li>

                  <li>
                    <a href="#">ERP Systems</a>
                  </li>

                  <li>
                    <a href="#">Project Management Software</a>
                  </li>

                  <li>
                    <a href="#">VDI</a>
                  </li>

                  <li>
                    <a href="#">Accounting Software</a>
                  </li>

                  <li>
                    <a href="#">Learning Management System</a>
                  </li>

                  <li>
                    <a href="#">Applicant Tracking System</a>
                  </li>

                  <li>
                    <a href="#">Payroll Software</a>
                  </li>

                  <li>
                    <a href="#">E-Commerce Platforms</a>
                  </li>

                  <li>
                    <a href="#">Backup Software</a>
                  </li>

                  <li>
                    <a class="footer-anchor--pop" href="#">
                      All Categories
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="cell large-auto page-footer__section accordion-item"
                data-accordion-item="true"
              >
                <a class="page-footer__section__link" href="#">
                  <h5 class="flex ai-fs page-footer__section__title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 100 86.6"
                      class="r-30 icon-chevron nessy-only"
                    >
                      <polygon points="100,86.6 100,28.8 50,0 0,28.9 0,86.6 50,57.7 "></polygon>
                    </svg>
                    <span>Company</span>
                  </h5>
                  <div class="page-footer__section__toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 10 7"
                      class="tiny r-180 icon-chevron-thin nessy-only"
                    >
                      <path
                        d="M 0.0010000000474974513 0.015000000596046448 L 0.0010000000474974513 3.9730000495910645 L 4.985000133514404 7.014999866485596 L 10.00100040435791 4.014999866485596 L 10.00100040435791 0.015000000596046448 L 5.000999927520752 3.015000104904175 Z"
                        id="Path-2"
                        transform="matrix(-1, 0, 0, -1, 10.002, 7.03)"
                      ></path>
                    </svg>
                  </div>
                </a>
                <ul
                  class="page-footer__section__body accordion-content"
                  data-tab-content="true"
                >
                  <li>
                    <a href="#">About</a>
                  </li>

                  <li>
                    <a href="#">User Help Center</a>
                  </li>

                  <li>
                    <a href="#">G2 Gives</a>
                  </li>

                  <li>
                    <a href="#">Careers</a>
                  </li>

                  <li>
                    <a href="#">Team</a>
                  </li>

                  <li>
                    <a href="#">News</a>
                  </li>

                  <li>
                    <a
                      ue="drift-link"
                      data-drift-link-interaction="102592"
                      href="https://culture.g2.com/contact/"
                    >
                      Contact
                    </a>
                  </li>

                  <li class="page-footer__address">
                    <span>G2</span>
                    <div
                      itemprop="address"
                      itemscope=""
                      itemtype="http://schema.org/PostalAddress"
                    >
                      <span itemprop="streetAddress">
                        <span>100 S Wacker Dr</span>
                        <br />
                        <span>STE 600</span>
                      </span>
                      <br />
                      <span itemprop="addressLocality">Chicago</span>
                      <span>,</span>
                      <span itemprop="addressRegion"> IL</span>
                      <span itemprop="postalCode"> 60606</span>
                    </div>
                  </li>
                  <li class="social-media-links">
                    <a href="#" rel="nofollow">
                      <img
                        src="https://www.g2.com/assets/twitter-e359d4d4f3f500090ad47dfcd8337813aca18be12a72f78287095ed0bfffa017.svg"
                        alt="Twitter"
                      />
                    </a>
                    <a href="#" rel="nofollow">
                      <img
                        src="https://www.g2.com/assets/facebook-aa31de614a641d8cd523573ba5909e7438493ab1ea212f40a58598b9293fbac6.svg"
                        alt="Facebook"
                      />
                    </a>
                    <a href="#" rel="nofollow">
                      <img
                        src="https://www.g2.com/assets/linkedin-r-388e57c51249b057debf086b1ce1c021f7c3c3fa8082be69e52deae519d1922e.svg"
                        alt="LinkedIn"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="cell large-auto page-footer__section accordion-item"
                data-accordion-item="true"
              >
                <a class="page-footer__section__link" href="#">
                  <h5 class="flex ai-fs page-footer__section__title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 100 86.6"
                      class="r-30 icon-chevron nessy-only"
                    >
                      <polygon points="100,86.6 100,28.8 50,0 0,28.9 0,86.6 50,57.7 "></polygon>
                    </svg>
                    <span>Policies</span>
                  </h5>
                  <div class="page-footer__section__toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      contain="paint"
                      buffered-rendering="static"
                      viewBox="0 0 10 7"
                      class="tiny r-180 icon-chevron-thin nessy-only"
                    >
                      <path
                        d="M 0.0010000000474974513 0.015000000596046448 L 0.0010000000474974513 3.9730000495910645 L 4.985000133514404 7.014999866485596 L 10.00100040435791 4.014999866485596 L 10.00100040435791 0.015000000596046448 L 5.000999927520752 3.015000104904175 Z"
                        id="Path-2"
                        transform="matrix(-1, 0, 0, -1, 10.002, 7.03)"
                      ></path>
                    </svg>
                  </div>
                </a>
                <ul class="#" data-tab-content="true">
                  <li>
                    <a href="#">Community Guidelines</a>
                  </li>

                  <li>
                    <a href="#">G2 Scoring Methodologies</a>
                  </li>

                  <li>
                    <a href="#">Terms of Use</a>
                  </li>

                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>

                  <li>
                    <a href="#">Do not sell my personal information</a>
                  </li>

                  <li>
                    <a href="#">Legal</a>
                  </li>

                  <li>
                    <a href="#">Content Usage Guidelines</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-sub-footer">
            <div id="subfooter-inner" class="l-constrained l-constrained-full">
              © 2020 G2.com, Inc. All rights reserved
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Main;
