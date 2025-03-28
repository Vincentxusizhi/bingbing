let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？真的不考虑一下吗…", 
    "再给你一次机会", 
    "不许选这个！ ", 
    "我要生气啦！…", 
    "不行:("
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "Image/IMG_5413.PNG"; // 震惊
    if (clickCount === 2) mainImage.src = "Image/IMG_5413.PNG";   // 思考
    if (clickCount === 3) mainImage.src = "Image/IMG_5412.PNG";   // 生气
    if (clickCount === 4) mainImage.src = "Image/IMG_5412.PNG";  // 哭
    if (clickCount >= 5) mainImage.src = "Image/IMG_5412.PNG";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!贴贴!! ( >᎑<)♡︎ᐝ</h1>
            <img src="Image/IMG_5413.PNG" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
    const style = document.createElement("style");
    style.innerHTML = `
        .yes-screen {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        
        .yes-text {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .yes-image {
            width: 300px; /* 控制图片宽度 */
            max-width: 80%; /* 避免图片过大 */
            height: auto; /* 保持图片比例 */
        }
    `;
    document.head.appendChild(style);
});
