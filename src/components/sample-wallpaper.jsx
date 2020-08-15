import React from 'react'
import hulk from "../img/hulk-1.jpg"
import venom1 from "../img/venom-1.jpg"
import venom2 from "../img/venom-2.jpg"
import Wallpaper from './wallpaper'

function SampleWallpaper() {
    return (
        // smaller components
        <div className="sample-wallpaper">
            <Wallpaper src={venom1} alt = "wallpaper #1"/>
            <Wallpaper src={hulk} alt = "wallpaper #2"/>
            <Wallpaper src={venom2} alt = "wallpaper #3"/>

      </div>
    )
}

export default SampleWallpaper
