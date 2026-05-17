/* =========================================================
   CareerPath CSE - Main JavaScript
   Shared Across All Pages
   Features:
   - Dark / Light Mode
   - Search Utilities
   - Bookmark System
   - Progress Tracking
   - Smooth Scroll
   - Newsletter Placeholder
========================================================= */

/* =========================
   THEME TOGGLE
========================= */
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  // Save preference
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

/* Load saved theme */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  initializeBookmarks();
  initializeProgress();
});

/* =========================
   GLOBAL SEARCH HELPER
========================= */
function globalSearch(inputId, cardSelector) {
  const query = document.getElementById(inputId).value.toLowerCase();
  const cards = document.querySelectorAll(cardSelector);

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* =========================
   BOOKMARK SYSTEM
========================= */
let bookmarks = JSON.parse(localStorage.getItem("careerBookmarks")) || [];

function addBookmark(itemName) {
  if (!bookmarks.includes(itemName)) {
    bookmarks.push(itemName);
    localStorage.setItem("careerBookmarks", JSON.stringify(bookmarks));
    alert(`${itemName} bookmarked successfully!`);
  } else {
    alert(`${itemName} is already bookmarked.`);
  }
}

function removeBookmark(itemName) {
  bookmarks = bookmarks.filter(item => item !== itemName);
  localStorage.setItem("careerBookmarks", JSON.stringify(bookmarks));
}

function initializeBookmarks() {
  const bookmarkButtons = document.querySelectorAll("[data-bookmark]");

  bookmarkButtons.forEach(button => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-bookmark");
      addBookmark(itemName);
    });
  });
}

/* =========================
   CAREER PROGRESS TRACKER
========================= */
function initializeProgress() {
  const progressBar = document.querySelector(".progress-bar");

  if (!progressBar) return;

  let profile = JSON.parse(localStorage.getItem("careerPathUser"));

  if (!profile) {
    progressBar.style.width = "15%";
    return;
  }

  let completion = 40;

  if (profile.interest) completion += 10;
  if (profile.coding) completion += 10;
  if (profile.problemSolving) completion += 10;
  if (profile.salary) completion += 10;
  if (profile.subject) completion += 10;
  if (profile.workStyle) completion += 10;

  if (completion > 100) completion = 100;

  progressBar.style.width = completion + "%";
}

/* =========================
   DOWNLOAD CAREER REPORT
========================= */
function downloadReport() {
  const user = JSON.parse(localStorage.getItem("careerPathUser"));
  const career = localStorage.getItem("recommendedCareer");

  if (!user || !career) {
    alert("Please complete the career quiz first.");
    return;
  }

  const reportContent = `
CareerPath CSE - Career Report
-------------------------------------
Name: ${user.name}
Recommended Career: ${career}
Interest Area: ${user.interest}
Coding Skill: ${user.coding}
Problem Solving: ${user.problemSolving}
Salary Goal: ${user.salary}
Preferred Work Style: ${user.workStyle}
Preferred Location: ${user.location}

Next Step:
Visit Courses + Books + Internship pages
to start your roadmap.
`;

  const blob = new Blob([reportContent], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "CareerPath_Report.txt";
  link.click();
}

/* =========================
   NEWSLETTER
========================= */
function subscribeNewsletter(emailInputId) {
  const email = document.getElementById(emailInputId).value;

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  alert(`Subscribed successfully with ${email}!`);
}

/* =========================
   SMOOTH SCROLL FOR ANCHORS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   CAREER COMPARISON TOOL (Basic Placeholder)
========================= */
function compareCareers(career1, career2) {
  if (!career1 || !career2) {
    alert("Select two careers to compare.");
    return;
  }

  alert(`Comparing ${career1} vs ${career2} feature coming soon!`);
}

/* =========================
   DYNAMIC GREETING
========================= */
function setDynamicGreeting() {
  const hour = new Date().getHours();
  const heroTitle = document.querySelector(".hero-text h1");

  if (!heroTitle) return;

  if (hour < 12) {
    console.log("Good Morning Future Engineer!");
  } else if (hour < 18) {
    console.log("Good Afternoon Future Innovator!");
  } else {
    console.log("Good Evening Future Tech Leader!");
  }
}

setDynamicGreeting();

/* =========================
   BUTTON HOVER ANIMATION ENHANCER
========================= */
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-4px) scale(1.02)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

/* =========================
   FUTURE AI CHATBOT PLACEHOLDER
========================= */
function launchAIChatbot() {
  alert("AI Mentor Chatbot launching soon! Stay tuned 🚀");
}

/* =========================
   ACCESSIBILITY: FONT SCALE
========================= */
function increaseFontSize() {
  document.body.style.fontSize = "18px";
}

function resetFontSize() {
  document.body.style.fontSize = "";
}

/* =========================
   DEBUG MODE
========================= */
console.log("CareerPath CSE Loaded Successfully 🚀");