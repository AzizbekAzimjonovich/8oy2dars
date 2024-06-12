"use strict";
const form = document.querySelector("#myForm");
const cards = document.querySelector("#cards");
const noUserMessage = document.querySelector(".noUser");
const users = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.querySelector("#name");
    const lastnameInput = document.querySelector("#lastname");
    const fromInput = document.querySelector("#from");
    const ageInput = document.querySelector("#age");
    const jobInput = document.querySelector("#job");
    const merriedInput = document.querySelector("#exampleCheck1");
    if (!validateForm(nameInput, lastnameInput, fromInput, ageInput, jobInput)) {
        return;
    }
    const user = {
        firstName: nameInput.value,
        lastName: lastnameInput.value,
        from: fromInput.value,
        age: Number(ageInput.value),
        job: jobInput.value,
        isMerried: merriedInput.checked,
    };
    users.push(user);
    updateCards();
    form.reset();
});
function validateForm(nameInput, lastnameInput, fromInput, ageInput, jobInput) {
    let isValid = true;
    if (!nameInput.value) {
        nameInput.classList.add("is-invalid");
        isValid = false;
    }
    else {
        nameInput.classList.remove("is-invalid");
    }
    if (!lastnameInput.value) {
        lastnameInput.classList.add("is-invalid");
        isValid = false;
    }
    else {
        lastnameInput.classList.remove("is-invalid");
    }
    if (!fromInput.value) {
        fromInput.classList.add("is-invalid");
        isValid = false;
    }
    else {
        fromInput.classList.remove("is-invalid");
    }
    if (!ageInput.value) {
        ageInput.classList.add("is-invalid");
        isValid = false;
    }
    else {
        ageInput.classList.remove("is-invalid");
    }
    if (!jobInput.value) {
        jobInput.classList.add("is-invalid");
        isValid = false;
    }
    else {
        jobInput.classList.remove("is-invalid");
    }
    return isValid;
}
function updateCards() {
    cards.innerHTML = "";
    users.forEach((user, index) => {
        const isMerriedText = user.isMerried
            ? "I'm married"
            : "I'm not married yet";
        const emoji = user.isMerried ? "&#128526;" : "";
        const cardHtml = `
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <p class="card-title text">
              <span class="text-primary">${user.firstName}</span>
              <span class="text-primary">${user.lastName}</span>
            </p>
            <p class="card-text text">
              Hi, I was born in <span class="text-primary">${user.from}</span>, I am 
              <span class="text-primary">${user.age}</span> years old, I am a 
              <span class="text-primary">${user.job}</span> now.
              <br />
              <span class="text-primary">${isMerriedText}</span>
              <span class="emoji">${emoji}</span>
            </p>
            <button type="button" class="btn btn-outline-danger" onclick="deleteCard(${index})">
              Delete
            </button>
          </div>
        </div>
      </div>
    `;
        cards === null || cards === void 0 ? void 0 : cards.insertAdjacentHTML("beforeend", cardHtml);
    });
    toggleNoUserMessage();
}
function deleteCard(index) {
    users.splice(index, 1);
    updateCards();
}
function toggleNoUserMessage() {
    if (users.length === 0) {
        noUserMessage.style.display = "flex";
    }
    else {
        noUserMessage.style.display = "none";
    }
}
toggleNoUserMessage();
