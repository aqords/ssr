import React from "react";

import {
  connectWallet,
  sendMessage,
  sendSignatureRequest,
  getAccounts,
  getBalance,
  switchToOptimism,
  sendSignatureRequestWithHash,
} from "../../utils/web3Utils";

const Blockchaintest = () => {
  const privateKey =
    "0xee687f1684190aa5ff8708e2934d354d330288acb35bf7315ba1066ed43674d7";
  const publicKey = "0x73CA0f25Ac913CA0085934B9E0486ca5dD840Ab7";
  const message = "Test message";

  const handleSendMessage = async () => {
    try {
      await connectWallet();
      const transactionHash = await sendMessage(publicKey, message);
      console.log("Transaction was done!", transactionHash);
    } catch (error) {
      console.error("Transaction rejected with Error", error);
    }
  };

  const handleSendSignatureRequest = async () => {
    try {
      await connectWallet();
      const signature = await sendSignatureRequest(message);
      console.log("Signature gived:", signature);
    } catch (error) {
      console.error("Error then request", error);
    }
  };

  const handleSendSignatureRequestWithHash = async () => {
    try {
      await connectWallet();
      const signature = await sendSignatureRequestWithHash(message, privateKey);
      console.log("Signature gived:", signature);
    } catch (error) {
      console.error("Error then request", error);
    }
  };

  const handleGetBalance = async () => {
    try {
      await connectWallet();
      const balance = await getBalance(publicKey);
      console.log("Balance", balance);
    } catch (error) {
      console.error("Error then request", error);
    }
  };

  return (
    <div className="container pt-[200px] flex gap-[10px]">
      <button className="border p-[10px]" onClick={connectWallet}>
        Connect wallet
      </button>
      <button className="border p-[10px]" onClick={getAccounts}>
        Get Accounts
      </button>
      <button className="border p-[10px]" onClick={handleGetBalance}>
        Get Balance
      </button>
      <button className="border p-[10px]" onClick={handleSendMessage}>
        Send Message(Transaction)
      </button>
      <button className="border p-[10px]" onClick={handleSendSignatureRequest}>
        Signature Request
      </button>
      <button
        className="border p-[10px]"
        onClick={handleSendSignatureRequestWithHash}
      >
        Signature Request With Hash
      </button>
      <button className="border p-[10px]" onClick={switchToOptimism}>
        Change Network to Optimism
      </button>
    </div>
  );
};

export default Blockchaintest;
