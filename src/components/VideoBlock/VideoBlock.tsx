import React, { ReactChild } from "react"

import "./VideoBlock.scss"
import cn from "classnames"
import { SimpleButton } from "../SimpleButton"

type Props = {
  title: string;
  text: ReactChild | string;
  link?: string;
  bg: string;
  video: string;
}

export const VideoBlock = ({ text, bg, link, title, video }: Props): JSX.Element => {
  return (
    <div
      className={cn("video-block", `video-block-${bg}`)}
      style={{
        backgroundImage:
          bg === "1"
            ? "url(https://public.nftstatic.com/static/nft/res/cf97df0b881249db93ca8fdab9e8122e.png)"
            : "url(https://public.nftstatic.com/static/nft/res/21d8d8e126794da09d62b775956ebbcc.png)",
      }}
    >
      <div className="video-block-text">
        <h3>{title}</h3>
        <div className="video-block-text-p">{text}</div>
        {link && <SimpleButton className='btnNoM' text="Enter" />}
      </div>
      <video controls>
        <source src={video} />
      </video>
      {link && <SimpleButton className='btnM' text="Enter" />}
    </div>
  )
}
