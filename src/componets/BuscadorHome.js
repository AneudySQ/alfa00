import React from 'react'

function BuscadorHome() {
  return (
    <>
        <div>
              <h1 className='home_title'>Order Takeaway or Delivery Food</h1>
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
        </div>

    </>
  )
}

export default BuscadorHome