// src/pages/AboutUs.jsx
import React, { useState } from 'react'


//This is the content for the about us page sections
const sections = {
  Overview: [
    `The National Informatics Centre (NIC) serves as the digital backbone of India’s government ecosystem. Established in 1976, NIC has grown from a small cadre of computing enthusiasts into a vast network supporting thousands of applications across central and state bodies.`,
    `Over the decades, NIC has pioneered mission‑critical platforms—ranging from secure data exchange networks to citizen‑centric portals—that empower millions of users daily. Its vision remains constant: harness technology to make governance transparent, efficient, and accessible to all.`,
    `Today, NIC operates state‑of‑the‑art data centers, manages high‑availability networks, and offers consultancy to ministries on cutting‑edge solutions like AI‑driven analytics, blockchain‑enabled registries, and IoT‑powered civic services.`,
    `By collaborating with academia, industry, and international agencies, NIC continuously incubates research projects that forecast future needs—ensuring India remains at the forefront of e‑Governance innovation.`,
    `In recent years, NIC has embraced cloud‑native architectures, microservices, and containerization to deliver scalable, resilient services that adapt to surges in user demand without compromising performance or security.`,
    `As partners in the Digital India initiative, NIC teams work hand‑in‑hand with policymakers to co‑design and iterate solutions, drawing on real‑world feedback from district‑level administrators, frontline workers, and end‑users.`,
    `Looking ahead, NIC is exploring quantum‑safe encryption standards, 5G‑enabled edge computing, and decentralized identity frameworks—continuing its legacy as a laboratory for government technology excellence.`,
  ],
  History: [
    `In March 1976, NIC was born amid a government push to modernize administrative processes. Its first project: automating tax filing in New Delhi, which saved hundreds of man‑hours each month.`,
    `During the 1980s, NIC expanded to five regional centers, introducing India’s earliest government mainframe installations. These installations processed the country’s first computerized census data, revolutionizing demographic analysis.`,
    `By the early 1990s, NICNET connected 27 state secretariats via dial‑up, paving the way for secure email and file‑transfer services between ministries—dramatically reducing paperwork and inter‑departmental delays.`,
    `The 2000s marked NIC’s shift to web‑based services: launching e‑Procurement, e‑Hospital, and e‑Office platforms that collectively handle millions of transactions each day, from hospital appointments to procurement tenders.`,
    `Mid‑2000s saw the creation of the National Citizen Database and UID integration pilots, laying groundwork for India’s world‑leading digital identity ecosystem.`,
    `In the 2010s, NIC reorganized its R&D division to focus on emerging fields like AI, machine learning, and data analytics, producing prototypes that informed national policy in areas such as disaster response and public health.`,
    `Today, the NIC legacy is marked by iterative growth—each decade building on the last, with steady investments in people, processes, and platforms that keep India’s e‑Governance engine running smoothly.`,
  ],
  Infrastructure: [
    `NIC’s three Tier‑III data centers—located in Delhi, Hyderabad, and Pune—provide redundant power systems, advanced cooling, and state‑of‑the‑art fire suppression. Each facility is ISO‑certified for security and operational excellence.`,
    `Underneath the data centers lies NICNET: a 200,000 km fiber‑optic backbone with MPLS‑VPN lanes, ring topologies for fault tolerance, and 24×7 Network Operations Centers monitoring performance in real time.`,
    `More than 1,500 servers, spread across multiple virtualization clusters, host a diverse portfolio of applications—from citizen grievance redressal to high‑volume tax‑processing engines.`,
    `Edge‑compute nodes, deployed at key district headquarters, reduce latency for time‑sensitive services (e.g., e‑Passports), ensuring rapid response even in the most remote areas.`,
    `Disaster recovery drills take place quarterly, validating automated failover capabilities between each data center. In 2023’s DR test, NIC achieved full site‑failover in under 90 seconds.`,
    `NIC’s network backbone also includes satellite‑linked last‑mile connectivity for inaccessible regions, ensuring that even front‑line remote‑area offices can access core government applications.`,
    `Looking forward, NIC plans to deploy 5G‑enabled MEC (Multi‑access Edge Compute) nodes in smart city pilot zones, enabling ultra‑low‑latency civic services and real‑time IoT analytics.`,
  ],
  Services: [
    `• e‑Procurement: A unified tendering portal with end‑to‑end digital workflows, handling over 3 million bids annually across 50+ departments. It features AI‑driven bid evaluation suggestions, real‑time vendor performance dashboards, and blockchain‑based audit trails to prevent tampering.\n\n`,
    `• e‑Hospital: Manages patient registrations, laboratory results, and teleconsultations for 700+ hospitals, processing 1.5 million transactions per day. Integration with health insurance systems ensures seamless claims processing and fraud detection.\n\n`,
    `• e‑Office: A paperless office workflow platform used by 60+ ministries, featuring role‑based dashboards, digital signatures, automated reminders, and archival search powered by NLP for rapid retrieval of historical records.\n\n`,
    `• Geo‑Spatial Services: Custom GIS mapping for disaster management—providing real‑time flood forecasts, cyclone tracking, crop‑health monitoring, and relief distribution planning. It integrates satellite data, IoT sensors, and machine‑learning models for predictive analytics.\n\n`,
    `• National Data Sharing Platform: Publishes open government data sets in standard formats (CSV, JSON, GeoJSON) for public reuse; features RESTful APIs supporting 200+ data categories, enabling third‑party developers to build apps on top of government data.`,
    `These services illustrate NIC’s end‑to‑end capability: from infrastructure to application, from data collection to citizen‑facing portals, ensuring the government’s digital agenda delivers tangible results on the ground.`,
  ],
  Contributions: [
    `NIC’s platforms enable over 200 million citizen interactions monthly—ranging from filing taxes to applying for government certificates—dramatically reducing paperwork and turnaround times from weeks to minutes.`,
    `During the COVID‑19 crisis, NIC developed and maintained CoWIN and Aarogya Setu. CoWIN managed over 1 billion vaccination appointments, while Aarogya Setu delivered real‑time health analytics to policymakers, informing dynamic containment strategies.`,
    `In partnership with the National Disaster Response Force (NDRF) and state agencies, NIC’s GIS division provided emergency mapping support during floods, earthquakes, and cyclones—enabling rapid resource allocation and rescue operations.`,
    `NIC also spearheads academic collaborations—funding over 100 research projects in AI, cybersecurity, and big data with leading institutions such as IISc, IITs, and IIITs—translating research breakthroughs into scalable government solutions.`,
    `Through its skilling initiatives, NIC trains over 5,000 government IT professionals annually, conducting workshops, certifying proficiency in cloud technologies, and nurturing the next generation of e‑Governance experts.`,
    `By publishing open-source toolkits (e.g., DigiLocker SDK, e‑Office UI library), NIC empowers state governments and private sector partners to build customized solutions that integrate seamlessly with central platforms.`,
  ],
  Partnerships: [
    `NIC maintains strategic alliances with global agencies—United Nations Development Programme (UNDP), World Bank, and Commonwealth Secretariat—to exchange best practices and develop open‑source e‑Government frameworks adaptable to diverse national contexts.`,
    `It hosts large‑scale hackathons, mobilizing over 2,000 developers, students, and entrepreneurs annually to prototype next‑gen civic apps on government APIs and open data, seeding a vibrant digital innovation ecosystem.`,
    `Through MoUs with leading technology firms, NIC pilots emerging technologies—such as blockchain for land registries, virtual reality for police training simulations, and AI‑driven legal aid chatbots—before scaling successful pilots to production.`,
    `Cross‑border collaborations with Southeast Asian and African governments help export India’s e‑Governance expertise, training foreign officials in NIC’s data‑center best practices, network operations, and citizen‑centric design methodologies.`,
    `NIC also co‑hosts international conferences—like the Global e‑Governance Forum—bringing together policymakers, technologists, and academics to chart the future of digital public service delivery worldwide.`,
    `These partnerships ensure that NIC remains a learning organization—continuously integrating global innovations into India’s governance fabric while showcasing India’s digital leadership on the world stage.`,
  ],
}

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState('Overview')

  return (
    <div className="flex">

      {/*Sidebar of the about us page*/}
      <aside className="w-64 pb-10">
        <ul className="mt-6">
          {Object.keys(sections).map(sec => (
            <li key={sec}>
              <button
                onClick={() => setActiveSection(sec)}
                className={`block w-full px-4 py-3 border-y-1 border-slate-300 rounded-md text-center text-white font-semibold text-xl hover:cursor-pointer ${
                  activeSection === sec
                    ? 'bg-sky-600'
                    : ' bg-sky-900 hover:bg-sky-600 duration-100 ease-in-out'
                }`}
              >
                {sec}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content of the about us page*/}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">
          {activeSection}
        </h1>
        {sections[activeSection].map((para, i) => (
          <p key={i} className="mb-6 text-lg leading-relaxed">
            {para}
          </p>
        ))}
      </main>
    </div>
  )
}
