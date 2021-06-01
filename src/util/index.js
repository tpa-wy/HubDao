import tokenInfo from '../../public/js/tokenlist.json'
import erc20 from '../../public/js/ERC20_ABI.json'
// console.log('ERC20 ABI = %s', erc20)
import Web3 from 'web3-eth';
import utils from './util'



// 一次性引入合约
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
        this.web3 = new Web3(window.ethereum);
        // console.log(this.web3)
        // this.contract = new this.web3.Contract(erc20, USDT);
        // this.accountList = {}
        // console.log(tokenInfo)

        // console.log(this.accountList)
        // console.log(this.contract)
    }
    // 获取账户余额
    async getBalance(address) {
        // console.log(this.contract)

        // return false
        // this.balance = await this.contract.methods.balanceOf(address).call({}, 'latest')
        // console.log('[INFO] this.balance = %s', this.web3.utils.fromWei(this.balance))
        // console.log('[INFO] this.balance = %s', formatUnits(this.balance))
        // 返回余额
        // return formatUnits(this.balance)
    }
    /**
     * 添加合约
     * @param {*} address 
     * @returns 
     */
    async getTokenInfo(address) {
        if(!isAddress(address)){
            return false
        }
        const provider = new Provider(new JsonRpcProvider(LINK_NODE));
        await provider.init();
        const contract = new Contract(address, erc20);
        const calls = [];

        calls.push(contract.balanceOf('your_wallet'));
        calls.push(contract.name());
        calls.push(contract.symbol());
        calls.push(contract.decimals());

        return provider.all(calls);
    }
    /**
     * 转账 https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html#methods-mymethod-send
     * @param {*} receipt 收钱的用户
     * @param {*} amount  转账的金额
     * @param {*} decimal 货币的长度
     */
    async transfer(receipt, amount, decimal = 18) {
        /* const usdt = new this.web3.Contract(erc20, USDT);
        console.log('我的钱包地址=>%s', '0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3')
        console.log(amount)
        amount = parseUnits(amount, decimal);
        console.log('要转账的金额=>%s', amount)
        await usdt.methods.transfer(receipt, amount).send({
            from: '0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3'
        }).then(res => console.log(res)).catch(error => {
            console.log(error)
        }) */
    }
    /**
     * 添加所有token合约
     * @returns 
     */
    async getMultiBalanceOf() {
        const provider = new Provider(new JsonRpcProvider(LINK_NODE));
        await provider.init();

        let calls = []
        console.log(tokenInfo.tokens.length)
        for (let i in tokenInfo.tokens) {
            console.log(i)
            // if (i > 20) {
            calls.push(new Contract(tokenInfo.tokens[i].address, erc20).balanceOf('0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3'))
            // }
        }
        // console.log(calls)

        // console.log(erc20)
        /* let calls = [
            new Contract('0xa71edc38d189767582c38a3145b5873052c3e47a', erc20).balanceOf(`0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3`)
        ]; */
        return provider.all(calls);
    }
}

const sdk = new SDK()
export default sdk