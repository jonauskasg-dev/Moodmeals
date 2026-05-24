const meals = {
  tired: [
    {
      title: "Кремовый томатный суп с сырным тостом",
      description:
        "Нежный, сытный и почти без стресса. Отлично подходит для вечера, когда хочется чего-то теплого, но не сложного.",
      time: "20 мин",
      level: "Легко",
      effect: "уют + тепло",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
      alt: "Кремовый томатный суп с тостом",
      steps: "Разогрей томатный суп, добавь немного сливок и подай с поджаренным сырным тостом."
    },
    {
      title: "Запеченная паста с моцареллой",
      description:
        "Одна форма, много сыра и минимум решений. Когда заряд почти на нуле, это очень хороший план.",
      time: "28 мин",
      level: "Легко",
      effect: "мягко + сытно",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=900&q=80",
      alt: "Паста с сыром на тарелке",
      steps: "Смешай готовую пасту с соусом, посыпь моцареллой и запекай, пока верх слегка не подрумянится."
    }
  ],
  lazy: [
    {
      title: "Тортилья с яйцом и сыром",
      description:
        "До 10 минут, одна сковорода и почти никакой уборки. Идеально, когда кухня не должна превращаться в проект.",
      time: "10 мин",
      level: "Очень легко",
      effect: "быстро + уютно",
      image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80",
      alt: "Тортилья с начинкой",
      steps: "Разогрей тортилью, добавь яйцо и сыр, сложи пополам и обжарь с двух сторон."
    },
    {
      title: "Авокадо-тост с яйцом",
      description:
        "Быстрая, фотогеничная и сытная идея, которая выглядит лучше, чем твой уровень энергии.",
      time: "8 мин",
      level: "Очень легко",
      effect: "легко + свежо",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
      alt: "Авокадо-тост с яйцом",
      steps: "Разомни авокадо с лимоном, намажь на тост и добавь жареное или вареное яйцо."
    }
  ],
  energy: [
    {
      title: "Рисовый боул с овощами и курицей",
      description:
        "Сбалансированный, яркий и достаточно сытный. Дает энергию без ощущения, что ты переел.",
      time: "25 мин",
      level: "Средне",
      effect: "фокус + энергия",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
      alt: "Рисовый боул с овощами",
      steps: "Положи в миску рис, обжаренную курицу и овощи, затем добавь соус из йогурта, лимона и зелени."
    },
    {
      title: "Зеленый smoothie bowl с гранолой",
      description:
        "Свежий вариант для утра или перерыва, когда нужен быстрый заряд энергии.",
      time: "12 мин",
      level: "Легко",
      effect: "свежо + ярко",
      image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=80",
      alt: "Зеленый smoothie bowl с фруктами",
      steps: "Смешай банан, шпинат и йогурт в блендере, перелей в миску, добавь гранолу и ягоды."
    }
  ],
  cozy: [
    {
      title: "Банановые панкейки с медом",
      description:
        "Сладкие, мягкие и очень уютные. Подойдут для медленного утра, дождливого вечера или маленького эмоционального перезапуска.",
      time: "18 мин",
      level: "Легко",
      effect: "уют + сладость",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
      alt: "Банановые панкейки с медом и фруктами",
      steps: "Разомни банан, смешай с яйцом и мукой, испеки маленькие панкейки и в конце полей медом."
    },
    {
      title: "Кремовая овсянка с яблоками",
      description:
        "Теплая миска, корица и медленный темп. Очень просто, но ощущается как забота о себе.",
      time: "14 мин",
      level: "Легко",
      effect: "тепло + спокойно",
      image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=80",
      alt: "Овсянка с фруктами",
      steps: "Свари овсянку на молоке, добавь яблоки, корицу и ложку меда или ореховой пасты."
    }
  ],
  treat: [
    {
      title: "Домашний бургер с бататом фри",
      description:
        "Когда хочется не просто поесть, а устроить маленький праздник дома. Сытно, ярко и очень приятно.",
      time: "35 мин",
      level: "Средне",
      effect: "радость + награда",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=80",
      alt: "Домашний бургер с картофелем",
      steps: "Обжарь котлету, подрумянь булочку, добавь соус и овощи, подай с запеченным бататом."
    },
    {
      title: "Шоколадный lava cake с ягодами",
      description:
        "Маленький десерт, большое настроение. Отлично подходит для дней, когда хочется поздравить себя без повода.",
      time: "22 мин",
      level: "Средне",
      effect: "сладко + праздник",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
      alt: "Шоколадный десерт с ягодами",
      steps: "Растопи шоколад со сливочным маслом, вмешай яйца и муку, выпекай недолго, чтобы середина осталась мягкой."
    }
  ]
};

