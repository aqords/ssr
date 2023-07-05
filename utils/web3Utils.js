import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Метамаск доступен в окне браузера
  web3 = new Web3(window.ethereum);

  try {
    // Запрос на активацию аккаунта MetaMask
    await window.ethereum.enable();
  } catch (error) {
    // Пользователь отклонил запрос на активацию аккаунта или возникла ошибка
    console.error("Error", error);
  }
} else {
  // Обработка случая, когда MetaMask или window.ethereum не определены
  // Можно использовать фоллбек-провайдер, например, Infura или локальный узел Ethereum
  web3 = new Web3("https://infura.io/your-infura-api-url");
}

export const sendMessage = async (publicKey, message) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const transactionParameters = {
      from: accounts[0],
      to: publicKey,
      value: 0, // Можно указать значение в wei, если необходимо отправить Ether
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
    console.log(accounts);
    return signature;
  } catch (error) {
    console.error("Error then request", error);
    throw error;
  }
};
