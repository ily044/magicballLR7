const container = document.createElement('div');
document.body.appendChild(container);
const questionLabel = document.createElement('p');
questionLabel.innerText = "Введіть питання до магічної кулі:";
container.appendChild(questionLabel);
const form = document.createElement('form');
container.appendChild(form);
const input = document.createElement('input');
input.type = "text";
form.appendChild(input);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));
const button = document.createElement('button');
button.type = "button";
button.innerText = "Дізнатися!";
container.appendChild(button);
const answers = [
    "Так!",
    "Ні!",
    "Можливо...",
    "Без сумніву!",
    "Навряд чи...",
    "Спробуй пізніше!",
    "Зараз важко сказати.",
    "Шанси великі!",
    "Шанси малі.",
];
button.onclick = () => {
    button.classList.remove("animation");

    if (input.value === "") {
        button.innerText = "Ви не ввели питання!";
        button.style.cssText = 'background: linear-gradient(to right, gray, silver, lightgray)';
        return;
    }

    setTimeout(() => {
        button.classList.add("animation");
    }, 10);

    const randomIndex = Math.floor(Math.random() * answers.length);
    const reply = answers[randomIndex];

    if (reply.includes("Так") || reply.includes("Без сумніву")) {
        button.style.cssText = 'background: linear-gradient(to right, rgb(0,100,0), rgb(0,200,0), rgb(144,238,144))';
    } else if (reply.includes("Ні") || reply.includes("Навряд")) {
        button.style.cssText = 'background: linear-gradient(to right, rgb(139,0,0), rgb(255,0,0), rgb(255,80,80))';
    } else {
        button.style.cssText = 'background: linear-gradient(to right, rgb(0,0,139), rgb(65,105,225), rgb(173,216,230))';
    }

    button.innerText = reply;
};