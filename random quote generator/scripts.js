const randomReviews = [
  {
    name: "John Smith",
    designation: "Software Engineer",
    review:
      "Excellent work! The team delivered high-quality code on time. I'm impressed with their expertise and professionalism.",
  },
  {
    name: "Alice Johnson",
    designation: "UX Designer",
    review:
      "The design process was smooth, and the final product exceeded my expectations. Great collaboration and creativity!",
  },
  {
    name: "David Miller",
    designation: "Product Manager",
    review:
      "Our project manager was exceptional. They kept everything organized, communicated effectively, and ensured timely delivery.",
  },
  {
    name: "Emily Davis",
    designation: "Marketing Specialist",
    review:
      "The marketing campaign was a huge success. The team demonstrated a deep understanding of our brand and target audience.",
  },
  {
    name: "Michael Brown",
    designation: "Financial Analyst",
    review:
      "Accurate financial reports were crucial for our decision-making. The team delivered comprehensive and insightful analyses.",
  },
  {
    name: "Sophia Wilson",
    designation: "Customer Support Representative",
    review:
      "Outstanding customer service! The team went above and beyond to resolve our issues quickly and efficiently.",
  },
  {
    name: "Daniel Lee",
    designation: "Project Coordinator",
    review:
      "Efficient project management resulted in a seamless workflow. The team was proactive and adaptable to changes.",
  },
  {
    name: "Olivia White",
    designation: "Quality Assurance Tester",
    review:
      "Thorough testing ensured a bug-free product launch. The QA team's attention to detail was impressive.",
  },
  {
    name: "Ryan Carter",
    designation: "Data Scientist",
    review:
      "Data-driven insights provided by the team were invaluable. They played a key role in optimizing our strategies.",
  },
  {
    name: "Grace Thomas",
    designation: "Human Resources Manager",
    review:
      "Smooth recruitment process and a great addition to our team. The HR team's professionalism stood out.",
  },
];

console.log(randomReviews);

const nameOutput = document.querySelector("#name");
const designationOutput = document.querySelector("#designation");
const reviewOutput = document.querySelector("#review");
const btn = document.querySelector("button");

function randomQuote() {
  for (let index = 0; index < randomReviews.length; index++) {
    randomNo = Math.floor(Math.random() * 11);

    const random = randomReviews[randomNo];

    nameOutput.innerHTML = `${random.name}`;
    designationOutput.innerHTML = `${random.designation}`;
    reviewOutput.innerHTML = `${random.review}`;
  }
}

btn.addEventListener("click", randomQuote);
