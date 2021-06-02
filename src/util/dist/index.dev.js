"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tokenlist = _interopRequireDefault(require("../../public/js/tokenlist.json"));

var _ERC20_ABI = _interopRequireDefault(require("../../public/js/ERC20_ABI.json"));

var _Router_ABI = _interopRequireDefault(require("../../public/js/Router_ABI.json"));

var _web3Eth = _interopRequireDefault(require("web3-eth"));

var _util = _interopRequireDefault(require("./util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * HubDao Factory: 0xeedcce959675ae3d8974741e80aaa8244a6e3507
 * HubDao Router: 0x767bbc9D5AF753CB7aB0b088748F19D8348eD95C
 */
// 一次性引入合约 @ethers-multicall https://github.com/hsienfu/ethers-multicall
// https://github.com/ethers-io/ethers.js/tree/master/packages/providers
var _require = require('ethers-multicall'),
    Contract = _require.Contract,
    Provider = _require.Provider;

var _require2 = require('@ethersproject/providers'),
    JsonRpcProvider = _require2.JsonRpcProvider; // 转换 @ethersproject/units https://www.npmjs.com/package/@ethersproject/units


var _require3 = require("@ethersproject/units"),
    formatUnits = _require3.formatUnits,
    parseUnits = _require3.parseUnits; // 判断一个合约是否是合法的 @ethersproject/address https://www.npmjs.com/package/@ethersproject/address


var _require4 = require("@ethersproject/address"),
    isAddress = _require4.isAddress; // const USDT = "0xa71EdC38d189767582C38A3145b5873052c3e47a"


var LINK_NODE = 'https://http-mainnet-node.huobichain.com';
var ROUTER = '0x767bbc9D5AF753CB7aB0b088748F19D8348eD95C'; // 一个巨大的授权金额 @ethersproject/constants https://github.com/ethers-io/ethers.js/tree/master/packages/constants

var _require5 = require("@ethersproject/constants"),
    MaxUint256 = _require5.MaxUint256;

var SDK =
/*#__PURE__*/
function () {
  function SDK() {
    _classCallCheck(this, SDK);

    /*  // normal node
     this.web3 = new Web3('https://mainnet.huobi.com')
     this.salecontract = new this.web3.Contract(saleABI,SALE_CONTRACE_ADDRESS);
       // BNB, HT balance
     const ht = this.web3.getBalance(your_wallet_address);
     ethers.utils.formatUnits(ht, 18);
       // uint256: ERC20 token balance
     const balance = await this.salecontract.balanceOf(your_wallet_addres)
     const decimal = await this.salecontract.decimals(); // 18 = 1e18,
       // this.web3.utis.fromWei() //`1e18`
     ethers.utils.formatUnits(balance, decimal)
       await this.salecontract.symbol();// BNB, BOO, MDX
     await this.salecontract.name(); // string
     await this.salecontract.allowance(spender_address) */
    //  初始化web3
    this.web3 = new _web3Eth["default"](window.ethereum); // console.log(this.web3)
    // this.contract = new this.web3.Contract(ERC20_ABI, USDT);
    // this.accountList = {}
    // console.log(tokenInfo)
    // console.log(this.accountList)
    // console.log(this.contract)
  } // 获取账户余额


  _createClass(SDK, [{
    key: "getBalance",
    value: function getBalance(address) {
      return regeneratorRuntime.async(function getBalance$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getTokenInfo",

    /**
     * 添加合约
     * @param {*} address 
     * @returns 
     */
    value: function getTokenInfo(address) {
      var provider, contract, calls;
      return regeneratorRuntime.async(function getTokenInfo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isAddress(address)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", false);

            case 2:
              provider = new Provider(new JsonRpcProvider(LINK_NODE));
              _context2.next = 5;
              return regeneratorRuntime.awrap(provider.init());

            case 5:
              contract = new Contract(address, _ERC20_ABI["default"]);
              calls = [];
              calls.push(contract.balanceOf('your_wallet'));
              calls.push(contract.name());
              calls.push(contract.symbol());
              calls.push(contract.decimals());
              return _context2.abrupt("return", provider.all(calls));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
    /**
     * 转账 https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html#methods-mymethod-send
     * @param {*} receipt  收钱的用户
     * @param {*} amount   转账的金额
     * @param {*} currency 转账的合约
     * @param {*} decimal  货币的长度
     */

  }, {
    key: "transfer",
    value: function transfer(receipt, amount, toeken) {
      var decimal,
          CURRENCY,
          account,
          _args3 = arguments;
      return regeneratorRuntime.async(function transfer$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              decimal = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 18;

              if (!isAddress(toeken)) {
                _context3.next = 11;
                break;
              }

              CURRENCY = new this.web3.Contract(_ERC20_ABI["default"], toeken);
              _context3.next = 5;
              return regeneratorRuntime.awrap(this.getAddress());

            case 5:
              account = _context3.sent;
              console.log('我的钱包地址=>%s', account); // console.log(amount)

              amount = parseUnits(amount, decimal);
              console.log('要转账的金额=>%s', amount);
              _context3.next = 11;
              return regeneratorRuntime.awrap(CURRENCY.methods.transfer(receipt, amount).send({
                from: account
              }).on('transactionHash', function (hash) {}).on('confirmation', function (confirmationNumber, receipt) {}).on('receipt', function (receipt) {
                console.log('receipt=>%s', receipt);
                console.log(receipt);
              }).on('error', console.error));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
    /**
     * 添加所有token合约
     * @returns 
     */

  }, {
    key: "getMultiBalanceOf",
    value: function getMultiBalanceOf() {
      var account, provider, calls, i, contract;
      return regeneratorRuntime.async(function getMultiBalanceOf$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.getAddress());

            case 2:
              account = _context4.sent;
              provider = new Provider(new JsonRpcProvider(LINK_NODE));
              _context4.next = 6;
              return regeneratorRuntime.awrap(provider.init());

            case 6:
              calls = []; // console.log(tokenInfo.tokens.length)

              for (i in _tokenlist["default"].tokens) {
                contract = new Contract(_tokenlist["default"].tokens[i].address, _ERC20_ABI["default"]);
                calls.push(contract.balanceOf(account));
                calls.push(contract.allowance(account, ROUTER));
              } // console.log(calls)
              // console.log(ERC20_ABI)

              /* let calls = [
                  new Contract('0xa71edc38d189767582c38a3145b5873052c3e47a', ERC20_ABI).balanceOf(`0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3`)
              ]; */


              return _context4.abrupt("return", provider.all(calls));

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    } // 获取火币余额

  }, {
    key: "getHTCurrency",
    value: function getHTCurrency() {
      var account;
      return regeneratorRuntime.async(function getHTCurrency$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.getAddress());

            case 2:
              account = _context5.sent;
              return _context5.abrupt("return", this.web3.getBalance(account));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    } // 获取用户的账户

  }, {
    key: "getAddress",
    value: function getAddress() {
      return regeneratorRuntime.async(function getAddress$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (window["ethereum"]) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return", false);

            case 2:
              if (!window["ethereum"].selectedAddress) {
                _context6.next = 4;
                break;
              }

              return _context6.abrupt("return", window["ethereum"].selectedAddress);

            case 4:
              _context6.next = 6;
              return regeneratorRuntime.awrap(new Promise(function (r) {
                return setTimeout(r, 400);
              }));

            case 6:
              return _context6.abrupt("return", window["ethereum"].selectedAddress);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
    /**
     * 添加流动性HT
     * @param {*} usdt  合约地址 
     * @param {*} Authorizedamount  已经授权的金额 
     * @param {*} one_amount  要流动的第一个币值 
     * @param {*} two_amount  要流动的第二个币值
     */

  }, {
    key: "addLiquidityHt",
    value: function addLiquidityHt(usdt, Authorizedamount, one_amount, two_amount) {
      var account, USDT, router, deadline, fund500;
      return regeneratorRuntime.async(function addLiquidityHt$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // 将已授权的金额转换为可识别的金额 
              Authorizedamount = formatUnits(Authorizedamount);
              _context7.next = 3;
              return regeneratorRuntime.awrap(this.getAddress());

            case 3:
              account = _context7.sent;
              USDT = new this.web3.Contract(_ERC20_ABI["default"], usdt);
              router = new this.web3.Contract(_Router_ABI["default"], ROUTER);
              deadline = Math.ceil(+Date.now() / 1000) + 1800; // const fund500 = parseUnits('0.01');

              fund500 = MaxUint256;
              console.log('fund500=>%s', fund500);
              console.log(USDT);
              console.log(router);
              console.log(Authorizedamount > one_amount);
              return _context7.abrupt("return", new Promise(function (resolve, reject) {
                // 判断授权
                if (Authorizedamount > one_amount) {
                  console.log(router);
                  router.methods.addLiquidityETH(usdt, parseUnits(one_amount), 0, 0, account, deadline).send({
                    from: account,
                    value: parseUnits(two_amount)
                  }).on('transactionHash', function (hash) {}).on('confirmation', function (confirmationNumber, receipt) {}).on('receipt', function (receipt) {
                    console.log('receipt=>%s', receipt); // console.log(receipt)
                    // resolve(receipt)
                  }).on('error', function () {
                    reject(-1);
                  }); // If there's an out of gas error the second parameter is the receipt.
                } else {
                  // router合约 要授权的金额(一个无尽的数)
                  USDT.methods.approve(ROUTER, fund500).send({
                    from: account
                  }).on('transactionHash', function (hash) {}).on('confirmation', function (confirmationNumber, receipt) {}).on('receipt', function (receipt) {
                    console.log('receipt=>%s', receipt);
                    console.log(receipt);
                    router.methods.addLiquidityETH(usdt, parseUnits(one_amount), 0, 0, account, deadline).send({
                      from: account,
                      value: two_amount
                    }).on('transactionHash', function (hash) {}).on('confirmation', function (confirmationNumber, receipt) {}).on('receipt', function (receipt) {
                      // console.log('receipt=>%s', receipt);
                      // console.log(receipt)
                      resolve(receipt);
                    }).on('error', function () {
                      reject(-1);
                    }); // If there's an out of gas error the second parameter is the receipt.
                  }).on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
                }
              }));

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "addLiquidity",
    value: function addLiquidity(currency1, currency2, Authorizedamount, one_amount, two_amount) {
      var account, CURRENCY1, router, deadline, fund500;
      return regeneratorRuntime.async(function addLiquidity$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // 将已授权的金额转换为可识别的金额 
              Authorizedamount = formatUnits(Authorizedamount);
              _context8.next = 3;
              return regeneratorRuntime.awrap(this.getAddress());

            case 3:
              account = _context8.sent;
              CURRENCY1 = new this.web3.Contract(_ERC20_ABI["default"], currency1);
              router = new this.web3.Contract(_Router_ABI["default"], ROUTER);
              deadline = Math.ceil(+Date.now() / 1000) + 1800; // const fund500 = parseUnits('0.01');

              fund500 = MaxUint256;
              console.log('fund500=>%s', fund500);
              console.log(Authorizedamount > one_amount);
              return _context8.abrupt("return", new Promise(function (resolve, reject) {
                // 判断授权
                if (Authorizedamount > one_amount) {
                  console.log(router);
                  router.methods.addLiquidityETH(currency1, currency2, parseUnits(one_amount), parseUnits(two_amount), 0, 0, account, deadline).send({
                    from: account,
                    value: parseUnits(two_amount)
                  }).on('transactionHash', function (hash) {}).on('confirmation', function (confirmationNumber, receipt) {}).on('receipt', function (receipt) {
                    console.log('receipt=>%s', receipt); // console.log(receipt)
                    // resolve(receipt)
                  }).on('error', function () {
                    reject(-1);
                  }); // If there's an out of gas error the second parameter is the receipt.
                }
                /* else {
                    // router合约 要授权的金额(一个无尽的数)
                    USDT.methods.approve(ROUTER, fund500).send({
                            from: account
                        })
                        .on('transactionHash', function (hash) {})
                        .on('confirmation', function (confirmationNumber, receipt) {})
                        .on('receipt', function (receipt) {
                            console.log('receipt=>%s', receipt);
                            console.log(receipt)
                            router.methods.addLiquidityETH(
                                    usdt,
                                    parseUnits(one_amount),
                                    0,
                                    0,
                                    account,
                                    deadline
                                ).send({
                                    from: account,
                                    value: two_amount
                                })
                                .on('transactionHash', function (hash) {})
                                .on('confirmation', function (confirmationNumber, receipt) {})
                                .on('receipt', function (receipt) {
                                    // console.log('receipt=>%s', receipt);
                                    // console.log(receipt)
                                    resolve(receipt)
                                })
                                .on('error', () => {
                                    reject(-1)
                                }); // If there's an out of gas error the second parameter is the receipt.
                        })
                        .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
                } */

              }));

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this);
    }
  }]);

  return SDK;
}();

var sdk = new SDK();
var _default = sdk;
/* router.methods.addLiquidity(
    usdt,
    mdx,
    parseUnits(one_amount),
    parseUnits(two_amount),
    0,
    0,
    account,
    deadline
).send({
    from: account,
}) */

exports["default"] = _default;