import React from "react"

import "./Main.scss"

export const Main = (): JSX.Element => {
  const onClick = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    })
  }

  return (
    <main
      className="main"
      style={{
        backgroundImage: `url(https://public.nftstatic.com/static/nft/res/2c36d0a6a7104679b5018e938707bc8a.png)`,
      }}
    >
      <div className="main-block">
        <h1>Cristiano Ronaldo: The NFT Collection Airdrop</h1>
        <p>Available only on Binance</p>
        {/*<div className="main-block-date">*/}
        {/*  <CalendarIcon /> 2022-11-18*/}
        {/*</div>*/}
      </div>
      <button onClick={onClick} className="main-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="css-gspajb">
          <path d="M5.414 7.586L4 9l8 8 8-8-1.414-1.414L12 14.172 5.414 7.586z" fill="rgb(30, 35, 41);"></path>
        </svg>
      </button>
    </main>
  )
}
