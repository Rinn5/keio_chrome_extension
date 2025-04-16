/* 初回入力情報をchromeのローカルストレージに保存する */
document.getElementById("setting-form").addEventListener("submit", function(e) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  chrome.storage.local.set({
    username: username,
    password: password
  }, function() {
    alert("設定完了しました。\n入力に誤りがあるときは拡張機能アイコンからいつでも変更できます");
    window.close();
  })
});