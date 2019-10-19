# vue-inject-script-web-extension-example
一個對特定頁面注入 webpack 編譯過的 vue 程式碼範例

### Demo：

![demo.gif](demo.gif)

### 安裝：

step.1 執行指令安裝 node_modules

```
npm ci
```

step.2 啟動

```
npm run start
```

step.3 接著使用瀏覽器載入套件 (public資料夾)

### 說明：

這是個簡單的示範，利用 webpack 編譯 vue + element ui 產生 bundle 程式碼，並且將程式碼注入 https://www.google.com 頁面中

### 注意：

此方式雖然會自動編譯產生新的 content-script-bundle.js 與 content-script-bundle.css，但是並不會讓套件自動重新載入新的腳本，需要 `手動載入套件` + `手動重整網頁`，如果為了開發方便達到只需 `手動重整網頁` 的話需要使用 `webpack-extension-reloader` 與 `調整成透過 content script 呼叫 background script 注入腳本的方式` 
