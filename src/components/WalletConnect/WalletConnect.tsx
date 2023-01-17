import { useConnect, useDisconnect, useAccount } from "wagmi";
import { InjectedConnector } from "wagmi/dist/connectors/injected";
import Typography from "@mui/material/Typography";

export const WalletConnect = () => {
  const { isConnected, isConnecting } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector()
  });

  const { disconnect } = useDisconnect();

  return (
    <div>
      <div>
        {isConnected ? "Your connected wallet:" : "Connect your MetaMask"}
      </div>

      {isConnecting && <Typography>Connecting...</Typography>}

      {isConnected ? (
        <>
          <button onClick={() => disconnect()}>
            Disconnect
          </button>
        </>
      ) : (
        <button
          disabled={isConnecting}
          onClick={() => connect()}
        >
          Connect
        </button>
      )}
    </div>
  );
};
