![WalletShell](docs/walletshell.png)
MonoWallet is a GUI wallet for BitcoinMono.

![WalletShell Screens](https://i.imgur.com/41Ujq0S.gif "WalletShell Screens")

### Features:
This wallet contains the basic functions required to manage your BitcoinMono assets:

* Wallet creation
  * Create new wallet
  * Import from private keys
  * Import from mnemonic seed
* Basic wallet operation
  * Open an existing  wallet
  * Display wallet address & balance
  * Display private keys/seed
  * Export private keys/seed
  * Transactions listing/sorting/searching
  * Display transaction detail
  * Export incoming, outgoing, or all transactions to csv file.
  * Incoming Transaction notification
  * Send DEGO to single recipient address, allow to set payment id and custom fee. Provides address lookup from addressbook.
  * Perform wallet optimization by creating fusion transactions
  * Provides utility to generate payment id and integrated address
* Address book
  * Add/Edit/Delete address entry (label/name, address and payment id)
  * Listing/sorting/searching existing entries
  * Allow to store same wallet address with different payment id.
  * Autosave address after sending to new/unknown recipient
* Misc
  * Provides setting to set local or public node address
  * Option to use system tray (on closing/minimizing wallet)
  * Provides list of public nodes
  * Custom node address that is not on the list will be added/remembered for future use
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)


### Notes

MonoWallet relies on `BitcoinMono-service` to manage wallet container &amp; rpc communication.

Release installer & packaged archived includes a ready to use `BitcoinMono-service` binary, which is unmodified copy of BitcoinMono release archive.

On first launch, MonoWallet will try to detect location/path of bundled `BitcoinMono-service` binary, but if it's failed, you can manually set path to the `BitcoinMono-service` binary on the Settings screen.

If you don't trust the bundled `BitcoinMono-service` file, you can compare the checksum (sha256sum) against one from the official release, or simply download and use the binary from official BitcoinMono release, which is available here: https://github.com/bitcoinmono/bitcoinmono/releases. Then,  make sure to update your `BitcoinMono-service` path setting.

### Download &amp; Run WalletShell

#### Windows:
1. Download the latest installer here: https://github.com/bitcoinmono/MonoWallet/releases
2. Run the installer (`MonoWallet-<version>-win-setup.exe`) and follow the installation wizard.
3. Launch MonoWallet via start menu or desktop shortcut.

#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/bitcoinmono/MonoWallet/releases
2. Make it executable, either via GUI file manager or command line, e.g. `chmod +x MonoWallet-<version>-linux.AppImage`
3. Run/execute the file, double click in file manager, or run via shell/command line.

See: https://docs.appimage.org/user-guide/run-appimages.html

#### macOS (TBD/Untested)
1. Download latest archive here: https://github.com/bitcoinmono/MonoWallet/releases
2. Extract downloaded tar archived
3. Run the executable binary (`MonoWallet.app/Contents/MacOs/GoldWallet`) ??

### Build
You need to have `Node.js` and `npm` installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:
```
# first, download BitcoinMono-service binary for each platform
# from BitcoinMono official repo
# https://github.com/bitcoinmono/bitcoinmono/releases
# extract the BitcoinMono-service executable somewhere

# clone the repo
$ git clone https://github.com/bitcoinmono/MonoWallet
$ cd MonoWallet

# install dependencies
$ npm install

# create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

# copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

# build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp /path/to/linux-version-of/BitcoinMono-service ./bin/lin/
$ npm run dist-lin

# build Windows package
$ mkdir -p ./bin/win
$ cp /path/to/win-version-of/BitcoinMono-servicee.exe ./bin/win/
$ npm run dist-win

# build OSX package
$ mkdir -p ./bin/osx
$ cp /path/to/osx-version-of/BitcoinMono-service ./bin/osx/
$ npm run dist-mac
```

Resulting packages or installer can be found inside `dist/` directory.

### Porting for other coin
Please see [this guide](docs/porting.md) if you want to adapt WalletShell to be use for your own TurtleCoin fork.
