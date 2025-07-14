"use client"

import type React from "react"
import type { CSSProperties } from "react"

import Link from "next/link"

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #eef2ff 100%)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  },
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #e5e7eb",
    zIndex: 50,
    padding: "1rem 0",
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #9333ea, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    color: "#6b7280",
    textDecoration: "none",
    transition: "color 0.3s",
    cursor: "pointer",
  },
  section: {
    padding: "4rem 0",
  },
  sectionAlt: {
    background: "rgba(255, 255, 255, 0.5)",
  },
  sectionContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  hero: {
    paddingTop: "6rem",
    paddingBottom: "4rem",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "3rem",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  heroGradient: {
    background: "linear-gradient(135deg, #9333ea, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#6b7280",
    marginBottom: "1rem",
    lineHeight: 1.7,
  },
  heroText: {
    color: "#6b7280",
    marginBottom: "2rem",
    lineHeight: 1.7,
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
  },
  profileWrapper: {
    position: "relative",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ddd6fe, #fce7f3)",
    padding: "8px",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
      objectFit: 'cover'
  },
  profileEmoji: {
    position: "absolute",
    bottom: "-1rem",
    right: "-1rem",
    width: "4rem",
    height: "4rem",
    background: "linear-gradient(135deg, #9333ea, #ec4899)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  },
  contactSection: {
    margin: "2rem 0",
  },
  contactTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: "1rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "#6b7280",
    marginBottom: "0.75rem",
  },
  contactIcon: {
    fontSize: "1.25rem",
    color: "#9333ea",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.3s",
    cursor: "pointer",
    border: "none",
    marginRight: "1rem",
  },
  buttonOutline: {
    background: "transparent",
    border: "1px solid #ddd6fe",
    color: "#9333ea",
  },
  buttonPrimary: {
    background: "linear-gradient(135deg, #9333ea, #ec4899)",
    color: "white",
  },
  card: {
    background: "white",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s",
    marginBottom: "2rem",
  },
  cardContent: {
    padding: "2rem",
  },
  cardHeader: {
    padding: "1.5rem 1.5rem 0",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  cardDescription: {
    color: "#6b7280",
    fontSize: "0.875rem",
  },
  grid: {
    display: "grid",
    gap: "2rem",
  },
  grid3: {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  grid4: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },
  sectionHeader: {
    textAlign: "center" as const,
    marginBottom: "3rem",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  sectionSubtitle: {
    color: "#6b7280",
    maxWidth: "600px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: 600,
    background: "#f3e8ff",
    color: "#7c3aed",
    margin: "0.25rem",
  },
  badgeOutline: {
    background: "transparent",
    border: "1px solid #e5e7eb",
    color: "#6b7280",
  },
  projectImage: {
    height: "200px",
    borderRadius: "8px 8px 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
  },
  companyLogo: {
    width: "120px",
    height: "60px",
    background: "#f3f4f6",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  universityLogo: {
    width: "80px",
    height: "80px",
    background: "#f3f4f6",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
  },
  funIcon: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1rem",
    fontSize: "2rem",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#9333ea",
  },
  footer: {
    borderTop: "1px solid #e5e7eb",
    paddingTop: "2rem",
  },
}

const NavLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    style={styles.navLink}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#9333ea")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
  >
    {children}
  </a>
)

const Button = ({
  variant = "outline",
  children,
  href,
}: {
  variant?: "outline" | "primary"
  children: React.ReactNode
  href?: string
}) => (
  <a
    href={href || "#"}
    style={{
      ...styles.button,
      ...(variant === "outline" ? styles.buttonOutline : styles.buttonPrimary),
    }}
    onMouseEnter={(e) => {
      if (variant === "outline") {
        e.currentTarget.style.background = "#faf5ff"
      } else {
        e.currentTarget.style.opacity = "0.9"
      }
    }}
    onMouseLeave={(e) => {
      if (variant === "outline") {
        e.currentTarget.style.background = "transparent"
      } else {
        e.currentTarget.style.opacity = "1"
      }
    }}
  >
    {children}
  </a>
)

const Card = ({
  children,
  hover = false,
}: {
  children: React.ReactNode
  hover?: boolean
}) => (
  <div
    style={styles.card}
    onMouseEnter={(e) => {
      if (hover) {
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
        e.currentTarget.style.transform = "translateY(-2px)"
      }
    }}
    onMouseLeave={(e) => {
      if (hover) {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)"
        e.currentTarget.style.transform = "translateY(0)"
      }
    }}
  >
    {children}
  </div>
)

