import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
};

const addOptionToSelect = () => {
  const select = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerHTML = COLOR_PALETTE[color];

    select.appendChild(option);
  });
};

const evento = () => {
  const select = document.querySelector("#color-picker");
  const h2 = document.querySelector("#color-name");
  select.addEventListener("change", (e) => {
    const newColor = e.target.value;

    document.body.style.backgroundColor = newColor;

    const colorName = `${COLOR_PALETTE[newColor]} | ${newColor} `;
    h2.innerHTML = COLOR_PALETTE[newColor] ? colorName : "-";
  });
};
addOptionToSelect();
evento();
