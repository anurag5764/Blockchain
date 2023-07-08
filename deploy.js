const ethers = require("ethers");
const fs = require("fs-extra");
async function main() {
  // compile them in code
  // compile them seperately
  const provider = new ethers.provider.JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "53c4bae8a7ec8ff97436d1e8431c523616bc6ddb721a66099b246fdb1482f3f6",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractfactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying please wait....");
  const contract = await contractfactory.deploy(); // stop here wait for the contract to get deployed
  console.log(contract);
  const transactionreceipt = await contract.deployTransaction.wait(1);
  console.log("Here is the deployment transaction");
  console.log(deployTransaction);
  console.log("Here is the transaction receipt");
  console.log(transactionreceipt);
}
main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
