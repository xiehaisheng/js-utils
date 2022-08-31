# 开发一个自己的JS函数库

### 开发步骤
1. src/common 目录下，分类型新建 xx.ts，作为编写新方法代码的载体文件，使用驼峰命名；
2. 编写完后在index.ts 中导出，并执行 npm run build 进行打包；
3. 打包完后新建该方法测试文件。test 目录下，遵守 xx.test.js 的命名规范，并参考已有示例编写测试代码；
4. 自测方法是否正确，终端输入 npm run test 命令，如只想单独测试某一个文件则执行 jest -t xx.test.js；
5. 测试无误后发布，package.json 中修改版本号，执行 npm run release；

### 函数库使用
```ts
npm install utils-template --save
import { Url, Env } from 'utils-template';
```

### 文档查看
1. 生成最新文档只需在终端执行 npm run docs；
2. 执行完此命令后，即生成最新的文档目录-docs；
3. 查看。项目中找到 docs 目录下的 index.html，在浏览器运行即可查看；
4. 文档编写规范/方法参考 jsdoc 官方文档 https://www.shouce.ren/api/view/a/13232。
