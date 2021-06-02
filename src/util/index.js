import tokenInfo from '../../public/js/tokenlist.json'
import ERC20_ABI from '../../public/js/ERC20_ABI.json'
import Router_ABI from '../../public/js/Router_ABI.json'
import Factory_ABI from '../../public/js/Factory_ABI.json'
// console.log('ERC20 ABI = %s', ERC20_ABI)
import Web3 from 'web3-eth';
import utils from './util'


// 一次性引入合约 @ethers-multicall https://github.com/hsienfu/ethers-multicall
// https://github.com/ethers-io/ethers.js/tree/master/packages/providers
const {
    Contract,
    Provider
} = require('ethers-multicall');
const {
    JsonRpcProvider
} = require('@ethersproject/providers');
// 转换 @ethersproject/units https://www.npmjs.com/package/@ethersproject/units
const {
    // 将金额转换为小数
    formatUnits,
    // 将小数转换为金额
    parseUnits
} = require("@ethersproject/units");
// 判断一个合约是否是合法的 @ethersproject/address https://www.npmjs.com/package/@ethersproject/address
const {
    isAddress,
} = require("@ethersproject/address");
// const USDT = "0xa71EdC38d189767582C38A3145b5873052c3e47a"
const LINK_NODE = 'https://http-mainnet-node.huobichain.com'
/**
 * HubDao Factory: 0xeedcce959675ae3d8974741e80aaa8244a6e3507
 * HubDao Router: 0x767bbc9D5AF753CB7aB0b088748F19D8348eD95C
 */
const ROUTER = '0x767bbc9D5AF753CB7aB0b088748F19D8348eD95C'
const FACTORY = '0xeedcce959675ae3d8974741e80aaa8244a6e3507'

// 一个巨大的授权金额 @ethersproject/constants https://github.com/ethers-io/ethers.js/tree/master/packages/constants
const {
    MaxUint256
} = require("@ethersproject/constants");


