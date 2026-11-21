import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Bus,
  GraduationCap,
  Wallet,
  Calendar,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const DEPARTMENTS = [
  {
    icon: <GraduationCap size={22} color="#065f46" />,
    title: "Admissions & Counseling",
    subtitle: "New Admissions (K–12) & Campus Tours",
    phone: "+1 (408) 555-0192",
    email: "admissions@theharkerschool.in",
    timing: "Mon – Sat: 8:30 AM – 4:30 PM",
  },
  {
    icon: <Building2 size={22} color="#b45309" />,
    title: "Principal & Academic Office",
    subtitle: "Curriculum, ICSE/K–12 Academics & Transfers",
    phone: "+1 (408) 555-0194",
    email: "academics@theharkerschool.in",
    timing: "Mon – Fri: 9:00 AM – 3:30 PM",
  },
  {
    icon: <Bus size={22} color="#065f46" />,
    title: "Transport & Campus Safety",
    subtitle: "GPS School Buses, Routes & Student Security",
    phone: "+1 (408) 555-0199",
    email: "transport@theharkerschool.in",
    timing: "Mon – Sat: 7:00 AM – 6:00 PM",
  },
  {
    icon: <Wallet size={22} color="#b45309" />,
    title: "Accounts & Fee Desk",
    subtitle: "Fee Structure, Scholarships & Receipts",
    phone: "+1 (408) 555-0196",
    email: "accounts@theharkerschool.in",
    timing: "Mon – Fri: 9:00 AM – 3:00 PM",
  },
];

const CONTACT_FAQS = [
  {
    id: "faq1",
    question: "How can parents book a guided campus visit or demo session?",
    answer:
      "Parents can select 'Book a Guided Campus Tour' in the inquiry form on this page or call our Admissions Helpline (+1 408 555-0192). Guided tours are conducted Monday to Saturday between 9:30 AM and 3:00 PM.",
  },
  {
    id: "faq2",
    question: "What are the regular school timings for Junior and Senior Wings?",
    answer:
      "Junior Wing (Grades K–5) operates from 8:30 AM to 2:15 PM, while Middle & Senior Wings (Grades 6–12) operate from 8:00 AM to 3:10 PM, followed by optional Robotics, Sports, and Performing Arts clubs.",
  },
  {
    id: "faq3",
    question: "What documents are required during the initial admission inquiry?",
    answer:
      "For the initial counseling session, only the student's previous year progress report and birth certificate copy are helpful. Original Transfer Certificate (TC) and ID proofs are needed only after admission confirmation.",
  },
  {
    id: "faq4",
    question: "Does the school provide GPS-enabled transport and medical care?",
    answer:
      "Yes, all school buses are equipped with live GPS tracking, CCTV, and trained female attendants. Our campus also houses a full-time certified nurse and infirmary.",
  },
];

