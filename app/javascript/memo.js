function post (){
  // getElementByIdメソッドで取得した投稿ボタンの要素を変数formに格納
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // 投稿ボタンがクリックされたときにイベント発火
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('turbo:load', post);