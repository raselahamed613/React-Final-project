import React from 'react';

 function Checkout() {
      return (
        <div>
          {/* molla/checkout.html  22 Nov 2019 09:55:06 GMT */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Molla - Bootstrap eCommerce Template</title>
          <meta name="keywords" content="HTML5 Template" />
          <meta name="description" content="Molla - Bootstrap eCommerce Template" />
          <meta name="author" content="p-themes" />
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="assets/images/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="assets/images/icons/favicon-16x16.png" />
          <link rel="manifest" href="assets/images/icons/site.html" />
          <link rel="mask-icon" href="assets/images/icons/safari-pinned-tab.svg" color="#666666" />
          <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Molla" />
          <meta name="application-name" content="Molla" />
          <meta name="msapplication-TileColor" content="#cc9966" />
          <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          {/* Plugins CSS File */}
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          {/* Main CSS File */}
          <link rel="stylesheet" href="assets/css/style.css" />
          <div className="page-wrapper">
            <header className="header">
              <div className="header-top">
                <div className="container">
                  <div className="header-left">
                    <div className="header-dropdown">
                      <a href="#">Usd</a>
                      <div className="header-menu">
                        <ul>
                          <li><a href="#">Eur</a></li>
                          <li><a href="#">Usd</a></li>
                        </ul>
                      </div>{/* End .header-menu */}
                    </div>{/* End .header-dropdown */}
                    <div className="header-dropdown">
                      <a href="#">Eng</a>
                      <div className="header-menu">
                        <ul>
                          <li><a href="#">English</a></li>
                          <li><a href="#">French</a></li>
                          <li><a href="#">Spanish</a></li>
                        </ul>
                      </div>{/* End .header-menu */}
                    </div>{/* End .header-dropdown */}
                  </div>{/* End .header-left */}
                  <div className="header-right">
                    <ul className="top-menu">
                      <li>
                        <a href="#">Links</a>
                        <ul>
                          <li><a href="tel:#"><i className="icon-phone" />Call: +0123 456 789</a></li>
                          <li><a href="wishlist.html"><i className="icon-heart-o" />Wishlist <span>(3)</span></a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                          <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user" />Login</a></li>
                        </ul>
                      </li>
                    </ul>{/* End .top-menu */}
                  </div>{/* End .header-right */}
                </div>{/* End .container */}
              </div>{/* End .header-top */}
              <div className="header-middle sticky-header">
                <div className="container">
                  <div className="header-left">
                    <button className="mobile-menu-toggler">
                      <span className="sr-only">Toggle mobile menu</span>
                      <i className="icon-bars" />
                    </button>
                    <a href="/" className="logo">
                      <img src="assets/images/logo.png" alt="Molla Logo" width={105} height={25} />
                    </a>
                    <nav className="main-nav">
                      <ul className="menu sf-arrows">
                        <li className="megamenu-container active">
                          <a href="/" className="sf-with-ul">Home</a>
                          <div className="megamenu demo">
                            <div className="menu-col">
                              <div className="menu-title">Choose your demo</div>{/* End .menu-title */}
                              <div className="demo-list">
                                <div className="demo-item">
                                  <a href="index-1.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/1.jpg)'}} />
                                    <span className="demo-title">01 - furniture store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-2.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/2.jpg)'}} />
                                    <span className="demo-title">02 - furniture store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-3.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/3.jpg)'}} />
                                    <span className="demo-title">03 - electronic store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-4.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/4.jpg)'}} />
                                    <span className="demo-title">04 - electronic store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-5.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/5.jpg)'}} />
                                    <span className="demo-title">05 - fashion store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-6.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/6.jpg)'}} />
                                    <span className="demo-title">06 - fashion store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-7.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/7.jpg)'}} />
                                    <span className="demo-title">07 - fashion store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-8.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/8.jpg)'}} />
                                    <span className="demo-title">08 - fashion store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-9.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/9.jpg)'}} />
                                    <span className="demo-title">09 - fashion store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item">
                                  <a href="index-10.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/10.jpg)'}} />
                                    <span className="demo-title">10 - shoes store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-11.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/11.jpg)'}} />
                                    <span className="demo-title">11 - furniture simple store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-12.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/12.jpg)'}} />
                                    <span className="demo-title">12 - fashion simple store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-13.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/13.jpg)'}} />
                                    <span className="demo-title">13 - market</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-14.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/14.jpg)'}} />
                                    <span className="demo-title">14 - market fullwidth</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-15.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/15.jpg)'}} />
                                    <span className="demo-title">15 - lookbook 1</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-16.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/16.jpg)'}} />
                                    <span className="demo-title">16 - lookbook 2</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-17.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/17.jpg)'}} />
                                    <span className="demo-title">17 - fashion store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-18.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/18.jpg)'}} />
                                    <span className="demo-title">18 - fashion store (with sidebar)</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-19.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/19.jpg)'}} />
                                    <span className="demo-title">19 - games store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-20.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/20.jpg)'}} />
                                    <span className="demo-title">20 - book store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-21.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/21.jpg)'}} />
                                    <span className="demo-title">21 - sport store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-22.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/22.jpg)'}} />
                                    <span className="demo-title">22 - tools store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-23.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/23.jpg)'}} />
                                    <span className="demo-title">23 - fashion left navigation store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                                <div className="demo-item hidden">
                                  <a href="index-24.html">
                                    <span className="demo-bg" style={{backgroundImage: 'url(assets/images/menu/demos/24.jpg)'}} />
                                    <span className="demo-title">24 - extreme sport store</span>
                                  </a>
                                </div>{/* End .demo-item */}
                              </div>{/* End .demo-list */}
                              <div className="megamenu-action text-center">
                                <a href="#" className="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i className="icon-long-arrow-right" /></a>
                              </div>{/* End .text-center */}
                            </div>{/* End .menu-col */}
                          </div>{/* End .megamenu */}
                        </li>
                        <li>
                          <a href="category.html" className="sf-with-ul">Shop</a>
                          <div className="megamenu megamenu-md">
                            <div className="row no-gutters">
                              <div className="col-md-8">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="menu-title">Shop with sidebar</div>{/* End .menu-title */}
                                      <ul>
                                        <li><a href="category-list.html">Shop List</a></li>
                                        <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                        <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                        <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                        <li><a href="category-market.html"><span>Shop Market<span className="tip tip-new">New</span></span></a></li>
                                      </ul>
                                      <div className="menu-title">Shop no sidebar</div>{/* End .menu-title */}
                                      <ul>
                                        <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                        <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                      </ul>
                                    </div>{/* End .col-md-6 */}
                                    <div className="col-md-6">
                                      <div className="menu-title">Product Category</div>{/* End .menu-title */}
                                      <ul>
                                        <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                        <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                      </ul>
                                      <div className="menu-title">Shop Pages</div>{/* End .menu-title */}
                                      <ul>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="dashboard.html">My Account</a></li>
                                        <li><a href="#">Lookbook</a></li>
                                      </ul>
                                    </div>{/* End .col-md-6 */}
                                  </div>{/* End .row */}
                                </div>{/* End .menu-col */}
                              </div>{/* End .col-md-8 */}
                              <div className="col-md-4">
                                <div className="banner banner-overlay">
                                  <a href="category.html" className="banner banner-menu">
                                    <img src="assets/images/menu/banner-1.jpg" alt="Banner" />
                                    <div className="banner-content banner-content-top">
                                      <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>{/* End .banner-title */}
                                    </div>{/* End .banner-content */}
                                  </a>
                                </div>{/* End .banner banner-overlay */}
                              </div>{/* End .col-md-4 */}
                            </div>{/* End .row */}
                          </div>{/* End .megamenu megamenu-md */}
                        </li>
                        <li>
                          <a href="product.html" className="sf-with-ul">Product</a>
                          <div className="megamenu megamenu-sm">
                            <div className="row no-gutters">
                              <div className="col-md-6">
                                <div className="menu-col">
                                  <div className="menu-title">Product Details</div>{/* End .menu-title */}
                                  <ul>
                                    <li><a href="product.html">Default</a></li>
                                    <li><a href="product-centered.html">Centered</a></li>
                                    <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                    <li><a href="product-gallery.html">Gallery</a></li>
                                    <li><a href="product-sticky.html">Sticky Info</a></li>
                                    <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                    <li><a href="product-fullwidth.html">Full Width</a></li>
                                    <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                  </ul>
                                </div>{/* End .menu-col */}
                              </div>{/* End .col-md-6 */}
                              <div className="col-md-6">
                                <div className="banner banner-overlay">
                                  <a href="category.html">
                                    <img src="assets/images/menu/banner-2.jpg" alt="Banner" />
                                    <div className="banner-content banner-content-bottom">
                                      <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title */}
                                    </div>{/* End .banner-content */}
                                  </a>
                                </div>{/* End .banner */}
                              </div>{/* End .col-md-6 */}
                            </div>{/* End .row */}
                          </div>{/* End .megamenu megamenu-sm */}
                        </li>
                        <li>
                          <a href="#" className="sf-with-ul">Pages</a>
                          <ul>
                            <li>
                              <a href="about.html" className="sf-with-ul">About</a>
                              <ul>
                                <li><a href="about.html">About 01</a></li>
                                <li><a href="about-2.html">About 02</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="contact.html" className="sf-with-ul">Contact</a>
                              <ul>
                                <li><a href="contact.html">Contact 01</a></li>
                                <li><a href="contact-2.html">Contact 02</a></li>
                              </ul>
                            </li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="faq.html">FAQs</a></li>
                            <li><a href="404.html">Error 404</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html" className="sf-with-ul">Blog</a>
                          <ul>
                            <li><a href="blog.html">Classic</a></li>
                            <li><a href="blog-listing.html">Listing</a></li>
                            <li>
                              <a href="#">Grid</a>
                              <ul>
                                <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Masonry</a>
                              <ul>
                                <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Mask</a>
                              <ul>
                                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Single Post</a>
                              <ul>
                                <li><a href="single.html">Default with sidebar</a></li>
                                <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="elements-list.html" className="sf-with-ul">Elements</a>
                          <ul>
                            <li><a href="elements-products.html">Products</a></li>
                            <li><a href="elements-typography.html">Typography</a></li>
                            <li><a href="elements-titles.html">Titles</a></li>
                            <li><a href="elements-banners.html">Banners</a></li>
                            <li><a href="elements-product-category.html">Product Category</a></li>
                            <li><a href="elements-video-banners.html">Video Banners</a></li>
                            <li><a href="elements-buttons.html">Buttons</a></li>
                            <li><a href="elements-accordions.html">Accordions</a></li>
                            <li><a href="elements-tabs.html">Tabs</a></li>
                            <li><a href="elements-testimonials.html">Testimonials</a></li>
                            <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                            <li><a href="elements-portfolio.html">Portfolio</a></li>
                            <li><a href="elements-cta.html">Call to Action</a></li>
                            <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                          </ul>
                        </li>
                      </ul>{/* End .menu */}
                    </nav>{/* End .main-nav */}
                  </div>{/* End .header-left */}
                  <div className="header-right">
                    <div className="header-search">
                      <a href="#" className="search-toggle" role="button" title="Search"><i className="icon-search" /></a>
                      <form action="#" method="get">
                        <div className="header-search-wrapper">
                          <label htmlFor="q" className="sr-only">Search</label>
                          <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                        </div>{/* End .header-search-wrapper */}
                      </form>
                    </div>{/* End .header-search */}
                    <div className="dropdown compare-dropdown">
                      <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                        <i className="icon-random" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <ul className="compare-products">
                          <li className="compare-product">
                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                            <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                          </li>
                          <li className="compare-product">
                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                            <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                          </li>
                        </ul>
                        <div className="compare-actions">
                          <a href="#" className="action-link">Clear All</a>
                          <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right" /></a>
                        </div>
                      </div>{/* End .dropdown-menu */}
                    </div>{/* End .compare-dropdown */}
                    <div className="dropdown cart-dropdown">
                      <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                        <i className="icon-shopping-cart" />
                        <span className="cart-count">2</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-cart-products">
                          <div className="product">
                            <div className="product-cart-details">
                              <h4 className="product-title">
                                <a href="product.html">Beige knitted elastic runner shoes</a>
                              </h4>
                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>
                                x $84.00
                              </span>
                            </div>{/* End .product-cart-details */}
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                              </a>
                            </figure>
                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                          </div>{/* End .product */}
                          <div className="product">
                            <div className="product-cart-details">
                              <h4 className="product-title">
                                <a href="product.html">Blue utility pinafore denim dress</a>
                              </h4>
                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>
                                x $76.00
                              </span>
                            </div>{/* End .product-cart-details */}
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                              </a>
                            </figure>
                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                          </div>{/* End .product */}
                        </div>{/* End .cart-product */}
                        <div className="dropdown-cart-total">
                          <span>Total</span>
                          <span className="cart-total-price">$160.00</span>
                        </div>{/* End .dropdown-cart-total */}
                        <div className="dropdown-cart-action">
                          <a href="cart.html" className="btn btn-primary">View Cart</a>
                          <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                        </div>{/* End .dropdown-cart-total */}
                      </div>{/* End .dropdown-menu */}
                    </div>{/* End .cart-dropdown */}
                  </div>{/* End .header-right */}
                </div>{/* End .container */}
              </div>{/* End .header-middle */}
            </header>{/* End .header */}
            <main className="main">
              <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
                <div className="container">
                  <h1 className="page-title">Checkout<span>Shop</span></h1>
                </div>{/* End .container */}
              </div>{/* End .page-header */}
              <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                  </ol>
                </div>{/* End .container */}
              </nav>{/* End .breadcrumb-nav */}
              <div className="page-content">
                <div className="checkout">
                  <div className="container">
                    <div className="checkout-discount">
                      <form action="#">
                        <input type="text" className="form-control" required id="checkout-discount-input" />
                        <label htmlFor="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
                      </form>
                    </div>{/* End .checkout-discount */}
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-9">
                          <h2 className="checkout-title">Billing Details</h2>{/* End .checkout-title */}
                          <div className="row">
                            <div className="col-sm-6">
                              <label>First Name *</label>
                              <input type="text" className="form-control" required />
                            </div>{/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <label>Last Name *</label>
                              <input type="text" className="form-control" required />
                            </div>{/* End .col-sm-6 */}
                          </div>{/* End .row */}
                          <label>Company Name (Optional)</label>
                          <input type="text" className="form-control" />
                          <label>Country *</label>
                          <input type="text" className="form-control" required />
                          <label>Street address *</label>
                          <input type="text" className="form-control" placeholder="House number and Street name" required />
                          <input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required />
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Town / City *</label>
                              <input type="text" className="form-control" required />
                            </div>{/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <label>State / County *</label>
                              <input type="text" className="form-control" required />
                            </div>{/* End .col-sm-6 */}
                          </div>{/* End .row */}
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Postcode / ZIP *</label>
                              <input type="text" className="form-control" required />
                            </div>{/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <label>Phone *</label>
                              <input type="tel" className="form-control" required />
                            </div>{/* End .col-sm-6 */}
                          </div>{/* End .row */}
                          <label>Email address *</label>
                          <input type="email" className="form-control" required />
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkout-create-acc" />
                            <label className="custom-control-label" htmlFor="checkout-create-acc">Create an account?</label>
                          </div>{/* End .custom-checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkout-diff-address" />
                            <label className="custom-control-label" htmlFor="checkout-diff-address">Ship to a different address?</label>
                          </div>{/* End .custom-checkbox */}
                          <label>Order notes (optional)</label>
                          <textarea className="form-control" cols={30} rows={4} placeholder="Notes about your order, e.g. special notes for delivery" defaultValue={""} />
                        </div>{/* End .col-lg-9 */}
                        <aside className="col-lg-3">
                          <div className="summary">
                            <h3 className="summary-title">Your Order</h3>{/* End .summary-title */}
                            <table className="table table-summary">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><a href="#">Beige knitted elastic runner shoes</a></td>
                                  <td>$84.00</td>
                                </tr>
                                <tr>
                                  <td><a href="#">Blue utility pinafore denimdress</a></td>
                                  <td>$76,00</td>
                                </tr>
                                <tr className="summary-subtotal">
                                  <td>Subtotal:</td>
                                  <td>$160.00</td>
                                </tr>{/* End .summary-subtotal */}
                                <tr>
                                  <td>Shipping:</td>
                                  <td>Free shipping</td>
                                </tr>
                                <tr className="summary-total">
                                  <td>Total:</td>
                                  <td>$160.00</td>
                                </tr>{/* End .summary-total */}
                              </tbody>
                            </table>{/* End .table table-summary */}
                            <div className="accordion-summary" id="accordion-payment">
                              <div className="card">
                                <div className="card-header" id="heading-1">
                                  <h2 className="card-title">
                                    <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                      Direct bank transfer
                                    </a>
                                  </h2>
                                </div>{/* End .card-header */}
                                <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
                                  <div className="card-body">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                  </div>{/* End .card-body */}
                                </div>{/* End .collapse */}
                              </div>{/* End .card */}
                              <div className="card">
                                <div className="card-header" id="heading-2">
                                  <h2 className="card-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                      Check payments
                                    </a>
                                  </h2>
                                </div>{/* End .card-header */}
                                <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
                                  <div className="card-body">
                                    Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
                                  </div>{/* End .card-body */}
                                </div>{/* End .collapse */}
                              </div>{/* End .card */}
                              <div className="card">
                                <div className="card-header" id="heading-3">
                                  <h2 className="card-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                      Cash on delivery
                                    </a>
                                  </h2>
                                </div>{/* End .card-header */}
                                <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
                                  <div className="card-body">Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
                                  </div>{/* End .card-body */}
                                </div>{/* End .collapse */}
                              </div>{/* End .card */}
                              <div className="card">
                                <div className="card-header" id="heading-4">
                                  <h2 className="card-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                      PayPal <small className="float-right paypal-link">What is PayPal?</small>
                                    </a>
                                  </h2>
                                </div>{/* End .card-header */}
                                <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
                                  <div className="card-body">
                                    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                  </div>{/* End .card-body */}
                                </div>{/* End .collapse */}
                              </div>{/* End .card */}
                              <div className="card">
                                <div className="card-header" id="heading-5">
                                  <h2 className="card-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                                      Credit Card (Stripe)
                                      <img src="assets/images/payments-summary.png" alt="payments cards" />
                                    </a>
                                  </h2>
                                </div>{/* End .card-header */}
                                <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
                                  <div className="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
                                  </div>{/* End .card-body */}
                                </div>{/* End .collapse */}
                              </div>{/* End .card */}
                            </div>{/* End .accordion */}
                            <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                              <span className="btn-text">Place Order</span>
                              <span className="btn-hover-text">Proceed to Checkout</span>
                            </button>
                          </div>{/* End .summary */}
                        </aside>{/* End .col-lg-3 */}
                      </div>{/* End .row */}
                    </form>
                  </div>{/* End .container */}
                </div>{/* End .checkout */}
              </div>{/* End .page-content */}
            </main>{/* End .main */}
            <footer className="footer">
              <div className="footer-middle">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget widget-about">
                        <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                        <div className="social-icons">
                          <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                          <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                          <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                          <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                          <a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest" /></a>
                        </div>{/* End .soial-icons */}
                      </div>{/* End .widget about-widget */}
                    </div>{/* End .col-sm-6 col-lg-3 */}
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                        <ul className="widget-list">
                          <li><a href="about.html">About Molla</a></li>
                          <li><a href="#">How to shop on Molla</a></li>
                          <li><a href="#">FAQ</a></li>
                          <li><a href="contact.html">Contact us</a></li>
                          <li><a href="login.html">Log in</a></li>
                        </ul>{/* End .widget-list */}
                      </div>{/* End .widget */}
                    </div>{/* End .col-sm-6 col-lg-3 */}
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
                        <ul className="widget-list">
                          <li><a href="#">Payment Methods</a></li>
                          <li><a href="#">Money-back guarantee!</a></li>
                          <li><a href="#">Returns</a></li>
                          <li><a href="#">Shipping</a></li>
                          <li><a href="#">Terms and conditions</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                        </ul>{/* End .widget-list */}
                      </div>{/* End .widget */}
                    </div>{/* End .col-sm-6 col-lg-3 */}
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                        <ul className="widget-list">
                          <li><a href="#">Sign In</a></li>
                          <li><a href="cart.html">View Cart</a></li>
                          <li><a href="#">My Wishlist</a></li>
                          <li><a href="#">Track My Order</a></li>
                          <li><a href="#">Help</a></li>
                        </ul>{/* End .widget-list */}
                      </div>{/* End .widget */}
                    </div>{/* End .col-sm-6 col-lg-3 */}
                  </div>{/* End .row */}
                </div>{/* End .container */}
              </div>{/* End .footer-middle */}
              <div className="footer-bottom">
                <div className="container">
                  <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>{/* End .footer-copyright */}
                  <figure className="footer-payments">
                    <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                  </figure>{/* End .footer-payments */}
                </div>{/* End .container */}
              </div>{/* End .footer-bottom */}
            </footer>{/* End .footer */}
          </div>{/* End .page-wrapper */}
          <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
          {/* Mobile Menu */}
          <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
          <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
              <span className="mobile-menu-close"><i className="icon-close" /></span>
              <form action="#" method="get" className="mobile-search">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
              </form>
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="/">Home</a>
                    <ul>
                      <li><a href="index-1.html">01 - furniture store</a></li>
                      <li><a href="index-2.html">02 - furniture store</a></li>
                      <li><a href="index-3.html">03 - electronic store</a></li>
                      <li><a href="index-4.html">04 - electronic store</a></li>
                      <li><a href="index-5.html">05 - fashion store</a></li>
                      <li><a href="index-6.html">06 - fashion store</a></li>
                      <li><a href="index-7.html">07 - fashion store</a></li>
                      <li><a href="index-8.html">08 - fashion store</a></li>
                      <li><a href="index-9.html">09 - fashion store</a></li>
                      <li><a href="index-10.html">10 - shoes store</a></li>
                      <li><a href="index-11.html">11 - furniture simple store</a></li>
                      <li><a href="index-12.html">12 - fashion simple store</a></li>
                      <li><a href="index-13.html">13 - market</a></li>
                      <li><a href="index-14.html">14 - market fullwidth</a></li>
                      <li><a href="index-15.html">15 - lookbook 1</a></li>
                      <li><a href="index-16.html">16 - lookbook 2</a></li>
                      <li><a href="index-17.html">17 - fashion store</a></li>
                      <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                      <li><a href="index-19.html">19 - games store</a></li>
                      <li><a href="index-20.html">20 - book store</a></li>
                      <li><a href="index-21.html">21 - sport store</a></li>
                      <li><a href="index-22.html">22 - tools store</a></li>
                      <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                      <li><a href="index-24.html">24 - extreme sport store</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="category.html">Shop</a>
                    <ul>
                      <li><a href="category-list.html">Shop List</a></li>
                      <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                      <li><a href="category.html">Shop Grid 3 Columns</a></li>
                      <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                      <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                      <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                      <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                      <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                      <li><a href="#">Lookbook</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">Product</a>
                    <ul>
                      <li><a href="product.html">Default</a></li>
                      <li><a href="product-centered.html">Centered</a></li>
                      <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                      <li><a href="product-gallery.html">Gallery</a></li>
                      <li><a href="product-sticky.html">Sticky Info</a></li>
                      <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                      <li><a href="product-fullwidth.html">Full Width</a></li>
                      <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About</a>
                        <ul>
                          <li><a href="about.html">About 01</a></li>
                          <li><a href="about-2.html">About 02</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                        <ul>
                          <li><a href="contact.html">Contact 01</a></li>
                          <li><a href="contact-2.html">Contact 02</a></li>
                        </ul>
                      </li>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="faq.html">FAQs</a></li>
                      <li><a href="404.html">Error 404</a></li>
                      <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul>
                      <li><a href="blog.html">Classic</a></li>
                      <li><a href="blog-listing.html">Listing</a></li>
                      <li>
                        <a href="#">Grid</a>
                        <ul>
                          <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                          <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                          <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                          <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                        <ul>
                          <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                          <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                          <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                          <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mask</a>
                        <ul>
                          <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                          <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Single Post</a>
                        <ul>
                          <li><a href="single.html">Default with sidebar</a></li>
                          <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                          <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements-list.html">Elements</a>
                    <ul>
                      <li><a href="elements-products.html">Products</a></li>
                      <li><a href="elements-typography.html">Typography</a></li>
                      <li><a href="elements-titles.html">Titles</a></li>
                      <li><a href="elements-banners.html">Banners</a></li>
                      <li><a href="elements-product-category.html">Product Category</a></li>
                      <li><a href="elements-video-banners.html">Video Banners</a></li>
                      <li><a href="elements-buttons.html">Buttons</a></li>
                      <li><a href="elements-accordions.html">Accordions</a></li>
                      <li><a href="elements-tabs.html">Tabs</a></li>
                      <li><a href="elements-testimonials.html">Testimonials</a></li>
                      <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                      <li><a href="elements-portfolio.html">Portfolio</a></li>
                      <li><a href="elements-cta.html">Call to Action</a></li>
                      <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>{/* End .mobile-nav */}
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
              </div>{/* End .social-icons */}
            </div>{/* End .mobile-menu-wrapper */}
          </div>{/* End .mobile-menu-container */}
          {/* Sign in / Register Modal */}
          <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="icon-close" /></span>
                  </button>
                  <div className="form-box">
                    <div className="form-tab">
                      <ul className="nav nav-pills nav-fill" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="tab-content-5">
                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                          <form action="#">
                            <div className="form-group">
                              <label htmlFor="singin-email">Username or email address *</label>
                              <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                            </div>{/* End .form-group */}
                            <div className="form-group">
                              <label htmlFor="singin-password">Password *</label>
                              <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                            </div>{/* End .form-group */}
                            <div className="form-footer">
                              <button type="submit" className="btn btn-outline-primary-2">
                                <span>LOG IN</span>
                                <i className="icon-long-arrow-right" />
                              </button>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                              </div>{/* End .custom-checkbox */}
                              <a href="#" className="forgot-link">Forgot Your Password?</a>
                            </div>{/* End .form-footer */}
                          </form>
                          <div className="form-choice">
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                              <div className="col-sm-6">
                                <a href="#" className="btn btn-login btn-g">
                                  <i className="icon-google" />
                                  Login With Google
                                </a>
                              </div>{/* End .col-6 */}
                              <div className="col-sm-6">
                                <a href="#" className="btn btn-login btn-f">
                                  <i className="icon-facebook-f" />
                                  Login With Facebook
                                </a>
                              </div>{/* End .col-6 */}
                            </div>{/* End .row */}
                          </div>{/* End .form-choice */}
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                          <form action="#">
                            <div className="form-group">
                              <label htmlFor="register-email">Your email address *</label>
                              <input type="email" className="form-control" id="register-email" name="register-email" required />
                            </div>{/* End .form-group */}
                            <div className="form-group">
                              <label htmlFor="register-password">Password *</label>
                              <input type="password" className="form-control" id="register-password" name="register-password" required />
                            </div>{/* End .form-group */}
                            <div className="form-footer">
                              <button type="submit" className="btn btn-outline-primary-2">
                                <span>SIGN UP</span>
                                <i className="icon-long-arrow-right" />
                              </button>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                              </div>{/* End .custom-checkbox */}
                            </div>{/* End .form-footer */}
                          </form>
                          <div className="form-choice">
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                              <div className="col-sm-6">
                                <a href="#" className="btn btn-login btn-g">
                                  <i className="icon-google" />
                                  Login With Google
                                </a>
                              </div>{/* End .col-6 */}
                              <div className="col-sm-6">
                                <a href="#" className="btn btn-login  btn-f">
                                  <i className="icon-facebook-f" />
                                  Login With Facebook
                                </a>
                              </div>{/* End .col-6 */}
                            </div>{/* End .row */}
                          </div>{/* End .form-choice */}
                        </div>{/* .End .tab-pane */}
                      </div>{/* End .tab-content */}
                    </div>{/* End .form-tab */}
                  </div>{/* End .form-box */}
                </div>{/* End .modal-body */}
              </div>{/* End .modal-content */}
            </div>{/* End .modal-dialog */}
          </div>{/* End .modal */}
          {/* Plugins JS File */}
          {/* Main JS File */}
          {/* molla/checkout.html  22 Nov 2019 09:55:06 GMT */}
        </div>
      );
    }
  
export default Checkout;