const INITIAL_FORM = {
  parentName: "",
  studentName: "",
  email: "",
  phone: "",
  wing: "Junior Wing (K–5)",
  inquiryType: "New Admission Inquiry",
  preferredDate: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submittedRef, setSubmittedRef] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const referenceId = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef({
      id: referenceId,
      parentName: formData.parentName,
      wing: formData.wing,
      inquiryType: formData.inquiryType,
    });
    setFormData(INITIAL_FORM);
  };

  return (
    <section
      id="contact-page"
      className="harker-contact-section py-5 border-top"
      aria-label="Contact The Harker School"
    >
      <div className="container py-2">
        {/* 1. Top Contact Hero Banner */}
        <div className="harker-contact-banner p-4 p-md-5 mb-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge rounded-pill bg-warning text-dark fw-bold px-3 py-2 mb-3">
                WE ARE HERE TO HELP • ADMISSIONS &amp; SUPPORT
              </span>
              <h2 className="display-6 fw-bold mb-2">
                Get in Touch with The Harker School
              </h2>
              <p className="text-light opacity-75 mb-0 lead fs-6">
                Admissions guidance, campus visit scheduling, academic queries,
                ya transport support ke liye hamari team se seedha sampark
                karein. Hum har query ka 24 working hours ke andar jawab dete
                hain.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-inline-flex flex-column align-items-start align-items-lg-end gap-2 bg-white bg-opacity-10 border border-white border-opacity-25 rounded-4 p-3">
                <span className="small text-warning fw-semibold">
                  Direct Admissions Desk
                </span>
                <a
                  href="tel:+14085550192"
                  className="fs-5 fw-bold text-white text-decoration-none"
                >
                  +1 (408) 555-0192
                </a>
                <span className="small text-light opacity-75">
                  admissions@theharkerschool.in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Department-Wise Contact Cards */}
        <div className="row g-4 mb-5">
          {DEPARTMENTS.map((dept) => (
            <div className="col-12 col-sm-6 col-xl-3" key={dept.title}>
              <div className="harker-dept-card d-flex flex-column justify-content-between">
                <div>
                  <div className="harker-icon-badge mb-3">{dept.icon}</div>
                  <h3 className="h6 fw-bold text-dark mb-1">{dept.title}</h3>
                  <p className="small text-secondary mb-3">{dept.subtitle}</p>
                </div>

                <div className="d-flex flex-column gap-2 pt-2 border-top small">
                  <a
                    href={`tel:${dept.phone.replace(/[^+\d]/g, "")}`}
                    className="text-decoration-none text-dark fw-semibold d-inline-flex align-items-center gap-2"
                  >
                    <Phone size={14} className="text-success flex-shrink-0" />
                    <span>{dept.phone}</span>
                  </a>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2 text-break"
                  >
                    <Mail size={14} className="text-warning flex-shrink-0" />
                    <span>{dept.email}</span>
                  </a>
                  <div className="text-muted d-inline-flex align-items-center gap-2">
                    <Clock size={14} className="text-success flex-shrink-0" />
                    <span>{dept.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Main Contact Form (Left) + Campus Info, Map & FAQ (Right) */}
        <div className="row g-4 g-lg-5 align-items-start">
          {/* Left Column: Interactive Inquiry & Campus Tour Form */}
          <div className="col-12 col-lg-7">
            <div className="harker-contact-form-card p-4 p-md-5">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div>
                  <span className="text-uppercase fw-bold small text-warning">
                    Send Us a Message
                  </span>
                  <h3 className="h4 fw-bold text-dark mt-1 mb-0">
                    Admission &amp; General Inquiry Form
                  </h3>
                </div>
                <span className="badge text-bg-light border text-success d-inline-flex align-items-center gap-1 px-3 py-2">
                  <ShieldCheck size={15} />
                  <span>24-Hr Response</span>
                </span>
              </div>

              <p className="small text-secondary mb-4">
                Neeche apni details bharein — hamara admissions counselor ya
                concerned department coordinator aapse call ya email par connect
                karega.
              </p>

              {submittedRef ? (
                <div className="text-center py-4 px-3 bg-light rounded-4 border">
                  <CheckCircle2 size={50} className="text-success mb-3" />
                  <h4 className="fw-bold text-dark">
                    Thank You, {submittedRef.parentName}!
                  </h4>
                  <p className="text-secondary small mb-3">
                    Aapki <strong>{submittedRef.inquiryType}</strong> (
                    {submittedRef.wing}) hamare Admissions &amp; Support Desk
                    ko mil gayi hai.
                  </p>
                  <div className="alert alert-success d-inline-block px-4 py-2 fw-bold mb-3">
                    Reference ID: {submittedRef.id}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-success fw-semibold"
                      onClick={() => setSubmittedRef(null)}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        className="form-control"
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold">
                        Student Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        className="form-control"
                        placeholder="e.g. Aarav Sharma"
                        value={formData.studentName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="e.g. parent@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold">
                        Select Wing / Grade Group *
                      </label>
                      <select
                        name="wing"
                        className="form-select"
                        value={formData.wing}
                        onChange={handleChange}
                      >
                        <option value="Junior Wing (K–5)">
                          Junior Wing (Grades K–5)
                        </option>
                        <option value="Middle School (6–8)">
                          Middle School (Grades 6–8)
                        </option>
                        <option value="Senior Wing (9–12)">
                          Senior Wing (Grades 9–12)
                        </option>
                        <option value="General / Administration">
                          General / Administration
                        </option>
                      </select>
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold">
                        Inquiry Purpose *
                      </label>
                      <select
                        name="inquiryType"
                        className="form-select"
                        value={formData.inquiryType}
                        onChange={handleChange}
                      >
                        <option value="New Admission Inquiry">
                          New Admission Inquiry
                        </option>
                        <option value="Book a Guided Campus Tour">
                          Book a Guided Campus Tour
                        </option>
                        <option value="Fee Structure & Scholarship">
                          Fee Structure &amp; Scholarship
                        </option>
                        <option value="School Transport & Bus Routes">
                          School Transport &amp; Bus Routes
                        </option>
                        <option value="Career / Faculty Recruitment">
                          Career / Faculty Recruitment
                        </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold d-inline-flex align-items-center gap-1">
                        <Calendar size={14} className="text-success" />
                        <span>Preferred Campus Visit / Callback Date (Optional)</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        className="form-control"
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold">
                        Your Message / Questions *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control"
                        placeholder="Write your question about admissions, curriculum, timings, or facilities..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        className="btn harker-btn-gold w-100 py-3 d-inline-flex align-items-center justify-content-center gap-2 fs-6"
                      >
                        <Send size={17} />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Campus Address Card + Mini Map + Parent FAQs */}
          <div className="col-12 col-lg-5 d-flex flex-column gap-4">
            {/* Campus Address & Visiting Hours Card */}
            <div className="harker-3d-card">
              <h4 className="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <MapPin size={20} className="text-success" />
                <span>Main Campus &amp; Visiting Hours</span>
              </h4>

              <p className="small text-secondary mb-3">
                <strong>THE HARKER SCHOOL</strong>
                <br />
                500 Saratoga Ave, San Jose, CA 95129
              </p>

              <div className="rounded-3 overflow-hidden border mb-3">
                <iframe
                  title="The Harker School Contact Map"
                  src="https://www.google.com/maps?q=500+Saratoga+Ave,+San+Jose,+CA+95129&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 small">
                <span className="text-secondary">
                  Gate 2 Visitor Parking • ID Required
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=500+Saratoga+Ave,+San+Jose,+CA+95129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Parent Frequently Asked Questions */}
            <div className="harker-3d-card">
              <h4 className="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <HelpCircle size={20} className="text-warning" />
                <span>Quick Answers for Parents</span>
              </h4>

              <div className="accordion accordion-flush" id="harkerContactFaq">
                {CONTACT_FAQS.map((faq, idx) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button harker-faq-btn small fw-semibold ${
                          idx !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded={idx === 0 ? "true" : "false"}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse ${
                        idx === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#harkerContactFaq"
                    >
                      <div className="accordion-body small text-secondary pt-1">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;