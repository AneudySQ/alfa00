import React from 'react'
import TopCard from './TopCard'



function Toprestaurantes() {
    return (
        <>
            <div className="white_bg">
                <div className="container margin_60">
                    <div className="main_title">
                        <h2 className="nomargin_top">Restaurantes mas populares</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <TopCard />
                            <TopCard />
                            <TopCard />
                        </div>
                        <div className="col-lg-6">
                            <TopCard />
                            <TopCard />
                            <TopCard />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Toprestaurantes