export default function Portfolio() {
  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <h1 style={styles.navTitle}>Sree Balasubramanian</h1>
          <div style={styles.navLinks}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#fun">Fun Stuff</NavLink>
          </div>
        </div>
      </nav>

      {/* About Me Section */}
      <section id="about" style={{ ...styles.section, ...styles.hero }}>
        <div style={styles.sectionContainer}>
          <div style={{ ...styles.heroGrid, gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <h2 style={styles.heroTitle}>
          👋🏼 Hi, I'm <span style={styles.heroGradient}>Sree</span>
              </h2>
              <p style={styles.heroSubtitle}>
                A Product Data Analyst at Genentech in South San Francisco, CA. I build practical AI tools in my spare time to automate the boring stuff.
              </p>
              <p style={styles.heroText}>
          With over 2 years of experience in product analytics, I specialize in A/B testing, customer segmentation, and KPI tracking. I work closely with cross-functional teams to deliver data-driven insights that drive product growth and operational efficiency.
              </p>

              <div style={styles.contactSection}>
                <h3 style={styles.contactTitle}>Contact Information</h3>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>✉️</span>
                  <span>sreenithi.bala4@gmail.com</span>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>📍</span>
                  <span>Menlo Park, CA</span>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                
                <Button variant="outline" asChild>
                <Link href="https://github.com/sreenithibalasu" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer" >
                  <span>🔗</span> GitHub
                </Link>
                </Button>
                <Button variant="outline">
                <Link href="https://www.linkedin.com/in/sbala04" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer" >
                  <span>💼</span> LinkedIn
                </Link>
                </Button>
                
              </div>
            </div>

            <div style={styles.profileContainer}>
              <div style={styles.profileWrapper}>
                <div style={styles.profileImage}><img src="/profile.jpg" alt="Profile" style={styles.profileImage} /></div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Professional Experience</h2>
            <p style={styles.sectionSubtitle}>
              I've had the privilege of working with amazing teams and supporting strategies that impact thousands of patients.
            </p>
          </div>

          <Card>
            <div style={styles.cardContent}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={styles.cardTitle}>Data Analyst - Product</h3>
                  <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>Genentech Inc</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>📅 Jan 2023 - Present | South San Francisco, CA</p>
                </div>
                <div style={styles.companyLogo}>
          <img
          src="/gne_logo.png"  // put your logo image path here (public folder or URL)
          alt="Company Logo"
          style={{ width: 100, height: 100, objectFit: 'contain' }}
        />
          </div>
              </div>
              <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
                I support strategic analytics for blockbuster products across Immunology, Hemophilia and Oncology portfolios. My day to day involves analyzing complex datasets, with the ultimate goal of building end-to-end analytics solutions that turn complex data into high-impact strategic business outcomes.
              </p>
          <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>Projects & Impact</p>
          <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Led A/B tests on thousands of accounts to evaluate a new sales force model; defined key success metrics and delivered insights that optimized field resource allocation, significantly improving operational efficiency and generating strong ROI.
          </p>
          <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Analyzed extensive sales and rebate data to assess contract performance, identify underperforming regions, and highlight fringe accounts—enabling targeted field actions that drove consistent quarter-over-quarter growth in the contracted segment.
          </p>
          <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Developed a customer segmentation framework to enhance product targeting and engagement strategies; integrated segments into promotion plans, boosting field call-planning efficiency notably.
          </p>
          <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Created and maintained an interactive dashboard for cross-functional teams to monitor product KPIs—streamlining data processing and accelerating decision-making across business operations.
          </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={styles.badge}>Python + SQL</span>
                <span style={styles.badge}>AWS + Dataiku</span>
                <span style={styles.badge}>Customer Segmentation</span>
                <span style={styles.badge}>A/B Testing</span>
              </div>
              <div>
                <h4 style={{ fontWeight: 500, color: "#1f2937", marginBottom: "1rem" }}>Key Products</h4>
                <div style={{ display: "grid", gridTemplateColumns: "100px 100px 100px", gap: "90px" }}>
                  <div
                    style={{
                      width: "150px",
                      height: "100px",
                      background: "linear-gradient(135deg, #f3e8ff, #fce7f3)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                    }}
                  >
                      <img
                      src="/actemra_logo.png"  // put your logo image path here (public folder or URL)
                      alt="Actemra Logo"
                      style={{ width: 100, height: 100, objectFit: 'contain' }}
                    />
                  </div>
          <div
            style={{
              width: "150px",
              height: "100px",
              borderRadius: "8px",
              borderColor: "#F37021",
            borderStyle: 'solid',
            borderWidth: '1px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
              <img
              src="/hemibra_logo.jpg"  // put your logo image path here (public folder or URL)
              alt="Hemlibra Logo"
              style={{ width: 100, height: 100, objectFit: 'contain' }}
            />
          </div>
                  <div
                    style={{
                      width: "150px",
                      height: "100px",
                      background: "linear-gradient(135deg, #dbeafe, #e0e7ff)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                    }}
                  >
                      <img
                      src="/itovebi_logo.png"  // put your logo image path here (public folder or URL)
                      alt="Itovebi Logo"
                      style={{ width: 100, height: 100, objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div style={styles.cardContent}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={styles.cardTitle}>Data Analyst - Intern</h3>
                  <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>Genentech Inc</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>📅 May 2022 - Aug 2022</p>
                </div>
                <div style={styles.companyLogo}>
          <img
          src="/gne_logo.png"  // put your logo image path here (public folder or URL)
          alt="Company Logo"
          style={{ width: 100, height: 100, objectFit: 'contain' }}
        /></div>
              </div>
              <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Developed a suite of 10+ metrics to track customer-level product purchasing and shipment trends, such
         as fulfillment rate, customer retention rate and churn rate; identified areas to ease customer pain-points
         from diagnosis to treatment.
    
              </p>
          <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Enhanced self-service analytics through automated reporting, allowing cross-functional members across
          therapeutic area teams to analyze real-time purchasing trends
          </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={styles.badge}>KPI Design</span>
                <span style={styles.badge}>Dashboard Development</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Personal Projects</h2>
            <p style={styles.sectionSubtitle}>
              Here are some AI projects I've done in the past and am currently working on.
            </p>
          </div>

          <div style={{ ...styles.grid, ...styles.grid3 }}>
            <Card hover>
              <div
                style={{
                  ...styles.projectImage,
                  background: "linear-gradient(135deg, #f3e8ff, #fce7f3)",
                }}
              >
                📋
              </div>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Daily Commute Briefing</h3>
                <p style={styles.cardDescription}>
                AI powered notification that details your upcoming commute based on your Tesla's current state, weather and traffic data.
                </p>
              </div>
              <div style={styles.cardContent}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>LangChain</span>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>API</span>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>Local LLMs</span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button variant="outline">🔗 Code</Button>
                </div>
              </div>
            </Card>

            <Card hover>
              <div
                style={{
                  ...styles.projectImage,
                  background: "linear-gradient(135deg, #dbeafe, #e0e7ff)",
                }}
              >
                🌤️
              </div>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Named Entity Recognition</h3>
                <p style={styles.cardDescription}>
                  CoNLL-powered NER to classify words into 5 different classes
                </p>
              </div>
              <div style={styles.cardContent}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>NER</span>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>Word2Vec</span>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>ML</span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button variant="outline"><Link href="https://github.com/sreenithibalasu/CoNLL_NER" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer" >🔗 Code</Link></Button>
                </div>
              </div>
            </Card>

            <Card hover>
              <div
                style={{
                  ...styles.projectImage,
                  background: "linear-gradient(135deg, #dcfce7, #d1fae5)",
                }}
              >
                🍳
              </div>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Text Summarizer</h3>
                <p style={styles.cardDescription}>PageRank-powered news article summarizer.</p>
              </div>
              <div style={styles.cardContent}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>RSS Scraping</span>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>Python</span>
                  <span style={{ ...styles.badge, ...styles.badgeOutline }}>ML</span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button variant="outline"> <Link href="https://github.com/sreenithibalasu/TextSummary" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer" >🔗 Code</Link></Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Education</h2>
            <p style={styles.sectionSubtitle}>
              My academic journey that laid the foundation for my career in Data Science and AI.
            </p>
          </div>

          <Card>
            <div style={styles.cardContent}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={styles.universityLogo}>
          <img
          src="/uiuc_logo.png"  // put your logo image path here (public folder or URL)
          alt="uiuc Logo"
          style={{ width: 40, height: 40, objectFit: 'contain' }}
        />
          </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3 style={styles.cardTitle}>Master of Science in Information Science</h3>
                      <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>University of Illinois Urbana-Champaign</p>
                      <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>📅 2021 - 2023  </p>
                        <p style={{ color: "#6b7280", fontSize: "0.875rem" }}> Data Science + Analytics Specialization </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <span style={{ color: "#9333ea", fontSize: "0.875rem", fontWeight: 500 }}>🏆 GPA: 4.0/4.0</span>
                    </div>
                  </div>

          <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>Research at WHO/PAHO Center for Health Informatics</p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Advisor: Dr. Ian Brooks </p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          Automated data collection for COVID-19 news articles by building a robust web-scraper using Selenium;
          utilized TF-IDF, BERT, and Word2Vec for vectorizing large text data.
          </p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          Trained a COVID-19 misinformation classification system that achieved 93% test accuracy; provided as
          input to the PAHO/WHO Anti-Infodemic Virtual Center (AIVC) of the Americas proof-of-concept
          </p>
          <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>Research at Human + ML Lab</p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Advisor: Dr. Nigel Bosch </p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          Worked on analyzing large scale survey response data on students' perspectives on online learning platforms in educational and non-educational environments. Performed thematic analysis using R and generating linear mixed models to identify significant themes and the impact on views about data collection.
          </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={styles.badge}>Machine Learning</span>
                    <span style={styles.badge}>Data Visualization</span>
                    <span style={styles.badge}>DBMS</span>
                    <span style={styles.badge}>Python + R</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div style={styles.cardContent}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={styles.universityLogo}>
          <img
          src="/sastra_logo.png"  // put your logo image path here (public folder or URL)
          alt="sastra Logo"
          style={{ width: 40, height: 40, objectFit: 'contain' }}
        /></div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3 style={styles.cardTitle}>Bachelor of Technology in Information and Communication Technology</h3>
                      <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>SASTRA University</p>
                      <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>📅 2016 - 2020</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <span style={{ color: "#9333ea", fontSize: "0.875rem", fontWeight: 500 }}>
                        🏆 8.5/10 | Top 5 Graduates
                      </span>
                    </div>
                  </div>
                <p style={{ color: "#9333ea", fontWeight: 500, marginBottom: "0.5rem" }}>Publication - Bag-of-Audio-Visual Words for Industrial Machinery Sound and Scene Recognition</p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Advisor: Dr. Chandrakala S </p>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          A novel approach that combines audio and visual data using a bag-of-words model to improve sound event and acoustic scene recognition for industrial machinery. By fusing these two data types, the method achieves better accuracy in detecting machine sounds and environments, even in noisy conditions. This approach supports smarter monitoring systems that help detect faults early and optimize maintenance in industrial settings.
          </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={styles.badge}>Data Structures</span>
                    <span style={styles.badge}>Computer Systems</span>
                    <span style={styles.badge}>Mathematics</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Fun Stuff Section */}
      <section id="fun" style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Fun Stuff</h2>
            <p style={styles.sectionSubtitle}>When I'm not coding, here's what keeps me busy and inspired!</p>
          </div>

          <div style={{ ...styles.grid, ...styles.grid4 }}>
            <Card hover>
              <div style={styles.cardContent}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      ...styles.funIcon,
                      background: "linear-gradient(135deg, #f3e8ff, #fce7f3)",
                    }}
                  >
                    📸
                  </div>
                  <h3 style={styles.cardTitle}>Photography</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    Love capturing moments and exploring the world through my lens. Street photography is my favorite!
                  </p>
                </div>
              </div>
            </Card>

            <Card hover>
              <div style={styles.cardContent}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      ...styles.funIcon,
                      background: "linear-gradient(135deg, #dbeafe, #e0e7ff)",
                    }}
                  >
          💪🏼
                  </div>
                  <h3 style={styles.cardTitle}>Running + Lifting</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    I try to run long distances - most I've covered is a 10K. I'm also training hard to lift heavy Trader Joe's grocery hauls.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover>
              <div style={styles.cardContent}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      ...styles.funIcon,
                      background: "linear-gradient(135deg, #dcfce7, #d1fae5)",
                    }}
                  >
                    🏔️
                  </div>
                  <h3 style={styles.cardTitle}>Hiking</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    Weekend warrior exploring trails around the Bay Area. Nothing beats a good sunrise hike!
                  </p>
                </div>
              </div>
            </Card>

            <Card hover>
              <div style={styles.cardContent}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      ...styles.funIcon,
                      background: "linear-gradient(135deg, #fed7aa, #fecaca)",
                    }}
                  >
                    🍳
                  </div>
                  <h3 style={styles.cardTitle}>Cooking</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    Experimenting with fusion cuisine and perfecting my pasta game. Food is love!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Fun Stats */}

        </div>
      </section>

      {/* Footer */}
      <footer style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.sectionContainer}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ ...styles.sectionTitle, fontSize: "2rem" }}>Let's Connect!</h3>
            <p style={{ ...styles.sectionSubtitle, marginBottom: "2rem" }}>
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div style={{ marginBottom: "2rem" }}>
              <Button variant="outline">📄 Download Resume</Button>
            </div>
            <div style={styles.footer}>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                © 2025 Sreenithi Balasubramanian. Built with Next.js and lots of ☕
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
