import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import "./styles/global.scss"
import "./Home.scss"

import {Main, Features, BoxBlock, LastBlock, Legend, VideoBlock} from "./components";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
});

export default function App() {
  const videos = [
    {
      title: "N: The Breakout & The First Step",
      text:
        "Discover where it all began: the formative years that set the young Ronaldo on the path to greatness. The Normal-tier features two unique moments from Ronaldo’s youth. ‘The Breakout’ depicts a teenage Ronaldo performing his legendary stepover. ‘The First Step’ shows Ronaldo as a young boy growing up on the Portuguese island of Madeira, looking through the nets of a goal, and dreaming about what he would go on to achieve in football. \n" +
        "\n" +
        "NFT OWNER BENEFITS: (1) Entry into giveaways to win Ronaldo and Binance merchandise.",
      link: "link",
      video: "https://public.nftstatic.com/static/nft/res/705600902e3e457a83435cb9996a1b9a.mp4",
      bg: "1",
    },
    {
      title: "R: The Restoration & The Coming of Age",
      text:
        "Own one of the pivotal moments from Ronaldo’s incredible career. ‘The Restoration’ features Ronaldo performing the iconic goal celebration that his fans would see routinely. ‘The Coming of Age’ features Ronaldo transforming into a world-class goalscorer admired across the world.\n" +
        "\n" +
        "NFT OWNER BENEFITS: (1) Free CR7 Mystery Box (from a future collection). (2) Entry into giveaways to win Ronaldo and Binance merchandise.\n",
      link: "link",
      video: "https://public.nftstatic.com/static/nft/res/77f05542a5814ffe874fab52d80bf080.mp4",
      bg: "2",
    },
    {
      title: "SR: The Coronation & The Undisputed",
      text:
        "‘The Coronation’ marks the birth of the nickname “CR7.” This statue shows Ronaldo receiving the No. 7 shirt, a number worn by other footballing legends, and which he has made his own. ‘The Undisputed’ depicts Ronaldo surrounded by all his trophies and titles, illustrating why CR7 is the greatest of all time. \n" +
        "\n" +
        "NFT OWNER BENEFITS: (1) Signed Ronaldo Binance shirt. (2) Automatic Whitelist into all future CR7 drops. (3) Free CR7 Mystery Box (from a future collection). (4) Entry into giveaways to win Ronaldo and Binance merchandise.",
      video: "https://public.nftstatic.com/static/nft/res/dbdf64409de24dbfaa1fb6c56854a90b.mp4",
      bg: "1",
    },
    {
      title: "SSR: The Unprecedented",
      text:
        "The bicycle kick is one of football’s most celebrated moves. Only one has managed to make it look so effortless. Ronaldo himself has named his famous bicycle kick as the greatest goal he’s ever scored. ‘The Unprecedented’ will only have 5 statues available for auction. \n" +
        "\n" +
        "NFT OWNER BENEFITS: (1) Virtual greeting from Ronaldo congratulating you. (2) Signed NFT statue from Ronaldo. (3) Signed Ronaldo Binance shirt. (4) Automatic whitelist into all future CR7 drops. (5) Free CR7 Mystery Box (from a future collection). (6) Entry into giveaways to win Ronaldo merchandise.",
      video: "https://public.nftstatic.com/static/nft/res/a4703db2ed174c4a969f7d2a41108710.mp4",
      bg: "2",
    },
  ]

  return (
    <WagmiConfig client={client}>
      <div className="home">
        <Main />
        <Features />
        <a className="home-link" href="">
          <img className='home-img' src="https://public.nftstatic.com/static/nft/res/5a5808f47bc54866a71d7278a85de932.png" alt="description" />
        </a>
        <Legend />
        {videos.map((video, index) => (
          <VideoBlock
            key={index}
            title={video.title}
            text={video.text}
            link={video.link}
            bg={video.bg}
            video={video.video}
          />
        ))}
        <BoxBlock />
        <LastBlock />
      </div>
    </WagmiConfig>
  );
}
