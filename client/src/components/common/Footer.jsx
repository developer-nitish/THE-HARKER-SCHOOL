import React, { useState } from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Camera,
  PlayCircle,
  Briefcase,
  Share2,
  MessageCircle,
  ShieldAlert,
  FileWarning,
  ExternalLink,
  CheckCircle2,
  X,
  Send,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics (K–12)", href: "#academics" },
  { label: "Junior & Senior Wings", href: "#wings" },
  { label: "Admissions", href: "#admissions" },
  { label: "Campus Life", href: "#campus-life" },
];

const POLICY_LINKS = [
  { label: "Code of Conduct & Discipline", href: "#conduct" },
  { label: "Child Safety & POSCO Policy", href: "#safety" },
  { label: "Anti-Ragging & Bullying Charter", href: "#anti-bullying" },
  { label: "Privacy & Data Policy", href: "#privacy" },
  { label: "Fee & Refund Guidelines", href: "#fees" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <Globe size={18} />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Camera size={18} />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: <PlayCircle size={18} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Briefcase size={18} />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: <Share2 size={18} />,
  },
  {
    name: "WhatsApp Helpdesk",
    href: "https://whatsapp.com",
    icon: <MessageCircle size={18} />,
  },
];

const INITIAL_COMPLAINT = {
  fullName: "",
  role: "Parent / Guardian",
  wing: "Junior Wing (K–5)",
  category: "Academic / Teaching",
  contactInfo: "",
  description: "",
  anonymous: false,
};

