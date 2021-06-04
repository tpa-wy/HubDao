<template>
  <div class="yield-farming">
    <div class="header">
      <div class="title">Yield Farming</div>
      <div class="connect">Stake Liquidity Pool(LP) tokens to earn.</div>
    </div>
    <div class="outer">
      <div class="Rectangle">
        <div class="left">
          <svg
            viewBox="0 0 24 24"
            @click="is_show = true"
            color="primary"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-block icon-block-1"
            :class="{ 'icon-checked': is_show }"
          >
            <path
              d="M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            color="textDisabled"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-block icon-block-2"
            @click="is_show = false"
            :class="{ 'icon-checked': !is_show }"
          >
            <path
              d="M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"
            ></path>
          </svg>
          <div class="swith">
            <el-switch
              v-model="switchValue"
              active-color="#13ce66"
              inactive-color="#444462"
            >
            </el-switch>
            <div>Staked only</div>
          </div>
          <div class="live">
            <div class="live-1">Live</div>
            <div class="live-2">Liquidity</div>
          </div>
        </div>

        <div class="right">
          <div class="SORT-BY">
            <div class="title">SORT BY</div>
            <div class="select"></div>
          </div>
          <div class="_SEARCH">
            <div class="title">SEARCH</div>
            <div class="search"></div>
          </div>
        </div>
      </div>
      <div class="block" v-show="is_show">
        <div
          class="block-item block-1"
          v-for="item in list"
          :key="item.list2"
          :class="{ 'block-item-height': !item.checked }"
        >
          <div class="content">
            <div class="title">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="content">COINCOIN-HT</div>
            </div>
            <div class="core">
              <div class="core-item">
                <div class="icon"></div>
                <div class="font">Croe</div>
              </div>
              <div class="ratio">40X</div>
            </div>
            <div class="line">
              <div class="line-row">
                <div class="line-row-1">APR :</div>
                <div class="line-row-2">49.28%</div>
              </div>
              <div class="line-row">
                <div class="line-row-1">Earn :</div>
                <div class="line-row-2">HD</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button2">Harvest</div>
              </div>
            </div>
          </div>

          <div
            class="details"
            v-show="!item.checked"
            @click="item.checked = !item.checked"
          >
            Details
            <div class="icon"></div>
          </div>
          <div
            class="details"
            v-show="item.checked"
            @click="item.checked = !item.checked"
          >
            Hide
            <div class="icon icon-rotate"></div>
          </div>
          <div class="footer">
            <div class="footer-block">
              <div class="total">
                <div class="block-left">Total Liquidity:</div>
                <div class="block-right">$756,210,797</div>
              </div>
              <div class="share">
                Get CAKE-BNB LP<svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM iXahuZ"
                >
                  <path
                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  ></path>
                </svg>
              </div>
              <div class="share">
                View Contract<svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM iXahuZ"
                >
                  <path
                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  ></path>
                </svg>
              </div>
              <div class="share">
                See Pair Info<svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM iXahuZ"
                >
                  <path
                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="block-item block-1">
          <div class="content">
            <div class="title">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="content">COINCOIN-HT</div>
            </div>
            <div class="core">
              <div class="core-item">
                <div class="icon"></div>
                <div class="font">Croe</div>
              </div>
              <div class="ratio">40X</div>
            </div>
            <div class="line">
              <div class="line-row">
                <div class="line-row-1">APR :</div>
                <div class="line-row-2">49.28%</div>
              </div>
              <div class="line-row">
                <div class="line-row-1">Earn :</div>
                <div class="line-row-2">HD</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button2">Harvest</div>
              </div>
            </div>
          </div>

          <div class="details">
            Details
            <div class="icon"></div>
          </div>
        </div>
        <div class="block-item block-1">
          <div class="content">
            <div class="title">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="content">COINCOIN-HT</div>
            </div>
            <div class="core">
              <div class="core-item">
                <div class="icon"></div>
                <div class="font">Croe</div>
              </div>
              <div class="ratio">40X</div>
            </div>
            <div class="line">
              <div class="line-row">
                <div class="line-row-1">APR :</div>
                <div class="line-row-2">49.28%</div>
              </div>
              <div class="line-row">
                <div class="line-row-1">Earn :</div>
                <div class="line-row-2">HD</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button2">Harvest</div>
              </div>
            </div>
          </div>

          <div class="details">
            Details
            <div class="icon"></div>
          </div>
        </div> -->
      </div>
      <div class="block2" v-show="!is_show">
        <div
          class="block-item"
          v-for="item in list"
          :key="item.list"
          :class="{ 'block-item-height': !item.checked }"
        >
          <div class="top">
            <div class="icon-block">
              <img
                class="icon icon-1"
                src="../../../public/assets/icons-default-img-4.png"
                alt=""
              />
              <img
                class="icon icon-2"
                src="../../../public/assets/icons-default-img-4.png"
                alt=""
              />
            </div>
            <div class="title">Title-HT</div>
            <div class="Earned">
              <div class="top">Earned</div>
              <div class="bottom">0</div>
            </div>
            <div class="APR">
              <div class="top">APR</div>
              <div class="bottom">
                <div class="font">16.05</div>
                <div class="icon">ROI</div>
              </div>
            </div>
            <div class="Liquidity">
              <div class="top">Liquidity</div>
              <div class="bottom">
                <div class="font">$663,186,461</div>
                <div class="icon"></div>
              </div>
            </div>
            <div class="Liquidity">
              <div class="top">Multiplier</div>
              <div class="bottom">
                <div class="font">8x</div>
                <div class="icon"></div>
              </div>
            </div>
            <div class="Details" @click="item.checked = !item.checked">
              <div class="font">Details</div>
              <div class="icon" :class="{ 'icon-rotate': item.checked }"></div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-item">
              <img src="../../../public/assets/icons-core-checked.png" alt="" />
              <div class="share">
                Get HD-HT LP<svg
                  data-v-d2b0da2e=""
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM iXahuZ"
                >
                  <path
                    data-v-d2b0da2e=""
                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  ></path>
                </svg>
              </div>
              <div class="share">
                View Contract<svg
                  data-v-d2b0da2e=""
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM iXahuZ"
                >
                  <path
                    data-v-d2b0da2e=""
                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  ></path>
                </svg>
              </div>
              <div class="share">
                See Pair Info<svg
                  data-v-d2b0da2e=""
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM iXahuZ"
                >
                  <path
                    data-v-d2b0da2e=""
                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="bottom-item bottom-item-2">
              <div class="title">HD <span>EARNED</span></div>
              <div class="content">
                <div class="value">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="bottom-item bottom-item-3">
              <div class="title">HD-HT LP <span>STAKED</span></div>
              <div class="button">Unlock Wallet</div>
            </div>
          </div>
        </div>
        <!-- <div class="block-item">
          <div class="icon-block">
            <img class="icon icon-1" src="../../../public/assets/icons-default-img-4.png" alt="">
            <img class="icon icon-2" src="../../../public/assets/icons-default-img-4.png" alt="">
          </div>
          <div class="title">Title-HT</div>
          <div class="Earned">
            <div class="top">Earned</div>
            <div class="bottom">0</div>
          </div>
          <div class="APR">
            <div class="top">APR</div>
            <div class="bottom">
              <div class="font">16.05</div>
              <div class="icon">ROI</div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Liquidity</div>
            <div class="bottom">
              <div class="font">$663,186,461</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Multiplier</div>
            <div class="bottom">
              <div class="font">8x</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Details">
            <div class="font">Details</div>
            <div class="icon"></div>
          </div>
        </div>
        <div class="block-item">
          <div class="icon-block">
            <img class="icon icon-1" src="../../../public/assets/icons-default-img-4.png" alt="">
            <img class="icon icon-2" src="../../../public/assets/icons-default-img-4.png" alt="">
          </div>
          <div class="title">Title-HT</div>
          <div class="Earned">
            <div class="top">Earned</div>
            <div class="bottom">0</div>
          </div>
          <div class="APR">
            <div class="top">APR</div>
            <div class="bottom">
              <div class="font">16.05</div>
              <div class="icon">ROI</div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Liquidity</div>
            <div class="bottom">
              <div class="font">$663,186,461</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Multiplier</div>
            <div class="bottom">
              <div class="font">8x</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Details">
            <div class="font">Details</div>
            <div class="icon"></div>
          </div>
        </div>
        <div class="block-item">
          <div class="icon-block">
            <img class="icon icon-1" src="../../../public/assets/icons-default-img-4.png" alt="">
            <img class="icon icon-2" src="../../../public/assets/icons-default-img-4.png" alt="">
          </div>
          <div class="title">Title-HT</div>
          <div class="Earned">
            <div class="top">Earned</div>
            <div class="bottom">0</div>
          </div>
          <div class="APR">
            <div class="top">APR</div>
            <div class="bottom">
              <div class="font">16.05</div>
              <div class="icon">ROI</div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Liquidity</div>
            <div class="bottom">
              <div class="font">$663,186,461</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Multiplier</div>
            <div class="bottom">
              <div class="font">8x</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Details">
            <div class="font">Details</div>
            <div class="icon"></div>
          </div>
        </div>
        <div class="block-item">
          <div class="icon-block">
            <img class="icon icon-1" src="../../../public/assets/icons-default-img-4.png" alt="">
            <img class="icon icon-2" src="../../../public/assets/icons-default-img-4.png" alt="">
          </div>
          <div class="title">Title-HT</div>
          <div class="Earned">
            <div class="top">Earned</div>
            <div class="bottom">0</div>
          </div>
          <div class="APR">
            <div class="top">APR</div>
            <div class="bottom">
              <div class="font">16.05</div>
              <div class="icon">ROI</div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Liquidity</div>
            <div class="bottom">
              <div class="font">$663,186,461</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Liquidity">
            <div class="top">Multiplier</div>
            <div class="bottom">
              <div class="font">8x</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="Details">
            <div class="font">Details</div>
            <div class="icon"></div>
          </div>
        </div>  -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationYieldfarming",
  data() {
    return {
      // 开关
      switchValue: false,
      is_show: true,
      list: [{ checked: false }],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.yield-farming {
  margin-bottom: 100px;
  .header {
    height: 206px;
    background-image: linear-gradient(
      275deg,
      #11122e 99%,
      #2c3053 31%,
      #070721 2%
    );
    > .title {
      padding-top: 48px;
      // width: 244px;
      margin-left: 178px;
      font-family: NotoSansCJKkr;
      font-size: 36px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
    }
    > .connect {
      // width: 442px;
      height: 36px;
      margin: 9px 441px 63px 178px;
      font-family: NotoSansCJKkr;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
    }
  }

  .outer {
    width: 1302px;
    margin: 0 auto;
    .Rectangle {
      height: 64px;
      width: 1302px;
      margin: 0 auto;
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
      // margin-left: 184px;
      // padding-right: 100px;
      .left {
        display: flex;
        align-items: center;
        .icon-block-1 {
          width: 22px;
          height: 22px;
          // background-color: #f00;
          margin-right: 10px;
          cursor: pointer;
        }
        .icon-block-2 {
          cursor: pointer;
          width: 22px;
          height: 22px;
          svg {
            width: 100%;
            height: 100%;
          }
          // background-image: url(../../../public/assets/icons-listview-on.png);
          // background-size: 100% 100%;
          // background-color: #f00;
          //   margin-right: 70px;
        }
        .icon-checked {
          fill: rgb(31, 199, 212);
        }
        .swith {
          display: flex;
          align-items: center;
          // margin-right: 82px;
          margin-left: 18px;
          > div:nth-child(2) {
            margin-left: 18px;
            width: 136px;
            height: 24px;
            // margin: 6px 40px 2px 8px;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #a5a5a5;
          }
        }
        .live {
          cursor: pointer;
          width: 172px;
          height: 32px;
          // margin: 0 366px 0 40px;
          padding: 0 20px 0 0;
          border-radius: 24px;
          background-color: #d8d8d8;
          display: flex;
          align-items: center;
          .live-1 {
            width: 66px;
            height: 32px;
            // margin: 0 21px 0 0;
            padding: 3px 16px 5px 17px;
            border-radius: 16px;
            background-color: #000;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
          }
          .live-2 {
            width: 65px;
            height: 24px;
            // margin: 3px 0 5px 21px;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #000;
            margin-left: 21px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .SORT-BY,
        ._SEARCH {
          display: flex;
          align-items: center;
          .title {
            width: 56px;
            height: 20px;
            //   margin: 6px 13px 6px 366px;
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: #000;
          }
        }
        .select {
          width: 121px;
          height: 32px;
          margin: 0 64px 0 13px;
          padding: 3px 10px 5px 12px;
          border-radius: 2px;
          border: solid 1px #010033;
          background-color: #444462;
        }
        .search {
          width: 177px;
          height: 32px;
          margin: 0 0 0 13px;
          padding: 8px 11px 6px 6px;
          border-radius: 2px;
          border: solid 1px #010033;
          background-color: #444462;
        }
      }
    }
    .block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      .block-item-height {
        height: 590px;
        overflow: hidden;
      }
      .block-item {
        width: 418px;
        overflow: hidden;
        // margin-right: 24px;
        margin-top: 30px;
        border-radius: 8px;
        // box-shadow: 3px 3px 11px 1px rgba(1, 0, 51, 0.65);
        // background-color: #181742;
        background-color: #fff;
        > .content {
          padding: 35px 0 0 24px;
        }
        .title {
          display: flex;
          position: relative;
          .dot {
            width: 32px;
            height: 32px;
            //   margin: 0 36px 22px 24px;
            padding: 5px 6px 4px;
            opacity: 0.84;
            border-radius: 50%;
          }
          .dot-1 {
            position: absolute;
            background-color: #fdc702;
            left: 0;
            top: 0;
            z-index: 1;
          }
          .dot-2 {
            position: absolute;
            background-color: #f00;
            left: 25px;
            top: 0;
            z-index: 2;
          }
          .content {
            height: 29px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000;
            margin-left: 70px;
          }
        }
        .core {
          display: flex;
          align-items: center;
          .core-item {
            width: 77px;
            height: 28px;
            margin: 22px 11px 42px 24px;
            padding: 2px 11px 2px 6px;
            border-radius: 4px;
            border: solid 1px #252736;
            display: flex;
            align-items: center;
            .icon {
              width: 16px;
              height: 16px;
              margin: 5px 8px 3px 0;
              padding: 6px 4px 5px;
              transform: rotate(-360deg);
              border-radius: 12px;
              background-color: #f00;
            }
            .font {
              height: 24px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #252736;
            }
          }
          .ratio {
            width: 61px;
            height: 28px;
            margin: 22px 1px 42px 9px;
            padding: 2px 12px 2px 13px;
            border-radius: 4px;
            background-color: #2f303f;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.5px;
            text-align: center;
            color: #fff;
          }
        }
        .line {
          .line-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 20px 5px 24px;
            .line-row-1 {
              // width: 48px;
              height: 29px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #000;
            }
            .line-row-2 {
              width: 69px;
              height: 29px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: right;
              color: #000;
            }
          }
        }
        .small-block {
          .title {
            height: 20px;
            margin: 18px 9px 9px 24px;
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #a5a5a5;
            span {
              margin-left: 5px;
              font-weight: bold;
              color: #fdc702;
            }
          }
          .block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .money {
              width: 12px;
              height: 29px;
              margin-left: 24px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #a5a5a5;
            }
            .button {
              cursor: pointer;
              width: 125px;
              height: 44px;
              margin-right: 22px;
              padding: 7px 24px 8px 26px;
              opacity: 0.5;
              border-radius: 4px;
              // box-shadow: 3px 3px 7px 0 #010033;
              background-color: #e6e6e6;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #949494;
            }
            .button2 {
              cursor: pointer;
              width: 123px;
              height: 58px;
              padding: 14px 0 15px;
              margin-right: 22px;
              border-radius: 6px;
              background-color: #ffcc19;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #fff;
            }
          }
        }
        .details {
          display: flex;
          justify-content: center;
          align-items: center;
          // margin-bottom: 27px;
          border-top: 1px solid #dbdbdb;
          margin-top: 39px;
          height: 79px;
          width: 100%;
          line-height: 79px;
          font-family: NotoSansCJKkr;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #000;
          cursor: pointer;
          .icon {
            margin-left: 8px;
            width: 9px;
            height: 10px;
            // background-color: #f00;
            background-image: url(../../../public/assets/down-icon.png);
            background-size: 100% 100%;
            transform: rotate(360deg);
          }
        }

        .footer {
          // margin-top: 36px;
          padding-left: 24px;
          padding-right: 24px;
          .footer-block {
            font-size: 16px;
            font-weight: 600;
            .total {
              color: #280d5f;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 13px;
            }
            .share {
              display: flex;
              align-items: center;
              margin-bottom: 13px;
              color: #20c7d4;
              svg {
                cursor: pointer;
                margin-left: 6px;
              }
            }
          }
        }
      }
    }
    .block2 {
      margin-top: 60px;

      .block-item-height {
        height: 112px;
        overflow: hidden;
      }
      > .block-item {
        // height: auto;
        // height: 300px;
        // padding: 20px 101px 33px 36px;
        border-radius: 8px;
        border: solid 1px #d8d8d8;
        background-color: #ffffff;
        margin-bottom: 12px;
        .top {
          padding-left: 35px;
          display: flex;
          .icon-block {
            display: flex;
            position: relative;
            margin-top: 40px;
            // align-items: center;
            .icon {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              position: absolute;
            }
            /* .icon-1 {
              // background-color: #f00;
            } */
            .icon-2 {
              left: 25px;
              // background-color: #ff0;
            }
          }
          > .title {
            line-height: 112px;
            margin: 0px 183px 0px 80px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #000000;
          }
          .Earned {
            .top {
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #000000;
              margin-top: 20px;
            }
            .bottom {
              height: 29px;
              // margin: 12px 123px 0 183px;
              margin-top: 12px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #000000;
            }
          }
          .APR {
            .top {
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #000000;
              margin-top: 20px;
            }
            .bottom {
              display: flex;
              align-items: center;
              margin-top: 12px;
              margin-right: 93px;
              .font {
                // height: 29px;
                // margin: 12px 123px 0 183px;
                font-family: NotoSansCJKkr;
                font-size: 20px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #000000;
              }
              .icon {
                width: 29px;
                height: 17px;
                margin: 0px 0 0px 10px;
                // padding: 0 3px 0 4px;
                border-radius: 2px;
                background-color: #2f303f;
                font-family: NotoSansCJKkr;
                font-size: 11px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 17px;
                text-align: center;
                letter-spacing: 0.83px;
                color: #ffffff;
              }
            }
          }
          .Liquidity {
            .top {
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #000000;
              margin-top: 20px;
            }
            .bottom {
              display: flex;
              align-items: center;
              margin-top: 12px;
              margin-right: 93px;
              .font {
                // height: 29px;
                // margin: 12px 123px 0 183px;
                font-family: NotoSansCJKkr;
                font-size: 20px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #000000;
              }
              .icon {
                width: 20px;
                height: 20px;
                margin: 0px 0 0px 10px;
                // padding: 0 3px 0 4px;
                background-image: url(../../../public/assets/icons-help.png);
                background-size: 100% 100%;
                cursor: pointer;
              }
            }
          }
          .Details {
            user-select: none;
            display: flex;
            justify-content: center;
            // align-items: center;
            margin-top: 0px;
            line-height: 112px;
            cursor: pointer;
            margin-left: 109px;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #727272;
            .icon {
              width: 9px;
              height: 10px;
              // background-color: #f00;
              background-image: url(../../../public/assets/down-icon.png);
              transform: rotate(360deg);
              background-size: 100% 100%;
              margin-left: 14px;
              margin-top: 50px;
            }
          }
        }
        > .bottom {
          border-top: 1px solid #d8d8d8;
          padding-left: 35px;
          padding-top: 24px;

          // max-height: 0;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 31px;
          .bottom-item {
            img {
              margin-bottom: 24px;
            }
            .share {
              display: flex;
              align-items: center;
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #2f303f;
              svg {
                margin-left: 6px;
              }
            }
          }
          .bottom-item-2 {
            width: 432px;
            height: 127px;
            // margin: 30px 49px 0 183px;
            padding: 19px 30px 20px 24px;
            border-radius: 6px;
            border: solid 1px #f5f5f5;
            background-color: rgba(245, 245, 245, 0.41);
            .title {
              color: #ffa402;
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #727272;
              span {
                font-weight: bold;
                color: #ffa402;
              }
            }
            .content {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 18px;
              .value {
                font-family: NotoSansCJKkr;
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #a5a5a5;
              }
              .button {
                width: 125px;
                height: 50px;
                line-height: 50px;
                // margin: 18px 0 0 174px;
                // padding: 10px 24px 11px 26px;
                font-family: NotoSansCJKkr;
                font-size: 20px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                text-align: center;
                color: #a5a5a5;
                opacity: 0.64;
                border-radius: 4px;
                background-color: #d8d8d8;
              }
            }
          }
          .bottom-item-3 {
            width: 444px;
            height: 127px;
            // margin: 30px 40px 0 49px;
            padding: 19px 22px 20px 30px;
            border-radius: 6px;
            border: solid 1px #f5f5f5;
            background-color: rgba(245, 245, 245, 0.41);
            .title {
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #ffa402;
              span {
                font-weight: 500;
                color: #727272;
              }
            }
            .button {
              margin-top: 18px;
              width: 392px;
              height: 50px;
              line-height: 50px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              letter-spacing: normal;
              text-align: center;
              color: #010033;
              margin: 18px 0 0;
              border-radius: 6px;
              background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
            }
          }
        }
        // align-items: center;
      }
    }
  }
}
</style>
<style>
.icon-rotate {
  transform: rotate(180deg) !important;
}
[type="checkbox"]:checked + .top + .bottom {
  max-height: inherit;
  height: auto;
}
</style>