class SDK {
    constructor() {
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
        this.web3 = new Web3(window.ethereum);
        // console.log(this.web3)
        // this.contract = new this.web3.Contract(ERC20_ABI, USDT);
        // this.accountList = {}
        // console.log(tokenInfo)

        // console.log(this.accountList)
        // console.log(this.contract)
    }
    // 获取账户余额
    /**
     * 获取账户余额
     * @param {*} address 链接
     * @returns 
     */
    async getBalance(address) {
        // console.log(this.contract)

        // return false
        this.balance = await this.contract.methods.balanceOf(address).call({}, 'latest')
        // console.log('[INFO] this.balance = %s', this.web3.utils.fromWei(this.balance))
        // console.log('[INFO] this.balance = %s', formatUnits(this.balance))
        // 返回余额
        return formatUnits(this.balance)
    }
    /**
     * 添加合约
     * @param {*} address 
     * @returns 
     */
    async getTokenInfo(address) {
        if (!isAddress(address)) {
            return false
        }
        const provider = new Provider(new JsonRpcProvider(LINK_NODE));
        await provider.init();
        const contract = new Contract(address, ERC20_ABI);
        const calls = [];

        calls.push(contract.balanceOf('your_wallet'));
        calls.push(contract.name());
        calls.push(contract.symbol());
        calls.push(contract.decimals());

        return provider.all(calls);
    }
    /**
     * 转账 https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html#methods-mymethod-send
     * @param {*} receipt  收钱的用户
     * @param {*} amount   转账的金额
     * @param {*} currency 转账的合约
     * @param {*} decimal  货币的长度
     */
    async transfer(receipt, amount, toeken, decimal = 18) {
        // 判断一个合约是否是正确的
        if (isAddress(toeken)) {
            const CURRENCY = new this.web3.Contract(ERC20_ABI, toeken);
            let account = await this.getAddress();
            console.log('我的钱包地址=>%s', account)
            // console.log(amount)
            amount = parseUnits(amount, decimal);
            console.log('要转账的金额=>%s', amount)
            await CURRENCY.methods.transfer(receipt, amount).send({
                from: account
            })
                .on('transactionHash', function (hash) { })
                .on('confirmation', function (confirmationNumber, receipt) { })
                .on('receipt', function (receipt) {
                    console.log('receipt=>%s', receipt);
                    console.log(receipt)
                })
                .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
        }
        // return false

    }
    /**
     * 添加所有token合约
     * @returns 
     */
    async getMultiBalanceOf() {
        let account = await this.getAddress();
        const provider = new Provider(new JsonRpcProvider(LINK_NODE));
        await provider.init();

        let calls = []
        // console.log(tokenInfo.tokens.length)
        for (let i in tokenInfo.tokens) {
            const contract = new Contract(tokenInfo.tokens[i].address, ERC20_ABI)
            calls.push(contract.balanceOf(account))
            calls.push(contract.allowance(account, ROUTER))
        }
        // console.log(calls)

        // console.log(ERC20_ABI)
        /* let calls = [
            new Contract('0xa71edc38d189767582c38a3145b5873052c3e47a', ERC20_ABI).balanceOf(`0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3`)
        ]; */
        return provider.all(calls);
    }
    /**
     * 获取火币余额
     * @returns 
     */
    async getHTCurrency() {
        let account = await this.getAddress();
        return this.web3.getBalance(account)
    }
    /**
     * 获取用户的账户
     * @returns 
     */
    async getAddress() {
        if (!window["ethereum"]) return false;
        if (window["ethereum"].selectedAddress)
            return window["ethereum"].selectedAddress;
        await new Promise(r => setTimeout(r, 400));
        return window["ethereum"].selectedAddress;
    }
    /**
     * 添加流动性HT
     * @param {*} usdt  合约地址 
     * @param {*} Authorizedamount  已经授权的金额 
     * @param {*} one_amount  要流动的第一个币值 
     * @param {*} two_amount  要流动的第二个币值
     */
    async addLiquidityaETH(usdt, Authorizedamount, one_amount, two_amount) {
        // 将已授权的金额转换为可识别的金额 
        Authorizedamount = formatUnits(Authorizedamount)
        let account = await this.getAddress()
        const USDT = new this.web3.Contract(ERC20_ABI, usdt);
        const router = new this.web3.Contract(Router_ABI, ROUTER);

        const deadline = Math.ceil((+Date.now()) / 1000) + 1800;
        // const fund500 = parseUnits('0.01');
        const fund500 = MaxUint256;
        console.log('fund500=>%s', fund500)
        console.log(USDT)
        console.log(router)
        console.log(Authorizedamount > one_amount)
        return new Promise((resolve, reject) => {
            // 判断授权
            if (Authorizedamount > one_amount) {
                console.log(router)
                router.methods.addLiquidityETH(
                    usdt,
                    parseUnits(one_amount),
                    0,
                    0,
                    account,
                    deadline
                ).send({
                    from: account,
                    value: parseUnits(two_amount)
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', function (receipt) {
                        console.log('receipt=>%s', receipt);
                        // console.log(receipt)
                        // resolve(receipt)
                    })
                    .on('error', () => {
                        reject(-1)
                    }); // If there's an out of gas error the second parameter is the receipt.
            } else {
                // router合约 要授权的金额(一个无尽的数)
                USDT.methods.approve(ROUTER, fund500).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
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
                            .on('transactionHash', function (hash) { })
                            .on('confirmation', function (confirmationNumber, receipt) { })
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
            }
        })
    }
    /**
     * 添加流动性
     * @param {*} currency1 合约1
     * @param {*} currency2 合约2
     * @param {*} Authorizedamount1 已经授权的金额 
     * @param {*} Authorizedamount2 已经授权的金额
     * @param {*} one_amount 要流动的第一个币值
     * @param {*} two_amount 要流动的第二个币值
     * @returns 
     */
    async addLiquidity(currency1, currency2, Authorizedamount1, Authorizedamount2, one_amount, two_amount) {
        // 将已授权的金额转换为可识别的金额 
        let _Authorizedamount1 = formatUnits(Authorizedamount1)
        let _Authorizedamount2 = formatUnits(Authorizedamount2)
        let account = await this.getAddress()
        const TOKEN1 = new this.web3.Contract(ERC20_ABI, currency1);
        const TOKEN2 = new this.web3.Contract(ERC20_ABI, currency2);
        const router = new this.web3.Contract(Router_ABI, ROUTER);

        const deadline = Math.ceil((+Date.now()) / 1000) + 1800;
        // const fund500 = parseUnits('0.01');
        const fund500 = MaxUint256;
        console.log('fund500=>%s', fund500)
        return new Promise((resolve, reject) => {
            // 判断授权
            // debugger
            if (_Authorizedamount1 > one_amount && _Authorizedamount2 > two_amount) {
                router.methods.addLiquidity(
                    currency1,
                    currency2,
                    parseUnits(one_amount),
                    parseUnits(two_amount),
                    0,
                    0,
                    account,
                    deadline
                ).send({
                    from: account,
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', function (receipt) {
                        console.log('receipt=>%s', receipt);
                        // console.log(receipt)
                        // resolve(receipt)
                    })
                    .on('error', () => {
                        reject(-1)
                    }); // If there's an out of gas error the second parameter is the receipt.
            } else if (_Authorizedamount1 < one_amount) {
                TOKEN1.methods.approve(ROUTER, fund500).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', function (receipt) {
                        console.log('receipt=>%s', receipt);
                        console.log(receipt)
                        if (_Authorizedamount2 > two_amount) {
                            router.methods.addLiquidity(
                                currency1,
                                currency2,
                                parseUnits(one_amount),
                                parseUnits(two_amount),
                                0,
                                0,
                                account,
                                deadline
                            ).send({
                                from: account,
                            })
                                .on('transactionHash', function (hash) { })
                                .on('confirmation', function (confirmationNumber, receipt) { })
                                .on('receipt', function (receipt) {
                                    console.log('receipt=>%s', receipt);
                                    // console.log(receipt)
                                    // resolve(receipt)
                                })
                                .on('error', () => {
                                    reject(-1)
                                }); // If there's an out of gas error the second parameter is the receipt.
                        }
                    })
                    .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
            } else if (_Authorizedamount2 < two_amount) {
                TOKEN2.methods.approve(ROUTER, fund500).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', function (receipt) {
                        console.log('receipt=>%s', receipt);
                        console.log(receipt)
                        if (_Authorizedamount1 > one_amount) {
                            console.log('创建流动性')
                            router.methods.addLiquidity(
                                currency1,
                                currency2,
                                parseUnits(one_amount),
                                parseUnits(two_amount),
                                0,
                                0,
                                account,
                                deadline
                            ).send({
                                from: account,
                            })
                                .on('transactionHash', function (hash) { })
                                .on('confirmation', function (confirmationNumber, receipt) { })
                                .on('receipt', function (receipt) {
                                    console.log('receipt=>%s', receipt);
                                    // console.log(receipt)
                                    // resolve(receipt)
                                })
                                .on('error', () => {
                                    reject(-1)
                                }); // If there's an out of gas error the second parameter is the receipt.
                        }
                    })
                    .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
            }
        })
    }
    /**
     * 获取所有lp /4
     * @returns 
     */
    async getLpBalance() {
        let Factory = new this.web3.Contract(Factory_ABI, FACTORY)
        // console.log(Factory.methods)
        let len = await Factory.methods.allPairsLength().call({}, 'latest')
        // console.log(len)
        let account = await this.getAddress();
        const provider = new Provider(new JsonRpcProvider(LINK_NODE));
        await provider.init();
        let calls = []
        // console.log(tokenInfo.tokens.length)
        for (var i = 0; i < len; i++) {
            var lp_address = await Factory.methods.allPairs(i).call({}, 'latest')
            // console.log(lp_address)
            const abi = ERC20_ABI.concat([{
                "constant": true,
                "inputs": [],
                "name": "token0",
                "outputs": [{
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }, {
                "constant": true,
                "inputs": [],
                "name": "token1",
                "outputs": [{
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }]);
            const contract = new Contract(lp_address, abi)
            console.log(lp_address)
            calls.push(contract.balanceOf(account))
            calls.push(contract.allowance(account, ROUTER))
            calls.push(contract.token0())
            calls.push(contract.token1())
            // calls.push(lp_address)
            // calls.push(contract.address)
        }
        // console.log(calls)

        // console.log(ERC20_ABI)
        /* let calls = [
            new Contract('0xa71edc38d189767582c38a3145b5873052c3e47a', ERC20_ABI).balanceOf(`0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3`)
        ]; */
        return provider.all(calls)
    }
    /**
     * 
     * @param {*} lpAddress lp合约地址
     * @param {*} token usdt合约地址
     * @param {*} Authorizedamount1 lp地址授权金额
     * @param {*} lpBalance 去除流动性的金额
     * @returns 
     */
    async removeLpETH(lpAddress, token, Authorizedamount1, lpBalance) {
        const _lpBalance = parseUnits(lpBalance)
        const _Authorizedamount1 = formatUnits(Authorizedamount1)
        // console.log(_lpBalance)
        // removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)
        let account = await this.getAddress()
        // console.log(FACTORY)
        // let Factory = new this.web3.Contract(Factory_ABI, FACTORY)
        const router = new this.web3.Contract(Router_ABI, ROUTER);
        const deadline = Math.ceil((+Date.now()) / 1000) + 1800;
        const fund500 = MaxUint256;
        console.log(router.methods)
        return new Promise((resolve, reject) => {
            if (_Authorizedamount1 > lpBalance) {
                router.methods.removeLiquidityETH(
                    token,// 0xa71edc38d189767582c38a3145b5873052c3e47a usdttoken
                    _lpBalance,// 0.0001
                    0,
                    0,
                    account,// 我的钱包地址
                    deadline
                ).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', function (receipt) {
                        // console.log('receipt=>%s', receipt);
                        // console.log(receipt)
                        resolve(receipt)
                    })
                    .on('error', () => {
                        reject(-1)
                    });
            } else {
                const USDT = new this.web3.Contract(ERC20_ABI, lpAddress);
                USDT.methods.approve(ROUTER, fund500).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', async function (receipt) {
                        await router.methods.removeLiquidityETH(
                            token,// 0xa71edc38d189767582c38a3145b5873052c3e47a usdttoken
                            _lpBalance,// 0.0001
                            0,
                            0,
                            account,// 我的钱包地址
                            deadline
                        ).send({
                            from: account
                        })
                            .on('transactionHash', function (hash) { })
                            .on('confirmation', function (confirmationNumber, receipt) { })
                            .on('receipt', function (receipt) {
                                // console.log('receipt=>%s', receipt);
                                // console.log(receipt)
                                resolve(receipt)
                            })
                            .on('error', () => {
                                reject(-1)
                            });
                    })
                    .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
            }
        })
    }
    
    /**
     * 
     * @param {*} lpAddress lp合约地址
     * @param {*} token0 token0合约地址
     * @param {*} token1 token1合约地址
     * @param {*} Authorizedamount1 lp地址授权金额
     * @param {*} lpBalance 去除流动性的金额
     * @returns 
     */
    async removeLp(lpAddress, token0, token1, Authorizedamount1, lpBalance) {
        const _lpBalance = parseUnits(lpBalance)
        const _Authorizedamount1 = formatUnits(Authorizedamount1)
        // console.log(_lpBalance)
        // removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)
        let account = await this.getAddress()
        // console.log(FACTORY)
        // let Factory = new this.web3.Contract(Factory_ABI, FACTORY)
        const router = new this.web3.Contract(Router_ABI, ROUTER);
        const deadline = Math.ceil((+Date.now()) / 1000) + 1800;
        const fund500 = MaxUint256;
        // console.log(router.methods)

        return new Promise((resolve, reject) => {
            if (_Authorizedamount1 > lpBalance) {
                router.methods.removeLiquidity(
                    token0,
                    token1,
                    _lpBalance,// 0.0001
                    0,
                    0,
                    account,// 我的钱包地址
                    deadline
                ).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', function (receipt) {
                        // console.log('receipt=>%s', receipt);
                        // console.log(receipt)
                        resolve(receipt)
                    })
                    .on('error', () => {
                        reject(-1)
                    });
            } else {
                const USDT = new this.web3.Contract(ERC20_ABI, lpAddress);
                USDT.methods.approve(ROUTER, fund500).send({
                    from: account
                })
                    .on('transactionHash', function (hash) { })
                    .on('confirmation', function (confirmationNumber, receipt) { })
                    .on('receipt', async function (receipt) {
                        await router.methods.removeLiquidity(
                            token0,
                            token1,
                            _lpBalance,// 0.0001
                            0,
                            0,
                            account,// 我的钱包地址
                            deadline
                        ).send({
                            from: account
                        })
                            .on('transactionHash', function (hash) { })
                            .on('confirmation', function (confirmationNumber, receipt) { })
                            .on('receipt', function (receipt) {
                                // console.log('receipt=>%s', receipt);
                                // console.log(receipt)
                                resolve(receipt)
                            })
                            .on('error', () => {
                                reject(-1)
                            });
                    })
                    .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
            }
        })
    }

}

const sdk = new SDK()
export default sdk