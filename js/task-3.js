const inputUser = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

inputUser.addEventListener(`input`, event => {
  const trimmedValue = event.target.value.trim();
  if (trimmedValue === ``) {
    nameOutput.textContent = `Anonymous`;
  } else {
    nameOutput.textContent = trimmedValue;
  }
});
