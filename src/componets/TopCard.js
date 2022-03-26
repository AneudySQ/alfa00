import React from 'react'

function TopCard() {
  return (
    <>
          <a href="detail_page.html" className="strip_list">
              <div className="ribbon_1">Popular</div>
              <div className="desc">
                  <div className="thumb_strip">
                      <img src=".\images\img\thumb_restaurant.jpg" alt="" />
                  </div>
                  <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                  </div>
                  <h3>Taco Mexican</h3>
                  <div className="type">
                      Mexican / American
                  </div>
                  <div className="location">
                      135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                  </div>
                  <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                  </ul>
              </div>
          </a>

    </>
  )
}

export default TopCard