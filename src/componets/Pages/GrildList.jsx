import React from 'react'
import BotonLoadMore from '../BotonLoadMore'
import PortadaImagen from '../PortadaImagen'



function GrildList() {
  return (
    <>
        <PortadaImagen />

      <div id="position">
        <div className="container">
          <ul>
            <li><a href="#0">Home</a></li>
            <li><a href="#0">Category</a></li>
            <li>Page active</li>
          </ul>
          <a href="#0" className="search-overlay-menu-btn"><i className="icon-search-6"></i> Search</a>
        </div>
      </div> 

      <div className="collapse" id="collapseMap">
        <div id="map" className="map"></div>
      </div>

   
      <div className="container margin_60_35">
        <div className="row">

          <div className="col-lg-3">
            <p>
              <a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
            </p>
            <div id="filters_col">
              <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters <i className="icon-plus-1 float-right"></i></a>
              <div className="collapse show" id="collapseFilters">
                <div className="filter_type">
                  <h6>Distance</h6>
                  <input type="text" id="range" value="" name="range"/>
                    <h6>Type</h6>
                    <ul>
                      <li><label><input type="checkbox" checked className="icheck"/>All <small>(49)</small></label></li>
                      <li><label><input type="checkbox" className="icheck"/>American <small>(12)</small></label><i className="color_1"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Chinese <small>(5)</small></label><i className="color_2"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Hamburger <small>(7)</small></label><i className="color_3"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Fish <small>(1)</small></label><i className="color_4"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Mexican <small>(49)</small></label><i className="color_5"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Pizza <small>(22)</small></label><i className="color_6"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Sushi <small>(43)</small></label><i className="color_7"></i></li>
                    </ul>
                </div>
                <div className="filter_type">
                  <h6>Rating</h6>
                  <ul>
                    <li><label><input type="checkbox" className="icheck"/><span className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" className="icheck"/><span className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" className="icheck"/><span className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" className="icheck"/><span className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" className="icheck"/><span className="rating">
                      <i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
                    </span></label></li>
                  </ul>
                </div>
                <div className="filter_type">
                  <h6>Options</h6>
                  <ul className="nomargin">
                    <li><label><input type="checkbox" className="icheck"/>Delivery</label></li>
                    <li><label><input type="checkbox" className="icheck"/>Take Away</label></li>
                    <li><label><input type="checkbox" className="icheck"/>Distance 10Km</label></li>
                    <li><label><input type="checkbox" className="icheck"/>Distance 5Km</label></li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>

          

          <div className="col-lg-9">

            <div id="tools">
              <div className="row">
                <div className="col-md-3 col-sm-4 col-5">
                  <div className="styled-select">
                    <select name="sort_rating" id="sort_rating">
                      <option value="" selected>Sort by ranking</option>
                      <option value="lower">Lowest ranking</option>
                      <option value="higher">Highest ranking</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-9 col-sm-8 col-7">
                  <a href="list_page.html" className="bt_filters"><i className="icon-list"></i></a>
                </div>
              </div>
            </div> 

            <div className="row">
              <div className="col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <a className="strip_list grid" href="detail_page.html">
                  <div className="ribbon_1">Popular</div>
                  <div className="desc">
                    <div className="thumb_strip">
                      <img src="img/thumb_restaurant.jpg" alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Taco Mexican</h3>
                    <div className="type">
                      Mexican / American
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6 wow zoomIn" data-wow-delay="0.2s">
                <a className="strip_list grid" href="detail_page.html">
                  <div className="ribbon_1">Popular</div>
                  <div className="desc">
                    <div className="thumb_strip">
                      <img src="img/thumb_restaurant_2.jpg" alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Naples Pizza</h3>
                    <div className="type">
                      Italian / Pizza
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <a className="strip_list grid" href="detail_page.html">
                  <div className="ribbon_1">Popular</div>
                  <div className="desc">
                    <div className="thumb_strip">
                      <img src="img/thumb_restaurant_3.jpg" alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Japan Food</h3>
                    <div className="type">
                      Sushi / Japanese
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <a className="strip_list grid" href="detail_page.html">
                  <div className="ribbon_1">Popular</div>
                  <div className="desc">
                    <div className="thumb_strip">
                      <img src="img/thumb_restaurant_3.jpg" alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Japan Food</h3>
                    <div className="type">
                      Sushi / Japanese
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 wow zoomIn" data-wow-delay="0.5s">
                <a className="strip_list grid" href="detail_page.html">
                  <div className="desc">
                    <div className="thumb_strip">
                      <img src="img/thumb_restaurant_5.jpg" alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Dragon Tower</h3>
                    <div className="type">
                      Chinese / Thai
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <a className="strip_list grid" href="detail_page.html">
                  <div className="desc">
                    <div className="thumb_strip">
                      <img src="img/thumb_restaurant_6.jpg" alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>China Food</h3>
                    <div className="type">
                      Chinese / Vietnam
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
            <BotonLoadMore />
          </div>

        </div>
      </div>

      


    </>
  )
}

export default GrildList