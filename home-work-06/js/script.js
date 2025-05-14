// Task 1
/**
 * Функція перевіряє стан чекбокса і виводить результат
 * При натисканні кнопки #b-1 запускається функція f1
 * Функція перевіряє стан #i-1 і якщо він checked - виводить true, якщо не вибрано - false
 * Виведення в елемент #out-1
 */
function f1() {
  try {
    const checkbox = document.getElementById("i-1");
    const output = document.getElementById("out-1");

    if (!checkbox || !output) {
      throw new Error("Елементи не знайдено");
    }

    // Перевіряємо стан чекбокса і виводимо відповідне значення
    output.textContent = checkbox.checked;
  } catch (error) {
    console.error("Помилка у функції f1:", error.message);
    document.getElementById("out-1").textContent = "Сталася помилка";
  }
}

// Додаємо обробник події для кнопки
document.getElementById("b-1")?.addEventListener("click", f1);

// Task 2
function f2() {
  const checkbox = document.getElementById("i-2");
  const output = document.getElementById("out-2");

  if (!checkbox || !output) return;

  output.textContent = checkbox.checked ? checkbox.value : false;
}

document.getElementById("b-2")?.addEventListener("click", f2);

// Task 3
function f3() {
  const input = document.getElementById("i-3");
  const outValue = document.getElementById("out-31");
  const outCheck = document.getElementById("out-32");

  if (!input || !outValue || !outCheck) return;

  const password = input.value;
  outValue.textContent = password;
  outCheck.textContent = password.length >= 6 ? 1 : 0;
}

document.getElementById("b-3")?.addEventListener("click", f3);

// Task 4
function f4() {
  const radios = document.querySelectorAll("input[name='stack']");
  const output = document.getElementById("out-4");

  if (!output) return;

  for (const radio of radios) {
    if (radio.checked) {
      output.textContent = radio.value;
      break;
    }
  }
}

document.getElementById("b-4")?.addEventListener("click", f4);

// Task 5
function f5() {
  const color1 = document.getElementById("i-51");
  const color2 = document.getElementById("i-52");

  if (!color1 || !color2) return;

  color2.value = color1.value;
}

document.getElementById("b-5")?.addEventListener("click", f5);

// Task 6
function f6() {
  const dateInput = document.getElementById("i-6");
  const output = document.getElementById("out-6");

  if (!dateInput || !output) return;

  output.textContent = dateInput.value;
}

document.getElementById("b-6")?.addEventListener("click", f6);

// Task 7
function f7() {
  const range = document.getElementById("i-7");
  const output = document.getElementById("out-7");

  if (!range || !output) return;

  output.textContent = range.value;
}

document.getElementById("i-7")?.addEventListener("input", f7);

// Task 8
function f8() {
  const input = document.getElementById("i-8");
  const textarea = document.getElementById("t-8");
  const output = document.getElementById("out-8");

  if (!input || !textarea || !output) return;

  const text = input.value;
  textarea.value = text;
  output.textContent = text;
}

document.getElementById("b-8")?.addEventListener("click", f8);

// Task 9
function f9() {
  const select = document.getElementById("s-9");
  const output = document.getElementById("out-9");

  if (!select || !output) return;

  output.textContent = select.value;
}

document.getElementById("s-9")?.addEventListener("change", f9);

// Task 10
function f10() {
  const firstName = document.getElementById("inputFirstName")?.value;
  const lastName = document.getElementById("inputLastName")?.value;
  const email = document.getElementById("inputEmail")?.value;
  const phone = document.getElementById("inputPhone")?.value;
  const address = document.getElementById("inputAddress")?.value;
  const city = document.getElementById("inputCity")?.value;
  const state = document.getElementById("inputState")?.value;
  const output = document.getElementById("out-10");

  if (!output) return;

  const result = `Ім’я: ${firstName}\nПрізвище: ${lastName}\nEmail: ${email}\nТелефон: ${phone}\nАдреса: ${address}\nМісто: ${city}\nОбласть: ${state}`;

  output.textContent = result;
}

document.getElementById("task-10")?.addEventListener("submit", function (e) {
  e.preventDefault();
  f10();
});
