// ==========================================================
// ODOO 19 QUIZ
// FILE: script.js
// ==========================================================

// ==========================================================
// DANH SÁCH TẤT CẢ CÁC MẢNG
// ==========================================================

const categories = [
  // ======================================================
  // MẢNG 01 - CRM
  // ======================================================

  {
    number: "Mảng 01",

    name: "CRM",

    description: "Lead, Opportunity, Pipeline, Activities, Forecast",

    questions: [
      // CÂU 1
      {
        question:
          "In the image below, what will be the deadline for the next activity called 'Reminder' if you mark the 'Call' activity as done today?",

        answers: [
          "3 days from today",
          "5 days from today",
          "7 days from today",
        ],

        correct: 2,
      },

      // CÂU 2
      {
        question:
          "Deleting an opportunity is the same as marking it as 'Lost.'",

        answers: ["TRUE", "FALSE"],

        correct: 1,
      },

      // CÂU 3
      {
        question:
          "On average, a lead is more likely to be won over an opportunity.",

        answers: ["TRUE", "FALSE"],

        correct: 1,
      },

      // CÂU 4
      {
        question: "The forecast report allows you to:",

        answers: [
          "Quickly view all your opportunities organized by expected closing date",
          "Ask an AI to guess how much money you'll earn",
          "List assumptions about how the market will evolve and share it with your team",
        ],

        correct: 0,
      },

      // CÂU 5
      {
        question:
          "Can you manually link an existing sales order to an existing opportunity?",

        answers: [
          "No. Once both documents exist, it's too late",
          "Yes, through the 'Link Documents' button on the opportunity",
          "Yes, under the 'Other Info' tab on the sales order",
        ],

        correct: 2,
      },

      // CÂU 6
      {
        question: "Can one salesperson be in multiple sales teams?",

        answers: [
          "Yes, only if they are a Team Leader",
          "Yes, if the 'Multi Teams' setting is activated",
          "No, multiple users are needed to achieve that",
        ],

        correct: 1,
      },

      // CÂU 7
      {
        question: "How do you add a Property field to an opportunity form?",

        answers: [
          "Click the gear icon on the opportunity form, select 'Add Properties,' and proceed to customize to fit your needs",
          "Click 'Configuration' > Add Properties > Customize > Add to specific opportunities from a mass list",
          "This is not a possible option without consulting Odoo developers",
        ],

        correct: 0,
      },

      // CÂU 8
      {
        question: "The expected revenue on an opportunity:",

        answers: [
          "Cannot be set manually because it is computed based on the untaxed amount of the sales orders linked to that opportunity",
          "Can only be set when creating the opportunity",
          "Can be set (or modified) manually at any time",
        ],

        correct: 2,
      },

      // CÂU 9
      {
        question: "The 'Closed Date' indicates:",

        answers: [
          "The date the opportunity was created",
          "The date the opportunity was won or lost",
          "The date the opportunity was deleted",
        ],

        correct: 1,
      },

      // CÂU 10
      {
        question:
          "A user with the access rights 'User: Own Documents Only' can only work with:",

        answers: [
          "The leads if they are in Developer Mode",
          "The leads that were created the previous year",
          "The leads that are either assigned (or unassigned) to them",
        ],

        correct: 2,
      },

      // CÂU 11
      {
        question: "What does the probability field on an opportunity indicate?",

        answers: [
          "The probability that the opportunity will move to the next stage in the pipeline",
          "The probability of getting a response to the offer letter",
          "The probability of closing a deal with this prospect",
        ],

        correct: 2,
      },

      // CÂU 12
      {
        question: "Opportunities will appear in the 'Activities' view if:",

        answers: [
          "The 'Expected Closing' date of the opportunity is set to occur within 7 days",
          "You have scheduled activities for those opportunities",
          "The prospects replied on those opportunities",
        ],

        correct: 1,
      },

      // CÂU 13
      {
        question: "Reporting is accessible:",

        answers: [
          "Only for database admins",
          "Only for managers",
          "For all CRM users",
        ],

        correct: 2,
      },

      // CÂU 14
      {
        question:
          "The probability of winning an opportunity is computed based on:",

        answers: [
          "Aggregated industry benchmarks",
          "Data collected from all Odoo databases",
          "Data collected from your own database",
        ],

        correct: 2,
      },

      // CÂU 15
      {
        question:
          "If the manager of the Pre-Sales team creates a new property field on an opportunity, who can see it?",

        answers: [
          "Only members of the Pre-Sales team",
          "Only managers of other sales teams",
          "Anyone who has access to that opportunity",
        ],

        correct: 2,
      },

      // CÂU 16
      {
        question:
          "How do you configure a pricelist that gives a progressive discount based on the quantity being ordered by the customer?",

        answers: [
          "Create one pricelist with two lines",
          "Create two pricelists with one line each",
          "Create one pricelist with one line, and put the two prices on this line",
        ],

        correct: 0,
      },

      // CÂU 17
      {
        question:
          "Which of the following is NOT a 'Routes' option on a product form (under the Inventory tab)?",

        answers: ["Buy", "Upsell", "Dropship Subcontractor on Order"],

        correct: 1,
      },

      // CÂU 18
      {
        question:
          "What does it mean if the forecasted quantity of a storable product is less than the quantity on hand?",

        answers: [
          "Nothing, as we do not know the complete history of each product",
          "New products are planned to arrive in stock",
          "There are more outgoing products planned than incoming products",
        ],

        correct: 2,
      },

      // CÂU 19
      {
        question:
          "What does the 'Customer Lead Time' field on a product form represent?",

        answers: [
          "The computed order date based on the quotation date",
          "The number of days promised to the customer, between the confirmation of the sales order and the delivery",
          "Confirmation that the Terms & Conditions will be displayed on the quotation",
        ],

        correct: 1,
      },
    ],
  },

  // ======================================================
  // MẢNG 02 - SALES
  // KEY:
  // 1A 2B 3A 4C 5C 6C 7A
  // 8B 9A 10B 11A 12C 13B 14C
  // ======================================================

  {
    number: "Mảng 02",

    name: "Sales",

    description:
      "Marketing, Pricelist, Routes, Lead Time, Invoicing, Milestones",

    questions: [
      // CÂU 1 - A
      {
        question:
          "Which of the following reporting views CANNOT be downloaded as an Excel file in a single click?",

        answers: ["Pivot table", "Graph", "Cohort"],

        correct: 0,
      },

      // CÂU 2 - B
      {
        question:
          "What does it mean if an activity icon on an opportunity card (in kanban view) is yellow?",

        answers: ["It's due soon", "It's overdue", "It's due today"],

        correct: 1,
      },

      // CÂU 3 - A
      {
        question:
          "In the image below, what happens if you click on the circular arrows icon?",

        answers: [
          "It reloads the page, so I can see new options",
          "It runs the rule-based assignment",
          "It switches the assignation mode to automatic",
        ],

        correct: 0,
      },

      // CÂU 4 - C
      {
        question:
          "How do you configure a pricelist that gives a progressive discount based on the quantity being ordered by the customer (e.g. 5% discount if the customer purchases between 0 and 9 units; 10% discount if the customer purchases 10 or more units, etc.)?",

        answers: [
          "Create one pricelist with two lines",
          "Create two pricelists with one line each",
          "Create one pricelist with one line, and put the two prices on this line",
        ],

        correct: 2,
      },

      // CÂU 5 - C
      {
        question:
          "Which of the following is NOT a 'Routes' option on a product form (under the Inventory) tab?",

        answers: ["Buy", "Upsell", "Dropship Subcontractor on Order"],

        correct: 2,
      },

      // CÂU 6 - C
      {
        question:
          "What does it mean if the forecasted quantity of a storable product is less than the quantity on hand?",

        answers: [
          "Nothing, as we do not know the complete history of each product",
          "New products are planned to arrive in stock",
          "There are more outgoing products planned than incoming Products",
        ],

        correct: 2,
      },

      // CÂU 7 - A
      {
        question:
          "What does the 'Customer Lead Time' field on a product form represent?",

        answers: [
          "The computed order date based on the quotation date",
          "The number of days, promised to the customer, between the confirmation of the sales order and the delivery",
          "Confirmation that the Terms & Conditions will be displayed on the quotation",
        ],

        correct: 0,
      },

      // CÂU 8 - B
      {
        question:
          "A customer is interested in a rather expensive product. The product has a supplier delivery lead time that is LESS than your customer delivery lead time. You do not sell this product often, due to its expensive nature. With that in mind, what is the best procurement method for you to manage this product effectively?",

        answers: [
          "Use the Master Production Schedule tool",
          "Configure this product as a 'Consumable' type",
          "Set this product route to 'Replenish on Order (MTO)'",
        ],

        correct: 1,
      },

      // CÂU 9 - A
      {
        question:
          "Assuming you have enough stock to fulfill an order, what will the scheduled delivery date be when a sales order is confirmed on September 1st -- for a product that has a customer lead time of 5 days, and a security lead time of 2 days?",

        answers: ["September 8th", "September 6th", "September 4th"],

        correct: 0,
      },

      // CÂU 10 - B
      {
        question:
          "If you confirm a quotation with a storable product that has an invoicing policy set to 'Ordered quantities,' which of the following is true?",

        answers: [
          "A draft invoice can be generated while a delivery order is in the 'Waiting' or 'Ready' stage",
          "A draft invoice can be generated only after a delivery order has been processed",
          "A draft invoice is automatically generated after a delivery order has been Processed",
        ],

        correct: 1,
      },

      // CÂU 11 - A
      {
        question:
          "If you would like to group specific sales order lines together to generate subtotals, what feature would you use on the quotation/sales order?",

        answers: ["Product categories", "Sequences", "Sections"],

        correct: 0,
      },

      // CÂU 12 - C
      {
        question:
          "When you set a product's invoicing policy to 'Based on Milestones':",

        answers: [
          "The delivered quantity on the sales order must be set manually each time",
          "The delivered quantity on the sales order updates automatically based on milestone completion in the Project app",
          "The delivered quantity on the sales order updates automatically based on timesheet completion in the Timesheets app",
        ],

        correct: 2,
      },

      // CÂU 13 - B
      {
        question:
          "How would you configure Odoo, so the product 'Office Chair' appears as a suggested option when a customer adds the product 'Conference Chair' to their cart in the online store?",

        answers: [
          "List the Office Chair as an 'Optional Product' on the Conference Chair's product form (under 'Sales' tab)",
          "List the Office Chair as an 'Alternative Product' on the Conference Chair's product form (under 'Inventory' tab)",
          "List the Conference Chair as an 'Alternative Product' on the Office Chair's product form (under 'General Information' tab)",
        ],

        correct: 1,
      },

      // CÂU 14 - C
      {
        question:
          "Which of the following is true when you activate the 'Margins' setting in Sales > Configuration > Settings?",

        answers: [
          "Changing the cost price on a sales order line will recompute a new unit price, according to the calculation on the pricelist",
          "Sales order lines can show both the unit price and cost price of the product, as well as the margin, by calculating the difference between the unit price and the cost price",
          "Margins will only display on confirmed sales orders, not on quotations",
        ],

        correct: 2,
      },
    ],
  },

  // ======================================================
  // MẢNG 03
  //
  // KEY:
  // 1B 2C 3B 4A 5B 6C 7B
  // 8C 9C 10A 11C 12B 13A 14B
  // ======================================================

  {
    number: "Mảng 03",

    name: "Sales / Products",

    description: "UoM, Routes, Product Variants, Pricelist, AVCO, Purchase",

    questions: [
      // CÂU 1 - B
      {
        question:
          "What condition must be true when using a default unit of measure and purchase unit of measure?",

        answers: [
          "The purchase unit of measure must be in the same UOM category as the default unit of measure",
          "These two units of measure have to be in different categories",
          "These two units of measure must have the same name",
        ],

        correct: 1,
      },

      // CÂU 2 - C
      {
        question:
          "What does the below configuration for a storable product imply?",

        answers: [
          "When a reordering rule set on the product is triggered, a manufacturing order will be generated",
          "When a sales order is confirmed, an RFQ will be generated",
          "When a sales order is confirmed, a manufacturing order will be generated",
        ],

        correct: 2,
      },

      // CÂU 3 - B
      {
        question:
          "What does the below configuration for a storable product imply?",

        answers: [
          "When a reordering rule set on the product is triggered, an RFQ will be generated",
          "When a reordering rule set on the product is triggered, a manufacturing order will be generated",
          "When a sales order is confirmed, a manufacturing order will be generated",
        ],

        correct: 1,
      },

      // CÂU 4 - A
      {
        question:
          "What does the below configuration for a storable product imply?",

        answers: [
          "When a sales or manufacturing order is confirmed, a RFQ will be generated",
          "When a reordering rule set on the product is triggered, a RFQ will be generated",
          "When a sales or manufacturing order is confirmed, a manufacturing order will be generated",
        ],

        correct: 0,
      },

      // CÂU 5 - B
      {
        question: "Can any product be used in a sales order?",

        answers: [
          "Yes, you can use all your products",
          "No, you can only use products you currently have in stock",
          "No, you can only use products that you've marked as 'Can be Sold' on the product form",
        ],

        correct: 1,
      },

      // CÂU 6 - C
      {
        question:
          "When would it be most useful to use 'Order Grid Entry' as the sales variant selection type for a product?",

        answers: [
          "When clients want their sales orders organized in a grid",
          "When salespeople typically recommend specific product variants to clients",
          "When salespeople usually create large quotations with many product variants for clients",
        ],

        correct: 2,
      },

      // CÂU 7 - B
      {
        question:
          "How can you send a preliminary invoice to a customer before a sale is confirmed?",

        answers: [
          "Activate 'Pro-Forma Invoice' setting, and click 'Send Pro-Forma Invoice' button on the quotation",
          "Activate 'Preliminary Invoice' setting, and click 'Pre-Lim Invoice' button on the quotation",
          "This is not possible in Odoo",
        ],

        correct: 1,
      },

      // CÂU 8 - C
      {
        question:
          "Which of the following is NOT a 'Variants Creation Mode' option while creating product attributes?",

        answers: ["Instantly", "Automatically", "Dynamically"],

        correct: 2,
      },

      // CÂU 9 - C
      {
        question:
          "What pricelist configuration option allows end users to choose a specific pricelist while shopping online?",

        answers: ["Selectable", "Optional", "Customer Choice"],

        correct: 2,
      },

      // CÂU 10 - A
      {
        question:
          "Using the 'Average Cost' (AVCO) costing method, will the unit cost of a product change when you deliver products?",

        answers: ["Yes", "No"],

        correct: 0,
      },

      // CÂU 11 - C
      {
        question:
          "What does setting a product's 'Control Policy' to 'On received quantities' do?",

        answers: [
          "Odoo will not allow you to create a vendor bill until the receipt of one or more products on the original Purchase Order, and the received quantities will be the quantities on the draft vendor bill",
          "A vendor bill will be created immediately after the order confirmation",
          "You will automatically receive all quantities on every order as soon as Purchase Orders are confirmed",
        ],

        correct: 2,
      },

      // CÂU 12 - B
      {
        question:
          "What will the scheduled purchase order date be if you validate a sales order on October 25th with a MTO route, with a 'Customer Lead Time' set to 10 Days and 'Vendor Lead Time' set to 6 Days?",

        answers: ["October 29th", "October 19th", "October 25th"],

        correct: 1,
      },

      // CÂU 13 - A
      {
        question:
          "What will the scheduled purchase order date be if you validate a sales order on October 25th, knowing the product is set to 'Buy' with an 'MTO' route, with a 'Customer Lead Time' set to 10 Days, a 'Vendor Lead Time' set to 6 Days, and 'Company Security Lead Time' for purchases set to 2 Days?",

        answers: ["October 23rd", "October 27th", "November 1st"],

        correct: 0,
      },

      // CÂU 14 - B
      {
        question:
          "What does setting a product's 'Control Policy' to 'On ordered quantities' do?",

        answers: [
          "When creating a vendor bill, a product's price comes from the purchase order, and the quantity to invoice comes from the receipt",
          "When a purchase order is confirmed, a vendor bill is automatically generated",
          "When creating a vendor bill, the quantity and price are automatically set to the ordered amount",
        ],

        correct: 1,
      },
    ],
  },

  // ======================================================
  // MẢNG 04
  // ======================================================

  {
    number: "Mảng 04",

    name: "Inventory",

    description: "Stock, Warehouse, Routes, Lots & Serial",

    questions: [],
  },

  // ======================================================
  // MẢNG 05
  // ======================================================

  {
    number: "Mảng 05",

    name: "Project",

    description: "Tasks, Gantt, Milestones, Timesheets",

    questions: [],
  },

  // ======================================================
  // MẢNG 06
  // ======================================================

  {
    number: "Mảng 06",

    name: "Manufacturing",

    description: "BoM, Manufacturing Orders, Work Orders",

    questions: [],
  },

  // ======================================================
  // MẢNG 07
  // ======================================================

  {
    number: "Mảng 07",

    name: "Accounting",

    description: "Invoice, Vendor Bill, Payment, Reconciliation",

    questions: [],
  },

  // ======================================================
  // MẢNG 08
  // ======================================================

  {
    number: "Mảng 08",

    name: "HR",

    description: "Employees, Attendances, Time Off, Expenses",

    questions: [],
  },

  // ======================================================
  // MẢNG 09
  // ======================================================

  {
    number: "Mảng 09",

    name: "Website & eCommerce",

    description: "Website, Products, Cart, Checkout",

    questions: [],
  },

  // ======================================================
  // MẢNG 10
  // ======================================================

  {
    number: "Mảng 10",

    name: "Studio",

    description: "Fields, Views, Models, Automation",

    questions: [],
  },

  // ======================================================
  // MẢNG 11
  // ======================================================

  {
    number: "Mảng 11",

    name: "Essentials",

    description: "Contacts, Chatter, Activities, Users",

    questions: [],
  },

  // ======================================================
  // MẢNG 12
  // ======================================================

  {
    number: "Mảng 12",

    name: "Survey",

    description: "Questions, Scoring, Certification, Results",

    questions: [],
  },

  // ======================================================
  // MẢNG 13
  // ======================================================

  {
    number: "Mảng 13",

    name: "POS",

    description: "Point of Sale, Payments, Sessions",

    questions: [],
  },
];

