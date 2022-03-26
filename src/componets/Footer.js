import React from 'react'

function Footer() {
  return (
          <footer>
              <div className='container'>
              <div className='row m-10-hor '>
                  <div className='col-md-4'>
                      <div className='footer-col'>
                          <div className='heading'>
                              <h2 className='font-weight-bold '>Sobre Nosotros</h2>
                          </div>
                          <div className='content'>
                              <p>Somos una guia de lugares gastronomica en Santo Domingo</p>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-2'>
                      <div className='footer-col'>
                          <div className='heading'>
                              Usefull link
                          </div>
                          <div className='content'>
                              <div className='link'>Frequently Asked</div>
                              <div className='link'>Terms & Conditions</div>
                              <div className='link'>Help Center</div>
                              <div className='link'>Contact Us</div>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-2'>
                      <div className='footer-col'>
                          <div className='heading'>
                              Features
                          </div>
                          <div className='content'>
                              <div className='link'>Career</div>
                              <div className='link'>Brand Identity</div>
                              <div className='link'>Investment</div>
                              <div className='link'>Agency Patner</div>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-4'>
                      <div className='footer-col'>
                          <div className='heading'>
                              Follow Us
                          </div>
                          <div className='content'>
                              <p>Malesuada id, tempor eu, gravida id, odio.
                                  Maecenas suscipit.</p>
                              <div className='socialicon'>
                                  <i className="fa fa-facebook-f"></i>
                              </div>
                              <div className='socialicon'>
                                  <i className="fa fa-linkedin"></i>
                              </div>
                              <div className='socialicon'>
                                  <i className="fa fa-twitter"></i>
                              </div>
                              <div className='socialicon'>
                                  <i className="fa  fa-instagram"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              </div>
          </footer>

  )
}

export default Footer