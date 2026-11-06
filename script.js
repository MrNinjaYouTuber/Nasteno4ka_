
// Появление фотографий при прокрутке страницы

const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform =
                entry.target.dataset.rotation || 'rotate(0deg)';

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

photos.forEach(photo => {
    photo.style.opacity = '0';

    const rotation = getComputedStyle(photo).transform;

    photo.dataset.rotation = rotation;

    observer.observe(photo);
});

// Приветствие в консоли

console.log("Привет, Настя! Ты замечательная! 🤎");


/* Счётчик дней знакомства */

// УКАЖИ СВОЮ ДАТУ ЗНАКОМСТВА
const startDate = new Date(2026, 8, 27);

function updateCounter() {
    const today = new Date();

    const difference = today - startDate;

    const days = Math.max(
        0,
        Math.floor(difference / (1000 * 60 * 60 * 24))
    );

    document.getElementById("daysCounter").textContent = days;
}

updateCounter();


/* Милые сообщения для Насти */

const messages = [
    "Настя, ты замечательный человек. Никогда не забывай об этом! 🤎",

    "Пусть сегодня у тебя будет много поводов улыбаться! ♡",

    "Ты заслуживаешь всего самого доброго и прекрасного!",

    "Не грусти, ведь твоя улыбка делает мир светлее! ☁️",

    "Ты очень милая, добрая и особенная. Помни об этом! 🤍",

    "Пусть все твои мечты постепенно становятся реальностью!"
];

function showMessage() {
    const box = document.getElementById("messageBox");

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    box.style.opacity = "0";

    setTimeout(() => {
        box.textContent = messages[randomIndex];
        box.style.opacity = "1";
    }, 200);
}


/* Летающие сердечки */

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Создаём сердечки периодически
setInterval(createHeart, 1200);


/* Приветствие */

console.log("Эта страничка создана специально для Насти 🤎");
