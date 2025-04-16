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
  };

  const waitForPassword = () => {
    const second_input = document.querySelector("input[type='password']");
    if (second_input) {
      second_input.value = data.password;
      second_input.dispatchEvent(new Event("input", { bubbles: true }));
      setTimeout(() => {
        document.querySelector("input[value='確認']").click();
        setTimeout(handleNextScreen, 300);
      }, 300);
    } else {
      setTimeout(waitForPassword, 3000);
    }
  };

  const handleNextScreen = (onFail) => {
    const maxAttempts = 5;
    let attempts = 0;

    const check = () => {
      const current_url = window.location.href;
      const isTargetURL = current_url.includes("https://auth.keio.jp/idp/profile/");

      if (isTargetURL) {
        const btn = document.querySelector("div.confirm_exp li a");
        if (btn) {
          btn.click();
          return;
        }
      }

      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(check, 300);
      } else {
        if (onFail) onFail();
      }
    };

    check();
  };
  handleNextScreen(startInput);
});
