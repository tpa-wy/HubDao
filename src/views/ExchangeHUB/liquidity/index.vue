<template>
<div class="block">
    <div class="top">
      <div class="header">
        <div class="title">Liquidity</div>
        <div class="icon">
          <div class="icon-1">
            <img
              class="icon-img-20"
              src="../../../assets/icons-settings@2x.png"
            />
          </div>
          <div class="icon-2">
            <img
              class="icon-img-20"
              src="../../../assets/icons-recent@2x.png"
            />
          </div>
        </div>
      </div>
      <div class="title-2">Add liquidity to receive LP tokens</div>
      <div @click="addLiquidity" class="add-button">Add Liquidity</div>
    </div>
    <div class="bottom">
      <div class="title">
        <div>Your Liquidity</div>
        <div class="icon">
          <img src="../../../assets/icons-help@2x.png" class="icon-img-20" />
        </div>
      </div>
      <div v-if="dataList.length == 0" class="content">
        Connect to a wallet to view your liquidity.
      </div>
      <div v-if="dataList.length !== 0" class="content-list">
        <div
          v-for="(item, i) in dataList"
          :key="i"
          @click="onTap(item, i)"
          class="content-item"
        >
          <div class="content-i-head">
            <div class="content-i-img">
              <img
                v-for="_img in item.imgs"
                :key="_img"
                :src="_img"
                class="head-img"
              />

              <span class="head-title">HD/HT</span>
            </div>
            <div>
              <img
                :class="
                  'list-row-down ' +
                  (item.checked ? 'content-icon-down' : 'content-icon-upper')
                "
                src="/assets/down-icon.png"
              />
            </div>
          </div>
          <div
            v-if="item.checked && item.children.length !== 0"
            class="content-i-box"
          >
            <div
              v-for="(cItem, indx) in item.children"
              :key="indx"
              class="content-i-card"
            >
              <div class="content-i-name">{{ cItem.name }}</div>
              <div class="content-i-value">
                <span>{{ cItem.value }}</span>
                <img
                  v-for="(icon, imgindex) in cItem.icons"
                  :key="imgindex"
                  :src="icon"
                  alt=""
                />
              </div>
            </div>

            <div class="submit-group">
              <div class="submit-btn submit-btn1">Add</div>
              <div class="submit-btn submit-btn2">Remove</div>
            </div>
          </div>
        </div>
      </div>
      <div class="value">
        <div class="value-1">Don’t see a pool you joined? Import it.</div>
        <div class="value-2">
          Or, if you staked your LP tokens in a farm, unstake them to see them
          here
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url("./liquidity.less");
.content-list {
  margin: 21px 40px 17px;
}
.content-item {
  padding: 24px 18px 23px 19px;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 0 #e7e7e7;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
}
.submit-group {
  display: flex;
  justify-content: space-between;
  .submit-btn {
    width: 232px;
    height: 48px;
    margin: 30px 18px 0px 18px;

    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
  }
  .submit-btn1 {
    font-weight: 500;
    background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
  }
  .submit-btn2 {
    background-image: linear-gradient(to left, #44465e, #2f303f 0%);
    color: #ffffff;
  }
}

.content-i-head,
.content-i-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-i-card {
  margin-bottom: 10px;
}
.content-i-img {
  .content-i-head;
}

.content-icon-down {
  transform: rotate(180deg);
  transition: transform 0.2s linear;
}
.content-icon-upper {
  transform: rotate(360deg);
  transition: transform 0.2s linear;
}
.content-i-box {
  padding-top: 34px;
}
.content-i-value {
  display: flex;
  align-items: center;
}
.content-i-value > img {
  width: 20px;
  height: 20px;
  margin-left: 12px;
}

.content-i-name {
  color: #2f303f;
  font-size: 16px;
  .content-i-value > span {
    font-size: 16px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          imgs: [
            "/assets/icons-default-img-2@2x.png",
            "/assets/icons-default-img-3@2x.png",
          ],
          coinName: "HD/HT",
          children: [
            {
              name: "Pooled HD :",
              value: "3.22221",
              icons: ["/assets/icons-default-img-3@2x.png"],
            },
            {
              name: "Pooled HT :",
              value: "0.34256",
              icons: ["/assets/icons-default-img-2@2x.png"],
            },
            {
              name: "Your pool tokens:",
              value: "0.6134",
            },
            {
              name: "Your pool share:",
              value: "0.00%",
            },
          ],
        },
      ],
    };
  },
  methods: {
    addLiquidity() {
      this.$router.push({
        path: "/ExchangeHUB/Liquidity/Supply-Liquidity",
      });
    },
    onTap(item, i) {
      let obj = this.dataList;
      obj = Object.assign([], obj);
      if (!obj[i]["checked"]) {
        obj[i]["checked"] = true;
      } else {
        obj[i]["checked"] = false;
      }
      console.log("obj[i]", obj[i]);
      this.dataList = obj;
    },
  },
};
</script>
