import React, { ReactChild } from "react"

import "./LastBlock.scss"
import cn from "classnames"
import { SimpleButton } from "../SimpleButton"

export const LastBlock = (): JSX.Element => {
  return (
    <div
      className={cn("last-block")}
      style={{
        backgroundImage: "url(https://public.nftstatic.com/static/nft/res/2b34827995a44cc7a647b6eff6d35871.png)",
      }}
    >
      <div className="last-block-text">
        <h3>Cristiano Ronaldo</h3>
        <div className="last-block-text-p">
          Cristiano Ronaldo is the greatest footballer of his generation. He has won 32 trophies throughout his career,
          including seven league titles, five UEFA Champions Leagues, and the UEFA European Championship. With over 800
          official senior goals to his name, he is the top goalscorer in the modern era and has inspired millions of
          fans across the world.
        </div>
      </div>
      <img alt="box" src="https://public.nftstatic.com/static/nft/zipped/0537e837a8664172a7cdd06f864a86c1_zipped.png" />
    </div>
  )
}
