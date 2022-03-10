// Variable And Concatenation Challenge

let theTitle = "Elzero",
    theDescription = "Elzero Web School",
    theDate = "25/10";

let markup = `
  <div class="card">
    <div class="child">
      <h3>${theTitle}</h3>
      <p>${theDescription}</p>
      <span>${theDate}</span>
    </div>
  </div>
`;

document.write(markup.repeat(4))