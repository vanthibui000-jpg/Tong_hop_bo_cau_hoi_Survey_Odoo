// ==========================================================
// ODOO 19 QUIZ - MEMBER LOGIN + HISTORY + CERTIFICATE
// ==========================================================

const categories = [
  {
    "number": "Mảng 01",
    "name": "CRM",
    "description": "Lead, Opportunity, Pipeline, Activities, Forecast",
    "questions": [
      {
        "question": "In the image below, what will be the deadline for the next activity called 'Reminder' if you mark the 'Call' activity as done today?",
        "answers": [
          "3 days from today",
          "5 days from today",
          "7 days from today"
        ],
        "correct": 2
      },
      {
        "question": "Deleting an opportunity is the same as marking it as 'Lost.'",
        "answers": [
          "TRUE",
          "FALSE"
        ],
        "correct": 1
      },
      {
        "question": "On average, a lead is more likely to be won over an opportunity.",
        "answers": [
          "TRUE",
          "FALSE"
        ],
        "correct": 1
      },
      {
        "question": "The forecast report allows you to:",
        "answers": [
          "Quickly view all your opportunities organized by expected closing date",
          "Ask an AI to guess how much money you'll earn",
          "List assumptions about how the market will evolve and share it with your team"
        ],
        "correct": 0
      },
      {
        "question": "Can you manually link an existing sales order to an existing opportunity?",
        "answers": [
          "No. Once both documents exist, it's too late",
          "Yes, through the 'Link Documents' button on the opportunity",
          "Yes, under the 'Other Info' tab on the sales order"
        ],
        "correct": 2
      },
      {
        "question": "Can one salesperson be in multiple sales teams?",
        "answers": [
          "Yes, only if they are a Team Leader",
          "Yes, if the 'Multi Teams' setting is activated",
          "No, multiple users are needed to achieve that"
        ],
        "correct": 1
      },
      {
        "question": "How do you add a Property field to an opportunity form?",
        "answers": [
          "Click the gear icon on the opportunity form, select 'Add Properties,' and proceed to customize to fit your needs",
          "Click 'Configuration' > Add Properties > Customize > Add to specific opportunities from a mass list",
          "This is not a possible option without consulting Odoo developers"
        ],
        "correct": 0
      },
      {
        "question": "The expected revenue on an opportunity:",
        "answers": [
          "Cannot be set manually because it is computed based on the untaxed amount of the sales orders linked to that opportunity",
          "Can only be set when creating the opportunity",
          "Can be set (or modified) manually at any time"
        ],
        "correct": 2
      },
      {
        "question": "The 'Closed Date' indicates:",
        "answers": [
          "The date the opportunity was created",
          "The date the opportunity was won or lost",
          "The date the opportunity was deleted"
        ],
        "correct": 1
      },
      {
        "question": "A user with the access rights 'User: Own Documents Only' can only work with:",
        "answers": [
          "The leads if they are in Developer Mode",
          "The leads that were created the previous year",
          "The leads that are either assigned (or unassigned) to them"
        ],
        "correct": 2
      },
      {
        "question": "What does the probability field on an opportunity indicate?",
        "answers": [
          "The probability that the opportunity will move to the next stage in the pipeline",
          "The probability of getting a response to the offer letter",
          "The probability of closing a deal with this prospect"
        ],
        "correct": 2
      },
      {
        "question": "Opportunities will appear in the 'Activities' view if:",
        "answers": [
          "The 'Expected Closing' date of the opportunity is set to occur within 7 days",
          "You have scheduled activities for those opportunities",
          "The prospects replied on those opportunities"
        ],
        "correct": 1
      },
      {
        "question": "Reporting is accessible:",
        "answers": [
          "Only for database admins",
          "Only for managers",
          "For all CRM users"
        ],
        "correct": 2
      },
      {
        "question": "The probability of winning an opportunity is computed based on:",
        "answers": [
          "Aggregated industry benchmarks",
          "Data collected from all Odoo databases",
          "Data collected from your own database"
        ],
        "correct": 2
      },
      {
        "question": "If the manager of the Pre-Sales team creates a new property field on an opportunity, who can see it?",
        "answers": [
          "Only members of the Pre-Sales team",
          "Only managers of other sales teams",
          "Anyone who has access to that opportunity"
        ],
        "correct": 2
      },
      {
        "question": "How do you configure a pricelist that gives a progressive discount based on the quantity being ordered by the customer?",
        "answers": [
          "Create one pricelist with two lines",
          "Create two pricelists with one line each",
          "Create one pricelist with one line, and put the two prices on this line"
        ],
        "correct": 0
      },
      {
        "question": "Which of the following is NOT a 'Routes' option on a product form (under the Inventory tab)?",
        "answers": [
          "Buy",
          "Upsell",
          "Dropship Subcontractor on Order"
        ],
        "correct": 1
      },
      {
        "question": "What does it mean if the forecasted quantity of a storable product is less than the quantity on hand?",
        "answers": [
          "Nothing, as we do not know the complete history of each product",
          "New products are planned to arrive in stock",
          "There are more outgoing products planned than incoming products"
        ],
        "correct": 2
      },
      {
        "question": "What does the 'Customer Lead Time' field on a product form represent?",
        "answers": [
          "The computed order date based on the quotation date",
          "The number of days promised to the customer, between the confirmation of the sales order and the delivery",
          "Confirmation that the Terms & Conditions will be displayed on the quotation"
        ],
        "correct": 1
      }
    ]
  },
  {
    "number": "Mảng 02",
    "name": "Sales",
    "description": "Marketing, Pricelist, Routes, Lead Time, Invoicing, Milestones, eCommerce",
    "questions": [
      {
        "question": "Which of the following reporting views CANNOT be downloaded as an Excel file in a single click?",
        "answers": [
          "Pivot table",
          "Graph",
          "Cohort"
        ],
        "correct": 0
      },
      {
        "question": "What does it mean if an activity icon on an opportunity card (in kanban view) is yellow?",
        "answers": [
          "It's due soon",
          "It's overdue",
          "It's due today"
        ],
        "correct": 1
      },
      {
        "question": "In the image below, what happens if you click on the circular arrows icon?",
        "answers": [
          "It reloads the page, so I can see new options",
          "It runs the rule-based assignment",
          "It switches the assignation mode to automatic"
        ],
        "correct": 0
      },
      {
        "question": "How do you configure a pricelist that gives a progressive discount based on the quantity being ordered by the customer (e.g. 5% discount if the customer purchases between 0 and 9 units; 10% discount if the customer purchases 10 or more units, etc.)?",
        "answers": [
          "Create one pricelist with two lines",
          "Create two pricelists with one line each",
          "Create one pricelist with one line, and put the two prices on this line"
        ],
        "correct": 2
      },
      {
        "question": "Which of the following is NOT a 'Routes' option on a product form (under the Inventory) tab?",
        "answers": [
          "Buy",
          "Upsell",
          "Dropship Subcontractor on Order"
        ],
        "correct": 2
      },
      {
        "question": "What does it mean if the forecasted quantity of a storable product is less than the quantity on hand?",
        "answers": [
          "Nothing, as we do not know the complete history of each product",
          "New products are planned to arrive in stock",
          "There are more outgoing products planned than incoming Products"
        ],
        "correct": 2
      },
      {
        "question": "What does the 'Customer Lead Time' field on a product form represent?",
        "answers": [
          "The computed order date based on the quotation date",
          "The number of days, promised to the customer, between the confirmation of the sales order and the delivery",
          "Confirmation that the Terms & Conditions will be displayed on the quotation"
        ],
        "correct": 0
      },
      {
        "question": "A customer is interested in a rather expensive product. The product has a supplier delivery lead time that is LESS than your customer delivery lead time. You do not sell this product often, due to its expensive nature. With that in mind, what is the best procurement method for you to manage this product effectively?",
        "answers": [
          "Use the Master Production Schedule tool",
          "Configure this product as a 'Consumable' type",
          "Set this product route to 'Replenish on Order (MTO)'"
        ],
        "correct": 1
      },
      {
        "question": "Assuming you have enough stock to fulfill an order, what will the scheduled delivery date be when a sales order is confirmed on September 1st -- for a product that has a customer lead time of 5 days, and a security lead time of 2 days?",
        "answers": [
          "September 8th",
          "September 6th",
          "September 4th"
        ],
        "correct": 0
      },
      {
        "question": "If you confirm a quotation with a storable product that has an invoicing policy set to 'Ordered quantities,' which of the following is true?",
        "answers": [
          "A draft invoice can be generated while a delivery order is in the 'Waiting' or 'Ready' stage",
          "A draft invoice can be generated only after a delivery order has been processed",
          "A draft invoice is automatically generated after a delivery order has been Processed"
        ],
        "correct": 1
      },
      {
        "question": "If you would like to group specific sales order lines together to generate subtotals, what feature would you use on the quotation/sales order?",
        "answers": [
          "Product categories",
          "Sequences",
          "Sections"
        ],
        "correct": 0
      },
      {
        "question": "When you set a product's invoicing policy to 'Based on Milestones':",
        "answers": [
          "The delivered quantity on the sales order must be set manually each time",
          "The delivered quantity on the sales order updates automatically based on milestone completion in the Project app",
          "The delivered quantity on the sales order updates automatically based on timesheet completion in the Timesheets app"
        ],
        "correct": 2
      },
      {
        "question": "How would you configure Odoo, so the product 'Office Chair' appears as a suggested option when a customer adds the product 'Conference Chair' to their cart in the online store?",
        "answers": [
          "List the Office Chair as an 'Optional Product' on the Conference Chair's product form (under 'Sales' tab)",
          "List the Office Chair as an 'Alternative Product' on the Conference Chair's product form (under 'Inventory' tab)",
          "List the Conference Chair as an 'Alternative Product' on the Office Chair's product form (under 'General Information' tab)"
        ],
        "correct": 1
      },
      {
        "question": "Which of the following is true when you activate the 'Margins' setting in Sales > Configuration > Settings?",
        "answers": [
          "Changing the cost price on a sales order line will recompute a new unit price, according to the calculation on the pricelist",
          "Sales order lines can show both the unit price and cost price of the product, as well as the margin, by calculating the difference between the unit price and the cost price",
          "Margins will only display on confirmed sales orders, not on quotations"
        ],
        "correct": 2
      }
    ]
  },
  {
    "number": "Mảng 03",
    "name": "Sales / Products",
    "description": "UoM, Routes, Product Variants, Pricelist, AVCO, Purchase Control Policy",
    "questions": [
      {
        "question": "What condition must be true when using a default unit of measure and purchase unit of measure?",
        "answers": [
          "The purchase unit of measure must be in the same UOM category as the default unit of measure",
          "These two units of measure have to be in different categories",
          "These two units of measure must have the same name"
        ],
        "correct": 1
      },
      {
        "question": "What does the below configuration for a storable product imply?",
        "answers": [
          "When a reordering rule set on the product is triggered, a manufacturing order will be generated",
          "When a sales order is confirmed, an RFQ will be generated",
          "When a sales order is confirmed, a manufacturing order will be generated"
        ],
        "correct": 2
      },
      {
        "question": "What does the below configuration for a storable product imply?",
        "answers": [
          "When a reordering rule set on the product is triggered, an RFQ will be generated",
          "When a reordering rule set on the product is triggered, a manufacturing order will be generated",
          "When a sales order is confirmed, a manufacturing order will be generated"
        ],
        "correct": 1
      },
      {
        "question": "What does the below configuration for a storable product imply?",
        "answers": [
          "When a sales or manufacturing order is confirmed, a RFQ will be generated",
          "When a reordering rule set on the product is triggered, a RFQ will be generated",
          "When a sales or manufacturing order is confirmed, a manufacturing order will be generated"
        ],
        "correct": 0
      },
      {
        "question": "Can any product be used in a sales order?",
        "answers": [
          "Yes, you can use all your products",
          "No, you can only use products you currently have in stock",
          "No, you can only use products that you've marked as 'Can be Sold' on the product form"
        ],
        "correct": 1
      },
      {
        "question": "When would it be most useful to use 'Order Grid Entry' as the sales variant selection type for a product?",
        "answers": [
          "When clients want their sales orders organized in a grid",
          "When salespeople typically recommend specific product variants to clients",
          "When salespeople usually create large quotations with many product variants for clients"
        ],
        "correct": 2
      },
      {
        "question": "How can you send a preliminary invoice to a customer before a sale is confirmed?",
        "answers": [
          "Activate 'Pro-Forma Invoice' setting, and click 'Send Pro-Forma Invoice' button on the quotation",
          "Activate 'Preliminary Invoice' setting, and click 'Pre-Lim Invoice' button on the quotation",
          "This is not possible in Odoo"
        ],
        "correct": 1
      },
      {
        "question": "Which of the following is NOT a 'Variants Creation Mode' option while creating product attributes?",
        "answers": [
          "Instantly",
          "Automatically",
          "Dynamically"
        ],
        "correct": 2
      },
      {
        "question": "What pricelist configuration option allows end users to choose a specific pricelist while shopping online?",
        "answers": [
          "Selectable",
          "Optional",
          "Customer Choice"
        ],
        "correct": 2
      },
      {
        "question": "Using the 'Average Cost' (AVCO) costing method, will the unit cost of a product change when you deliver products?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "What does setting a product's 'Control Policy' to 'On received quantities' do?",
        "answers": [
          "Odoo will not allow you to create a vendor bill until the receipt of one or more products on the original Purchase Order, and the received quantities will be the quantities on the draft vendor bill",
          "A vendor bill will be created immediately after the order confirmation",
          "You will automatically receive all quantities on every order as soon as Purchase Orders are confirmed"
        ],
        "correct": 2
      },
      {
        "question": "What will the scheduled purchase order date be if you validate a sales order on October 25th with a MTO route, with a 'Customer Lead Time' set to 10 Days and 'Vendor Lead Time' set to 6 Days?",
        "answers": [
          "October 29th",
          "October 19th",
          "October 25th"
        ],
        "correct": 1
      },
      {
        "question": "What will the scheduled purchase order date be if you validate a sales order on October 25th, knowing the product is set to 'Buy' with an 'MTO' route, with a 'Customer Lead Time' set to 10 Days, a 'Vendor Lead Time' set to 6 Days, and 'Company Security Lead Time' for purchases set to 2 Days?",
        "answers": [
          "October 23rd",
          "October 27th",
          "November 1st"
        ],
        "correct": 0
      },
      {
        "question": "What does setting a product's 'Control Policy' to 'On ordered quantities' do?",
        "answers": [
          "When creating a vendor bill, a product's price comes from the purchase order, and the quantity to invoice comes from the receipt",
          "When a purchase order is confirmed, a vendor bill is automatically generated",
          "When creating a vendor bill, the quantity and price are automatically set to the ordered amount"
        ],
        "correct": 1
      }
    ]
  },
  {
    "number": "Mảng 04",
    "name": "Purchase / Project",
    "description": "RFQ, Vendor Pricelist, 3-way Matching, Project",
    "questions": [
      {
        "question": "You currently have 4 units of a table on hand, with a reordering rule with a Min. of 5 and a Max. of 15 units. What will be the information on the purchase order triggered by this rule?",
        "answers": [
          "Vendor = Azure Interior, price = $500/unit",
          "Vendor = Wood Corner, price = $470/unit",
          "Vendor = Azure Interior, price = $470/unit"
        ],
        "correct": 2
      },
      {
        "question": "Can you create alternative requests for quotation (RFQs) for multiple vendors, with the same products, to find the best price?",
        "answers": [
          "Yes, by clicking 'Create Alternative' under the 'Alternatives' tab from a new RFQ, and selecting 'Copy Products'",
          "No, you must create each RFQ separately",
          "Yes, but only after confirming the first RFQ"
        ],
        "correct": 0
      },
      {
        "question": "Using the 'Average Cost' costing method, will the cost in the product form change when you receive products?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "When creating a new 'Blanket Order', can you configure the purchase agreement to expire on a specific date?",
        "answers": [
          "No",
          "Yes, by entering the desired date in the 'Agreement Deadline' field"
        ],
        "correct": 1
      },
      {
        "question": "When you move a vendor pricelist to the top of the list on a product form, which of the following happens?",
        "answers": [
          "The vendor is archived",
          "Odoo automatically selects that vendor and their price when you add the product to an RFQ",
          "The product cost is locked"
        ],
        "correct": 1
      },
      {
        "question": "When a preset Discount is set on a Vendor Pricelist for a specific product, can the discount be overridden on an RFQ?",
        "answers": [
          "No",
          "Only by a manager",
          "Yes, the Discount can be modified directly on the purchase order line when creating an RFQ"
        ],
        "correct": 2
      },
      {
        "question": "When creating a new request for quotation (RFQ), are you able to link it to an existing RFQ as an alternative?",
        "answers": [
          "No",
          "Only after purchase order confirmation",
          "Yes, by clicking 'Link to Existing RFQ', under the 'Alternatives' tab on a new request for quotation"
        ],
        "correct": 2
      },
      {
        "question": "When the '3-way matching' feature is activated, how will you know which vendor bills are ready to be paid for received quantities?",
        "answers": [
          "The bill is automatically paid",
          "The 'Should Be Paid' field will read 'Yes', under the 'Other Info' tab on the vendor bill",
          "The RFQ is marked Done"
        ],
        "correct": 1
      },
      {
        "question": "Which of the following statements is false? You can automate an email for a customer rating request:",
        "answers": [
          "Periodically",
          "On a stage change",
          "When a sales order is delivered"
        ],
        "correct": 2
      },
      {
        "question": "You can bill time spent by your employees at different rates depending on the project.",
        "answers": [
          "TRUE",
          "FALSE"
        ],
        "correct": 0
      },
      {
        "question": "Is it possible to define different Kanban stages for different projects?",
        "answers": [
          "No",
          "Yes"
        ],
        "correct": 1
      },
      {
        "question": "Is it possible to create different Kanban stages for tasks within the same project?",
        "answers": [
          "No",
          "Yes"
        ],
        "correct": 0
      },
      {
        "question": "Is it possible to change the name of tasks in order to better fit the business requirements?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "Any task can become a sub-task later on.",
        "answers": [
          "TRUE",
          "FALSE"
        ],
        "correct": 0
      }
    ]
  },
  {
    "number": "Mảng 05",
    "name": "Project",
    "description": "Documents, Gantt, Milestones, Project Updates, Accounting",
    "questions": [
      {
        "question": "How do you define a template for your project's documents workspace?",
        "answers": [
          "By defining a workspace template in the settings of Project",
          "By defining a workspace template on your service",
          "By duplicating a workspace that acts as a template"
        ],
        "correct": 1
      },
      {
        "question": "How can you schedule a task you had previously created?",
        "answers": [
          "By selecting a time frame in Gantt view",
          "By defining the planned date of the task on its form view",
          "You can no longer schedule a task once it has been created",
          "A & B"
        ],
        "correct": 3
      },
      {
        "question": "What condition(s) must be met for the milestones of your project to be invoiced?",
        "answers": [
          "A sales order item must be set on the milestone",
          "The milestone must be marked as reached",
          "All of the above"
        ],
        "correct": 2
      },
      {
        "question": "What information can you find in the project updates?",
        "answers": [
          "The number of hours remaining based on the hours sold, planned and recorded",
          "The profitability of the project in relation to its budget, costs, revenues and down payments",
          "The milestones that have recently been added or updated",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "What does it mean when a milestone is displayed in green?",
        "answers": [
          "The milestone is ready to be marked as reached, as all of its tasks have been completed",
          "The milestone's deadline falls on today's date",
          "This milestone is the next one that must be reached"
        ],
        "correct": 0
      },
      {
        "question": "What will be the outcome of typing 'Yoga class @Mike #class 3h' in the task title field?",
        "answers": [
          "A task with this title will be created",
          "A new task with 'Yoga class' title will be created, assigned to Mike, and 3 hours will be allocated",
          "A new task will be created, and a message to Mike will be posted in chatter, allocating 3 hours to him"
        ],
        "correct": 1
      },
      {
        "question": "Typing 'Office planning!' in a new task title field will:",
        "answers": [
          "Make it seem like you're yelling",
          "Create a task with the title 'Office' and create a priority shift in Planning",
          "Create a starred task with the title 'Office planning'"
        ],
        "correct": 2
      },
      {
        "question": "Which statement is true? The 'Room 2: Decoration' task:",
        "answers": [
          "Can be planned 'this week' for one assignee and 'this month' for the other",
          "Must be planned 'this week' for both assignees"
        ],
        "correct": 1
      },
      {
        "question": "What kind of costs are taken into account in the project updates?",
        "answers": [
          "The timesheet costs of your employees",
          "Any cost linked to the analytic account of the project",
          "Expense costs linked to the project's sales order",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "How can you invite employees to see a private project?",
        "answers": [
          "By sharing the project with them",
          "By adding them as followers of the project"
        ],
        "correct": 1
      },
      {
        "question": "Assuming Task B depends on Task A, which statement is false?",
        "answers": [
          "Task B cannot change stage before task A due to the dependency",
          "Task B cannot be completed before Task A due to the dependency",
          "Task B can be completed before task A"
        ],
        "correct": 2
      },
      {
        "question": "Which statement is true? Tasks without a project are visible to:",
        "answers": [
          "Every project app user",
          "The users assigned to the tasks only"
        ],
        "correct": 1
      },
      {
        "question": "A customer invoice with two different invoice lines is posted. Both invoice lines are recorded on the same account and are subject to the same 15% tax. How many journal items will be created?",
        "answers": [
          "2 journal items",
          "3 journal items",
          "4 journal items",
          "5 journal items"
        ],
        "correct": 2
      },
      {
        "question": "What happens if a currency is not set on an account?",
        "answers": [
          "The account can be used for transactions in any currency",
          "The account can only be used for transactions in the main company currency",
          "It's not possible. A currency is required for each account"
        ],
        "correct": 0
      },
      {
        "question": "What happens when you post a vendor bill with an accounting date in the previous fiscal period that has already been locked?",
        "answers": [
          "Odoo doesn't let you post the vendor bill",
          "Odoo automatically changes the accounting date to be in the next open fiscal period and posts the vendor bill",
          "The locked fiscal period mechanism doesn't apply here",
          "Odoo automatically changes the accounting date to match the bill date"
        ],
        "correct": 1
      }
    ]
  },
  {
    "number": "Mảng 06",
    "name": "Accounting",
    "description": "Currency, Chart of Accounts, Lock Dates, Reconciliation, Assets",
    "questions": [
      {
        "question": "How frequently can Odoo automatically update currency exchange rates?",
        "answers": [
          "Daily",
          "Weekly",
          "Monthly",
          "All of the above",
          "Odoo cannot automatically update currency exchange rates"
        ],
        "correct": 0
      },
      {
        "question": "How many charts of accounts can you have?",
        "answers": [
          "As many as you'd like",
          "One per company",
          "One per year",
          "One per branch"
        ],
        "correct": 3
      },
      {
        "question": "How do you compute the total due by a customer?",
        "answers": [
          "The sum of all unpaid invoices of this customer",
          "The balance related to this customer in receivable accounts",
          "The sum of customer invoices minus the sum of vendor bills",
          "The sum of all unpaid invoices and draft invoices of this customer"
        ],
        "correct": 1
      },
      {
        "question": "How do closing dates work in the case of multiple branches?",
        "answers": [
          "Each branch has its own fiscal period and is independent of other branches and its parent company",
          "There is a common fiscal period handled by the parent company and reflected in the branches",
          "There can only be 3 different fiscal periods in total, no matter how many branches",
          "There is a common fiscal period handled by the parent company but it's only reflected in the branches of choice"
        ],
        "correct": 1
      },
      {
        "question": "How do you create deferred expense entries from a vendor bill?",
        "answers": [
          "Odoo automatically creates the deferred expense entries when you set the 'Start Date' and 'End Date' on the vendor bill line",
          "Odoo can only create deferred revenues, not deferred expenses",
          "First, create a deferred expense model via Accounting > Configuration > Deferred Expense Models, then apply that model to the vendor bill",
          "Create the deferred expense directly via Accounting > Accounting > Deferred Expenses"
        ],
        "correct": 0
      },
      {
        "question": "How can the reference of a journal entry be changed?",
        "answers": [
          "By going to the journal entry and changing it, independently of its status",
          "By going to the journal entry and changing it, but only if it's in draft status",
          "By first enabling 'Editable settings' in Accounting > Configurations, and then going to the journal entry and changing it",
          "Journal entry references cannot be changed in Odoo"
        ],
        "correct": 1
      },
      {
        "question": "When are follow-up actions triggered?",
        "answers": [
          "A given amount of days after the invoice date defined on an invoice",
          "A given amount of days after the due date defined on an invoice",
          "Once a month, on a specific day, if the due date defined on the invoice has passed for at least seven days"
        ],
        "correct": 1
      },
      {
        "question": "In which order should lock dates be set for optimal use of Odoo?",
        "answers": [
          "First, the 'Journal Entries Lock Date', then the 'Tax Return Lock Date', and finally, the 'All Users Lock Date'",
          "First, the 'Tax Return Lock Date', then the 'Journal Entries Lock Date', and finally, the 'All Users Lock Date'",
          "First, the 'All Users Lock Date', then the 'Tax Return Lock Date', and finally, the 'Journal Entries Lock Date'",
          "First, the 'Journal Entries Lock Date', then the 'All Users Lock Date', and finally, the 'Tax Return Lock Date'"
        ],
        "correct": 1
      },
      {
        "question": "How are total tax amounts rounded on an invoice?",
        "answers": [
          "Globally based on the untaxed amount of the invoice",
          "Per line on each invoice line",
          "Either 'globally' or 'per line' as defined in the app's settings",
          "Either 'globally' or 'per line' as defined in the invoice's options"
        ],
        "correct": 2
      },
      {
        "question": "When using the bank reconciliation tool, what happens if you match a bank statement line with an existing payment?",
        "answers": [
          "It creates a new journal entry",
          "It updates the suspense account of the payment and links the entry to the bank transaction",
          "It does nothing, as the payment already exists"
        ],
        "correct": 0
      },
      {
        "question": "What information could be used by the document digitization feature to detect the partner on an invoice?",
        "answers": [
          "Their name",
          "Their VAT number",
          "Their bank account numbers",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "Which of the following depreciation methods does NOT exist in Odoo?",
        "answers": [
          "Straight line",
          "Declining",
          "Sum of the years",
          "Declining, then straight line"
        ],
        "correct": 2
      },
      {
        "question": "Can the sum of the analytic distribution of a single journal entry line be over 100%?",
        "answers": [
          "Yes, but only if it's split between multiple analytic plans, each of which can have at most 100% distribution",
          "Yes, but only if it's split between multiple analytic accounts, each of which can have at most 100% distribution",
          "Yes, regardless of the number of analytic plans or analytic accounts",
          "No, it is not possible to have an analytic distribution over 100% for a single journal entry line"
        ],
        "correct": 0
      },
      {
        "question": "Which has the highest priority when determining the default income account of a product line?",
        "answers": [
          "Journal",
          "Fiscal position",
          "Product category",
          "Product"
        ],
        "correct": 0
      }
    ]
  },
  {
    "number": "Mảng 07",
    "name": "Accounting / Project",
    "description": "Payment Terms, Reports, Documents, Timesheets",
    "questions": [
      {
        "question": "Is it possible to create early payment discounts in Odoo?",
        "answers": [
          "No, you need to write off the difference between the invoice and the payment manually",
          "Yes, by creating a discount program and selecting it on the invoice",
          "Yes, by setting an early discount in a payment terms model and selecting it on the invoice",
          "No, discounts can only be granted on sales order lines, not based on payment date"
        ],
        "correct": 0
      },
      {
        "question": "How can the total be spelled out in words on invoices?",
        "answers": [
          "In the Accounting settings, enable the 'Total amount of invoice in letters' checkbox",
          "Open the invoice report in Studio and drag and drop the 'Total amount of invoice in letters' field onto the report",
          "Open the invoice report in Studio, select the 'Total' field, and select the 'Amount in letters' widget",
          "This is not possible in Odoo"
        ],
        "correct": 3
      },
      {
        "question": "How can the structure of an accounting report, such as the 'Balance Sheet', be modified?",
        "answers": [
          "In the report configuration, drag and drop the lines to reorder them",
          "In the report configuration, open a line and edit the 'Parent Line'",
          "In the report configuration, drag and drop the lines to reorder them or open a line and edit the 'Parent Line'",
          "Edit the report in Studio"
        ],
        "correct": 2
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "The tasks in the My Tasks pipeline are automatically dispatched across stages based on their deadline",
          "The tasks in the 'My Tasks' pipeline are automatically dispatched across stages based on their next activity date",
          "The tasks in the 'My Tasks' pipeline are manually dispatched across stages by the user"
        ],
        "correct": 3
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "Portal and public users can upload new documents to their project workspace via the portal",
          "Portal and public users can only view documents in the project workspace on the portal"
        ],
        "correct": 0
      },
      {
        "question": "Which of the following statements is true?",
        "answers": [
          "Tasks and sub-tasks cannot be in different projects",
          "Sub-tasks can have their own sub-tasks"
        ],
        "correct": 0
      },
      {
        "question": "Which statement is true? Assuming the 'documents' feature is enabled on your project...",
        "answers": [
          "Attachments are not automatically converted into documents",
          "The tags defined in the project settings are automatically set on every new document"
        ],
        "correct": 0
      },
      {
        "question": "Which statement is true? When a recurrent task is created...",
        "answers": [
          "All of the subsequent tasks are immediately generated",
          "Subsequent task is generated as soon as the previous task is done or canceled, or on the day of the recurrence"
        ],
        "correct": 1
      },
      {
        "question": "What happens when a sales order, including a product with the following configuration, is validated?",
        "answers": [
          "A task is created in a new project, and I can invoice the timesheeted (delivered) quantity",
          "A task is created in a new project, and I can invoice the ordered quantity of the sales order at any time",
          "A task is created in a new project, and I can invoice the quantity of the sales order only when the delivered quantity equals ordered quantity"
        ],
        "correct": 3
      },
      {
        "question": "How are hours billed at a fixed price computed?",
        "answers": [
          "These are sold hours coming from a sales order that still need to be timesheeted before being invoiced",
          "These are timesheeted hours linked to a sales order, where the invoicing policy is set to 'prepaid'",
          "These are the actual timesheeted hours that can't be invoiced from the sales order"
        ],
        "correct": 1
      },
      {
        "question": "When entering timesheets, how is the timesheet cost generated?",
        "answers": [
          "By setting an hourly cost on the employee form",
          "By setting a cost on the product form",
          "By setting a timesheet cost on the task form"
        ],
        "correct": 0
      },
      {
        "question": "What do the timesheet lines in italics represent?",
        "answers": [
          "Timesheets that already have been invoiced",
          "Timesheets that have not yet been validated by the manager",
          "Projects or tasks for which the user has not yet timesheeted in this period"
        ],
        "correct": 1
      },
      {
        "question": "Is it possible to choose some timesheet lines from the list and invoice them?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 2
      },
      {
        "question": "Employee billing time target is configured....",
        "answers": [
          "In HR settings of the individual employee",
          "For all employees in Timesheets settings",
          "In the Billing Rate Leaderboard"
        ],
        "correct": 0
      },
      {
        "question": "Displaying ranking in the timesheet leaderboard is possible by…",
        "answers": [
          "Billing rate and hours invoiced",
          "Total time and hours invoiced",
          "Billing rate and total time"
        ],
        "correct": 1
      }
    ]
  },
  {
    "number": "Mảng 08",
    "name": "Timesheets",
    "description": "Timesheets, Accounting, Inventory, AVCO",
    "questions": [
      {
        "question": "Why is the 'Delivered' field still empty on this sales order?",
        "answers": [
          "Because timesheets still need to be encoded and linked to the corresponding sales order",
          "The 'Delivered' field is filled when timesheeted hours equal the 'Ordered' quantity on the sales order",
          "Only products set as 'Milestone' have the 'Delivered' field populated when timesheeting"
        ],
        "correct": 0
      },
      {
        "question": "Which statement is false?",
        "answers": [
          "Your employees' time off automatically generates timesheet entries",
          "Public time off automatically generates timesheet entries",
          "You have to encode timesheet entries for time off manually"
        ],
        "correct": 0
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "On Tuesday, 2 hours were recorded, and 6 hours are missing as per employee's contract",
          "On Tuesday, 6 hours were validated, and 2 are missing as employee's contract",
          "On Tuesday, 6 hours were recorded, and 2 are missing as per employees contract"
        ],
        "correct": 0
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "Employees cannot record or edit timesheets that predate their most recent validated timesheets",
          "Employees cannot record or edit new timesheets when timesheets from an earlier period have not yet been validated",
          "Employees cannot encode/edit timesheets outside their working hours"
        ],
        "correct": 0
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "You can change the sales order item or remove the sales order item (in which case the timesheet is considered 'non-billable')",
          "A billable task can contain timesheets that are not billable",
          "The timesheets of a billable task can be linked to different sales order items",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "You must invoice all timesheets without distinction",
          "You can invoice timesheets from a specific period"
        ],
        "correct": 1
      },
      {
        "question": "Which statement is true?",
        "answers": [
          "Anita Oliver worked 26 hours overtime, according to her contract",
          "Anita Oliver is missing 26 hours in her timesheets, according to her contract",
          "Anita Oliver worked 26 hours that week, according to her timesheets"
        ],
        "correct": 1
      },
      {
        "question": "How can you prevent the creation or the modification of journal entries up to a specific accounting date?",
        "answers": [
          "By closing a period",
          "By setting a lock date to lock a fiscal period",
          "By posting all journal entries",
          "It is not possible to block the creation or modification of journal entries"
        ],
        "correct": 1
      },
      {
        "question": "How can you automatically set the fiscal position on a customer invoice based on the customer's country?",
        "answers": [
          "Set the customer's fiscal position to 'Detect Automatically'",
          "Set the invoice's fiscal position to 'Detect Automatically'",
          "Set the 'Country' and enable the 'Detect Automatically' checkbox on the correct fiscal position(s)",
          "It is not possible to automatically set the fiscal position based on the customer's country"
        ],
        "correct": 2
      },
      {
        "question": "What kind of actions can you define when using the payment follow-up levels?",
        "answers": [
          "Send email",
          "Send SMS message",
          "Send a letter",
          "Only email and letter are possible",
          "All are possible"
        ],
        "correct": 4
      },
      {
        "question": "Normally, does the 'Customer Location' have a positive stock level or a negative stock level?",
        "answers": [
          "Positive stock level",
          "Negative stock level",
          "Should tend to be zero"
        ],
        "correct": 0
      },
      {
        "question": "You have 14 units on hand of the product below. If you run the following reordering rule, how many units will be ordered?",
        "answers": [
          "0",
          "36",
          "48"
        ],
        "correct": 1
      },
      {
        "question": "You have 10 units on hand of the product below, and 5 forecasted units. If you run the following reordering rule, how many units will be ordered?",
        "answers": [
          "10",
          "30",
          "35"
        ],
        "correct": 2
      },
      {
        "question": "You manage a product whose cost is based on an Average Cost (AVCO) costing method. Suppose you have 8 units of product in stock, with a cost of 100 USD/unit. If you purchase and receive two new units for a price of 10 USD/unit, what will be your cost?",
        "answers": [
          "100",
          "90",
          "82"
        ],
        "correct": 2
      }
    ]
  },
  {
    "number": "Mảng 09",
    "name": "Inventory",
    "description": "Stock, Replenishment, Serial, Barcode, UoM",
    "questions": [
      {
        "question": "What happens when you validate a delivery order for a customer?",
        "answers": [
          "It decrements your available stock for this product, but not in any other location",
          "It decrements your available stock for this product and increments a customer location",
          "It decrements your stock on hand for this product and increments the stock at a customer location"
        ],
        "correct": 2
      },
      {
        "question": "What does the 'i' button on the Replenishment dashboard NOT do?",
        "answers": [
          "Display the forecasted arrival date of the product",
          "Triggers the reordering rule",
          "Display lead times"
        ],
        "correct": 1
      },
      {
        "question": "When manually updating the quantity on hand of a product, does it generate the same stock moves as validating an inventory adjustment for the same product, location, and quantity?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "How do you look up which products have been sitting in stock longest?",
        "answers": [
          "Go to Reporting > Moves History and group by 'Date'",
          "Navigate to the Inventory > Stock and group by 'Duration'",
          "Go to Reporting > Stock Aging"
        ],
        "correct": 0
      },
      {
        "question": "How do you process quality checks on a warehouse transfer?",
        "answers": [
          "Quality checks cannot be set in Inventory",
          "Click the 'Quality Checks' button available on transfers configured with a quality control point",
          "Go to Inventory > Operations > Quality Checks"
        ],
        "correct": 1
      },
      {
        "question": "How do you add more information to a lot/serial number?",
        "answers": [
          "Turn on debug mode, go to Products > Lots/Serial Numbers, and add a Custom Field",
          "Go to Products > Lots/Serial Numbers, and click 'Add'",
          "Go to the form view of a lot/serial number and click 'Add a property'"
        ],
        "correct": 2
      },
      {
        "question": "When you manually update the quantity on hand of a product via the Update Quantity button on the product form view, does it generate a stock move?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "In Odoo, is it possible for a company using 'Locations' to have 2 different products with the same serial number?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "The product, bolt, is stored in packages of 10, 30, and 50 units. If a customer places an order for 50 bolts, what removal method minimizes combining smaller packages for the order?",
        "answers": [
          "FIFO",
          "Closest location",
          "Least packages"
        ],
        "correct": 1
      },
      {
        "question": "I can see the following in a product's Forecasted Report:",
        "answers": [
          "Just A",
          "A & B",
          "B & C"
        ],
        "correct": 1
      },
      {
        "question": "I want to move all items that should be picked in WH/Stock/Shelf1 for internal transfer. What should I do?",
        "answers": [
          "A batch picking",
          "A cluster picking",
          "A wave picking"
        ],
        "correct": 0
      },
      {
        "question": "In Odoo's Inventory Barcode app, can a 'Cluster Pack' have its own barcode?",
        "answers": [
          "Yes, but it must be removed as the destination package before delivery",
          "Yes, and you can deliver a batch of products in a cluster pack",
          "No, cluster packs do not have their own barcodes"
        ],
        "correct": 1
      },
      {
        "question": "At what step of the purchase to sale process do you have to assign serial numbers to products added to your inventory stock?",
        "answers": [
          "When the RFQ is created",
          "When receiving the products",
          "When creating the sales order"
        ],
        "correct": 1
      },
      {
        "question": "Is it possible to make a conversion between two units of measure from different categories?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 1
      },
      {
        "question": "When purchasing a product, when is the quantity on hand of that product increased?",
        "answers": [
          "When the purchase order is validated",
          "When receipt is validated",
          "When the vendor bill is posted"
        ],
        "correct": 1
      }
    ]
  },
  {
    "number": "Mảng 10",
    "name": "Practice Exam",
    "description": "Inventory, Accounting, Barcode, MRP, PLM",
    "questions": [
      {
        "question": "Where do you define the cost price of a product variant?",
        "answers": [
          "At the attribute value level",
          "At the product variant level",
          "At the product template level"
        ],
        "correct": 1
      },
      {
        "question": "Where do you set up stock valuation accounts?",
        "answers": [
          "Only on the product category level",
          "Only on the product level",
          "On the product and product category level"
        ],
        "correct": 2
      },
      {
        "question": "Using the 'Average Cost' costing method, will the cost in the product form be updated if you receive some products at a different price?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "Using the 'Average Cost' costing method, will the unit cost of a product change when you deliver some products?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 1
      },
      {
        "question": "Your warehouse has 3 locations storing the same product. What should you do to be sure that the product will be picked from WH/Stock/A for the next delivery?",
        "answers": [
          "Set removal strategy to LIFO",
          "Set removal strategy to 'Closest Location'",
          "Both are correct"
        ],
        "correct": 1
      },
      {
        "question": "You have 5 units of a product in your warehouse that need to be delivered in the next 6 months. You confirm a sales order for 3 units, but can't deliver since all 5 units are reserved. Which of the following helps work around this?",
        "answers": [
          "Unreserve picking of 5 units and reserve 3 units",
          "Don't set reservation method to 'At Confirmation'",
          "Both A & B"
        ],
        "correct": 2
      },
      {
        "question": "You have 20 units of a table in stock. 10 belong to you and 10 belong to Azure Interior. What is your inventory valuation for the tables, if they cost you $500/unit?",
        "answers": [
          "$5,000.00",
          "$10,000.00",
          "$500.00"
        ],
        "correct": 0
      },
      {
        "question": "Which of the following statements about 'Inventory Adjustments' is FALSE?",
        "answers": [
          "A transfer with 0 quantity is created when on hand and counted quantity are the same",
          "You can set the frequency of counts on product categories",
          "The barcode app displays all counts assigned to you, with a date earlier or equal to today's date"
        ],
        "correct": 1
      },
      {
        "question": "Which of the following statements is true about 'Service' product types?",
        "answers": [
          "Stock of service type products are never tracked",
          "Stock is traded for service type products that are marked 'keep track of stock'",
          "Stock of service type products are always tracked"
        ],
        "correct": 0
      },
      {
        "question": "If not specifically defined, stock moves are always managed in FIFO.",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "You can set an expiration date on new products received to your inventory at which stage of the receipt process?",
        "answers": [
          "When the products are received",
          "Once the lots are in stock",
          "A & B"
        ],
        "correct": 2
      },
      {
        "question": "Can you enter barcodes manually in the Barcode app?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "Can you mark a work order as done without processing all the steps at least once?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "What happens when an ECO stage is designated as the 'Final Stage'?",
        "answers": [
          "ECOs are automatically moved to this stage when changes are applied",
          "When ECOs reach this stage, changes are automatically applied",
          "This stage is automatically moved to the far right in the Kanban view"
        ],
        "correct": 0
      }
    ]
  },
  {
    "number": "Mảng 11",
    "name": "HR / Manufacturing",
    "description": "MRP, PLM, Quality, Repair, OEE, Shop Floor",
    "questions": [
      {
        "question": "When are forecasted quantities updated for components used in a manufacturing order?",
        "answers": [
          "At confirmation of the manufacturing order",
          "At the validation of the finished product",
          "When the manufacturing order is marked as done"
        ],
        "correct": 0
      },
      {
        "question": "When setting an analytical account on a manufacturing order, how are the various costs accounted for?",
        "answers": [
          "Produced units are accounted for positively and consumed components are accounted for negatively",
          "Only consumed components and work order costs are accounted for negatively",
          "The analytical account does not record any manufacturing costs"
        ],
        "correct": 1
      },
      {
        "question": "What is the purpose of an Engineering Change Order (ECO)?",
        "answers": [
          "To create customized products based on sales orders",
          "To make changes to a BoM or introduce a new product",
          "To modify an existing manufacturing order"
        ],
        "correct": 1
      },
      {
        "question": "Can you use a kit as a component in a bill of material?",
        "answers": [
          "Yes",
          "No"
        ],
        "correct": 0
      },
      {
        "question": "Can you define a work order operation without a work center?",
        "answers": [
          "Yes, but no work order will be generated",
          "No, defining a work center is mandatory"
        ],
        "correct": 1
      },
      {
        "question": "Can you define a quality control point on incoming shipments?",
        "answers": [
          "Yes",
          "No, quality control points are only for manufacturing orders",
          "No, quality control points are only for delivery orders"
        ],
        "correct": 0
      },
      {
        "question": "Where is Overall Equipment Effectiveness (OEE) computed?",
        "answers": [
          "At the work center",
          "On the work order",
          "On the manufacturing order"
        ],
        "correct": 0
      },
      {
        "question": "Where do you define the roles of approvals for Engineering Change Orders (ECOs)?",
        "answers": [
          "On the ECO Stage form",
          "On the product form",
          "At the ECO type level"
        ],
        "correct": 0
      },
      {
        "question": "When are stock moves registered for a repair order?",
        "answers": [
          "Upon confirmation of the repair order",
          "When starting the repair order",
          "After finishing the repair order"
        ],
        "correct": 2
      },
      {
        "question": "When invoicing a repair order:",
        "answers": [
          "Only operations lines are used",
          "Only parts lines are used",
          "Both operations & parts lines are used"
        ],
        "correct": 2
      },
      {
        "question": "When alternative work centers are configured, which work center will Odoo select for work orders?",
        "answers": [
          "The work center with the highest capacity",
          "The work center with the lowest cost per hour",
          "The work center that will finish the task the soonest"
        ],
        "correct": 2
      },
      {
        "question": "How are the costs of by-products accounted for?",
        "answers": [
          "Only by setting a by-product cost share on the BoM",
          "Only by setting a by-product cost share on the manufacturing order",
          "By either setting a by-product cost share on the BoM or the manufacturing order"
        ],
        "correct": 1
      },
      {
        "question": "In an OEE calculation, what is considered as fully productive time?",
        "answers": [
          "Recorded working time that doesn't exceed the expected working time",
          "All recorded time on a work order before it's marked as done",
          "All time recorded on the work order during a work center's scheduled working hours"
        ],
        "correct": 0
      },
      {
        "question": "What is the 'Register Production' step on a work order card in the Shop Floor module used for?",
        "answers": [
          "To confirm that the manufacturing order has been completed",
          "To mark a work order as 'In Progress'",
          "To register the number of units manufactured"
        ],
        "correct": 2
      },
      {
        "question": "When performing a work order, you can consume:",
        "answers": [
          "Only products from the BoM, in the quantities defined by the BoM",
          "Only products from the BoM, but you can add extra quantities",
          "Any product"
        ],
        "correct": 2
      }
    ]
  },
  {
    "number": "Mảng 12",
    "name": "Spreadsheet / Manufacturing",
    "description": "MPS, Subcontracting, Shop Floor, Work Centers",
    "questions": [
      {
        "question": "What is the indirect demand forecast for the Office Chair?",
        "answers": [
          "The demand for the Office Chair, coming from the website",
          "The demand for the Office Chair as a component of the Desk Combination",
          "The demand coming from quotations that have not yet been validated"
        ],
        "correct": 1
      },
      {
        "question": "What must happen in order to mark a subcontracted order as complete?",
        "answers": [
          "The subcontractor must validate component consumption from the subcontracting portal",
          "The user must validate the receipt of the product from the subcontractor",
          "The finished product must be shipped"
        ],
        "correct": 1
      },
      {
        "question": "For a manufacturing order, where do you find the cost of processing a specific work order?",
        "answers": [
          "Manufacturing app → Operations → Manufacturing Orders → select MO → Overview → Operations section",
          "Manufacturing app → Operations → Manufacturing Orders → select MO → Work Orders tab",
          "Manufacturing app → Operations → Work Orders → select work order"
        ],
        "correct": 0
      },
      {
        "question": "In the MPS, what does an orange-colored cell indicate about replenishment?",
        "answers": [
          "A replenishment order has already been generated, but more quantities need to be ordered",
          "The forecasted demand is higher than the actual demand, so the quantity to replenish is uncertain",
          "Too many units have already been replenished"
        ],
        "correct": 0
      },
      {
        "question": "Is it possible to set up flexible consumption for subcontracted production?",
        "answers": [
          "Yes",
          "No",
          "Only if processed via the archived subcontracting operation type in the back end"
        ],
        "correct": 0
      },
      {
        "question": "What is the effect of enabling the 'Replenish Scrapped Quantities' option when scrapping components from an MO in the Shop Floor module?",
        "answers": [
          "A purchase order is created to buy replacement components from a supplier",
          "This option does not appear when scrapping components",
          "A 'Pick Components' transfer is automatically created to replace the scrapped component(s)"
        ],
        "correct": 2
      },
      {
        "question": "How do you specify that a product is subcontracted?",
        "answers": [
          "Via a checkbox on the product form",
          "Via the BoM Type on the product's bill of material",
          "Via a route on the sales order"
        ],
        "correct": 1
      },
      {
        "question": "Which of the following is true about splitting/merging manufacturing orders?",
        "answers": [
          "Only manufacturing orders of identical products with the same BoM may be merged",
          "Only manufacturing orders in the draft state may be merged",
          "Only manufacturing orders of even quantities may be split"
        ],
        "correct": 0
      },
      {
        "question": "Which of the following is NOT shown on the card for an MO on the Shop Floor dashboard?",
        "answers": [
          "The estimated time to complete the MO",
          "The MO number",
          "The product being manufactured"
        ],
        "correct": 0
      },
      {
        "question": "How do you start the timer for a work order in the Shop Floor module?",
        "answers": [
          "Click the header of the work order card",
          "Click 'Start Timer' at the bottom of the work order card",
          "Work orders are not timed by Odoo"
        ],
        "correct": 1
      },
      {
        "question": "What happens when you click the 'Mark as Done' button on a work order card in the Shop Floor module?",
        "answers": [
          "The work order card fades away, and the card for the next work order appears in the Shop Floor module",
          "The work order card fades away, and the manufacturing order is closed",
          "The work order card remains visible, but is marked as 'Done'"
        ],
        "correct": 2
      },
      {
        "question": "If an amount is entered in both 'per workcenter' and 'per employee' fields in the 'Cost per hour' section on a work center form, which value takes precedence?",
        "answers": [
          "The values are added together",
          "The value in the 'per workcenter' field",
          "The value in the 'per employee' field"
        ],
        "correct": 1
      },
      {
        "question": "What happens when no employees are listed in the 'Allowed Employees' field on a work center form?",
        "answers": [
          "No employee is allowed to operate the work center",
          "It is not possible to leave the 'Allowed Employees' field blank",
          "Any employee is allowed to operate the work center"
        ],
        "correct": 2
      },
      {
        "question": "When creating an expense report, who will automatically be set as the one responsible for the validation of your expense?",
        "answers": [
          "Your manager",
          "The manager of your department",
          "Whoever is set as the person responsible for approving your expenses on the Employee form"
        ],
        "correct": 1
      }
    ]
  },
  {
    "number": "Mảng 13",
    "name": "POS / HR / Spreadsheet",
    "description": "Expenses, Time Off, Recruitment, Payroll, Spreadsheet",
    "questions": [
      {
        "question": "When adding a product to an Expense report, what type of tax configuration is not compatible?",
        "answers": [
          "Included in Price",
          "Excluded from Price",
          "Both are compatible"
        ],
        "correct": 1
      },
      {
        "question": "How would you set up a mechanism where the amount of time off an employee gets depends on his/her number of days worked?",
        "answers": [
          "You create a new Time Off type with the allocation mode set to 'Fixed by'",
          "You create a new Allocation and set the Allocation Type to 'Accrual Allocation'",
          "You create a new Time Off type that does not permit Extra Day Requests"
        ],
        "correct": 1
      },
      {
        "question": "If you wanted to set a color for 'Sick Time Off' (as displayed in the dashboard view of the Time Off module), where would you go to do this?",
        "answers": [
          "From Configuration > Time Off Types",
          "From the Calendar view of your leaves",
          "This is not something you can configure"
        ],
        "correct": 0
      },
      {
        "question": "How can a user view a job applicant’s record without having full access rights to the Recruitment app?",
        "answers": [
          "They can't—you have to have full access to view an applicant's record",
          "By referring a candidate for a position",
          "By being added as the Interviewer for a position"
        ],
        "correct": 1
      },
      {
        "question": "Where do you set the default Journal to be used for Expense reports?",
        "answers": [
          "On Expenses > Configuration > Settings",
          "There is no default journal—it must be set on every report",
          "On the Expense Category level"
        ],
        "correct": 0
      },
      {
        "question": "When is an expense marked as 'Paid'?",
        "answers": [
          "When the employee has paid for the expense but has not been reimbursed yet",
          "When the employee has paid for the expense and has been reimbursed by the company",
          "As soon as the expense has been approved by the company"
        ],
        "correct": 1
      },
      {
        "question": "Where is the employee hourly cost defined for timesheet tracking?",
        "answers": [
          "On the sale order line linked to the task",
          "On the Employee's record, under the HR Settings tab",
          "On the Employee's contract"
        ],
        "correct": 1
      },
      {
        "question": "Why would you use the 'Split Expense' button?",
        "answers": [
          "When two employees both need to be reimbursed for one expense",
          "When one expense contains items taxed at different rates",
          "When one expense receipt covers multiple pay periods"
        ],
        "correct": 0
      },
      {
        "question": "Where can you update the source for an employee's Work Entry generation?",
        "answers": [
          "On the Employee form, under HR settings",
          "On the Employee's individual contract (Payroll > Contracts > Contracts)",
          "In the Payroll application, under Work Entry Types"
        ],
        "correct": 2
      },
      {
        "question": "Which of the following charts does not exist in Spreadsheet?",
        "answers": [
          "Gauge",
          "Treemap",
          "Scorecard"
        ],
        "correct": 1
      },
      {
        "question": "When you share a dashboard using the share button, what will you actually share?",
        "answers": [
          "A URL leading to the Document workspace where the dashboard is stored",
          "A URL leading to a frozen version in read only mode",
          "You cannot share a dashboard"
        ],
        "correct": 0
      },
      {
        "question": "How can you select a value from a list in a cell?",
        "answers": [
          "By using the option 'List' in 'Insert > List'",
          "By using the Data validation",
          "Both of them"
        ],
        "correct": 1
      },
      {
        "question": "How can you rank a list coming from Odoo in Spreadsheet?",
        "answers": [
          "By ranking it when importing it",
          "By using the 'Value' filter",
          "Both of them"
        ],
        "correct": 2
      },
      {
        "question": "Who can have access to a new spreadsheet?",
        "answers": [
          "Its author and the administrator",
          "Anyone who has access to the application from which it originates",
          "Anyone who has access to the workspace the spreadsheet is in"
        ],
        "correct": 2
      },
      {
        "question": "How can you make sure new records are added to your pivot?",
        "answers": [
          "By generating extra lines at the right place to display them",
          "By using the 'ODOO.PIVOT.TABLE' function",
          "Both of them"
        ],
        "correct": 2
      }
    ]
  }
];

