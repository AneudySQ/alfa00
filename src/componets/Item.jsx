import React from 'react'

function StripMenuItems() {

  return (
    <div className='cuadro'>

        <div class="menu-item-section clearfix">
          <h4>1</h4>
          <div><a href="#0"><i class="icon_plus_alt"></i></a><a href="#0"><i class="icon_minus_alt"></i></a>
          </div>
        </div>

        <div class="strip_menu_items">
          <div class="row">
            <div class="col-md-3">
              <div class="menu-item-pic dropzone">
                <input name="file" type="file" />
                <div class="dz-default dz-message"><span>Click or Drop<br />Images Here</span>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <label>Title</label>
                    <input type="text" name="menu_item_title" class="form-control" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Price</label>
                    <input type="text" name="menu_item_title_price" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Short description</label>
                <input type="text" name="menu_item_description" class="form-control" />
              </div>


            </div>
          </div>
        </div>
      </div>

 
  )
}

export default StripMenuItems