const Footer = () => {
  const [showComplaintModal, setShowComplaintModal] = useState(false);
  const [complaintForm, setComplaintForm] = useState(INITIAL_COMPLAINT);
  const [submittedTicket, setSubmittedTicket] = useState(null);

  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setComplaintForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    const ticketId = `THS-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket({
      id: ticketId,
      category: complaintForm.category,
      wing: complaintForm.wing,
      submittedAt: new Date().toLocaleString(),
    });
    setComplaintForm(INITIAL_COMPLAINT);
  };

  const openModal = () => {
    setSubmittedTicket(null);
    setShowComplaintModal(true);
  };

  const closeModal = () => {
    setShowComplaintModal(false);
  };

  return (
    <>
      <footer id="contact" className="harker-footer pt-5">
        <div className="container pb-4">
          <div className="row g-4 g-lg-5">
            {/* Column 1: School Brand, About & Social Media */}
            <div className="col-12 col-lg-4">
              <a
                href="#home"
                className="d-inline-flex align-items-center gap-3 text-decoration-none mb-3"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                  style={{
                    width: "46px",
                    height: "46px",
                    background:
                      "linear-gradient(135deg, #059669 0%, #047857 100%)",
                  }}
                >
                  <GraduationCap size={25} color="#ffffff" />
                </div>
                <div>
                  <div className="fw-bold text-white fs-5 lh-1">
                    THE HARKER SCHOOL
                  </div>
                  <small className="text-warning fw-semibold">
                    EXCELLENCE IN K–12 EDUCATION
                  </small>
                </div>
              </a>

              <p className="small text-light opacity-75 lh-base mb-3">
                Committed to nurturing critical thinkers, compassionate leaders,
                and lifelong learners across junior and senior wings with safe,
                modern campus facilities.
              </p>

              {/* Contact Info */}
              <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
                <li className="d-flex align-items-start gap-2">
                  <MapPin
                    size={16}
                    className="text-warning flex-shrink-0 mt-1"
                  />
                  <span>500 Saratoga Ave, San Jose, CA 95129 (Main Campus)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Phone size={16} className="text-warning flex-shrink-0" />
                  <a href="tel:+14085550192" className="harker-footer-link">
                    +1 (408) 555-0192
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Mail size={16} className="text-warning flex-shrink-0" />
                  <a
                    href="mailto:admissions@theharkerschool.in"
                    className="harker-footer-link"
                  >
                    admissions@theharkerschool.in
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Clock size={16} className="text-warning flex-shrink-0" />
                  <span>Mon – Fri: 8:00 AM – 4:30 PM</span>
                </li>
              </ul>

              {/* Social Media Accounts */}
              <div>
                <div className="small fw-semibold text-white mb-2">
                  Connect With Us on Social Media
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="harker-social-btn"
                      aria-label={item.name}
                      title={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links & School Policies / Complaints Box */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="row g-3">
                <div className="col-6">
                  <h4 className="harker-footer-heading">Quick Links</h4>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    {QUICK_LINKS.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="harker-footer-link">
                          <span>›</span>
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-6">
                  <h4 className="harker-footer-heading">Governance</h4>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    {POLICY_LINKS.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="harker-footer-link">
                          <span>›</span>
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Complaints & Grievance Redressal Card */}
              <div className="harker-complaint-card mt-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <ShieldAlert
                    size={20}
                    className="text-warning flex-shrink-0"
                  />
                  <h5 className="h6 fw-bold text-white mb-0">
                    Grievance &amp; Complaints Desk
                  </h5>
                </div>
                <p className="small text-light opacity-75 mb-3">
                  Parents, students, ya staff kisi bhi academic, transport, safety,
                  ya facility complaint ko confidentially report kar sakte hain.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn btn-sm harker-btn-gold d-inline-flex align-items-center gap-2"
                  >
                    <FileWarning size={15} />
                    <span>File a Complaint</span>
                  </button>
                  <a
                    href="mailto:grievance@theharkerschool.in"
                    className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1"
                  >
                    <span>Grievance Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Google Map Location */}
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="harker-footer-heading">Campus Location Map</h4>
              <div className="harker-map-frame-wrap mb-3">
                <iframe
                  title="The Harker School Campus Map"
                  src="https://www.google.com/maps?q=500+Saratoga+Ave,+San+Jose,+CA+95129&output=embed"
                  width="100%"
                  height="225"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 small">
                <span className="text-light opacity-75">
                  Bus Routes &amp; Visitor Parking Available
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=500+Saratoga+Ave,+San+Jose,+CA+95129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="harker-footer-link fw-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="harker-footer-bottom py-3">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
            <div>
              © {new Date().getFullYear()} THE HARKER SCHOOL. All rights
              reserved.
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span>Child Safety Helpline: +1 (408) 555-0199</span>
              <span>•</span>
              <span>theharkerschool.in</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Complaints / Grievance Modal */}
      {showComplaintModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="complaintModalTitle"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
              <div
                className="modal-header text-white px-4 py-3"
                style={{
                  background:
                    "linear-gradient(90deg, #064e3b 0%, #065f46 100%)",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <ShieldAlert size={20} className="text-warning" />
                  <h5
                    className="modal-title fw-bold mb-0"
                    id="complaintModalTitle"
                  >
                    School Grievance &amp; Complaint Portal
                  </h5>
                </div>
                <button
                  type="button"
                  className="btn btn-sm text-white border-0 p-1"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body p-4">
                {submittedTicket ? (
                  <div className="text-center py-4">
                    <CheckCircle2 size={48} className="text-success mb-3" />
                    <h4 className="fw-bold text-dark">
                      Complaint Registered Successfully
                    </h4>
                    <p className="text-secondary small mb-3">
                      Aapki shikayat hamari Grievance Committee ko bhej di gayi
                      hai. Future tracking ke liye apni Ticket ID note kar lein:
                    </p>
                    <div className="alert alert-success d-inline-block px-4 py-2 fw-bold">
                      Ticket ID: {submittedTicket.id}
                    </div>
                    <p className="small text-muted mt-2 mb-4">
                      Category: <strong>{submittedTicket.category}</strong> •
                      Wing: <strong>{submittedTicket.wing}</strong>
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        type="button"
                        className="btn btn-success fw-semibold"
                        onClick={() => setSubmittedTicket(null)}
                      >
                        Submit Another
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleComplaintSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold">
                          Your Name {!complaintForm.anonymous && "*"}
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Enter full name"
                          value={complaintForm.fullName}
                          onChange={handleFieldChange}
                          required={!complaintForm.anonymous}
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold">
                          Role *
                        </label>
                        <select
                          name="role"
                          className="form-select"
                          value={complaintForm.role}
                          onChange={handleFieldChange}
                        >
                          <option value="Parent / Guardian">
                            Parent / Guardian
                          </option>
                          <option value="Student">Student</option>
                          <option value="Faculty / Staff">Faculty / Staff</option>
                          <option value="Visitor / Vendor">
                            Visitor / Vendor
                          </option>
                        </select>
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold">
                          School Wing *
                        </label>
                        <select
                          name="wing"
                          className="form-select"
                          value={complaintForm.wing}
                          onChange={handleFieldChange}
                        >
                          <option value="Junior Wing (K–5)">
                            Junior Wing (K–5)
                          </option>
                          <option value="Middle School (6–8)">
                            Middle School (6–8)
                          </option>
                          <option value="Senior Wing (9–12)">
                            Senior Wing (9–12)
                          </option>
                          <option value="Campus / Administration">
                            Campus / Administration
                          </option>
                        </select>
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold">
                          Complaint Category *
                        </label>
                        <select
                          name="category"
                          className="form-select"
                          value={complaintForm.category}
                          onChange={handleFieldChange}
                        >
                          <option value="Academic / Teaching">
                            Academic / Teaching
                          </option>
                          <option value="School Bus & Transport">
                            School Bus &amp; Transport
                          </option>
                          <option value="Safety, Security & Bullying">
                            Safety, Security &amp; Bullying
                          </option>
                          <option value="Cafeteria & Hygiene">
                            Cafeteria &amp; Hygiene
                          </option>
                          <option value="Fee & Billing Support">
                            Fee &amp; Billing Support
                          </option>
                          <option value="Infrastructure & Labs">
                            Infrastructure &amp; Labs
                          </option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label small fw-semibold">
                          Phone or Email for Update{" "}
                          {!complaintForm.anonymous && "*"}
                        </label>
                        <input
                          type="text"
                          name="contactInfo"
                          className="form-control"
                          placeholder="e.g. parent@example.com or +1 408..."
                          value={complaintForm.contactInfo}
                          onChange={handleFieldChange}
                          required={!complaintForm.anonymous}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label small fw-semibold">
                          Complaint Details *
                        </label>
                        <textarea
                          name="description"
                          rows="4"
                          className="form-control"
                          placeholder="Please describe the issue, date/time, or location clearly..."
                          value={complaintForm.description}
                          onChange={handleFieldChange}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            id="anonymousCheck"
                            type="checkbox"
                            name="anonymous"
                            className="form-check-input"
                            checked={complaintForm.anonymous}
                            onChange={handleFieldChange}
                          />
                          <label
                            htmlFor="anonymousCheck"
                            className="form-check-label small text-secondary"
                          >
                            Submit anonymously (keep my identity hidden)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn harker-btn-gold d-inline-flex align-items-center gap-2"
                      >
                        <Send size={15} />
                        <span>Submit Complaint</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;