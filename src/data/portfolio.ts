import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Malti Pathak",
    "title": "Data Analyst",
    "email": "pathakmalti7@gmail.com",
    "phone": "+91 80819-02405",
    "linkedin": "linkedin.com/in/malti-pathak",
    "github": "github.com/Maltipat",
    "location": "Pune, India",
    "summary": "MCA graduate specializing in Data Science with strong analytical skills in Python, SQL, Tableau, and Power BI. Experienced in transforming business requirements into actionable insights and visualizing key metrics to support data-driven decision-making. Actively seeking entry-level Business Analyst or Data Analyst roles."
  },
  "experience": [
    {
      "title": "Data Analyst Intern (Virtual)",
      "company": "TechBit Solutions",
      "dates": "Jan 2024 – Apr 2024",
      "description": "Collaborated with business teams to define metrics and reporting requirements. Conducted data cleaning and analysis using Python and SQL.",
      "highlights": [
        "Improving product ratings by 12%",
        "Designed Tableau dashboards to support strategic decisions",
        "Implemented ETL workflows for maintaining accuracy across systems"
      ]
    },
    {
      "title": "AI/ML Intern",
      "company": "IBM SkillsBuild",
      "dates": "Summer 2024",
      "description": "Built an AI-powered health chatbot on IBM Cloud for early heart disease detection.",
      "highlights": [
        "Translated requirements into functional AI workflows",
        "Developed and validated ML models for scalability and usability"
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Computer Applications (MCA) in Data Science",
      "institution": "MIT ADT University",
      "years": "Aug 2023 – Jun 2025",
      "gpa": "8.4/10"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Customer Churn Prediction (Capstone)",
      "description": "Analyzed 50K+ customer records to identify churn patterns and risk segments. Built predictive models with 93% accuracy.",
      "technologies": [
        "Logistic Regression",
        "Decision Tree",
        "Tableau"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "E-Commerce Sales Analytics",
      "description": "Analyzed 100K+ transactions to uncover revenue trends. Built Power BI dashboards for reporting and applied K-Means for segmentation.",
      "technologies": [
        "Power BI",
        "K-Means Clustering"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Healthcare Data Analysis (Hackathon)",
      "description": "Conducted exploratory data analysis using Python and R. Achieved 3rd place in a regional hackathon.",
      "technologies": [
        "Python",
        "R"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "spotlight",
  "about": "split",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "cyan"
};
