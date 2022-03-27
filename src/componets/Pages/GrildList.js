import React from 'react'
import PortadaImagen from '../PortadaImagen'


function GrildList() {
  return (
    <>
        <PortadaImagen />

      <div id="position">
        <div class="container">
          <ul>
            <li><a href="#0">Home</a></li>
            <li><a href="#0">Category</a></li>
            <li>Page active</li>
          </ul>
          <a href="#0" class="search-overlay-menu-btn"><i class="icon-search-6"></i> Search</a>
        </div>
      </div> 

      <div class="collapse" id="collapseMap">
        <div id="map" class="map"></div>
      </div>

   
      <div class="container margin_60_35">
        <div class="row">

          <div class="col-lg-3">
            <p>
              <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
            </p>
            <div id="filters_col">
              <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters <i class="icon-plus-1 float-right"></i></a>
              <div class="collapse show" id="collapseFilters">
                <div class="filter_type">
                  <h6>Distance</h6>
                  <input type="text" id="range" value="" name="range"/>
                    <h6>Type</h6>
                    <ul>
                      <li><label><input type="checkbox" checked class="icheck"/>All <small>(49)</small></label></li>
                      <li><label><input type="checkbox" class="icheck"/>American <small>(12)</small></label><i class="color_1"></i></li>
                      <li><label><input type="checkbox" class="icheck"/>Chinese <small>(5)</small></label><i class="color_2"></i></li>
                      <li><label><input type="checkbox" class="icheck"/>Hamburger <small>(7)</small></label><i class="color_3"></i></li>
                      <li><label><input type="checkbox" class="icheck"/>Fish <small>(1)</small></label><i class="color_4"></i></li>
                      <li><label><input type="checkbox" class="icheck"/>Mexican <small>(49)</small></label><i class="color_5"></i></li>
                      <li><label><input type="checkbox" class="icheck"/>Pizza <small>(22)</small></label><i class="color_6"></i></li>
                      <li><label><input type="checkbox" class="icheck"/>Sushi <small>(43)</small></label><i class="color_7"></i></li>
                    </ul>
                </div>
                <div class="filter_type">
                  <h6>Rating</h6>
                  <ul>
                    <li><label><input type="checkbox" class="icheck"/><span class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" class="icheck"/><span class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" class="icheck"/><span class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" class="icheck"/><span class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i>
                    </span></label></li>
                    <li><label><input type="checkbox" class="icheck"/><span class="rating">
                      <i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i>
                    </span></label></li>
                  </ul>
                </div>
                <div class="filter_type">
                  <h6>Options</h6>
                  <ul class="nomargin">
                    <li><label><input type="checkbox" class="icheck"/>Delivery</label></li>
                    <li><label><input type="checkbox" class="icheck"/>Take Away</label></li>
                    <li><label><input type="checkbox" class="icheck"/>Distance 10Km</label></li>
                    <li><label><input type="checkbox" class="icheck"/>Distance 5Km</label></li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>

          

          <div class="col-lg-9">

            <div id="tools">
              <div class="row">
                <div class="col-md-3 col-sm-4 col-5">
                  <div class="styled-select">
                    <select name="sort_rating" id="sort_rating">
                      <option value="" selected>Sort by ranking</option>
                      <option value="lower">Lowest ranking</option>
                      <option value="higher">Highest ranking</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-9 col-sm-8 col-7">
                  <a href="list_page.html" class="bt_filters"><i class="icon-list"></i></a>
                </div>
              </div>
            </div> 

            <div class="row">
              <div class="col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <a class="strip_list grid" href="detail_page.html">
                  <div class="ribbon_1">Popular</div>
                  <div class="desc">
                    <div class="thumb_strip">
                      <img src="img/thumb_restaurant.jpg" alt=""/>
                    </div>
                    <div class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </div>
                    <h3>Taco Mexican</h3>
                    <div class="type">
                      Mexican / American
                    </div>
                    <div class="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span class="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i class="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6 wow zoomIn" data-wow-delay="0.2s">
                <a class="strip_list grid" href="detail_page.html">
                  <div class="ribbon_1">Popular</div>
                  <div class="desc">
                    <div class="thumb_strip">
                      <img src="img/thumb_restaurant_2.jpg" alt=""/>
                    </div>
                    <div class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </div>
                    <h3>Naples Pizza</h3>
                    <div class="type">
                      Italian / Pizza
                    </div>
                    <div class="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span class="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i class="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <a class="strip_list grid" href="detail_page.html">
                  <div class="ribbon_1">Popular</div>
                  <div class="desc">
                    <div class="thumb_strip">
                      <img src="img/thumb_restaurant_3.jpg" alt=""/>
                    </div>
                    <div class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </div>
                    <h3>Japan Food</h3>
                    <div class="type">
                      Sushi / Japanese
                    </div>
                    <div class="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span class="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i class="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6 wow zoomIn" data-wow-delay="0.4s">
                <a class="strip_list grid" href="detail_page.html">
                  <div class="desc">
                    <div class="thumb_strip">
                      <img src="img/thumb_restaurant_4.jpg" alt=""/>
                    </div>
                    <div class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </div>
                    <h3>Sushi Gold</h3>
                    <div class="type">
                      Sushi / Japanese
                    </div>
                    <div class="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span class="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i class="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 wow zoomIn" data-wow-delay="0.5s">
                <a class="strip_list grid" href="detail_page.html">
                  <div class="desc">
                    <div class="thumb_strip">
                      <img src="img/thumb_restaurant_5.jpg" alt=""/>
                    </div>
                    <div class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </div>
                    <h3>Dragon Tower</h3>
                    <div class="type">
                      Chinese / Thai
                    </div>
                    <div class="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span class="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i class="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <a class="strip_list grid" href="detail_page.html">
                  <div class="desc">
                    <div class="thumb_strip">
                      <img src="img/thumb_restaurant_6.jpg" alt=""/>
                    </div>
                    <div class="rating">
                      <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                    </div>
                    <h3>China Food</h3>
                    <div class="type">
                      Chinese / Vietnam
                    </div>
                    <div class="location">
                      135 Newtownards Road, Belfast, BT4. <br/><span class="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i class="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
            <a href="#0" class="load_more_bt wow fadeIn" data-wow-delay="0.2s">Load more...</a>
          </div>

        </div>
      </div>

      


    </>
  )
}

export default GrildList