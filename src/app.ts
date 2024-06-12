const form = document.querySelector("#myForm") as HTMLFormElement;
const cards = document.querySelector("#cards") as HTMLDivElement;
const noUserMessage = document.querySelector(".noUser") as HTMLElement;

interface userObj {
  firstName: string;
  lastName: string;
  age: number;
  from: string;
  isMerried: boolean;
  job: string;
}

const users: userObj[] = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#name") as HTMLInputElement;
  const lastnameInput = document.querySelector("#lastname") as HTMLInputElement;
  const fromInput = document.querySelector("#from") as HTMLInputElement;
  const ageInput = document.querySelector("#age") as HTMLInputElement;
  const jobInput = document.querySelector("#job") as HTMLInputElement;
  const merriedInput = document.querySelector(
    "#exampleCheck1"
  ) as HTMLInputElement;

  if (!validateForm(nameInput, lastnameInput, fromInput, ageInput, jobInput)) {
    return;
  }

  const user: userObj = {
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

function validateForm(
  nameInput: HTMLInputElement,
  lastnameInput: HTMLInputElement,
  fromInput: HTMLInputElement,
  ageInput: HTMLInputElement,
  jobInput: HTMLInputElement
): boolean {
  let isValid = true;

  if (!nameInput.value) {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }

  if (!lastnameInput.value) {
    lastnameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    lastnameInput.classList.remove("is-invalid");
  }

  if (!fromInput.value) {
    fromInput.classList.add("is-invalid");
    isValid = false;
  } else {
    fromInput.classList.remove("is-invalid");
  }

  if (!ageInput.value) {
    ageInput.classList.add("is-invalid");
    isValid = false;
  } else {
    ageInput.classList.remove("is-invalid");
  }

  if (!jobInput.value) {
    jobInput.classList.add("is-invalid");
    isValid = false;
  } else {
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
    cards?.insertAdjacentHTML("beforeend", cardHtml);
  });

  toggleNoUserMessage();
}

function deleteCard(index: number) {
  users.splice(index, 1);
  updateCards();
}

function toggleNoUserMessage() {
  if (users.length === 0) {
    noUserMessage.style.display = "flex";
  } else {
    noUserMessage.style.display = "none";
  }
}

toggleNoUserMessage();
