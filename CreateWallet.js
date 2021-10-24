/**
 * ⚠️⚠️⚠️ 新建的钱包的 json 文件将存储在 Wallet-JSON-<Name> 文件夹下，请妥善保管私钥，以免泄露，本脚本仅供参考学习用途 ⚠️⚠️⚠️
*/
const FileSaver = require('file-saver');
const Logger = require('js-logger');
const sh = require('shelljs');
const pwd = sh.exec('pwd').replace(/[\r\n]/g, "");
// console.log('Running Path: ' + pwd);
Logger.useDefaults();
Logger.info("Path: "+ pwd);

//sh.echo('Create Secret Network Wallet');

//> Variable for wallet name and amount
//! wallet name cannot be duplicate
// var baseName = 'test12Wallet';
var baseName = process.argv[2];
var amount = process.argv[3];
// var amount = 100;
// var walletList = [];

const exportPath = pwd + '/Wallet-JSON-' + baseName;
sh.exec('mkdir ' + exportPath);

/** Create single wallet
 *  @param name
 */
var _create = function (name) {
    // console.log('_create wallet ' + name);
    var execString = pwd + '/secretcli keys add ' + name + ' --output json' + ' >> ' + exportPath + '/' + name + '.json';
    // Logger.info("exec:" +execString);
    var output = sh.exec(execString);
    return output;
};

/** Create wallets
 *
*/
var CreateWallet = function () {
    var walletName = "";
    for (let index = 1; index <= amount; index++) {
        walletName = baseName + '_' + index;
        // console.log('walletName: ' + walletName);
        var walletData = _create(walletName);
    }
    Logger.info("Finish Creating Wallets")
}

//! main
console.log('⚠️ 请重命名 secretcli 的二进制文件为 ‘secretcli’ 再使用此脚本 ⚠️');
console.log('⚠️ 钱包名字不能重复！请不要使用重复的名字多次创建钱包！ ⚠️');
console.log('⚠️ 新建的钱包的 json 文件将存储在 Wallet-JSON-<Name> 文件夹下，请妥善保管私钥，以免泄露 ⚠️');

sh.exec('chmod 777 ' + pwd +' ./secretcli')

CreateWallet();
