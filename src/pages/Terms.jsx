import React, { useState } from 'react';


const sections = {
  'Terms & Conditions': [
    'By accessing or using this platform, you affirm that you are at least 18 years old or have the consent of a parent or guardian.',
    'You agree to comply with all applicable local, state, national, and international laws when using our services.',
    'This platform is provided “as is” and “as available” without any warranties of any kind—express or implied.',
    'We reserve the right to modify, suspend, or discontinue any aspect of the platform at our sole discretion and without notice.',
    'Your continued use after any changes constitutes acceptance of the updated terms.',
    'You are responsible for safeguarding your account credentials; any activity under your account is your responsibility.',
    'Unauthorized copying, distribution, or modification of any content is strictly prohibited and may result in legal action.',
    'We may terminate or restrict your access immediately if you violate these terms or any policies referenced herein.',
    'We retain the right to remove any content that, in our judgment, is inappropriate, offensive, or violates these terms.',
    'Any disputes arising from these terms will be resolved under the laws of India in the courts of New Delhi.',
    'We may use third-party services (e.g., payment processors, hosting providers) whose terms also apply.',
    'You must not use automated means (bots, scrapers) to access or interact with the platform without our express permission.',
    'All intellectual property rights in the platform and its content belong to us or our licensors.',
    'You may download or print content solely for your personal, non-commercial use, provided you keep all copyright notices intact.',
    'You agree not to interfere with or disrupt any aspect of the platform’s operation, including servers or networks.',
    'We disclaim liability for any indirect, incidental, or consequential damages arising from your use of the platform.',
    'If any provision of these terms is held to be invalid or unenforceable, the remaining provisions will remain in full effect.',
    'These terms constitute the entire agreement between you and the platform and supersede any prior agreements.',
    'No waiver of any breach or right shall be deemed a waiver of any subsequent breach or right.',
    'Questions about these terms should be directed to our legal department via the Contact Us page.'
  ],
  'Privacy Policy': [
    'We collect personal information (name, email, contact number) strictly to provide and improve our services.',
    'Sensitive data (e.g., identity documents) is encrypted both in transit (TLS) and at rest using industry-standard algorithms.',
    'We use cookies and similar technologies to personalize content, analyze usage patterns, and enhance user experience.',
    'We do not sell or rent your personal data to third parties; any sharing is only for legal compliance or with your explicit consent.',
    'You have the right to request access, correction, or deletion of your personal data by contacting our Data Protection Officer.',
    'We retain your information only as long as necessary for the purposes described, or to comply with legal obligations.',
    'Our data retention schedules are reviewed annually to minimize storage of outdated or unnecessary information.',
    'We implement access controls, audit logs, and intrusion detection systems to prevent unauthorized data access.',
    'Third-party analytics providers (e.g., Google Analytics) may process usage data under strict contractual agreements.',
    'We may disclose anonymized, aggregated data for research or statistical purposes without identifying any individual.',
    'If there is a data breach, we will notify affected users and regulators in accordance with applicable data protection laws.',
    'Our servers are hosted in certified data centers within India, ensuring compliance with local data residency requirements.',
    'International transfers, if any, are governed by standard contractual clauses approved by the Indian government.',
    'You may opt out of marketing communications at any time via the unsubscribe link in our emails.',
    'Children under 18 are not permitted to register; if we learn of such registration, we will delete the data promptly.',
    'We may use behavioral profiling to recommend services, but you can disable this feature in your account settings.',
    'Changes to this policy will be posted here with an updated “Last Revised” date; your continued use indicates acceptance.',
    'For any questions or complaints about privacy, please reach out to privacy@nic.in or our Data Protection Officer.',
    'We periodically conduct privacy impact assessments for new features to identify and mitigate risks.',
    'This policy is governed by the laws of India; any disputes will be subject to the exclusive jurisdiction of courts in New Delhi.'
  ]
};


export default function Terms() {
  const [active, setActive] = useState('Terms & Conditions');

  return (
    <div className="flex">
      
      {/*Terms page sidebar */}
      <aside className="w-64 pb-10">
        <ul className="mt-6">
          {Object.keys(sections).map(section => (
            <li key={section}>
              <button
                onClick={() => setActive(section)}
                className={`block w-full px-4 py-3 border-y-1 border-slate-300 rounded-md text-center text-white font-semibold text-xl hover:cursor-pointer ${
                  active === section
                    ? 'bg-sky-600'
                    : 'bg-sky-900 hover:bg-sky-600 duration-100 ease-in-out'
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Terms page content area */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">{active}</h1>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          {sections[active].map((para, idx) => (
            <p key={idx} className="mb-1 text-lg leading-relaxed">{para}</p>
          ))}
        </div>
      </main>
    </div>
  );
}