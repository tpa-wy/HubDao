const ethereum = window.ethereum;
import {
    message as $message
} from 'element-ui';
import store from '../store'



export default {
    // 检测是否安装MetaMask钱包
    detectionMetaMask: function () {
        if (typeof window.ethereum === "undefined") {
            $message({
                message: "You don't have a wallet installed!",
                type: "error",
            });
            return false
        }
        return true
    },
    // 链接钱包
    linkWallet: function () {
        if (!this.detectionMetaMask()) {
            return false
        }
        /* if (store.state.account != '') {
            $message({
                message: "You have connected the wallet!",
                type: "error",
            });
            return false
        } */
        ethereum
            .request({
                method: "eth_requestAccounts"
            })
            .then((array) => {
                // array[0]
                store.commit('setAccount', array[0])
            })
            .catch((err) => {
                console.error(err)
                $message({
                    message: "Please connect to your wallet!",
                    type: "error",
                });
            });
    },
    // 获取用户信息
    getUserinfo: async function () {
        return await ethereum.request({
            method: 'eth_accounts'
        });
    }
}