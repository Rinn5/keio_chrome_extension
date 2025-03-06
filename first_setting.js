/* 初回入力情報をchromeのローカルストレージに保存する */
document.getElementById("save").addEventListener("click", function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  chrome.storage.local.set({
    username: username,
    password: password
  }, function() {
    alert("設定を完了しました。もし入力情報に誤りがあるときは拡張機能のアイコンをクリックして変更できます。");
    window.close();
  })
});