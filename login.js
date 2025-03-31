/* 慶應ログイン画面での実際の自動ログイン処理 */
chrome.storage.local.get(["username", "password"], function(data) {
  const startInput = () => {
    const first_input = document.querySelector("input[name='identifier']");
    if (first_input) {
      first_input.value = data.username;
      first_input.dispatchEvent(new Event("input", { bubbles: true }));
      setTimeout(() => {
        document.querySelector("input[value='次へ']").click();
      }, 300);
      waitForPassword();
    } else {
      setTimeout(startInput, 300);
    }
  }

  const waitForPassword = () => {
    const second_input = document.querySelector("input[type='password']");
    if (second_input) {
      second_input.value = data.password;
      second_input.dispatchEvent(new Event("input", { bubbles: true }));
      setTimeout(() => {
        document.querySelector("input[value='確認']").click();
      }, 300);
    } else {
      setTimeout(waitForPassword, 3000);
    }
  }
  
  startInput();
})