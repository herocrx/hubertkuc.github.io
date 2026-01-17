"use client";

import { siteConfig, aboutContent, experiences, education, skills } from "@/data/content";

export default function CVPage() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="cv-page bg-white text-black min-h-screen">
      {/* Print button - hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Save as PDF
        </button>
      </div>

      <div className="max-w-[210mm] mx-auto p-8 print:p-0">
        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-800 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{siteConfig.name}</h1>
          <p className="text-lg text-gray-700 mt-1">{siteConfig.title}</p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
            <span>{siteConfig.location}</span>
            <span>|</span>
            <span>{siteConfig.email}</span>
            <span>|</span>
            <a href={siteConfig.social.linkedin} className="text-blue-600">
              linkedin.com/in/hubertkuc
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {aboutContent.description.split('\n\n')[0]}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-sm text-gray-700">{exp.company} - {exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-sm text-gray-700">{edu.degree}</p>
                  {edu.highlights.length > 0 && (
                    <p className="text-xs text-gray-600 italic">{edu.highlights.join(" | ")}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">{edu.period}</span>
                  <p className="text-xs text-gray-500">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex">
                <span className="font-medium text-sm text-gray-800 w-24 flex-shrink-0">
                  {category}:
                </span>
                <span className="text-sm text-gray-700">
                  {skills
                    .filter((s) => s.category === category)
                    .map((s) => s.name)
                    .join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">
            Highlights
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            {aboutContent.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .cv-page {
            font-size: 11pt;
          }
        }
      `}</style>
    </div>
  );
}
