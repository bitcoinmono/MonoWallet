var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'MonoWallet';
config.appDescription = 'BitcoinMono Wallet';
config.appSlogan = 'The next cash of Bitcoin';
config.appId = 'io.bitcoinmono.walletshell';
config.appGitRepo = 'https://github.com/bitcoinmono/MonoWallet';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11358;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'bzwallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'BitcoinMono-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v2.0.5";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 11359;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.bitcoinmono.io?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'remote02.bitcoinmono.io';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = '';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    'remote.bitcoinmono.io:11358','remote02.bitcoinmono.io:11358',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'BitcoinMono';
// your currency ticker
config.assetTicker = 'BTCMZ';
// your currency address prefix, for address validation
config.addressPrefix = 'btcm';
// standard wallet address length, for address validation
config.addressLength = 99;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction - 100 btcmz in coins
config.minimumFee = 100;
// minimum amount for sending transaction
config.mininumSend = 1;
// default mixin/anonimity for transaction
config.defaultMixin = 0;
// to represent human readable value
config.decimalPlaces = 4;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'WalletShell Donation',
    address: 'btcmzR7v3pfW25Ddz26pR1N5Jt65sVVt4iFt4eY3862FUgWzM58U5CVfkfRQH6UjVvbvvQ9yaV6KK7hiNMc52Z1zVjqWsjXdify',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