const moodButtons = document.querySelectorAll(".mood-card");
const recommendation = document.querySelector(".recommendation");
const mealImage = document.querySelector("#meal-image");
const mealEffect = document.querySelector("#meal-effect");
const mealTitle = document.querySelector("#meal-title");
const mealDescription = document.querySelector("#meal-description");
const mealTime = document.querySelector("#meal-time");
const mealLevel = document.querySelector("#meal-level");
const mealSteps = document.querySelector("#recipe-steps");
const mealMoodLabel = document.querySelector("#meal-mood-label");
const recipeDetails = document.querySelector("#recipe-details");
const showRecipeButton = document.querySelector("#show-recipe");
const suggestAnotherButton = document.querySelector("#suggest-another");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const designButtons = document.querySelectorAll("[data-design-choice]");

const availableDesigns = ["airbnb", "soft", "figma"];

function saveDesignChoice(design) {
  try {
    localStorage.setItem("moodmeals-design", design);
  } catch (error) {
    // localStorage can be unavailable in strict private browsing modes.
  }
}

function loadDesignChoice() {
  try {
    return localStorage.getItem("moodmeals-design");
  } catch (error) {
    return null;
  }
}

function applyDesign(design, shouldSave = true) {
  const nextDesign = availableDesigns.includes(design) ? design : "airbnb";

  document.body.dataset.design = nextDesign;
  designButtons.forEach((button) => {
    const isSelected = button.dataset.designChoice === nextDesign;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  if (shouldSave) {
    saveDesignChoice(nextDesign);
  }
}

designButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyDesign(button.dataset.designChoice);
  });
});

applyDesign(loadDesignChoice() || document.body.dataset.design, false);

let currentMood = "tired";
const moodLabels = {
  tired: "Я выжат",
  lazy: "Chill-mode",
  energy: "Нужен заряд",
  cozy: "Хочу тепла",
  treat: "Маленький праздник"
};

const mealIndexes = {
  tired: 0,
  lazy: 0,
  energy: 0,
  cozy: 0,
  treat: 0
};

function renderMeal(mood, index = mealIndexes[mood]) {
  const meal = meals[mood][index];

  recommendation.classList.remove("is-changing");
  window.requestAnimationFrame(() => {
    recommendation.classList.add("is-changing");
  });

  mealImage.src = meal.image;
  mealImage.alt = meal.alt;
  mealEffect.textContent = meal.effect;
  mealTitle.textContent = meal.title;
  mealDescription.textContent = meal.description;
  mealTime.textContent = meal.time;
  mealLevel.textContent = meal.level;
  mealSteps.textContent = meal.steps;
  mealMoodLabel.textContent = `Под настроение: ${moodLabels[mood]}`;
  recipeDetails.hidden = true;
  showRecipeButton.textContent = "Показать рецепт";
}

function setActiveMood(selectedButton) {
  moodButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    const hint = button.querySelector(".mood-card__hint");

    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));

    if (hint) {
      hint.textContent = isSelected ? "Выбрано" : "Выбрать";
    }
  });
}

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMood = button.dataset.mood;
    mealIndexes[currentMood] = 0;
    setActiveMood(button);
    renderMeal(currentMood);
  });
});

showRecipeButton.addEventListener("click", () => {
  recipeDetails.hidden = !recipeDetails.hidden;
  showRecipeButton.textContent = recipeDetails.hidden ? "Показать рецепт" : "Скрыть рецепт";
});

suggestAnotherButton.addEventListener("click", () => {
  mealIndexes[currentMood] = (mealIndexes[currentMood] + 1) % meals[currentMood].length;
  renderMeal(currentMood);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMobileMenu();
  });
});

function closeMobileMenu() {
  document.body.classList.remove("menu-open");
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Reveal elements only when they enter the viewport, keeping the page light for GitHub Pages.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
