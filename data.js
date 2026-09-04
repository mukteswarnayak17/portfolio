/**
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * ----------------------------------------------------
 * Mukteswar Nayak — 3D Data Analyst Portfolio
 * Red & White Theme | 4 Built Projects | Centralized Data
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Mukteswar Nayak",
    formalName: "Mukteswar Nayak G",
    title: "Data Analyst | Business Analytics",
    headline: "Data Analyst | Business Analytics | SQL | Python | Power BI | Tableau",
    subheadline: "Turning raw data into insights, dashboards, and decisions that create measurable business impact.",
    tagline: "I don't just analyze data — I turn data into actionable business decisions.",
    email: "mukteswarnayak17@gmail.com",
    phone: "+91-8778670997",
    location: "Chennai, India",
    githubUsername: "mukteswarnayak17",
    githubUrl: "https://github.com/mukteswarnayak17",
    linkedinUrl: "https://linkedin.com/in/mukteswar-nayak",
    resumePdf: "Mukteswar_Nayak_Resume.pdf",
    characterImg: "mukteswar-long-cartoon.svg",
    education: "B.Tech in Artificial Intelligence and Data Science (2023 – 2027), Panimalar Engineering College, CGPA: 8.66 / 10",
    focus: "Revenue Optimization, Inventory Intelligence, Customer Retention, KPI Dashboards"
  },

  stats: [
    { label: "Completed Projects", value: "4", suffix: "", desc: "End-to-end business case studies" },
    { label: "Records Analyzed", value: "18K+", suffix: "", desc: "E-Commerce, FMCG & Telecom data" },
    { label: "Core Analytics Tools", value: "6+", suffix: "", desc: "SQL, Python, Power BI, Tableau, Excel, DAX" },
    { label: "Academic CGPA", value: "8.66", suffix: "/10", desc: "Panimalar Engineering College" }
  ],

  about: {
    shortIntro: "I am a Data Analyst skilled in transforming complex raw datasets into clear, actionable business decisions through SQL, Python, Power BI, and Tableau.",
    valueProp: "From identifying $233K revenue drivers to diagnosing warehouse stockout bottlenecks, I design reproducible analytics pipelines and executive dashboards that stakeholders rely on to protect revenue and optimize operations.",
    highlights: [
      { title: "Query Optimization", desc: "Advanced SQL, window partitioning, multi-table joins, and CTEs." },
      { title: "Statistical EDA", desc: "Python (Pandas, NumPy, Seaborn) data cleaning & cohort modeling." },
      { title: "Executive Dashboards", desc: "Power BI & Tableau interactive reporting with custom DAX calculations." },
      { title: "Business Alignment", desc: "Translating ambiguous operational problems into measurable KPI scorecards." }
    ]
  },

  /* --------------------------------------------------------------------------
   * SKILLS SECTION (With tool logos & recruiter expectations)
   * -------------------------------------------------------------------------- */
  skills: [
    {
      name: "SQL & MySQL",
      category: "Database & Querying",
      logo: "sql",
      headline: "Advanced Relational Data Extraction & Transformation",
      recruiterExpectations: [
        "Analytical Window Functions: ROW_NUMBER(), DENSE_RANK(), RANK(), LEAD(), LAG()",
        "Multi-table Self-Joins, Complex CTEs & Subqueries",
        "Performance Tuning: Query execution plan profiling & index utilization",
        "Data Aggregation: Conditional CASE WHEN, GROUP BY, HAVING rollups"
      ]
    },
    {
      name: "Python",
      category: "Programming & Data Science",
      logo: "python",
      headline: "Statistical Computing, EDA & Pipeline Automation",
      recruiterExpectations: [
        "Pandas: High-dimensional DataFrame manipulation, merging, reshaping",
        "NumPy: Vectorized mathematical operations and array computations",
        "Data Cleaning: Outlier detection, missing value imputation, type normalization",
        "Seaborn & Matplotlib: Distribution plots, correlation heatmaps, box plots"
      ]
    },
    {
      name: "Power BI",
      category: "Business Intelligence",
      logo: "powerbi",
      headline: "Data Modeling & Interactive Executive Dashboards",
      recruiterExpectations: [
        "Star Schema Design: One-to-many relationships, dimension & fact tables",
        "Advanced DAX: CALCULATE, FILTER, time-intelligence (YTD, MTD, YoY)",
        "Executive KPI Cards, dynamic slicers, drill-throughs, and bookmarks",
        "Power Query ETL: M-code cleaning, column transformations, schema unification"
      ]
    },
    {
      name: "Tableau",
      category: "Visual Analytics",
      logo: "tableau",
      headline: "Visual Storytelling & Multi-dimensional Reporting",
      recruiterExpectations: [
        "Level of Detail (LOD) Expressions: FIXED, INCLUDE, EXCLUDE calculations",
        "Parameterized Dashboards: Dynamic measure and dimension switching",
        "Dual-Axis Visualizations, trendline analysis, and geographic maps",
        "Interactive Story Points tailored for C-suite and department leads"
      ]
    },
    {
      name: "Microsoft Excel",
      category: "Spreadsheet Analytics",
      logo: "excel",
      headline: "Rapid Business Modeling & Ad-hoc Analysis",
      recruiterExpectations: [
        "Dynamic Pivot Tables, Slicers, and interactive Pivot Charts",
        "Advanced Lookup Formulas: XLOOKUP, INDEX-MATCH, nested VLOOKUP",
        "Multi-Condition Functions: SUMIFS, COUNTIFS, AVERAGEIFS, nested IFs",
        "Scenario Analysis, What-If tables, and financial KPI summaries"
      ]
    },
    {
      name: "Data Methodologies",
      category: "Analytics & Strategy",
      logo: "analytics",
      headline: "End-to-End Problem Solving & Stakeholder Communication",
      recruiterExpectations: [
        "Hypothesis-driven Exploratory Data Analysis (EDA)",
        "Customer Churn & Cohort Retention Modeling (Tenure segmentation)",
        "Supply Chain & Inventory Health Benchmarking (Stockout & Safety Stock)",
        "Translating Technical Metrics into Measurable ROI & Operational Actions"
      ]
    }
  ],

  /* --------------------------------------------------------------------------
   * 4 COMPLETED PROJECTS (Strictly built projects with key results & GitHub links)
   * -------------------------------------------------------------------------- */
  projects: [
    {
      id: "customer-shopping-behavior",
      title: "Customer Shopping Behavior Analysis",
      subtitle: "E-Commerce Transactional Segmentation & Executive Revenue Dashboard",
      category: "E-Commerce & Retail Analytics",
      tags: ["Python", "SQL", "Power BI", "Pandas", "EDA"],
      github: "https://github.com/mukteswarnayak17/Customer-Shopping-Behavior-Analysis",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Tracked $233K Revenue, benchmarked $59.76 AOV, and identified Clothing as the 44.7% top revenue anchor across 3,900 orders.",
      kpis: [
        { label: "Transactions Analyzed", value: "3,900" },
        { label: "Gross Revenue Tracked", value: "$233K" },
        { label: "Top Category Share", value: "44.7%" },
        { label: "Average Order Value", value: "$59.76" }
      ],
      caseStudy: {
        businessProblem: "An e-commerce retailer experienced plateauing customer lifetime value and lacked granular visibility into which product categories, geographic regions, and customer cohorts drove profitable recurring orders.",
        dataset: "3,900 customer transaction records covering order values, product categories, shipping methods, customer demographics, and subscription statuses.",
        processSteps: [
          { step: "Data Extraction & Cleaning", detail: "Loaded and audited 3,900 transaction records in Python Pandas, handling null fields and standardizing price formats." },
          { step: "SQL Behavioral Segmentation", detail: "Executed SQL aggregation queries to group customers by order frequency, subscription tier, and state-level location." },
          { step: "Revenue & Category Contribution", detail: "Identified that the Clothing category generated 44.7% of total sales ($104K+), serving as the foundational shopping driver." },
          { step: "AOV & Subscription Metrics", detail: "Modeled benchmark Average Order Value ($59.76) and discovered that subscribed members spent 1.45x more per checkout." },
          { step: "Interactive Power BI Dashboard", detail: "Constructed dynamic KPI scorecards, category drill-downs, and regional heatmaps for executive review." },
          { step: "Operational Strategy", detail: "Advised inventory leads to reallocate budget toward high-margin clothing SKUs and proposed post-purchase subscription prompts." }
        ],
        tools: ["Python (Pandas, NumPy, Matplotlib)", "SQL (MySQL)", "Power BI Desktop", "Microsoft Excel"],
        keyInsights: [
          "Clothing generated 44.7% of total revenue ($104K+ out of $233K), making it the primary driver of repeat customer visits.",
          "Subscribed members accounted for 27% of the customer base but generated over 39% of total lifetime gross margin.",
          "Average Order Value (AOV) settled at $59.76, with regional transactions in top 5 states representing 48% of total volume."
        ],
        businessImpact: "Provided merchandising and product teams with real-time KPI visibility, optimizing seasonal stock purchasing and setting clear performance targets for subscriber conversion campaigns."
      }
    },
    {
      id: "zepto-inventory-intelligence",
      title: "Zepto Inventory Intelligence",
      subtitle: "Quick-Commerce Stockout Risk & SKU Restocking Analytics",
      category: "Quick Commerce & Supply Chain",
      tags: ["SQL", "Power BI", "Tableau", "MySQL", "Excel"],
      github: "https://github.com/mukteswarnayak17/Zepto-Inventory-Intelligence",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Flagged a 28.57% stockout rate in the Biscuits category and recalibrated safety stock depth from 3.81 to the benchmark target of 5.0.",
      kpis: [
        { label: "Inventory Rows Validated", value: "3,732" },
        { label: "Target Stockout Flagged", value: "28.57%" },
        { label: "SQL Queries Executed", value: "8 Queries" },
        { label: "Target Stock Depth", value: "5.0 vs 3.81" }
      ],
      caseStudy: {
        businessProblem: "Unpredictable SKU stockouts in quick-commerce distribution hubs resulted in lost order volume, elevated cart abandonment rates, and capital tie-ups in slow-moving items.",
        dataset: "3,732 rows of warehouse inventory data including product categories, current stock levels, safety stock thresholds, unit costs, and pricing tiers.",
        processSteps: [
          { step: "Data Quality & Validation", detail: "Processed 3,732 inventory records in SQL, applying duplicate removal, category standardization, and unit price conversions." },
          { step: "SQL Exploratory Queries", detail: "Executed 8 diagnostic SQL queries analyzing category valuation, stockout frequency, and supplier lead-time variances." },
          { step: "Critical Category Diagnosis", detail: "Flagged the Biscuits category as having a severe 28.57% stockout rate and an average stock depth of 3.81 against the target benchmark of 5.0." },
          { step: "Pricing-Tier Gap Analysis", detail: "Discovered margin-eroding price gaps where high-margin premium SKUs ran out while low-margin items were overstocked." },
          { step: "Power BI & Tableau Reporting", detail: "Developed cross-functional operational dashboards with automated stock health color-codes and replenishment warnings." },
          { step: "Restocking Recommendations", detail: "Partnered with inventory managers to institute dynamic buffer stock formulas based on rolling 14-day sales velocity." }
        ],
        tools: ["SQL (MySQL)", "Power BI", "Tableau Desktop", "Microsoft Excel"],
        keyInsights: [
          "The Biscuits and snacks category suffered a 28.57% stockout frequency during peak weekend demand windows.",
          "Average stock depth in high-velocity categories lagged at 3.81 units, well beneath the required 5.0 unit safety threshold.",
          "Overstocking in the bottom 20% slowest-moving SKUs tied up approximately 19% of active working capital."
        ],
        businessImpact: "Synchronized warehouse management and procurement workflows onto a single dashboard, reducing stockout frequency and preventing recurring lost sales."
      }
    },
    {
      id: "b2b-saas-churn-retention",
      title: "B2B SaaS Churn Risk & Customer Health Analysis",
      subtitle: "Early-Warning Churn Scoring & Renewal Risk Dashboard",
      category: "Customer Health & Retention Analytics",
      tags: ["Power BI", "Python", "SQL", "Power Query", "Excel"],
      github: "https://github.com/mukteswarnayak17/B2B-SaaS-Churn-Risk-Customer-Health-Analysis",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Identified that 38% of at-risk accounts were monthly-contract users in their first 90 days; protected an estimated 18–25% of renewal ARR.",
      kpis: [
        { label: "Account Datasets", value: "5 CSVs" },
        { label: "Early-Tenure At-Risk", value: "38%" },
        { label: "High-Risk Churn Signal", value: "82%" },
        { label: "Vulnerable ARR Saved", value: "18 - 25%" }
      ],
      caseStudy: {
        businessProblem: "A recurring subscription SaaS enterprise suffered unmonitored customer attrition. Account management teams operated reactively, lacking an early-warning diagnostic mechanism before contract expiration.",
        dataset: "5 relational business CSV files including Account Profiles, Monthly Invoicing Logs, Feature Adoption Telemetry, Support Tickets, and Contract Renewals.",
        processSteps: [
          { step: "Multi-Source Data Ingestion", detail: "Unified 5 disparate CSV sources into a relational star schema using Power Query and Python Pandas scripts." },
          { step: "Cleaning & Normalization", detail: "Standardized timestamp fields, resolved null churn indicators, and normalized user activity metrics across contract tiers." },
          { step: "SQL & Python Feature Engineering", detail: "Engineered rolling 30-day usage declines, ticket escalation frequencies, and net login velocity using SQL window functions." },
          { step: "Customer Health Index (CHI)", detail: "Formulated a composite 0–100 health score weighting feature adoption (40%), ticket resolution time (30%), and payment punctuality (30%)." },
          { step: "Power BI Executive Dashboard", detail: "Built an interactive 3-page scorecard displaying churn probability distributions, risk quadrants, and account drill-throughs." },
          { step: "Retention Playbook", detail: "Configured automated alert notifications for Customer Success Managers when an account's CHI dropped below 60 points." }
        ],
        tools: ["Python (Pandas, NumPy, Seaborn)", "MySQL & Window Functions", "Power BI Desktop & Service", "Power Query ETL", "Excel"],
        keyInsights: [
          "Accounts logging >3 unresolved support tickets in their first 60 days exhibited an 82% churn probability at renewal.",
          "A 40% decline in active license usage preceded customer cancellations by an average of 47 days, acting as the primary leading indicator.",
          "Annual contract accounts delivered 3.2x higher lifetime customer value (LTV) and 64% lower churn than month-to-month plans."
        ],
        businessImpact: "Empowered Customer Success teams to intervene with targeted retention offers 45+ days prior to renewal dates, safeguarding an estimated 18% to 25% of vulnerable renewal ARR."
      }
    },
    {
      id: "telecom-customer-churn",
      title: "Telecom Customer Churn Diagnostic Analysis",
      subtitle: "Multi-Variable Churn Segmentation & Diagnostic Visualizations",
      category: "Predictive & Diagnostic Analytics",
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "YBI Foundation"],
      github: "https://github.com/mukteswarnayak17",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Analyzed 7,043 telecom accounts, engineered 6 diagnostic EDA models, and surfaced a 38% churn concentration in month-to-month contracts.",
      kpis: [
        { label: "Customer Records", value: "7,043" },
        { label: "EDA Visualizations", value: "6 Models" },
        { label: "Early-Tenure Churn", value: "38%" },
        { label: "Industry Domain", value: "Telecom" }
      ],
      caseStudy: {
        businessProblem: "A major telecommunications provider faced heavy customer attrition across new subscriber cohorts and lacked statistical validation on whether pricing, contract length, or service outages drove customer churn.",
        dataset: "7,043 customer account records capturing demographic variables, contract durations, payment methods, monthly charges, total billing, and churn outcomes.",
        processSteps: [
          { step: "Data Audit & Integrity Checks", detail: "Cleaned raw records in Python Pandas, converting data types and validating zero-tenure records." },
          { step: "Exploratory Diagnostic Modeling", detail: "Constructed 6 statistical visualizations (correlation heatmaps, tenure histograms, charge box plots) to isolate churn variables." },
          { step: "Tenure & Contract Segmentation", detail: "Discovered that 38% of all churned customers were on monthly contracts within their initial 3 months of service." },
          { step: "Payment & Service Analysis", detail: "Demonstrated that electronic check payment users had significantly higher churn rates compared to automated bank transfer customers." },
          { step: "Stakeholder Briefing & Playbook", detail: "Synthesized statistical findings into an executive report recommending early-onboarding milestone incentives." },
          { step: "Documentation & Reproducibility", detail: "Documented the entire exploratory analytics workflow and Python scripts in Jupyter notebooks for team adoption." }
        ],
        tools: ["Python (Pandas, NumPy, Seaborn, Matplotlib)", "Jupyter Notebook", "Statistical EDA"],
        keyInsights: [
          "38% of all churn events occurred within the first 90 days of onboarding among monthly contract subscribers.",
          "Customers with fiber-optic internet and higher monthly charges experienced higher churn unless bundled with digital security add-ons.",
          "Two-year contract commitments reduced churn risk by over 75% compared to standard month-to-month arrangements."
        ],
        businessImpact: "Provided executive stakeholders with statistical justification to overhaul the first-90-days customer onboarding journey and promote contract-lengthening incentives."
      }
    }
  ],

  /* --------------------------------------------------------------------------
   * 7-STAGE PIPELINE
   * -------------------------------------------------------------------------- */
  pipelineSteps: [
    {
      id: "raw",
      title: "1. RAW DATA",
      subtitle: "Ingestion & Audit",
      desc: "Ingesting transactional records, warehouse logs, CSV files, and multi-source operational tables.",
      skills: ["Schema Validation", "Data Profiling", "Source Reconciliation"]
    },
    {
      id: "cleaning",
      title: "2. DATA CLEANING",
      subtitle: "Python & Power Query",
      desc: "Handling null values, deduplicating records, parsing erratic timestamps, and converting data types.",
      skills: ["Missing Value Imputation", "Outlier Removal", "Power Query M-Code"]
    },
    {
      id: "sql-transform",
      title: "3. SQL / PYTHON",
      subtitle: "Querying & Wrangling",
      desc: "Executing complex joins, analytical window functions, CTEs, and Pandas aggregations to shape analytics tables.",
      skills: ["Window Partitioning", "CTEs & Joins", "Pandas Transformations"]
    },
    {
      id: "analysis",
      title: "4. ANALYSIS",
      subtitle: "Diagnostic EDA",
      desc: "Uncovering correlations, cohort retention behavior, stockout patterns, and price elasticity.",
      skills: ["Cohort Analysis", "Correlation Heatmaps", "Stock Depth Benchmarks"]
    },
    {
      id: "bi-dashboards",
      title: "5. POWER BI & TABLEAU",
      subtitle: "Data Modeling & DAX",
      desc: "Building Star Schema data models, writing complex DAX measures, and creating interactive executive reports.",
      skills: ["Star Schema", "DAX Time Intelligence", "Tableau LOD Calculations"]
    },
    {
      id: "insights",
      title: "6. BUSINESS INSIGHTS",
      subtitle: "Executive Storytelling",
      desc: "Synthesizing quantitative findings into clear, high-signal narratives highlighting operational and revenue risks.",
      skills: ["KPI Formulation", "Root Cause Analysis", "Stakeholder Briefings"]
    },
    {
      id: "decision",
      title: "7. DECISION",
      subtitle: "Measurable Impact",
      desc: "Empowering operational leaders and executives to make informed resource allocations that protect bottom-line profits.",
      skills: ["ARR Retention", "Stockout Prevention", "Revenue Growth"]
    }
  ],

  /* --------------------------------------------------------------------------
   * EXPERIENCE SECTION (Updated role: Data Analyst Trainee)
   * -------------------------------------------------------------------------- */
  experience: [
    {
      role: "Data Analyst Trainee",
      organization: "YBI Foundation",
      period: "Dec 2024 — Jan 2025",
      type: "Practical Industry Training & Internship",
      location: "Remote",
      highlights: [
        "Engineered a customer churn analysis solution using Python, Pandas, and Seaborn on 7,043 telecom records, identifying that 38% of churned users were monthly-contract customers within the first 3 months of tenure.",
        "Built 6 diagnostic visualizations (heatmaps, histograms, box plots) to segment churn-prone customers and delivered actionable retention recommendations to stakeholders.",
        "Documented data cleaning workflows, SQL queries, and analytical findings to maintain data accuracy and support reproducible reporting across the team."
      ],
      technologies: ["SQL", "Python", "Pandas", "Seaborn", "Matplotlib", "Data Cleaning", "EDA"]
    },
    {
      role: "B.Tech in Artificial Intelligence & Data Science",
      organization: "Panimalar Engineering College",
      period: "2023 — 2027",
      type: "Undergraduate Degree (CGPA: 8.66 / 10)",
      location: "Chennai, India",
      highlights: [
        "Specializing in relational database management systems (RDBMS), statistical modeling, Python data structures, and business intelligence.",
        "Developed comprehensive business analytics case studies including E-Commerce Revenue Optimization ($233K analyzed) and Zepto Inventory Intelligence (3,732 rows).",
        "Maintains strong academic performance with an active 8.66 / 10 CGPA."
      ],
      technologies: ["SQL", "Python", "Power BI", "Tableau", "MySQL", "Excel", "DAX"]
    }
  ],

  github: {
    username: "mukteswarnayak17",
    profileUrl: "https://github.com/mukteswarnayak17",
    verifiedStats: {
      publicRepos: 4,
      stars: 0,
      followers: 1,
      topLanguages: [
        { name: "SQL / MySQL", percentage: 42, color: "#ff2a51" },
        { name: "Python", percentage: 38, color: "#e11d48" },
        { name: "Power BI / DAX", percentage: 12, color: "#ffffff" },
        { name: "Tableau / Excel", percentage: 8, color: "#fda4af" }
      ]
    }
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
