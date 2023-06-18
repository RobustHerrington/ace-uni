"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = "我是标题";
    const handle = () => {
      console.log("执行点击事件");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title),
        b: common_vendor.o(handle)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Project/HBuilderProjects-uni-app/unidemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
