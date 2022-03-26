import React from 'react'

function BuscadorHome() {
  return (
    <>
      <div id="sub_content">
        <h1>Order Takeaway or Delivery Food</h1>
        <form method="post" action="list_page.html">
          <div id="custom-search-input">
            <div class="input-group ">
              <input type="text" class=" search-query" placeholder="Cual es tu antojo?" />
              <span class="input-group-btn">
                <input type="submit" class="btn_search" value="" />
              </span>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default BuscadorHome