import logo from "./logo.png";
import "./App.css";
import BrightIDNftMint from "./components/react-brightid-nft-mint/src";
// import BrightIDNftMint from "react-brightid-nft-mint";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img className="App-header__image" src={logo} alt="Soulbound" />
            </header>
            <main>
                <div className="App-brightid-nft-mint">
                    <BrightIDNftMint
                        context="soulbound"
                        contractAddr="0x3F0FC15787511CCdc0bcc01950FCD13FFb4Ae95a"
                        mainnetRpcUrl="https://mainnet.infura.io/v3/60a7b2c16321439a917c9e74a994f7df"
                        walletConnectInfuraId="60a7b2c16321439a917c9e74a994f7df"
                        // relayBindURL="https://idchain.songadao.org/brightid-nft-mint-relay/bind"
                        // relayMintURL="https://idchain.songadao.org/brightid-nft-mint-relay/mint"
                        relayBindURL="http://localhost:5001/brightid-nft-mint-relay/bind"
                        relayMintURL="http://localhost:5001/brightid-nft-mint-relay/mint"

                        // appStoreAndroid="https://play.google.com/store/apps/details?id=org.brightid"
                        // appStoreIos="https://apps.apple.com/us/app/brightid/id1428946820"
                        // brightIdMeetUrl="https://meet.brightid.org"
                        // deepLinkPrefix="brightid://link-verification/http:%2f%2fnode.brightid.org"
                        // mintChainId = "100"
                        // mintChainName = "Gnosis Chain"
                        // mintBlockExplorerUrl = "https://blockscout.com/xdai/mainnet"
                        // mintBlockExplorerTxnPath = "/tx/"
                        // mintRpcUrl="https://rpc.gnosischain.com/"
                        // verificationUrl="https://app.brightid.org/node/v5/verifications"
                    />
                </div>
            </main>
            <footer className="App-footer">
                &copy; 2022 - in collaboration with NFBeez
            </footer>
        </div>
    );
}

export default App;
