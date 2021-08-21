import React, { Component } from 'react';
import axios from 'axios';
class Dashboard extends Component
{
  state = {
    customer_name: '',
    product_id: '',
    product_catagory: '',
    product_review: '',
    
  }

  handleInput = (e) => {
   // alert ("123");
        this.setState({
          [e.target.name]: e.target.value
        });
  }

  saveReview = async (e) => {
      e.preventDefault();

      alert ("Are you Submit Form");
      const res = await axios.post('http://localhost/React%20Final%20project/ERP-web-application/public/api/reviewdashboard', this.state);
      if(res.data.status === 200)
      {
          alert(res.data.message);
          this.setState({
            customer_name: '',
            product_id: '',
            product_catagory: '',
            product_review: '',
    

          });
      }
  }
  render(){
    return (
      <div>
        {/* molla/dashboard.html  22 Nov 2019 10:03:13 GMT */}
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
          
                  <div className="flex items-center mr-6"><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2875 3.75C12.02 3.89292 12.6933 4.25119 13.221 4.77895C13.7488 5.30671 14.1071 5.97995 14.25 6.7125L11.2875 3.75ZM11.2875 0.75C12.8094 0.919077 14.2287 1.60063 15.3122 2.68276C16.3957 3.76488 17.079 5.18326 17.25 6.705L11.2875 0.75ZM16.5 12.69V14.94C16.5008 15.1489 16.458 15.3556 16.3744 15.547C16.2907 15.7384 16.168 15.9102 16.014 16.0514C15.8601 16.1926 15.6784 16.3001 15.4805 16.367C15.2827 16.4339 15.073 16.4588 14.865 16.44C12.5571 16.1892 10.3402 15.4006 8.39248 14.1375C6.58035 12.986 5.04398 11.4496 3.89248 9.6375C2.62496 7.6809 1.83616 5.45325 1.58998 3.135C1.57124 2.9276 1.59589 2.71857 1.66236 2.52122C1.72882 2.32387 1.83566 2.14252 1.97605 1.98872C2.11645 1.83491 2.28733 1.71203 2.47782 1.62789C2.66831 1.54375 2.87424 1.5002 3.08248 1.5H5.33248C5.69646 1.49642 6.04932 1.62531 6.3253 1.86265C6.60128 2.09999 6.78154 2.42959 6.83248 2.79C6.92745 3.51005 7.10357 4.21705 7.35748 4.8975C7.45839 5.16594 7.48023 5.45769 7.42041 5.73816C7.36059 6.01863 7.22163 6.27608 7.01998 6.48L6.06748 7.4325C7.13515 9.31016 8.68982 10.8648 10.5675 11.9325L11.52 10.98C11.7239 10.7784 11.9813 10.6394 12.2618 10.5796C12.5423 10.5198 12.834 10.5416 13.1025 10.6425C13.7829 10.8964 14.4899 11.0725 15.21 11.1675C15.5743 11.2189 15.907 11.4024 16.1449 11.6831C16.3827 11.9638 16.5091 12.3222 16.5 12.69Z" stroke="#C9151B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg><a className="ml-2" href="tel:09638111666">09638118222</a></div>
                  <div className="flex items-center"><svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.00001 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3.00001C2.17501 15 1.50001 14.325 1.50001 13.5V4.5C1.50001 3.675 2.17501 3 3.00001 3Z" stroke="#C9151B" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 4.5L9.00001 9.75L1.50001 4.5" stroke="#C9151B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg><a href="mailto:support@evaly.com.bd" className="ml-2">support@erp.com.bd</a></div>
                </div>{/* End .header-left */}
                <div className="header-right">
                  <ul className="top-menu">
                    <li>
                      <a href="#">Links</a>
                      <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/home"><i className="icon-user" />Home</a></li>
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
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo.png" alt="Molla Logo" width={105} height={25} />
                  </a>
                  <nav className="main-nav">
                    <ul className="menu sf-arrows">
                      <li className="megamenu-container active">
                        <a href="/home" className="sf-with-ul">Home</a>
                      </li>
                      <li>
                        <a href="/shop" className="sf-with-ul"> All Shops</a>
                      </li>
                      <li>
                        <a href="/product" className="sf-with-ul">Products</a>
                      </li>
                      <li>
                        <a href="/campaigns" className="sf-with-ul">Campaigns</a>
                      </li>
                      <li>
                        <a href="/contact" className="sf-with-ul">Contact</a>
                      </li>
                      <li>
                        <a href="/about" className="sf-with-ul">About</a>
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
                <h1 className="page-title">My Account<span>Shop</span></h1>
              </div>{/* End .container */}
            </div>{/* End .page-header */}
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Shop</a></li>
                  <li className="breadcrumb-item active" aria-current="page">My Account</li>
                </ol>
              </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}
            <div className="page-content">
              <div className="dashboard">
                <div className="container">
                  <div className="row">
                    <aside className="col-md-4 col-lg-3">
                      <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="tab-dashboard-link" data-toggle="tab" href="#tab-dashboard" role="tab" aria-controls="tab-dashboard" aria-selected="true">Basic Information</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="tab-address-link" data-toggle="tab" href="#tab-address" role="tab" aria-controls="tab-address" aria-selected="false">Adresses</a>
                        </li>
                        <li className="nav-item">
                          {/* <a className="nav-link" id="tab-order-link" data-toggle="tab" href="#tab-order" {{-- order list --}} role="tab" aria-controls="tab-order" aria-selected="false">OrderList</a> */}
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="tab-review-link" data-toggle="tab" href="#tab-review" role="tab" aria-controls="tab-review" aria-selected="false">Review</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="tab-account-link" data-toggle="tab" href="#" role="tab" aria-controls="tab-account" aria-selected="false">Change Password</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/home">Sign Out</a>
                        </li>
                      </ul>
                    </aside>{/* End .col-lg-3 */}
                  
                    <div className="col-lg-6">
                  <h2 className="title mb-1">Customer Review Page</h2>{/* End .title mb-2 */}
                  <p className="mb-2">Use the form below to get in touch with the sales team</p>
                  <form onSubmit={this.saveReview}>

                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="cname" className="sr-only">Name</label>
                        <input type="text" className="form-control"  placeholder="Name *" name="customer_name" onChange={this.handleInput} value={this.state.customer_name} />

                      </div>{/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label htmlFor="cemail" className="sr-only">Email</label>
                        <input type="text" className="form-control"  placeholder="Product Id *" name="product_id" onChange={this.handleInput} value={this.state.product_id} />

                      </div>{/* End .col-sm-6 */}
                    </div>{/* End .row */}
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="cphone" className="sr-only">Phone</label>
                        <input type="tel" className="form-control"  placeholder="Catagory" name="product_catagory" onChange={this.handleInput} value={this.state.product_catagory} />

                      </div>{/* End .col-sm-6 */}
                      
                    </div>{/* End .row */}
                    <label htmlFor="cmessage" className="sr-only">Product Review</label>
                    <textarea className="form-control" cols={30} rows={4} id="cmessage" name="product_review" placeholder="Type your Review *" onChange={this.handleInput} value={this.state.product_review} />

                    <br />
                    <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                      <span>SUBMIT</span>
                      <i className="icon-long-arrow-right" />
                    </button>
                  </form>{/* End .contact-form */}
                </div>{/* End .col-lg-6 */}

                    <div className="col-md-8 col-lg-9">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel" aria-labelledby="tab-dashboard-link">
                          <p>Hello <span className="font-weight-normal text-dark">User</span> (not <span className="font-weight-normal text-dark">User</span>? <a href="#">Log
                              out</a>)
                            <br />
                            From your account dashboard you can view your <a href="#tab-orders" className="tab-trigger-link link-underline">recent orders</a>, manage your
                            <a href="#tab-address" className="tab-trigger-link">shipping and billing
                              addresses</a>, and <a href="#tab-account" className="tab-trigger-link">edit
                              your password and account details</a>.
                          </p>
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
                          <p>No order has been made yet.</p>
                          <a href="category.html" className="btn btn-outline-primary-2"><span>order list</span><i className="icon-long-arrow-right" /></a>
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                          <p>The following addresses will be used on the checkout page by default.</p>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">Billing Address</h3>
                                  {/* End .card-title */}
                                  <p>User Name<br />
                                    User Company<br />
                                    John str<br />
                                    New York, NY 10001<br />
                                    1-234-987-6543<br />
                                    yourmail@mail.com<br />
                                    <a href="#">Edit <i className="icon-edit" /></a>
                                  </p>
                                </div>{/* End .card-body */}
                              </div>{/* End .card-dashboard */}
                            </div>{/* End .col-lg-6 */}
                          </div>{/* End .row */}
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="tab-downloads" role="tabpanel" aria-labelledby="tab-downloads-link">
                          <p>No downloads available yet.</p>
                          <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right" /></a>
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="tab-review" role="tabpanel" aria-labelledby="tab-review-link">
                          <p>Fill-up your review.</p>
                          <div className="row">
                            <div className="col-lg-10">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">Customer Review Pages</h3>
                                  {/* End .card-title */}
                                  <form action="{{ route('review')}}" method="post">
                                    @csrf
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <label htmlFor="cname" className="sr-only">Name</label>
                                        <input type="text" className="form-control" id="cname" placeholder="Type your Name *" name="customer_name" />
                                        {'{'}{'{'}-- @error('customer_name')
                                        {'{'}{'{'} $message {'}'}{'}'}
                                        @enderror --{'}'}{'}'}
                                      </div>{/* End .col-sm-6 */}
                                      <div className="col-sm-6">
                                        <label htmlFor="cemail" className="sr-only">Product id</label>
                                        <input type="text" className="form-control" id="cemail" placeholder="Type your product Id *" name="product_id" />
                                        {'{'}{'{'}-- @error('product_id')
                                        {'{'}{'{'} $message {'}'}{'}'}
                                        @enderror --{'}'}{'}'}
                                      </div>{/* End .col-sm-6 */}
                                    </div>{/* End .row */}
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <label htmlFor="cphone" className="sr-only">Product Catagory</label>
                                        <input type="tel" className="form-control" id="cphone" placeholder="Type your product Catagory" name="product_catagory" />
                                        {'{'}{'{'}-- @error('c_phone')
                                        {'{'}{'{'} $message {'}'}{'}'}
                                        @enderror --{'}'}{'}'}
                                      </div>{/* End .col-sm-6 */}
                                    </div>{/* End .row */}
                                    <label htmlFor="cmessage" className="sr-only">Product Review</label>
                                    <textarea className="form-control" cols={30} rows={4} id="cmessage" name="product_review" placeholder="Type your Review *" defaultValue={""} />
                                    {'{'}{'{'}-- @error('c_message')
                                    {'{'}{'{'} $message {'}'}{'}'}
                                    @enderror --{'}'}{'}'}
                                    <br />
                                    <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                      <span>SUBMIT</span>
                                      <i className="icon-long-arrow-right" />
                                    </button>
                                  </form>{/* End .contact-form */}
                                </div>{/* End .card-body */}
                              </div>{/* End .card-dashboard */}
                            </div>{/* End .col-lg-6 */}
                          </div>{/* End .row */}
                        </div>{/* .End .tab-pane */}
                        {/* order list */}
                        <div className="tab-pane fade" id="tab-order" role="tabpanel" aria-labelledby="tab-order-link">
                          <p>There are all Orders</p>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">Show All Order Lists</h3>
                                  {/* End .card-title */}
                                  <div className="row">
                                    @foreach ($hp as $row)
                                    <a className="banner-link" href="{{ route('productlist', $row->id) }}">
                                    </a><h3 className="banner-title"><a className="banner-link" href="{{ route('productlist', $row->id) }}">
                                        <table border={1} cellPadding={5} cellSpacing={0}>
                                          <tbody><tr><td colSpan={4} align="center"><b>Order Number.</b>{'{'}{'{'} $row-&gt;id {'}'}{'}'}</td></tr>
                                            <tr>
                                              <td>Customer Id</td><td>Customer Name</td><td>Product Id</td><td>Product Name</td>
                                            </tr>
                                            <tr>
                                              <td>{'{'}{'{'} $row-&gt;customer_id {'}'}{'}'}</td><td>{'{'}{'{'} $row-&gt;customer_name {'}'}{'}'}</td><td>{'{'}{'{'} $row-&gt;product_id {'}'}{'}'}</td><td>{'{'}{'{'} $row-&gt;product_id {'}'}{'}'}</td>
                                            </tr>
                                          </tbody></table>
                                        <br />
                                      </a>{/* End .banner-link */}
                                      @endforeach
                                    </h3></div>{/* End .row */}
                                </div>{/* End .card-body */}
                              </div>{/* End .card-dashboard */}
                            </div>{/* End .col-lg-6 */}
                          </div>{/* End .row */}
                        </div>{/* .End .tab-pane */}
                        {/*end order list*/}
                        <div className="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                          <p>The following addresses will be used on the checkout page by default.</p>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">Billing Address</h3>
                                  {/* End .card-title */}
                                  <p>User Name<br />
                                    User Company<br />
                                    John str<br />
                                    New York, NY 10001<br />
                                    1-234-987-6543<br />
                                    yourmail@mail.com<br />
                                    <a href="#">Edit <i className="icon-edit" /></a>
                                  </p>
                                </div>{/* End .card-body */}
                              </div>{/* End .card-dashboard */}
                            </div>{/* End .col-lg-6 */}
                            <div className="col-lg-6">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">Shipping Address</h3>
                                  {/* End .card-title */}
                                  <p>You have not set up this type of address yet.<br />
                                    <a href="#">Edit <i className="icon-edit" /></a>
                                  </p>
                                </div>{/* End .card-body */}
                              </div>{/* End .card-dashboard */}
                            </div>{/* End .col-lg-6 */}
                          </div>{/* End .row */}
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="tab-account" role="tabpanel" aria-labelledby="tab-account-link">
                          <form action="#">
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
                            <label>Display Name *</label>
                            <input type="text" className="form-control" required />
                            <small className="form-text">This will be how your name will be displayed in the
                              account section and in reviews</small>
                            <label>Email address *</label>
                            <input type="email" className="form-control" required />
                            <label>Current password (leave blank to leave unchanged)</label>
                            <input type="password" className="form-control" />
                            <label>New password (leave blank to leave unchanged)</label>
                            <input type="password" className="form-control" />
                            <label>Confirm new password</label>
                            <input type="password" className="form-control mb-2" />
                            <button type="submit" className="btn btn-outline-primary-2">
                              <span>SAVE CHANGES</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                          </form>
                        </div>{/* .End .tab-pane */}
                      </div>
                    </div>{/* End .col-lg-9 */}
                  </div>{/* End .row */}
                </div>{/* End .container */}
              </div>{/* End .dashboard */}
            </div>{/* End .page-content */}
          </main>{/* End .main */}
          <footer className="footer">
            <div className="footer-middle">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget widget-about">
                      <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                      <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate
                        magna eros eu erat. </p>
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
                <p className="footer-copyright">Copyright © 2021 Molla Store. All Rights Reserved.</p>
                {/* End .footer-copyright */}
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
                  <a href="index.html">Home</a>
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
                              <label className="custom-control-label" htmlFor="signin-remember">Remember
                                Me</label>
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
                              <label className="custom-control-label" htmlFor="register-policy">I agree to the
                                <a href="#">privacy policy</a> *</label>
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
        {/* molla/dashboard.html  22 Nov 2019 10:03:13 GMT */}
      </div>
    );
  }
}


  
    export default Dashboard;