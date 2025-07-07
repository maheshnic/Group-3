import React, { useState } from 'react';
import { FaQuestionCircle, FaSearch } from 'react-icons/fa';

//Content for the FAQ page
const topics = [{
    title: 'General Questions',
    faqs: [
      { q: 'What is this website for?', a: 'This website serves as an official platform where users can access detailed information about services, announcements, recruitment openings, and various procedures offered by the organization. It provides a central hub for updates, guidelines, and contact details.' },
      { q: 'Is registration required?', a: 'Registration is not mandatory to browse general information. However, to apply for specific services, job openings, or to receive personalized notifications, users are encouraged to create an account and log in securely.' },
      { q: 'How to navigate the site?', a: 'The site features a clear top navigation bar with links to main sections. Users can explore pages through the menu, use search functions, or access quick links provided on the homepage for commonly visited sections.' },
      { q: 'Which browsers are supported?', a: 'We recommend using modern browsers like Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari to ensure the best experience. The website is optimized for both desktop and mobile views.' }
    ]
  },
  {
    title: 'Account Info',
    faqs: [
      { q: 'How do I reset my password?', a: 'Click on the "Forgot Password" link on the login page, enter your registered email, and follow the instructions sent to your email to securely reset your password.' },
      { q: 'Can I update my email?', a: 'Yes. After logging into your account, navigate to the profile or account settings section where you can update your registered email address and verify it.' },
      { q: 'How do I delete my account?', a: 'To request account deletion, please contact our support team through the Helpdesk. Ensure that you have cleared any pending applications or transactions before requesting deletion.' },
      { q: 'How to change username?', a: 'Username changes can be made in the profile settings section if allowed by the system, or you may contact support for assistance.' }
    ]
  },
  {
    title: 'Security',
    faqs: [
      { q: 'Is my data secure?', a: 'Yes, we use modern encryption standards and security protocols to protect your data. Our platform follows best practices for data privacy and security.' },
      { q: 'Can I enable 2FA?', a: 'Two-Factor Authentication (2FA) is available under security settings in your account. Enabling 2FA adds an extra layer of protection to your account.' },
      { q: 'How do I report suspicious activity?', a: 'If you notice any unauthorized access or suspicious behavior, report it immediately using the Helpdesk or contact form so that our security team can investigate.' },
      { q: 'Are my payment details safe?', a: 'Yes, all payments are processed through trusted and secure payment gateways. We do not store sensitive payment information on our servers.' }
    ]
  },
  {
    title: 'Application Process',
    faqs: [
      { q: 'How to apply for a position?', a: 'Visit the Recruitment Openings section, select the desired post, and follow the step-by-step instructions to fill and submit your application form online.' },
      { q: 'Can I edit my application?', a: 'Applications can be edited before final submission or the closing date. After submission, modifications may not be allowed.' },
      { q: 'What documents are required?', a: 'Generally, ID proof, educational certificates, and a recent photograph are required. The specific list is provided in the recruitment advertisement.' },
      { q: 'How to track my application?', a: 'Log into your account and go to the application status page to view updates regarding your submitted applications.' }
    ]
  },
  {
    title: 'Technical Support',
    faqs: [
      { q: 'Site not loading properly?', a: 'Clear your browser cache and cookies, or try accessing the site from a different browser or device. Ensure your internet connection is stable.' },
      { q: 'Error while submitting form?', a: 'Double-check that all required fields are filled and formatted correctly. If the issue persists, try refreshing the page or contact support.' },
      { q: 'How to contact support?', a: 'You can reach our support team through the Helpdesk section. Fill out the form with your query and our team will get back to you promptly.' },
      { q: 'How to report a bug?', a: 'Use the feedback or Helpdesk form to provide details about the issue. Include screenshots or error messages to help our technical team resolve it quickly.' }
    ]
  }];

export default function FAQs() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState({});

  //Used for toggling the expansion of a section
  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-100 px-5 py-4 rounded-xl">
      <h1 className="text-4xl text-sky-900 font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>

      {/*This is the Search bar */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-5 bg-white shadow-sm">
        <FaSearch className="text-gray-500 ml-3 w-5 h-5" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 text-base focus:outline-none"
        />
      </div>

      {/* This is the main section of the faq page */}
      {topics.map((topic, index) => {
        const filteredFaqs = topic.faqs.filter(f =>
          f.q.toLowerCase().includes(search.toLowerCase())
        );
        if (filteredFaqs.length === 0) return null;

        const showAll = expanded[index];
        const visibleFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 2);

        return (
          <div key={index} className="bg-white border-l-4 border-blue-400 rounded shadow-sm p-5 mb-5">
            <h2 className="text-2xl p-2 text-sky-900 bg-slate-100 rounded font-semibold mb-3">
              {topic.title}
            </h2>
            <div className="space-y-3 max-h-[320px] overflow-auto pr-1">
              {visibleFaqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded border border-blue-100 flex items-start gap-3">
                  <FaQuestionCircle className="text-blue-400 w-5 h-5 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">{faq.q}</div>
                    <div className="text-gray-700 text-base">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
            {filteredFaqs.length > 2 && (
              <button
                className="text-blue-600 text-sm font-medium mt-3 cursor-pointer hover:underline"
                onClick={() => toggleExpand(index)}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}