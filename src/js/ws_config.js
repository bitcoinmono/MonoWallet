var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'MonoWallet';
config.appDescription = 'BitcoinMono Wallet';
config.appSlogan = 'The Litecoin to TurtleCoin\'s Bitcoin';
config.appId = 'io.bitcoinmono.walletshell';
config.appGitRepo = 'https://github.com/bitcoinmono/MonoWallet';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11358;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'BitcoinMono-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v2.0.4";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 11359;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'explorer.bitcoinmono.io';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '127.0.0.1';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = '';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    'remote.bitcoinmono.io:11358','remote02.bitcoinmono.io:11358',
];

// your currency name
config.assetName = 'BitcoinMono';
// your currency ticker
config.assetTicker =  'BTCMZ';
// your currency address prefix, for address validation
config.addressPrefix =  'btcm';
// standard wallet address length, for address validation
config.addressLength = 99;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 1;
// to convert from atomic unit
config.decimalDivisor = 10000;
// to represent human readable value
config.decimalPlaces = 4;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'Bobbie',
      address: 
'btcmzR7v3pfW25Ddz26pR1N5Jt65sVVt4iFt4eY3862FUgWzM58U5CVfkfRQH6UjVvbvvQ9yaV6KK7hiNMc52Z1zVjqWsjXdify',
      paymentId: 'DF794857BC4587ECEC911AF6A6AB02513FEA524EC5B98DA8702FAC92195A94B2'
    }
];

module.exports = config;
