import React from 'react'
import BuscadorHome from './BuscadorHome'

function VideoPortada() {
  return (
    <div>
          <section class="header-video" >
              <div className='hero-container '>
                  <video src='/videos/video-1.mp4' className='video' autoPlay loop muted />           
              <BuscadorHome />
              </div>
          </section>
    </div>
  )
}

export default VideoPortada