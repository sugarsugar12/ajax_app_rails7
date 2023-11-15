function post (){
  // getElementByIdメソッドで取得した投稿ボタンの要素を変数formに格納
  const form = document.getElementById("form");
  // 投稿ボタンがクリックされたときにイベント発火
  //メモが重複投稿されないようにする
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //FormDataとは、フォームに入力された値を取得できるオブジェクト
    const formData = new FormData(form);
    //JavaScriptを用いてサーバーとHTTP通信を行うときに利用するオブジェクト?
    const XHR = new XMLHttpRequest();
    //リクエストの内容を指定するためのメソッド
    XHR.open("POST", "/posts", true);
    //レスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定
    XHR.responseType = "json";
    //リクエストを送信するメソッド?
    XHR.send(formData);
  });
};

window.addEventListener('turbo:load', post);