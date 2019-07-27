import React from 'react'
import Roll, { ItemRoll } from 'nm-roll-lib'

const items = [
  {
    url:
      'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/414136',
    id: '1'
  },
  {
    url:
      'https://statics.sportskeeda.com/editor/2018/10/30b8f-15408215508963-800.jpg',
    id: '2'
  },
  {
    url:
      'https://cdn.vox-cdn.com/thumbor/sm--3gx1zOlIo4StXiSYrtFaZPE=/0x0:3600x2400/1200x800/filters:focal(1247x273:1823x849)/cdn.vox-cdn.com/uploads/chorus_image/image/64674065/usa_today_12999006.0.jpg',
    id: '3'
  }
]

export default () => {
  return (
    <div>
      <Roll
        numberOfItems={items.length}
        width={600}
        height={600}
        render={currentIndex =>
          items.map(({ url, id }, index) => (
            <ItemRoll
              width={600}
              source={url}
              id={id}
              key={id}
              isCurrent={index === currentIndex}
              isPrevious={
                index ===
                (currentIndex - 1 < 0
                  ? items.length - 1
                  : currentIndex - 1)
              }
            />
          ))
        }
      />
    </div>
  )
}
