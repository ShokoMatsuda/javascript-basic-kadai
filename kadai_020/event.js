// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const text = document.getElementById('text');

    // textというidを持つHTML要素を「ボタンをクリックしました」に変更する
    text.textContent = 'ボタンをクリックしました';
});