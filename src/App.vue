<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
}
// base.css
/* 内外边距通常让各个浏览器样式的表现位置不同 */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}
/* 要注意表单元素并不继承父级 font 的问题 */
body,
button,
input,
select,
textarea {
  font: 12px "\5b8b\4f53", arial, sans-serif;
}
input,
select,
textarea {
  font-size: 100%;
}
/* 去掉 table cell 的边距并让其边重合 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* ie bug：th 不继承 text-align */
th {
  text-align: inherit;
}
/* 去除默认边框 */
fieldset,
img {
  border: none;
}
/* ie6 7 8(q) bug 显示为行内表现 */
iframe {
  display: block;
}
/* 去掉列表前的标识，li 会继承 */
ol,
ul {
  list-style: none;
}
/* 对齐是排版最重要的因素，别让什么都居中 */
caption,
th {
  text-align: left;
}
/* 来自yahoo，让标题都自定义，适应多个系统应用 */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 500;
}
/* 统一上标和下标 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
/* 让链接在 hover 状态下显示下划线 */
a:hover {
  text-decoration: underline;
}
/* 默认不显示下划线，保持页面简洁 */
ins,
a {
  text-decoration: none;
}
/* 去除 ie6 & ie7 焦点点状线 */
a:focus,
*:focus {
  outline: none;
}
/* 清除浮动 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
.clearfix {
  zoom: 1; /* for ie6 & ie7 */
}
.clear {
  clear: both;
  display: block;
  font-size: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
}
/* 设置显示和隐藏，通常用来与 js 配合 */
.hide {
  display: none;
}
.block {
  display: block;
}
/* 设置浮动，减少浮动带来的 bug */
.fl,
.fr {
  display: inline;
}
.fl {
  float: left;
}
.fr {
  float: right;
}

/*定位*/
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
.fl {
  float: left;
  display: inline;
}
.fr {
  float: right;
  display: inline;
}
.cb {
  clear: both;
}
.cl {
  clear: left;
}
.cr {
  clear: right;
}
.vm {
  vertical-align: middle;
}
.pr {
  position: relative;
}
.pa {
  position: absolute;
}
.abs-right {
  position: absolute;
  right: 0;
}
.zoom {
  zoom: 1;
}
.hidden {
  visibility: hidden;
}
.none {
  display: none;
}
// 鼠标移上显示快

.hover {
  display: none;
}
.icon:hover,
.icon-info:hover {
  .hover {
    display: block;
    left: -100px;
    position: absolute;
    width: auto;
    min-width: 200px;
    // box-s
    height: auto;
    border-radius: 6px;
    top: 30px;
    z-index: 2003;
    user-select: none;
    padding: 15px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    .font-color1;
    .theme-box-back;
  }
}
.el-input--suffix .el-input__inner {
  padding-right: 30px;
  width: 100px;
  height: 30px;
  line-height: 30px;
}
.el-input__icon {
  line-height: 30px;
}
.el-select .el-input.is-focus .el-input__inner {
  
  padding-right: 30px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  .pink-border-color;
}

// 盒子
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .mask-back;
}
.button {
  cursor: pointer;
}
.button:hover,
.button:active {
  opacity: 0.85;
  // transform: translateY(1px);
  user-select: none;
  box-shadow: none;
}
</style>