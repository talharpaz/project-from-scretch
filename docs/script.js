// תפיסת אלמנטים מהדף
const form = document.getElementById("questionForm");
const input = document.getElementById("questionInput");
const clearBtn = document.getElementById("clearBtn");
const historyList = document.getElementById("historyList");
// אזורים להצגת הודעות ותוצאות
const hint = document.getElementById("hint");
const result = document.getElementById("result");
const userQuestion = document.getElementById("userQuestion");
const answer = document.getElementById("answer");
console.log("form:", form);
console.log("historyList:", historyList);
// פונקציה שמחזירה תשובת דמו
// בהמשך נחליף את זה בקריאה לבקאנד או אייפיאיי
function fakeAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("sleep") || q.includes("שינה")) {
    return "Try: fixed sleep hours, no screens 60 min before bed, and a calming tea.";
  }

  if (q.includes("stress") || q.includes("סטרס")) {
    return "Try: 5 minutes of breathing, short walk, and writing what worries you.";
  }

  return "Thanks! This is a demo answer. Later we will connect this to a real backend/API.";
}
// מאזינים לשליחת הטופס
form.addEventListener("submit", (event) => {
  event.preventDefault(); // מונע רענון של הדף

  const question = input.value.trim(); // קריאת טקסט מהתיבה
// בדיקה ששלחו שאלה באורך נורמלי
  if (question.length < 5) {
    hint.textContent = "Please write at least 5 characters ";
    result.style.display = "none";
    return;
  }
  const response = fakeAnswer(question);

// ניקוי הודעה, הצגת השלה והצגת התשובה
  hint.textContent = "";
  userQuestion.textContent = question;
  answer.textContent = response;
  result.style.display = "block";

  // הוספה להיסטוריה
  const item = document.createElement("li");
  item.className = "history-item";

  const title = document.createElement("h3");
  title.textContent = "Question:";

  const qText = document.createElement("p");
  qText.textContent = question;

  const aTitle = document.createElement("h3");
  aTitle.textContent = "Answer:";

  const aText = document.createElement("p");
  aText.textContent = response;

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.type = "button";
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(title);
  item.appendChild(qText);
  item.appendChild(aTitle);
  item.appendChild(aText);
  item.appendChild(delBtn);

  historyList.prepend(item); // מוסיף למעלה (כמו צ׳אט)

});
  
clearBtn.addEventListener("click", () => {
  input.value = "";              // ניקוי תיבת הטקסט
  hint.textContent = "";         // ניקוי הודעת שגיאה
  result.style.display = "none"; // הסתרת אזור התוצאה
  input.focus();                 // החזרת פוקוס לתיבה
});