let activeCategory = null;
let currentQuestion = 0;
let userAnswers = [];
let submitted = false;
let currentResult = null;

const STORAGE_USER = "odooQuizCurrentUser";
const STORAGE_RESULTS = "odooQuizResults";

const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const memberNameInput = document.getElementById("member-name");
const loginError = document.getElementById("login-error");
const currentUserEl = document.getElementById("current-user");
const welcomeText = document.getElementById("welcome-text");

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const historyScreen = document.getElementById("history-screen");
const categoryList = document.getElementById("category-list");
const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultBox = document.getElementById("result-box");
const quizCategory = document.getElementById("quiz-category");
const historyBody = document.getElementById("history-body");

const certificateModal = document.getElementById("certificate-modal");
const certName = document.getElementById("cert-name");
const certModule = document.getElementById("cert-module");
const certScore = document.getElementById("cert-score");
const certDate = document.getElementById("cert-date");
const certCode = document.getElementById("cert-code");

function getCurrentUser() {
    return localStorage.getItem(STORAGE_USER) || "";
}

function normalizeName(name) {
    return name.replace(/\s+/g, " ").trim();
}

function loginMember() {
    const name = normalizeName(memberNameInput.value);

    if (name.length < 2) {
        loginError.innerText = "Vui lòng nhập họ và tên.";
        return;
    }

    localStorage.setItem(STORAGE_USER, name);
    loginError.innerText = "";
    openApp();
}

