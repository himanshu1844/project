// Switch Logic
function initializeSwitch() {
    const switchContainer = document.getElementById("switch-container");
  
    const switchElement = document.createElement("div");
    switchElement.className = "switch-container";
    switchElement.innerHTML = `<div class="switch-circle"></div>`;
  
    switchElement.addEventListener("click", () => {
      switchElement.classList.toggle("on");
    });
  
    switchContainer.appendChild(switchElement);
  }
  
  // Combobox Logic
  function initializeCombobox() {
    const comboboxContainer = document.getElementById("combobox-container");
  
    const combobox = document.createElement("div");
    combobox.className = "combobox";
  
    const button = document.createElement("button");
    button.textContent = "Select Model...";
    combobox.appendChild(button);
  
    const menu = document.createElement("div");
    menu.className = "combobox-menu";
    menu.innerHTML = `
      <input type="text" placeholder="Search Model..." />
      <div>Mistral</div>
      <div>SvelteKit</div>
      <div>Nuxt.js</div>
      <div>Remix</div>
      <div>Astro</div>
    `;
    combobox.appendChild(menu);
  
    button.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  
    const options = menu.querySelectorAll("div");
    options.forEach(option => {
      option.addEventListener("click", () => {
        button.textContent = option.textContent;
        menu.classList.remove("open");
      });
    });
  
    comboboxContainer.appendChild(combobox);
  }
  
  // Accordion Logic
  function initializeAccordion() {
    const accordionContainer = document.getElementById("accordion-container");
  
    const data = [
      { title: "Generation History", content: "Content for Generation History" },
      { title: "Preferences", content: "Content for Preferences" },
      { title: "Feedback", content: "Content for Feedback" },
    ];
  
    data.forEach(({ title, content }) => {
      const accordion = document.createElement("div");
      accordion.className = "accordion";
  
      const header = document.createElement("div");
      header.className = "accordion-header";
      header.textContent = title;
  
      const body = document.createElement("div");
      body.className = "accordion-content";
      body.textContent = content;
  
      header.addEventListener("click", () => {
        const isOpen = body.style.display === "block";
        body.style.display = isOpen ? "none" : "block";
      });
  
      accordion.appendChild(header);
      accordion.appendChild(body);
      accordionContainer.appendChild(accordion);
    });
  }
  
  // Initialize All Components
  document.addEventListener("DOMContentLoaded", () => {
    initializeSwitch();
    initializeCombobox();
    initializeAccordion();
  });
  