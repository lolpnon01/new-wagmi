import React from "react"

import "./BoxBlock.scss"
import { SimpleButton } from "../SimpleButton"

export const BoxBlock = (): JSX.Element => {

  return (
    <div
      className="video-block"
      style={{
        backgroundImage: "url(https://public.nftstatic.com/static/nft/res/8738089123974ff8ad0fbec5deb023a5.png)",
      }}
    >
      <div className="video-block-text">
        <h3>The CR7 Mystery Box: New Users</h3>
        <div className="video-block-text-p">
          To celebrate Cristiano Ronaldo’s NFT debut, we’ve prepared a Mystery Box for the first 1.5 million users. Each box is generated randomly and contains one of two mystery box-exclusive Ronaldo NFTs that come in Stone color.
        </div>
        <SimpleButton className='btnNoM' text="Enter" />
      </div>
      <img alt="box" src="https://public.nftstatic.com/static/nft/zipped/a7ccce933a774c74b05023b236846640_zipped.png" />
      <SimpleButton className='btnM' text="Enter" />
    </div>
  )
}
