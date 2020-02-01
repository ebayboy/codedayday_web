目录结构

├── .temp                  // H5编译结果目录
├── .rn_temp               // RN编译结果目录
├── dist                   // 小程序编译结果目录
├── config                 // Taro配置目录
│   ├── dev.js                 // 开发时配置
│   ├── index.js               // 默认配置
│   └── prod.js                // 打包时配置
├── screenshots            // 项目截图，和项目开发无关
├── src                    // 源码目录
│   ├── components             // 组件
│   ├── config                 // 项目开发配置
│   ├── images                 // 图片文件
│   ├── models                 // redux models
│   ├── pages                  // 页面文件目录
│   │   └── home
│   │       ├── index.js           // 页面逻辑
│   │       ├── index.scss         // 页面样式
│   │       ├── model.js           // 页面models
│   │       └── service.js         // 页面api
│   ├── styles             // 样式文件
│   ├── utils              // 常用工具类
│   ├── app.js             // 入口文件
│   └── index.html
├── package.json
└── template.js            // pages模版快速生成脚本,执行命令 npm run tep `文件名`