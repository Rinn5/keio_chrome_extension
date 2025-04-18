# 使い方（開発者モード）
1. chrome://extensions を開く。
2. デベロッパーモードをON
3. 「パッケージ化されていない拡張機能を開く」をクリック
4. ファイルを読み込む

# ファイル構成
```tree
.
├── README.md
├── docs
│   └── privacy_policy.md
├── images
│   ├── icon128.png
│   ├── icon16.png
│   ├── icon19.png
│   ├── icon38.png
│   └── icon48.png
├── login.js
├── manifest.json
├── reference
│   ├── assets
│   │   ├── promotion_tile.png
│   │   ├── thumbnail1.png
│   │   └── thumbnail2.png
│   └── zip
│       └── keio_auto_login.zip
├── service-worker.js
├── setting.html
└── setting.js
```


# 開発者用留意事項
初回インストール時とアイコン選択時に情報入力できる小さなウィンドウが開く。  
ツールバーのクリックによっても情報の編集ができる