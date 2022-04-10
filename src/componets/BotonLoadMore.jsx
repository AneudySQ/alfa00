import React from 'react'
import { Link } from 'react-router-dom'

function BotonLoadMore() {
  return (
    <div>
      <Link to="#0" class="load_more_bt wow fadeIn" data-wow-delay="0.2s">Load more...</Link>
    </div>
  )
}

export default BotonLoadMore