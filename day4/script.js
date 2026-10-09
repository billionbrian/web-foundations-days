
const noteText = document.getElementById("note-text");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const clearBtn = document.getElementById("clear-btn");
const themeToggle = document.getElementById("theme-toggle");
const noteForm = document.getElementById("note-form");


const DRAFT_KEY = "quicknotes-draft";
const THEME_KEY = "quicknotes-theme";


function updateCounts() {
const text = noteText.value;
const characters = text.length;

```

const trimmedText = text.trim();
const words = trimmedText === ""
    ? 0
    : trimmedText.split(/\s+/).length;


charCount.textContent = `${characters} / 200 characters`;
wordCount.textContent = `${words} words`;


charCount.classList.remove("warning", "over");

s
if (characters > 200) {
    charCount.classList.add("over");
} else if (characters > 180) {
    charCount.classList.add("warning");
}
```

}


function saveDraft() {
localStorage.setItem(DRAFT_KEY, noteText.value);
}

// Clear the note and remove the saved draft
function clearNote() {
noteText.value = "";

```
localStorage.removeItem(DRAFT_KEY);

updateCounts();

noteText.focus();
```

}


function updateThemeLabel() {
if (document.body.classList.contains("dark")) {
themeToggle.textContent = "Light mode";
} else {
themeToggle.textContent = "Dark mode";
}
}


function initializePage() {
const savedDraft = localStorage.getItem(DRAFT_KEY);
const savedTheme = localStorage.getItem(THEME_KEY);

```

if (savedDraft !== null) {
    noteText.value = savedDraft;
}


if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

updateThemeLabel();
updateCounts();
```

}

// Update counters and save the draft whenever text changes
noteText.addEventListener("input", function () {
updateCounts();
saveDraft();
});

// Clear button
clearBtn.addEventListener("click", function () {
clearNote();
});

// Clear note when Escape is pressed inside the textarea
noteText.addEventListener("keydown", function (event) {
if (event.key === "Escape") {
clearNote();
}
});


themeToggle.addEventListener("click", function () {
document.body.classList.toggle("dark");

```
const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

localStorage.setItem(THEME_KEY, currentTheme);

updateThemeLabel();
```

});


noteForm.addEventListener("submit", function (event) {
event.preventDefault();

```
saveDraft();

alert("Your note has been saved as a draft!");
```

});


initializePage();
