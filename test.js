// That's right, vanilla javascript testing!!
const checkNull = (id) => {
  const el = document.getElementById(id);
  if (el === null) {
    console.error(`Element with id ${id} not found`);
    return;
  }
  console.log(`${id} is defined`);
};

referenceIdNames = ["root", "main", "aside", "nav"];

referenceIdNames.map((elem) => checkNull(elem));
