import React from 'react'

function BuscadorHome() {
  return (
    <>
          <form method="post" action="list_page.html">
              <div id="custom-search-input">
                  <div className="input-group">
                      <input type="text" className=" search-query" placeholder="Your Address or postal code"/>
                          <span className="input-group-btn">
                              <input type="submit" className="btn_search" value=""/>
                          </span>
                  </div>
              </div>
          </form>

    </>
  )
}

export default BuscadorHome