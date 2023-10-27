// btnというidを持つHTML要素を取得し、定数に代入する
const asyncBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const asynText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        asynText.textContent = 'ボタンをクリックしました';
    }, 2000);
});