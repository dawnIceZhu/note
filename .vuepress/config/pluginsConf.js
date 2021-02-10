const moment = require('moment'); // 导入moment依赖包

module.exports = {
  'last-updated': {
    transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒")
  },
  '@vuepress-reco/vuepress-plugin-pagation': { // 添加分页
    perPage: 10
  },
  'meting': { // 设置meting播放器
    // metingApi: 'https://autumnfish.cn/song/url',
    meting: { // 不配置该项的话不会出现全局播放器
      server: 'netease', // 音乐平台
      type: 'playlist', // 播放清单
      mid: '2427325085' // 资源ID
    },
    aplayer: {
      fixed: true, // 开启吸底模式
      mini: true, // 开启迷你模式
      theme: '#67cc86', // 设置播放器默认主题颜色
      lrcType: 3, // 设置lrc歌词解析模式
      listFolded: true, // 是否折叠播放列表
    }
  },
  '@vuepress-reco/vuepress-plugin-loading-page': 'auto', // 载入页面
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "Found new content available",
      buttonText: "Update"
    }
  },
  '@vuepress/google-analytics': {
    'ga': 'UA-188413535-4' // 跟踪ID
  },
  "ribbon": {
    size: 90, // width of the ribbon, default: 90
    opacity: 0.8, // opacity of the ribbon, default: 0.3
    zIndex: -1 // z-index property of the background, default: -1
  },
  "cursor-effects": "auto", // 添加光标动画
  "dynamic-title": { // 添加动态标题
    showIcon: "/public/favicon.ico",
    showText: "Hey, that's good again!",
    hideIcon: "/public/failure.ico",
    hideText: "Oh, it broke down!",
    recoverTime: 2000
  }
}