// ==========================================================
// BIẾN TOÀN CỤC
// ==========================================================

let activeCategory = null;

let currentQuestion = 0;

let userAnswers = [];

let submitted = false;

// ==========================================================
// LẤY CÁC ELEMENT TỪ HTML
// ==========================================================

const homeScreen = document.getElementById("home-screen");

const quizScreen = document.getElementById("quiz-screen");

const categoryList = document.getElementById("category-list");

const quizContainer = document.getElementById("quiz-container");

const questionNumber = document.getElementById("question-number");

const prevButton = document.getElementById("prev-btn");

const nextButton = document.getElementById("next-btn");

const submitButton = document.getElementById("submit-btn");

const resultBox = document.getElementById("result-box");

const quizCategory = document.getElementById("quiz-category");

// ==========================================================
// HIỂN THỊ DANH SÁCH MẢNG
// ==========================================================

function renderCategories() {
  categoryList.innerHTML = "";

  categories.forEach(function (category, index) {
    // Tạo thẻ mảng
    const card = document.createElement("article");

    card.className = "category-card";

    // Nếu chưa có câu hỏi
    if (category.questions.length === 0) {
      card.classList.add("disabled");
    }

    // Trạng thái
    let statusText = "";

    if (category.questions.length > 0) {
      statusText = category.questions.length + " câu";
    } else {
      statusText = "Sắp thêm";
    }

    // Nội dung card
    card.innerHTML = `

            <span class="category-number">

                ${category.number}

            </span>


            <span class="badge ${category.questions.length > 0 ? "ready" : ""}">

                ${statusText}

            </span>


            <h3>

                ${category.name}

            </h3>


            <p>

                ${category.description}

            </p>

        `;

    // Nếu có câu hỏi thì click được
    if (category.questions.length > 0) {
      card.addEventListener(
        "click",

        function () {
          startQuiz(index);
        },
      );
    }

    categoryList.appendChild(card);
  });
}

