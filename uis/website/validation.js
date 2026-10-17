"use strict";

(() => {
  const form = document.getElementById("talent-form");
  if (!form) return;

  const successMessage = document.getElementById("form-success");
  const comments = document.getElementById("comments");
  const commentsCount = document.getElementById("comments-count");
  const fields = [
    { input: document.getElementById("full-name"), error: document.getElementById("full-name-error"), validate: validateFullName },
    { input: document.getElementById("email"), error: document.getElementById("email-error"), validate: validateEmail },
    { input: document.getElementById("phone"), error: document.getElementById("phone-error"), validate: validatePhone },
    { input: document.getElementById("country"), error: document.getElementById("country-error"), validate: validateCountry },
    { input: document.getElementById("experience"), error: document.getElementById("experience-error"), validate: validateExperience },
    { input: document.getElementById("sector"), error: document.getElementById("sector-error"), validate: validateSector },
    { input: document.getElementById("english"), error: document.getElementById("english-error"), validate: validateEnglish },
    { input: form.querySelector('input[name="availability"]'), error: document.getElementById("availability-error"), validate: validateAvailability },
    { input: document.getElementById("linkedin"), error: document.getElementById("linkedin-error"), validate: validateLinkedIn },
    { input: comments, error: document.getElementById("comments-error"), validate: validateComments },
    { input: document.getElementById("data-policy"), error: document.getElementById("data-policy-error"), validate: validateDataPolicy },
  ];

  function validateFullName() {
    const words = document.getElementById("full-name").value.trim().split(/\s+/).filter(Boolean);
    return words.length >= 2 ? "" : "El nombre debe contener al menos nombre y apellido";
  }

  function validateEmail() {
    const value = document.getElementById("email").value.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? "" : "Ingresa un email válido (ejemplo: <nombre@empresa.com>)";
  }

  function validatePhone() {
    const value = document.getElementById("phone").value.trim();
    return /^\+\d{1,4}(?:[\s().-]*\d){6,14}$/.test(value) ? "" : "El teléfono debe incluir código de país (ejemplo: +34 612 345 678)";
  }

  function validateCountry() {
    return document.getElementById("country").value ? "" : "Selecciona tu país de residencia";
  }

  function validateExperience() {
    const input = document.getElementById("experience");
    const value = input.value.trim();
    const number = Number(value);
    return value !== "" && Number.isFinite(number) && number >= 0 && number <= 50 ? "" : "Los años de experiencia deben estar entre 0 y 50";
  }

  function validateSector() {
    return document.getElementById("sector").value ? "" : "Selecciona el sector de tu interés";
  }

  function validateEnglish() {
    return document.getElementById("english").value ? "" : "Indica tu nivel de inglés";
  }

  function validateAvailability() {
    return form.querySelector('input[name="availability"]:checked') ? "" : "Selecciona tu disponibilidad";
  }

  function validateLinkedIn() {
    const value = document.getElementById("linkedin").value.trim();
    if (!value) return "";
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? "" : "Si incluyes LinkedIn, debe ser una URL válida";
    } catch {
      return "Si incluyes LinkedIn, debe ser una URL válida";
    }
  }

  function validateComments() {
    const remaining = 500 - comments.value.length;
    return remaining >= 0 ? "" : `Los comentarios no pueden exceder 500 caracteres (quedan ${remaining})`;
  }

  function validateDataPolicy() {
    return document.getElementById("data-policy").checked ? "" : "Debes aceptar la política de tratamiento de datos para continuar";
  }

  function updateCount() {
    const length = comments.value.length;
    commentsCount.textContent = `${length} / 500`;
    commentsCount.setAttribute("aria-label", `${length} de 500 caracteres`);
  }

  function renderError(field, message) {
    field.error.textContent = message;
    if (field.input.type === "radio") {
      const group = form.querySelectorAll('input[name="availability"]');
      group.forEach((input) => {
        input.setAttribute("aria-invalid", message ? "true" : "false");
      });
      return;
    }
    field.input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validateField(field) {
    const message = field.validate();
    renderError(field, message);
    return !message;
  }

  function inputForField(field) {
    if (field.input.type === "radio") return [...form.querySelectorAll('input[name="availability"]')];
    return [field.input];
  }

  fields.forEach((field) => {
    field.error.setAttribute("role", "alert");
    field.error.setAttribute("aria-live", "polite");
    inputForField(field).forEach((input) => {
      input.addEventListener("blur", () => validateField(field));
      input.addEventListener("input", () => {
        if (field.error.textContent) validateField(field);
      });
      input.addEventListener("change", () => {
        if (field.error.textContent) validateField(field);
      });
    });
  });

  comments.addEventListener("input", () => {
    updateCount();
    if (document.getElementById("comments-error").textContent) validateField(fields[9]);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.classList.add("hidden");

    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length) {
      const firstField = invalidFields[0].input;
      firstField.focus();
      return;
    }

    // Demostración local: no transmitir ni persistir la información.
    form.reset();
    fields.forEach((field) => renderError(field, ""));
    updateCount();
    successMessage.classList.remove("hidden");
    successMessage.focus();
  });

  updateCount();
})();
