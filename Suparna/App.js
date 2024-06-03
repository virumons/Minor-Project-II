import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import {useEffect, useState } from "react";
import { ethers } from 'ethers';
import FileUpload from "./components/FileUpload";
import Modal from "./components/Modal";
import Display from "./components/Display";
import web3 from 'web3';
import './App.css';


function App() {
  const [account,setAccount]=useState("");
  const [contract,setContract]=useState(null);
  const [provider,setProvider]=useState(null);
  const [modalOpen, setModalOpen]=useState(false);

useEffect(() => {
      //const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const provider = new ethers.providers.Web3Provider(web3.currentProvider);
      const provider = new ethers.JsonRpcProvider(web3.currentProvider);

      console.log(provider);
      const loadProvider =async ()=>{
        if(provider){
          window.ethereum.on("chainChanged", ()=>{
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", ()=>{
            window.location.reload();
          });

          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          console.log(address);
          setAccount(address);
          let contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

          const contract = new ethers.Contract(
            contractAddress,
            Upload.abi,
            signer
          );
        
          console.log(contract);
          setContract(contract);
          setProvider(provider);
        }
        else{
          console.error("Metamask is not installed");
        }
      }

      provider && loadProvider();
    },[]);
  
  return (
    <>
    {!modalOpen && (
      <button className="share" onClick={()=> setModalOpen(true)}>
        Share
      </button>
    )}
    {modalOpen && (
      <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
    )}
    
    <div className="App">
      <h1 style = {{color: "white"}}> FileIt </h1>
      <div class="bg"> </div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <p style = {{color: "white"}}>
        Account: {account ? account:  "Not connected"}
        </p>  
        <FileUpload account={account} contract={contract} provider={provider}></FileUpload>    
        <Display account={account} contract={contract}></Display>
    </div>
    </>
  );
}

export default App;