function logoutMember() {
    localStorage.removeItem(STORAGE_USER);
    activeCategory = null;
    currentResult = null;

    app.classList.add("hidden");
    loginScreen.classList.remove("hidden");

    memberNameInput.value = "";
    memberNameInput.focus();
}

function openApp() {
    const name = getCurrentUser();

    if (!name) {
        loginScreen.classList.remove("hidden");
        app.classList.add("hidden");
        return;
    }

    currentUserEl.innerText = name;
    welcomeText.innerHTML =
        "Xin chào <strong>" + escapeHtml(name) +
        "</strong>. Chọn một mảng bên dưới để bắt đầu.";

    loginScreen.classList.add("hidden");
    app.classList.remove("hidden");

    renderCategories();
    showHome();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderCategories() {
    categoryList.innerHTML = "";

    categories.forEach((category, index) => {
        const card = document.createElement("article");
        card.className = "category-card";

        const keyedCount =
            category.questions.filter(q => q.correct !== null).length;

        const isComplete =
            keyedCount === category.questions.length;

        card.innerHTML = `
            <span class="category-number">${category.number}</span>
            <span class="badge">${category.questions.length} câu</span>
            <h3>${category.name}</h3>
            <p>${category.description}</p>

            <small class="key-status ${isComplete ? "key-complete" : "key-partial"}">
                ${isComplete
                    ? "✓ Có đầy đủ đáp án"
                    : "⚠ Đáp án: " + keyedCount + "/" + category.questions.length
                }
            </small>
        `;

        card.addEventListener("click", () => startQuiz(index));
        categoryList.appendChild(card);
    });
}

function hideAllMainScreens() {
    homeScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    historyScreen.classList.add("hidden");
}

function showHome() {
    hideAllMainScreens();
    homeScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHistory() {
    hideAllMainScreens();
    historyScreen.classList.remove("hidden");
    renderHistory();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(categoryIndex) {
    activeCategory = categories[categoryIndex];
    currentQuestion = 0;
    userAnswers = new Array(activeCategory.questions.length).fill(null);
    submitted = false;
    currentResult = null;

    submitButton.disabled = false;
    submitButton.innerText = "Nộp bài";

    resultBox.style.display = "none";
    resultBox.innerHTML = "";

    quizCategory.innerText =
        activeCategory.number + " – " + activeCategory.name;

    hideAllMainScreens();
    quizScreen.classList.remove("hidden");

    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
    if (!activeCategory) return;

    const question =
        activeCategory.questions[currentQuestion];

    quizContainer.innerHTML = "";

    const questionBox =
        document.createElement("div");

    questionBox.className =
        "question-box";

    const questionText =
        document.createElement("div");

    questionText.className =
        "question-text";

    questionText.innerText =
        (currentQuestion + 1) + ". " + question.question;

    questionBox.appendChild(questionText);

    question.answers.forEach((answer, answerIndex) => {
        const answerDiv =
            document.createElement("div");

        answerDiv.className =
            "answer";

        if (userAnswers[currentQuestion] === answerIndex) {
            answerDiv.classList.add("selected");
        }

        if (submitted && question.correct !== null) {
            if (answerIndex === question.correct) {
                answerDiv.classList.add("correct");
            }

            if (
                userAnswers[currentQuestion] === answerIndex &&
                answerIndex !== question.correct
            ) {
                answerDiv.classList.add("wrong");
            }
        }

        const letter =
            String.fromCharCode(65 + answerIndex);

        const answerText =
            document.createElement("div");

        answerText.className =
            "answer-text";

        answerText.innerText =
            letter + ". " + answer;

        const radio =
            document.createElement("div");

        radio.className =
            "radio-circle";

        answerDiv.appendChild(answerText);
        answerDiv.appendChild(radio);

        if (!submitted) {
            answerDiv.addEventListener(
                "click",
                () => selectAnswer(answerIndex)
            );
        }

        questionBox.appendChild(answerDiv);
    });

    if (submitted && question.correct === null) {
        const note =
            document.createElement("div");

        note.style.marginTop = "15px";
        note.style.color = "#9a6700";

        note.innerText =
            "Câu này chưa có đáp án trong dữ liệu nên không tính vào điểm.";

        questionBox.appendChild(note);
    }

    quizContainer.appendChild(questionBox);

    questionNumber.innerText =
        "Câu " +
        (currentQuestion + 1) +
        " / " +
        activeCategory.questions.length;

    prevButton.disabled =
        currentQuestion === 0;

    nextButton.disabled =
        currentQuestion ===
        activeCategory.questions.length - 1;
}

function selectAnswer(answerIndex) {
    if (submitted) return;

    userAnswers[currentQuestion] =
        answerIndex;

    renderQuestion();
}

function nextQuestion() {
    if (
        currentQuestion <
        activeCategory.questions.length - 1
    ) {
        currentQuestion++;
        renderQuestion();

        window.scrollTo({
            top: 80,
            behavior: "smooth"
        });
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();

        window.scrollTo({
            top: 80,
            behavior: "smooth"
        });
    }
}

function submitQuiz() {
    const unansweredCount =
        userAnswers.filter(
            answer => answer === null
        ).length;

    if (unansweredCount > 0) {
        const ok =
            confirm(
                "Bạn còn " +
                unansweredCount +
                " câu chưa trả lời.\n\n" +
                "Bạn vẫn muốn nộp bài?"
            );

        if (!ok) return;
    }

    submitted = true;

    const keyedQuestions =
        activeCategory.questions
            .map((question, index) => ({
                question,
                index
            }))
            .filter(
                item =>
                    item.question.correct !== null
            );

    let score = 0;

    keyedQuestions.forEach(item => {
        if (
            userAnswers[item.index] ===
            item.question.correct
        ) {
            score++;
        }
    });

    const totalKeyed =
        keyedQuestions.length;

    const percentage =
        totalKeyed > 0
            ? Math.round(
                (score / totalKeyed) * 100
            )
            : 0;

    const hasFullAnswerKey =
        totalKeyed ===
        activeCategory.questions.length;

    // Theo yêu cầu: TRÊN 80%, không phải >= 80%.
    const rewarded =
        hasFullAnswerKey &&
        percentage > 80;

    currentResult = {
        id: createResultId(),
        name: getCurrentUser(),
        categoryNumber: activeCategory.number,
        categoryName: activeCategory.name,
        score: score,
        total: totalKeyed,
        questionTotal: activeCategory.questions.length,
        percentage: percentage,
        hasFullAnswerKey: hasFullAnswerKey,
        rewarded: rewarded,
        submittedAt: new Date().toISOString()
    };

    // Chỉ lưu kết quả khi đạt điều kiện nhận thưởng (>80% và có đầy đủ đáp án)
    if (rewarded) {
        saveResult(currentResult);
    }

    let resultMessage = `
        <div style="font-size:28px;margin-bottom:10px">
            Kết quả ${escapeHtml(activeCategory.number)}
        </div>

        <div>👤 ${escapeHtml(currentResult.name)}</div>
        <div>✅ Đúng: ${score} / ${totalKeyed}</div>
        <div>🎯 Điểm: ${percentage}%</div>
    `;

    if (!hasFullAnswerKey) {
        resultMessage += `
            <div style="color:#9a6700;margin-top:12px">
                ⚠ Mảng này hiện chỉ có đáp án cho
                ${totalKeyed}/${activeCategory.questions.length} câu,
                nên chưa đủ điều kiện cấp chứng nhận.
            </div>
        `;
    }
    else if (rewarded) {
        resultMessage += `
            <div style="color:#168c3e;margin-top:12px;font-size:22px">
                🏆 Chúc mừng! Bạn đạt trên 80%.
            </div>

            <button
                class="result-certificate-btn"
                onclick="openCertificateFromCurrentResult()"
            >
                Xem phiếu khen thưởng
            </button>
        `;
    }
    else {
        resultMessage += `
            <div style="color:#6b7280;margin-top:12px">
                Cần đạt trên 80% để nhận phiếu khen thưởng.
            </div>
        `;
    }

    resultBox.style.display =
        "block";

    resultBox.innerHTML =
        resultMessage;

    currentQuestion = 0;
    renderQuestion();

    submitButton.disabled =
        true;

    submitButton.innerText =
        "Đã nộp bài";

    window.scrollTo({
        top: 80,
        behavior: "smooth"
    });
}

function createResultId() {
    return (
        "CERT-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        Math.random().toString(36)
            .slice(2, 7)
            .toUpperCase()
    );
}

function getResults() {
    try {
        return JSON.parse(
            localStorage.getItem(
                STORAGE_RESULTS
            )
        ) || [];
    }
    catch (error) {
        return [];
    }
}

function saveResult(result) {
    const results = getResults();

    results.unshift(result);

    localStorage.setItem(
        STORAGE_RESULTS,
        JSON.stringify(results)
    );
}

function clearHistory() {
    const ok =
        confirm(
            "Bạn có chắc muốn xóa toàn bộ lịch sử làm bài trên trình duyệt này?"
        );

    if (!ok) return;

    localStorage.removeItem(
        STORAGE_RESULTS
    );

    renderHistory();
}

function renderHistory() {
    const results =
        getResults();

    historyBody.innerHTML =
        "";

    if (results.length === 0) {
        historyBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;color:#6b7280;padding:30px">
                    Chưa có kết quả làm bài.
                </td>
            </tr>
        `;
        return;
    }

    results.forEach(result => {
        const tr =
            document.createElement("tr");

        const rewardHtml =
            result.rewarded
                ? `
                    <button
                        class="reward-badge"
                        style="border:0;cursor:pointer"
                        onclick="openCertificateById('${result.id}')"
                    >
                        🏆 Xem chứng nhận
                    </button>
                `
                : `<span class="no-reward">Chưa đạt</span>`;

        tr.innerHTML = `
            <td>${escapeHtml(result.name)}</td>
            <td>
                ${escapeHtml(result.categoryNumber)} -
                ${escapeHtml(result.categoryName)}
            </td>
            <td>${result.score}/${result.total}</td>
            <td><strong>${result.percentage}%</strong></td>
            <td>${formatDateTime(result.submittedAt)}</td>
            <td>${rewardHtml}</td>
        `;

        historyBody.appendChild(tr);
    });
}

function formatDateTime(iso) {
    const date =
        new Date(iso);

    return date.toLocaleString(
        "vi-VN",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}

function openCertificateFromCurrentResult() {
    if (!currentResult || !currentResult.rewarded) return;
    openCertificate(currentResult);
}

function openCertificateById(id) {
    const result =
        getResults().find(
            item => item.id === id
        );

    if (!result || !result.rewarded) return;

    openCertificate(result);
}

function openCertificate(result) {
    currentResult = result;

    certName.innerText =
        result.name;

    certModule.innerText =
        "[GDH] KHẢO SÁT ODOO 19 - " +
        result.categoryNumber.toUpperCase();

    certScore.innerText =
        result.percentage + "%";

    const date =
        new Date(result.submittedAt);

    certDate.innerText =
        date.toLocaleDateString("vi-VN");

    certCode.innerText =
        "Chứng nhận " + result.id;

    certificateModal.classList.remove(
        "hidden"
    );
}

function closeCertificate() {
    certificateModal.classList.add(
        "hidden"
    );
}

function printCertificate() {
    if (!currentResult) return;

    const date =
        new Date(
            currentResult.submittedAt
        ).toLocaleDateString("vi-VN");

    const name =
        escapeHtml(currentResult.name);

    const moduleName =
        escapeHtml(
            "[GDH] KHẢO SÁT ODOO 19 - " +
            currentResult.categoryNumber.toUpperCase()
        );

    const code =
        escapeHtml(currentResult.id);

    const score =
        currentResult.percentage + "%";

    const printWindow =
        window.open(
            "",
            "_blank",
            "width=1200,height=850"
        );

    if (!printWindow) {
        alert(
            "Trình duyệt đang chặn cửa sổ in. Hãy cho phép pop-up và thử lại."
        );
        return;
    }

    printWindow.document.write(`
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Chứng nhận - ${name}</title>

<style>
@page {
    size: landscape;
    margin: 0;
}

* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
}

.page {
    width: 297mm;
    height: 210mm;
    background: #f6f6f5;
    position: relative;
    overflow: hidden;
}

.left {
    position: absolute;
    left: 0;
    top: 17%;
    width: 10mm;
    height: 76%;
    background: #8a5a83;
}

.bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 205mm;
    height: 13mm;
    background: #8a5a83;
    clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
}

.medal {
    position: absolute;
    right: 28mm;
    top: 7mm;
    width: 27mm;
    height: 38mm;
}

.circle {
    width: 22mm;
    height: 22mm;
    border-radius: 50%;
    margin: auto;
    background: #8a5a83;
    border: 1.5mm double #f6f6f5;
}

.ribbon {
    width: 10mm;
    height: 18mm;
    margin: -1mm auto 0;
    background: #8a5a83;
    clip-path: polygon(0 0,100% 0,100% 100%,50% 78%,0 100%);
}

.content {
    position: absolute;
    inset: 20mm 30mm 16mm 33mm;
    text-align: center;
}

h1 {
    margin: 0;
    font-size: 24mm;
    letter-spacing: 1mm;
}

h2 {
    margin: -2mm 0 0;
    font-size: 8mm;
}

.intro {
    margin-top: 13mm;
    font-size: 5mm;
    color: #666;
}

.name {
    margin-top: 5mm;
    font-family: "Brush Script MT", "Segoe Script", cursive;
    font-size: 16mm;
}

.line {
    width: 90mm;
    margin: 1mm auto 6mm;
    border-top: .5mm solid #222;
}

.desc {
    color: #666;
    font-size: 5mm;
    margin: 0;
}

.module {
    margin-top: 4mm;
    font-size: 6mm;
    font-weight: 900;
}

.score {
    margin-top: 4mm;
    font-size: 5mm;
}

.footer {
    position: absolute;
    left: 28mm;
    right: 28mm;
    bottom: 7mm;
    display: flex;
    align-items: end;
    justify-content: space-between;
}

.date {
    border-bottom: .4mm solid #222;
    padding-bottom: 1mm;
    font-size: 4.5mm;
}

.day-label {
    margin-top: 1mm;
    font-size: 3mm;
}

.psm {
    width: 24mm;
    height: 19mm;
    border-radius: 5mm;
    background: linear-gradient(135deg,#ff7c2b,#ffbb18,#57b72e);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-style: italic;
    font-size: 8mm;
}

.code {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 2.5mm;
    color: #666;
}

@media print {
    body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
}
</style>
</head>

<body>

<div class="page">

    <div class="left"></div>
    <div class="bottom"></div>

    <div class="medal">
        <div class="circle"></div>
        <div class="ribbon"></div>
    </div>

    <div class="content">

        <h1>CHỨNG NHẬN</h1>
        <h2>THÀNH TÍCH</h2>

        <div class="intro">
            Chứng nhận này được trao cho
        </div>

        <div class="name">${name}</div>

        <div class="line"></div>

        <div class="desc">
            đã hoàn thành xuất sắc bài kiểm tra
        </div>

        <div class="module">
            ${moduleName}
        </div>

        <div class="score">
            với kết quả <strong>${score}</strong>
        </div>

        <div class="footer">
            <div>
                <div class="date">${date}</div>
                <div class="day-label">NGÀY</div>
            </div>

            <div class="psm">PSM</div>
        </div>

        <div class="code">
            Chứng nhận ${code}
        </div>

    </div>
</div>

<script>
window.onload = function() {
    setTimeout(function() {
        window.print();
    }, 300);
};
<\/script>

</body>
</html>
    `);

    printWindow.document.close();
}

memberNameInput.addEventListener(
    "keydown",
    event => {
        if (event.key === "Enter") {
            loginMember();
        }
    }
);

openApp();
