// بنحدد العنصر اللي اسمه heart من الصفحة
const heart = document.querySelector(".heart-shape");

// بنقول للمتصفح: "لما سمسمة تضغط على القلب، اتكلم"
heart.onclick = function () {
  const message =
    "ألف مليون مبروك يا سمسمة علي الخطوبة، ربنا يتمم لك علي خير يا عروسة";
  const speech = new SpeechSynthesisUtterance(message);

  speech.lang = "ar-EG"; // لغة عربية بلكنة مصرية
  speech.rate = 0.9; // سرعة هادية وشيك

  window.speechSynthesis.speak(speech);

  // حركة إضافية: تنبيه بسيط إن الكلام بدأ
  console.log("الصوت شغال دلوقتي!");
};
