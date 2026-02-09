import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Compass,
  CreditCard,
  LayoutDashboard,
  LineChart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import "./Homepage.css";
import Navbar from '../components/Navbar';

const Homepage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const animation = useMemo(
    () => ({
      fadeUp: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      },
      stagger: {
        visible: { transition: { staggerChildren: 0.12 } },
      },
    }),
    []
  );

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        window.innerWidth <= 900 &&
        !event.target.closest(".ww-nav-links") &&
        !event.target.closest(".ww-menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="ww-page">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} smoothScroll={smoothScroll} navigate={navigate} />

      <main id="top">
        <section className="ww-hero">
          <div className="ww-container ww-hero-grid">
            <motion.div
              className="ww-hero-copy"
              initial="hidden"
              animate="visible"
              variants={animation.stagger}
            >
              <motion.p className="ww-chip" variants={animation.fadeUp}>
                Built for students who want clarity and control
              </motion.p>
              <motion.h1 className="ww-hero-title" variants={animation.fadeUp}>
                Your money, organized into a smarter student dashboard.
              </motion.h1>
              <motion.p className="ww-hero-sub" variants={animation.fadeUp}>
                WalletWise gives you a real-time view of your budgets, expenses, goals,
                and weekly habits in one calming space designed for college life.
              </motion.p>
              <motion.div className="ww-hero-actions" variants={animation.fadeUp}>
                <button className="ww-btn ww-btn-primary" onClick={() => navigate("/signup")}>
                  Get started free
                </button>
              </motion.div>
              <motion.div className="ww-hero-metrics" variants={animation.fadeUp}>
                <div>
                  <span className="ww-metric-value">3x</span>
                  <span className="ww-metric-label">faster expense logging</span>
                </div>
                <div>
                  <span className="ww-metric-value">92%</span>
                  <span className="ww-metric-label">students hit savings goals</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="ww-hero-visual"
              initial="hidden"
              animate="visible"
              variants={animation.fadeUp}
            >
              <div className="ww-dashboard-mock">
                <div className="ww-mock-header">
                  <div>
                    <p className="text-black">WalletWise Overview</p>
                    <p className="ww-mock-sub">Week 4 • Campus term</p>
                  </div>
                  <span className="ww-badge">
                    <Sparkles size={14} />
                    Smart forecast
                  </span>
                </div>
                <div className="ww-mock-grid">
                  <div className="ww-mock-card">
                    <p>Monthly Budget</p>
                    <h4>$640 / $900</h4>
                    <div className="ww-mock-bar">
                      <span />
                    </div>
                  </div>
                  <div className="ww-mock-card">
                    <p>Goals Progress</p>
                    <h4>Campus Trip</h4>
                    <div className="ww-mock-pill">78% complete</div>
                  </div>
                  <div className="ww-mock-card ww-mock-chart">
                    <p>Spending Curve</p>
                    <div className="ww-mini-chart" />
                  </div>
                  <div className="ww-mock-card">
                    <p>Smart Tips</p>
                    <h4>Save $18/wk</h4>
                    <span className="ww-mock-note">Based on coffee spending</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ww-section" id="about">
          <div className="ww-container">
            <motion.div
              className="ww-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">About WalletWise</p>
              <h2>Smart student finance tracking that explains the “why.”</h2>
              <p>
                WalletWise is an intelligent personal finance platform built for students and
                young professionals to not just track money, but understand and improve
                financial behaviour. Unlike traditional apps that only record expenses,
                WalletWise analyzes patterns, predicts future needs, and delivers real-time
                guidance before you spend.
              </p>
            </motion.div>
            <motion.div
              className="ww-feature-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.stagger}
            >
              {[
                {
                  icon: <Lightbulb size={22} />,
                  title: "Core idea",
                  text: "Finance shouldn’t just be tracked — it should be understood.",
                },
                {
                  icon: <Brain size={22} />,
                  title: "Behavior-first insights",
                  text: "Turn raw transactions into actionable insights and smarter planning.",
                },
                {
                  icon: <ShieldCheck size={22} />,
                  title: "Calm, confident decisions",
                  text: "Get real-time guidance so you can spend with clarity, not stress.",
                },
              ].map((item) => (
                <motion.article className="ww-card" key={item.title} variants={animation.fadeUp}>
                  <span className="ww-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="ww-section ww-muted" id="problem">
          <div className="ww-container">
            <div className="ww-problem-grid">
              <motion.div
                className="ww-section-heading"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animation.fadeUp}
              >
                <p className="ww-kicker">Why students struggle</p>
                <h2>Why Students Struggle with Money Today</h2>
                <p>
                  Juggling bills, budgets, and savings shouldn’t be another source of stress.
                  But for many students, money feels confusing and out of control. Here’s why:
                </p>
                <ul className="ww-list">
                  <li>Too many accounts, no clear view – Your money is scattered across bank accounts, cards, loans, and apps. Seeing the full picture is nearly impossible.</li>
                  <li>Budgeting feels restrictive and hard – Most tools are built for adults with steady paychecks, not for student life with irregular income and expenses.</li>
                  <li>Anxiety about the future – “Am I overspending?” “Can I afford this?” Without clarity, every purchase comes with a side of worry.</li>
                </ul>
                <p>
                  You’re not bad with money. You just haven’t had the right tool built for your real student life.
                </p>
              </motion.div>
              <motion.div
                className="ww-problem-visual"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="ww-problem-campus-card">
                  <div className="ww-problem-card-top">
                    <div>
                      <p className="ww-problem-label">Campus wallet</p>
                      <h3>$128.40 available</h3>
                    </div>
                    <span className="ww-problem-badge">Student plan</span>
                  </div>
                  <div className="ww-problem-card-body">
                    <div className="ww-problem-row">
                      <span className="ww-problem-icon">💳</span>
                      <div>
                        <p>Meal plan</p>
                        <span>$62.10 left</span>
                      </div>
                    </div>
                    <div className="ww-problem-row">
                      <span className="ww-problem-icon">📚</span>
                      <div>
                        <p>Textbooks</p>
                        <span>$48.00 due</span>
                      </div>
                    </div>
                    <div className="ww-problem-row">
                      <span className="ww-problem-icon">🏠</span>
                      <div>
                        <p>Rent split</p>
                        <span>$320 next week</span>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="ww-problem-float-card"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p>Upcoming</p>
                  <h4>Tuition payment</h4>
                  <span>$1,200 in 12 days</span>
                </motion.div>
                <motion.div
                  className="ww-problem-float-card secondary"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p>Linked accounts</p>
                  <div className="ww-problem-account-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>3 cards • 2 banks</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="ww-section" id="features">
          <div className="ww-container">
            <motion.div
              className="ww-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">Core features</p>
              <h2>Everything you need to stay ahead of student finances.</h2>
              <p>
                Smart automation, gentle nudges, and dashboards that turn money
                anxiety into confident decision-making.
              </p>
            </motion.div>
            <motion.div
              className="ww-feature-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.stagger}
            >
              {[
                {
                  icon: <Compass size={22} />,
                  title: "Budgeting",
                  text: "Plan tuition, rent, and day-to-day spending with flexible budget lanes.",
                },
                {
                  icon: <CreditCard size={22} />,
                  title: "Expense Tracking",
                  text: "Log every swipe in seconds with auto-categories tailored for campus life.",
                },
                {
                  icon: <Target size={22} />,
                  title: "Goals",
                  text: "Set savings goals and track progress with visual milestones.",
                },
                {
                  icon: <BarChart3 size={22} />,
                  title: "Reports",
                  text: "Generate weekly insights that explain where your money goes.",
                },
                {
                  icon: <LineChart size={22} />,
                  title: "Predictive Planning",
                  text: "Forecast upcoming expenses and prepare for bills, events, and tuition.",
                },
                {
                  icon: <Brain size={22} />,
                  title: "Behaviour Analysis",
                  text: "Detect overspending patterns and build healthier spending habits.",
                },
              ].map((feature) => (
                <motion.article className="ww-card" key={feature.title} variants={animation.fadeUp}>
                  <span className="ww-icon">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="ww-section" id="value">
          <div className="ww-container ww-preview-grid">
            <motion.div
              className="ww-preview-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">Value</p>
              <h2>Financial awareness, not financial stress.</h2>
              <p>
                WalletWise helps students and young professionals build confidence with
                money, reduce impulse spending, and plan ahead without guesswork.
              </p>
              <ul className="ww-list">
                <li>Build financial discipline with gentle nudges.</li>
                <li>Reduce impulse spending and overshoot risks.</li>
                <li>Plan ahead confidently with predictive insights.</li>
                <li>Understand the “why” behind every spending pattern.</li>
              </ul>
            </motion.div>
            <motion.div
              className="ww-preview-frame"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <div className="ww-preview-header">
                <div>
                  <p className="ww-preview-title">Target users</p>
                  <p className="ww-preview-sub">Built for your first real money decisions</p>
                </div>
                <span className="ww-chip ww-chip-ghost">
                  <Users size={14} />
                  Who it’s for
                </span>
              </div>
              <div className="ww-preview-content">
                {[
                  "Students managing tuition, rent, and daily expenses",
                  "Young professionals building their first budgets",
                  "First-time earners learning healthy money habits",
                  "Anyone seeking clarity in personal finance",
                ].map((item) => (
                  <div className="ww-preview-metric" key={item}>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ww-section ww-muted" id="how">
          <div className="ww-container">
            <motion.div
              className="ww-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">How it works</p>
              <h2>From first login to real savings in three steps.</h2>
            </motion.div>
            <motion.div
              className="ww-steps"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.stagger}
            >
              {[
                {
                  icon: <LayoutDashboard size={20} />,
                  title: "Set up your dashboard",
                  text: "Add income, tuition, and recurring expenses to build your baseline.",
                },
                {
                  icon: <LineChart size={20} />,
                  title: "Track and categorize",
                  text: "Log spending or import transactions to keep your categories accurate.",
                },
                {
                  icon: <ShieldCheck size={20} />,
                  title: "Review insights weekly",
                  text: "See your savings, adjust budgets, and stay on top of your goals.",
                },
              ].map((step, index) => (
                <motion.div className="ww-step" key={step.title} variants={animation.fadeUp}>
                  <div className="ww-step-icon">{step.icon}</div>
                  <div>
                    <p className="ww-step-count">Step {index + 1}</p>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="ww-section" id="preview">
          <div className="ww-container ww-preview-grid">
            <motion.div
              className="ww-preview-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <div className="ww-preview-frame">
                <div className="ww-preview-header">
                  <div>
                    <p className="ww-preview-title">Weekly Snapshot</p>
                    <p className="ww-preview-sub">Sun - Sat</p>
                  </div>
                  <span className="ww-chip ww-chip-ghost">
                    <Sparkles size={14} />
                    Healthy trend
                  </span>
                </div>
                <div className="ww-preview-content">
                  <div className="ww-preview-metric">
                    <p>Available cash</p>
                    <h4>$420.50</h4>
                  </div>
                  <div className="ww-preview-metric">
                    <p>Spent this week</p>
                    <h4>$128.10</h4>
                  </div>
                  <div className="ww-preview-chart" />
                </div>
                <div className="ww-preview-list">
                  <div>
                    <span className="ww-dot ww-dot-primary" />
                    Food and coffee
                  </div>
                  <div>
                    <span className="ww-dot ww-dot-secondary" />
                    Transit + supplies
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="ww-preview-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">Dashboard preview</p>
              <h2>Built to feel like a calm command center.</h2>
              <p>
                Your WalletWise dashboard keeps everything in sync: budgets, spending,
                goals, and insights in a single, glassy workspace.
              </p>
              <ul className="ww-list">
                <li>Unified cash flow view with weekly rhythm.</li>
                <li>Smart alerts when spending spikes.</li>
                <li>Goal milestones that keep you motivated.</li>
              </ul>
              <div className="ww-hero-actions">
                <button className="ww-btn ww-btn-primary" onClick={() => navigate("/signup")}>
                  Get started free
                </button>
                <button className="ww-btn ww-btn-ghost" onClick={() => navigate("/dashboard")}>
                  View live dashboard
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ww-section ww-muted" id="testimonials">
          <div className="ww-container">
            <motion.div
              className="ww-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">Student voices</p>
              <h2>Real stories from students staying on track.</h2>
            </motion.div>
            <motion.div
              className="ww-testimonials"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.stagger}
            >
              {[
                {
                  name: "Maya Chen",
                  role: "Biology major",
                  quote:
                    "The weekly snapshot keeps me calm. I finally know what I can spend without guilt.",
                },
                {
                  name: "Jordan Reyes",
                  role: "Design student",
                  quote:
                    "WalletWise feels like a coach. It nudges me before I overspend and celebrates wins.",
                },
                {
                  name: "Samir Patel",
                  role: "Computer science",
                  quote:
                    "I love the goals view. Watching my savings climb keeps me motivated every week.",
                },
              ].map((testimonial) => (
                <motion.article className="ww-card ww-card-compact" key={testimonial.name} variants={animation.fadeUp}>
                  <p className="ww-quote">"{testimonial.quote}"</p>
                  <div className="ww-testimonial-meta">
                    <p>{testimonial.name}</p>
                    <span>{testimonial.role}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="ww-cta" id="cta">
          <div className="ww-container ww-cta-grid">
            <motion.div
              className="ww-cta-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <p className="ww-kicker">Ready to start?</p>
              <h2>Launch your WalletWise plan in under five minutes.</h2>
              <p>
                Set budgets, track spending, and hit your goals with a dashboard designed
                for real student routines.
              </p>
              <div className="ww-cta-actions">
                <button className="ww-btn ww-btn-primary" onClick={() => navigate("/signup")}>
                  Get started free
                </button>
              </div>
            </motion.div>
            <motion.div
              className="ww-cta-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animation.fadeUp}
            >
              <div>
                <p className="ww-cta-highlight">Average monthly savings</p>
                <h3>$186</h3>
              </div>
              <div className="ww-cta-pill">
                <Target size={16} />
                Goal streaks active
              </div>
              <div className="ww-cta-pill">
                <LayoutDashboard size={16} />
                Dashboard checks weekly
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="ww-footer">
        <div className="ww-container ww-footer-grid">
          <div>
            <div className="ww-footer-brand">
              <span className="ww-logo-icon">
                <Wallet size={18} />
              </span>
              WalletWise
            </div>
            <p className="ww-footer-text">
              A student-first finance tracker built for clarity, calm, and momentum.
            </p>
          </div>
          <div>
            <p className="ww-footer-title">Product</p>
            <button onClick={() => smoothScroll("about")}>About</button>
            <button onClick={() => smoothScroll("features")}>Features</button>
            <button onClick={() => smoothScroll("preview")}>Dashboard</button>
            <button onClick={() => smoothScroll("how")}>How it works</button>
          </div>
          <div>
            <p className="ww-footer-title">Company</p>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Get started</button>
            <button onClick={() => smoothScroll("testimonials")}>Testimonials</button>
          </div>
          <div>
            <p className="ww-footer-title">Contact</p>
            <p className="ww-footer-text">soumyamishra788@gmail.com</p>
            <p className="ww-footer-text">Made With ❤️ in India</p>
          </div>
        </div>
        <div className="ww-footer-bottom">
          <p>© 2026 WalletWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

