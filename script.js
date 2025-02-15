const questions = [
    {
      question: "How often do you feel stressed about homework?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Do you find it hard to focus during classes?",
      options: ["No", "Occasionally", "Yes, frequently", "All the time"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "How often do you feel overwhelmed by exams or tests?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Do you feel supported by your teachers?",
      options: ["Always", "Often", "Sometimes", "Never"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "How often do you compare your performance with others?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Do you feel anxious about participating in class discussions?",
      options: ["No", "Occasionally", "Yes, frequently", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "How often do you feel you have too many extracurricular commitments?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Do you find it hard to balance school and personal life?",
      options: ["No", "Occasionally", "Yes, frequently", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "How often do you feel pressure from peers to perform better?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Do you feel like you get enough sleep on school nights?",
      options: ["Always", "Often", "Sometimes", "Never"],
      scores: [1, 2, 3, 4],
    },
  ];
  
  let currentQuestion = 0;
  let totalScore = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.querySelectorAll(".options span");
  const progressBar = document.getElementById("progress-bar");
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  const quizForm = document.getElementById("quiz-form");
  
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.forEach((option, index) => {
      option.textContent = current.options[index];
    });
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  }
  
  function calculateResult() {
    if (totalScore <= 10) {
      return "You seem to be managing school stress well. Keep up the good work!";
    } else if (totalScore <= 20) {
      return "You might be experiencing some stress. Consider talking to a teacher or counselor.";
    } else {
      return "You could be dealing with significant school-related stress. Seek support from trusted adults or professionals.";
    }
  }
  
  document.getElementById("next-btn").addEventListener("click", () => {
    const selectedOption = quizForm.answer.value;
    if (!selectedOption) {
      alert("Please select an answer.");
      return;
    }
    totalScore += parseInt(selectedOption);
    currentQuestion++;
    if (currentQuestion < questions.length) {
      questionEl.classList.remove("fade-in");
      setTimeout(() => {
        questionEl.classList.add("fade-in");
        loadQuestion();
      }, 300);
    } else {
      quizForm.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      resultText.textContent = calculateResult();
    }
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    quizForm.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    loadQuestion();
  }
  
  loadQuestion();