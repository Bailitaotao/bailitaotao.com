document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".has-dropdown");
  const header = document.querySelector("header");
  const overlay = document.querySelector(".overlay");
  let activeDropdown = null;

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("mouseenter", () => {
      // Disable transition when switching between active dropdowns
      if (activeDropdown) {
        dropdowns.forEach(d => d.classList.add("no-transition"));
      }
      
      // Update active states
      dropdowns.forEach(d => d.classList.remove("active"));
      dropdown.classList.add("active");
      overlay.classList.add("active");
      header.classList.add("solid");
      activeDropdown = dropdown;
      
      // Re-enable transitions
      if (dropdowns.length > 1) {
        setTimeout(() => dropdowns.forEach(d => d.classList.remove("no-transition")), 50);
      }
    });
  });

  header.addEventListener("mouseleave", () => {
    dropdowns.forEach(d => d.classList.remove("active"));
    overlay.classList.remove("active");
    header.classList.remove("solid");
    activeDropdown = null;
  });
});
