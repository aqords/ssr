import Web3 from "web3";

let web3;

export const connectWallet = async () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // Метамаск доступен в окне браузера
    web3 = new Web3(window.ethereum);
    try {
      // Запрос на активацию аккаунта MetaMask
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      // Пользователь отклонил запрос на активацию аккаунта или возникла ошибка
      console.error("Error", error);
    }
  } else {
    // Обработка случая, когда MetaMask или window.ethereum не определены
    console.log("Error install Metamask");
  }
};

export const sendMessage = async (publicKey, message) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const transactionParameters = {
      from: accounts[0],
      to: publicKey,
      value: 1000000000000000000, // Можно указать значение в wei, если необходимо отправить Ether
      data: web3.utils.utf8ToHex(message),
    };

    const transactionHash = await web3.eth.sendTransaction(
      transactionParameters
    );
    return transactionHash;
  } catch (error) {
    console.error("Error when try to send message", error);
    throw error;
  }
};

export const sendSignatureRequest = async (message) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const signature = await web3.eth.personal.sign(message, accounts[0], "");
    return signature;
  } catch (error) {
    console.error("Error then request", error);
    throw error;
  }
};

export const sendSignatureRequestWithHash = async (message, privateKey) => {
  try {
    const signature = await web3.eth.accounts.sign(message, privateKey);
    return signature;
  } catch (error) {
    console.error("Error then request", error);
    throw error;
  }
};

export const getAccounts = async () => {
  try {
    await connectWallet();
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    return accounts;
  } catch (error) {
    console.log("Error then getAccounts", error);
    throw error;
  }
};

export const getBalance = async (publicKey) => {
  try {
    const balance = await web3.eth.getBalance(publicKey);
    const balanceInEth = web3.utils.fromWei(balance, "ether");
    console.log(balanceInEth);
    return balance;
  } catch (error) {
    console.log("Error then getBalance", error);
    throw error;
  }
};

export const switchToOptimism = async () => {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xa" }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xa",
              chainName: "Optimism Mainnet",
              nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
              rpcUrls: ["https://optimism.meowrpc.com"],
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
};
