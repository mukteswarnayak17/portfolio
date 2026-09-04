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
    focus: "Revenue Optimization, Inventory Intelligence, Workforce Analytics, Sales Performance"
  },

  stats: [
    { label: "Completed Projects", value: "4", suffix: "", desc: "End-to-end verified case studies" },
    { label: "Records Analyzed", value: "25K+", suffix: "", desc: "Retail, Quick Commerce & HR Data" },
    { label: "Core Analytics Tools", value: "6+", suffix: "", desc: "SQL, Python, Power BI, Tableau, Excel, DAX" },
    { label: "Academic CGPA", value: "8.66", suffix: "/10", desc: "Panimalar Engineering College" }
  ],

  about: {
    shortIntro: "I am a Data Analyst skilled in transforming complex raw datasets into clear, actionable business decisions through SQL, Python, Power BI, and Tableau.",
    valueProp: "From tracking $233K revenue patterns to resolving inventory stockouts and workforce attrition risks, I design reproducible analytics pipelines and executive dashboards that stakeholders rely on to protect revenue and optimize operations.",
    highlights: [
      { title: "Query Optimization", desc: "Advanced SQL, analytical window partitioning, multi-table joins, and CTEs." },
      { title: "Statistical EDA", desc: "Python (Pandas, NumPy, Seaborn) data cleaning, outlier treatment & correlation analysis." },
      { title: "Executive Dashboards", desc: "Power BI & Tableau interactive reporting with custom DAX measures and KPI scorecards." },
      { title: "Business Alignment", desc: "Translating ambiguous operational problems into measurable ROI and strategic recommendations." }
    ]
  },

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
        "Workforce Retention & Attrition Diagnostic Segmentation",
        "Supply Chain & Inventory Health Benchmarking (Stockout & Safety Stock)",
        "Translating Technical Metrics into Measurable ROI & Operational Actions"
      ]
    }
  ],

  projects: [
    {
      id: "customer-shopping-behavior",
      title: "Customer Shopping Behavior Analysis",
      subtitle: "E-Commerce Transactional Segmentation & Executive Revenue Dashboard",
      category: "E-Commerce & Retail Analytics",
      tags: ["Python", "SQL", "Power BI", "Pandas", "EDA"],
      github: "https://github.com/mukteswarnayak17/customer-shopping-behavior-analysis-python-sql-powerbi",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Tracked $233K Revenue across 3,900 orders, benchmarked $59.76 AOV, and identified Clothing as the 44.7% top revenue anchor.",
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
      id: "zepto-inventory-analysis",
      title: "Zepto Inventory BI Analysis",
      subtitle: "Quick-Commerce Stockout Risk & SKU Restocking Analytics",
      category: "Quick Commerce & Supply Chain",
      tags: ["SQL", "Power BI", "Tableau", "MySQL", "Excel"],
      github: "https://github.com/mukteswarnayak17/zepto-inventory-bi-analysis",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Flagged a 28.57% stockout rate in high-velocity categories and recalibrated safety stock depth from 3.81 to the benchmark target of 5.0.",
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
      id: "walmart-sales-analysis",
      title: "Walmart Sales Data Analysis",
      subtitle: "Multi-Branch Revenue Drivers, Seasonal Demand & Profit Margin Modeling",
      category: "Retail Analytics & Operations",
      tags: ["Python", "SQL", "Pandas", "MySQL", "EDA"],
      github: "https://github.com/mukteswarnayak17/walmart-data-analysis-python-sql",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Evaluated 45 branch locations, identified an 18.4% holiday sales surge, and isolated CPI & fuel costs as primary sales volatility drivers.",
      kpis: [
        { label: "Store Branches", value: "45 Locations" },
        { label: "Holiday Sales Lift", value: "+18.4%" },
        { label: "Core Stack", value: "Python & SQL" },
        { label: "Analysis Focus", value: "Store Margins" }
      ],
      caseStudy: {
        businessProblem: "Retail management required detailed insights into store performance variations across 45 branches, evaluating how holiday weeks, macroeconomic indicators (CPI, unemployment), and temperature fluctuations impact gross sales and product line demand.",
        dataset: "Multi-year store branch transaction records detailing weekly sales, holiday indicators, regional CPI, fuel prices, and store characteristics.",
        processSteps: [
          { step: "Data Audit & Transformation", detail: "Ingested raw weekly sales data using Python Pandas, parsed date structures, validated zero-sales periods, and cleaned economic indicator fields." },
          { step: "SQL Relational Queries", detail: "Wrote SQL queries to rank top-performing branches by total annual revenue, average weekly volume, and holiday versus non-holiday performance." },
          { step: "Statistical Correlation Modeling", detail: "Constructed heatmaps and scatter plots in Seaborn to isolate the influence of CPI fluctuations and fuel costs on weekly branch revenue." },
          { step: "Holiday Impact Evaluation", detail: "Discovered that designated holiday sales weeks produced an average 18.4% revenue surge compared to baseline weeks." },
          { step: "Branch-Level Segmentation", detail: "Categorized branches into Tier-1, Tier-2, and Underperforming clusters based on revenue stability and promotional sensitivity." },
          { step: "Inventory & Staffing Strategy", detail: "Formulated proactive recommendations for labor scheduling and advance warehouse stock transfers prior to high-volume holiday windows." }
        ],
        tools: ["Python (Pandas, NumPy, Seaborn, Matplotlib)", "SQL (MySQL)", "Jupyter Notebook", "Microsoft Excel"],
        keyInsights: [
          "Designated holiday weeks generated an 18.4% spike in sales, requiring early replenishment cycles 14 days prior.",
          "Branches in regions with high CPI fluctuations showed greater price sensitivity, benefiting most from discount promotions.",
          "Top 10 performing branches generated over 34% of total cumulative retail revenue across all 45 evaluated locations."
        ],
        businessImpact: "Delivered actionable revenue benchmarks enabling regional retail managers to optimize inventory allocations and staffing schedules ahead of peak shopping periods."
      }
    },
    {
      id: "employee-attrition-analysis",
      title: "Employee Attrition Analysis",
      subtitle: "Workforce Retention Diagnostics & Interactive Power BI HR Scorecard",
      category: "HR & Workforce Analytics",
      tags: ["Power BI", "DAX", "Power Query", "Excel", "HR Analytics"],
      github: "https://github.com/mukteswarnayak17/employee-attrition-analysis-powerbi",
      fallbackGithub: "https://github.com/mukteswarnayak17",
      keyResult: "Analyzed 1,470 employee records, uncovered a 16.1% overall attrition baseline, and flagged a 32% turnover spike in high-overtime cohorts.",
      kpis: [
        { label: "Workforce Records", value: "1,470" },
        { label: "Baseline Attrition", value: "16.1%" },
        { label: "Overtime Churn Rate", value: "32.0%" },
        { label: "BI Modeling", value: "DAX Measures" }
      ],
      caseStudy: {
        businessProblem: "A growing enterprise experienced recurring employee turnover across technical and sales roles, incurring substantial recruiting and onboarding costs without clear visibility into attrition root causes.",
        dataset: "1,470 employee demographic, compensation, and performance records covering job roles, monthly income, overtime status, commute distance, and tenure.",
        processSteps: [
          { step: "Data Cleaning in Power Query", detail: "Loaded workforce records into Power Query, standardized age and tenure bands, removed redundant columns, and validated data types." },
          { step: "Data Modeling & Star Schema", detail: "Built a star schema model linking employee fact tables with department, role, and salary tier dimension tables." },
          { step: "Custom DAX Measure Development", detail: "Authored advanced DAX measures to calculate Attrition Rate %, Average Monthly Income, Tenure Distribution, and Turnover Volatility." },
          { step: "Multi-Variable Churn Isolation", detail: "Surfaced that employees working frequent overtime experienced a 32% attrition rate compared to only 10% for non-overtime peers." },
          { step: "Interactive Power BI Dashboard", detail: "Designed dynamic KPI cards, department slicers, income distribution box charts, and tenure risk heatmaps." },
          { step: "HR Retention Playbook", detail: "Delivered structured guidelines to HR leadership recommending overtime workload caps and retention bonuses for roles with 0–2 years of tenure." }
        ],
        tools: ["Power BI Desktop", "DAX (Data Analysis Expressions)", "Power Query ETL", "Microsoft Excel"],
        keyInsights: [
          "Employees working overtime exhibited a 32% attrition rate, more than double the company-wide average of 16.1%.",
          "Entry-level employees with 0–2 years of tenure represented 43% of all voluntary departures.",
          "Departments with lower median monthly compensation experienced a 24% higher churn frequency among skilled roles."
        ],
        businessImpact: "Empowered HR directors and executive leadership with an interactive diagnostic dashboard to identify at-risk teams and implement targeted retention programs that preserve institutional knowledge."
      }
    }
  ],

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
        "Developed comprehensive business analytics case studies including E-Commerce Revenue Optimization ($233K analyzed) and Zepto Inventory BI Analysis (3,732 rows).",
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
