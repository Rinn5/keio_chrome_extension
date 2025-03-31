# 使い方（開発者モード）
1. chrome://extensions を開く。
2. デベロッパーモードをON
3. 「パッケージ化されていない拡張機能を開く」をクリック
4. ファイルを読み込む

# ファイル構成
```tree
.
├── README.md
├── first_setting.html
├── first_setting.js
├── images
│   ├── icon128.png
│   ├── icon16.png
│   ├── icon19.png
│   ├── icon38.png
│   └── icon48.png
├── login.js
├── manifest.json
└── service-worker.js
```


# 仕様説明
初回インストール時とアイコン選択時にkeioアカウントの情報入力できる小さなウィンドウが開く。  
ツールバーのクリックによってもkeioアカウント情報の編集ができる