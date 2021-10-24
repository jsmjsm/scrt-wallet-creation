# Secret Network Wallet Creation

## Disclaimer

**This script is for information and testing purposes only and the author is not responsible for any loss of assets.**

## Usage

### Download secretcli
Download the latest version of secretcli from link below
[enigmampc/SecretNetwork (github.com)](https://github.com/enigmampc/SecretNetwork/releases)

### Rename & Install
1. Put the file and the `CreateWallet.js` file in the folder then **rename** the download binary file to `secretcli`

2. Run the following command to install:
``` js
npm install
```

### Usage
To create wallets, you need to provide the `walletname` and `amount`

**⚠️ Name CANNOT be duplicate ⚠️**

Format:
``` js
CreateWallet.js <walletname> <amount>
```

🌰 **Example**: to create `5` wallets, with the name: `testWallet`

Run:
```js
node ./CreateWallet.js testWallet 5
```

### Output

The JSON file of new wallet will be created in a new folder called `Wallet-JSON-<walletname>`

**PLEASE TAKE CARE OF THE JSON FILE, DO NOT DELETE IT, IT IS IMPORTANT TO YOU.**