// ==========================================================
// BẮT ĐẦU LÀM BÀI
// ==========================================================

function startQuiz(categoryIndex) {
  // Lấy mảng được chọn
  activeCategory = categories[categoryIndex];

  // Reset câu
  currentQuestion = 0;

  // Reset đáp án
  userAnswers = new Array(activeCategory.questions.length).fill(null);

  // Chưa nộp bài
  submitted = false;

  // Reset nút nộp
  submitButton.disabled = false;

  submitButton.innerText = "Nộp bài";

  // Ẩn kết quả cũ
  resultBox.style.display = "none";

  resultBox.innerHTML = "";

  // Tiêu đề bài thi
  quizCategory.innerText = activeCategory.number + " – " + activeCategory.name;

  // Ẩn trang chủ
  homeScreen.classList.add("hidden");

  // Hiện bài kiểm tra
  quizScreen.classList.remove("hidden");

  // Render câu đầu
  renderQuestion();

  // Scroll lên đầu
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}

// ==========================================================
// HIỂN THỊ CÂU HỎI
// ==========================================================

function renderQuestion() {
  // Kiểm tra có mảng chưa
  if (!activeCategory) {
    return;
  }

  const question = activeCategory.questions[currentQuestion];

  // Xóa câu cũ
  quizContainer.innerHTML = "";

  // ------------------------------------------
  // KHUNG CÂU HỎI
  // ------------------------------------------

  const questionBox = document.createElement("div");

  questionBox.className = "question-box";

  // ------------------------------------------
  // NỘI DUNG CÂU HỎI
  // ------------------------------------------

  const questionText = document.createElement("div");

  questionText.className = "question-text";

  questionText.innerText = currentQuestion + 1 + ". " + question.question;

  questionBox.appendChild(questionText);

  // ======================================================
  // HIỂN THỊ TỪNG ĐÁP ÁN
  // ======================================================

  question.answers.forEach(function (answer, answerIndex) {
    // Khung đáp án
    const answerDiv = document.createElement("div");

    answerDiv.className = "answer";

    // ----------------------------------------------
    // ĐÁP ÁN ĐANG CHỌN
    // ----------------------------------------------

    if (userAnswers[currentQuestion] === answerIndex) {
      answerDiv.classList.add("selected");
    }

    // ----------------------------------------------
    // SAU KHI NỘP BÀI
    // ----------------------------------------------

    if (submitted) {
      // Đáp án đúng
      if (answerIndex === question.correct) {
        answerDiv.classList.add("correct");
      }

      // Đáp án chọn sai
      if (
        userAnswers[currentQuestion] === answerIndex &&
        answerIndex !== question.correct
      ) {
        answerDiv.classList.add("wrong");
      }
    }

    // ----------------------------------------------
    // TẠO CHỮ A B C D
    // ----------------------------------------------

    const answerLetter = String.fromCharCode(65 + answerIndex);

    // ----------------------------------------------
    // TEXT ĐÁP ÁN
    // ----------------------------------------------

    const answerText = document.createElement("div");

    answerText.className = "answer-text";

    answerText.innerText = answerLetter + ". " + answer;

    // ----------------------------------------------
    // RADIO BUTTON
    // ----------------------------------------------

    const radioCircle = document.createElement("div");

    radioCircle.className = "radio-circle";

    answerDiv.appendChild(answerText);

    answerDiv.appendChild(radioCircle);

    // ----------------------------------------------
    // CHỈ CHO CLICK NẾU CHƯA NỘP
    // ----------------------------------------------

    if (!submitted) {
      answerDiv.addEventListener(
        "click",

        function () {
          selectAnswer(answerIndex);
        },
      );
    }

    questionBox.appendChild(answerDiv);
  });

  quizContainer.appendChild(questionBox);

  // ======================================================
  // HIỂN THỊ CÂU X / Y
  // ======================================================

  questionNumber.innerText =
    "Câu " + (currentQuestion + 1) + " / " + activeCategory.questions.length;

  // ======================================================
  // NÚT CÂU TRƯỚC
  // ======================================================

  if (currentQuestion === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // ======================================================
  // NÚT CÂU TIẾP
  // ======================================================

  if (currentQuestion === activeCategory.questions.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// ==========================================================
// CHỌN ĐÁP ÁN
// ==========================================================

function selectAnswer(answerIndex) {
  // Nếu đã nộp bài thì không cho sửa
  if (submitted) {
    return;
  }

  // Lưu lựa chọn
  userAnswers[currentQuestion] = answerIndex;

  // Render lại
  renderQuestion();
}

// ==========================================================
// CÂU TIẾP THEO
// ==========================================================

function nextQuestion() {
  if (currentQuestion < activeCategory.questions.length - 1) {
    currentQuestion++;

    renderQuestion();

    window.scrollTo({
      top: 80,

      behavior: "smooth",
    });
  }
}

// ==========================================================
// CÂU TRƯỚC
// ==========================================================

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;

    renderQuestion();

    window.scrollTo({
      top: 80,

      behavior: "smooth",
    });
  }
}

// ==========================================================
// NỘP BÀI
// ==========================================================

function submitQuiz() {
  // ------------------------------------------
  // KIỂM TRA CÂU CHƯA LÀM
  // ------------------------------------------

  const unansweredCount = userAnswers.filter(function (answer) {
    return answer === null;
  }).length;

  // ------------------------------------------
  // NẾU CÒN CÂU CHƯA TRẢ LỜI
  // ------------------------------------------

  if (unansweredCount > 0) {
    const confirmSubmit = confirm(
      "Bạn còn " +
        unansweredCount +
        " câu chưa trả lời." +
        "\n\n" +
        "Bạn vẫn muốn nộp bài?",
    );

    if (!confirmSubmit) {
      return;
    }
  }

  // Đánh dấu đã nộp
  submitted = true;

  // ======================================================
  // TÍNH SỐ CÂU ĐÚNG
  // ======================================================

  let score = 0;

  activeCategory.questions.forEach(function (question, questionIndex) {
    if (userAnswers[questionIndex] === question.correct) {
      score++;
    }
  });

  // ======================================================
  // SỐ CÂU SAI
  // ======================================================

  const wrongCount = activeCategory.questions.length - score;

  // ======================================================
  // TÍNH PHẦN TRĂM
  // ======================================================

  const percentage = Math.round(
    (score / activeCategory.questions.length) * 100,
  );

  // ======================================================
  // ĐÁNH GIÁ
  // ======================================================

  let rating = "";

  if (percentage >= 90) {
    rating = "Xuất sắc";
  } else if (percentage >= 80) {
    rating = "Rất tốt";
  } else if (percentage >= 70) {
    rating = "Tốt";
  } else if (percentage >= 50) {
    rating = "Cần ôn thêm";
  } else {
    rating = "Cần ôn lại kiến thức";
  }

  // ======================================================
  // HIỂN THỊ KẾT QUẢ
  // ======================================================

  resultBox.style.display = "block";

  resultBox.innerHTML = `

        <div>

            Kết quả ${activeCategory.number}

        </div>

        <br>

        <div>

            ✅ Đúng:
            ${score}
            /
            ${activeCategory.questions.length}

        </div>

        <br>

        <div>

            ❌ Sai:
            ${wrongCount}

        </div>

        <br>

        <div>

            🎯 Điểm:
            ${percentage}%

        </div>

        <br>

        <div>

            ${rating}

        </div>

        <br>

        <small>

            🟢 Xanh = đáp án đúng

            &nbsp;&nbsp;

            🔴 Đỏ = đáp án chọn sai

        </small>

    `;

  // ======================================================
  // VỀ CÂU 1 ĐỂ XEM ĐÁP ÁN
  // ======================================================

  currentQuestion = 0;

  renderQuestion();

  // ======================================================
  // KHÓA NÚT NỘP
  // ======================================================

  submitButton.disabled = true;

  submitButton.innerText = "Đã nộp bài";

  // Scroll lên câu hỏi
  window.scrollTo({
    top: 80,

    behavior: "smooth",
  });
}

// ==========================================================
// QUAY VỀ DANH SÁCH CÁC MẢNG
// ==========================================================

function showHome() {
  // Hiện trang chủ
  homeScreen.classList.remove("hidden");

  // Ẩn quiz
  quizScreen.classList.add("hidden");

  // Scroll top
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}

// ==========================================================
// LÀM LẠI BÀI HIỆN TẠI
// ==========================================================

function restartQuiz() {
  if (!activeCategory) {
    return;
  }

  currentQuestion = 0;

  userAnswers = new Array(activeCategory.questions.length).fill(null);

  submitted = false;

  resultBox.style.display = "none";

  resultBox.innerHTML = "";

  submitButton.disabled = false;

  submitButton.innerText = "Nộp bài";

  renderQuestion();

  window.scrollTo({
    top: 80,

    behavior: "smooth",
  });
}

// ==========================================================
// DEBUG
// HIỂN THỊ ANSWER KEY TRONG CONSOLE
// ==========================================================

function showAnswerKey() {
  if (!activeCategory) {
    console.log("Chưa chọn mảng.");

    return;
  }

  console.log(
    "===== " + activeCategory.number + " - " + activeCategory.name + " =====",
  );

  activeCategory.questions.forEach(function (question, index) {
    const letter = String.fromCharCode(65 + question.correct);

    console.log("Câu " + (index + 1) + ": " + letter);
  });
}

// ==========================================================
// KIỂM TRA SỐ CÂU CỦA TỪNG MẢNG
// ==========================================================

function showCategoryInfo() {
  console.log("===== DANH SÁCH MẢNG =====");

  categories.forEach(function (category) {
    console.log(
      category.number +
        " - " +
        category.name +
        ": " +
        category.questions.length +
        " câu",
    );
  });
}

// ==========================================================
// CHẠY KHI WEBSITE ĐƯỢC MỞ
// ==========================================================

renderCategories();
