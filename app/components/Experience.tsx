const experiences = [
  {
    title: "Finance Executive",
    company: "Global Brand PLC.",
    location: "West Panthapath / Dhaka",
    period: "January 2026 – Present",
    description:
      "Manage corporate credit exposure by assessing client risk. Set credit limits and ensure timely collections. Monitor accounts and analyze financial data. Implement strategies to reduce bad debt and improve cash flow.",
    skills: [
      "Credit Risk Assessment",
      "Financial Analysis",
      "Cash Flow Management",
      "Client Risk Evaluation",
    ],
  },
  {
    title: "Officer",
    company: "Global Brand PLC.",
    location: "Dhaka, Bangladesh",
    period: "November 2023 – December 2025",
    description:
      "Worked in credit control and risk management. Handled corporate accounts with focus on financial compliance and risk mitigation.",
    skills: ["Credit Control", "Risk Management", "Corporate Accounts"],
  },
  {
    title: "Credit Control & Risk Management (Corporate Accounts)",
    company: "Global Brand PLC.",
    location: "Bangladesh",
    period: "June 2019 – March 2026",
    description:
      "Managed corporate credit accounts. Performed risk assessment and monitoring. Ensured proper financial control and reporting throughout the organization.",
    skills: [
      "Accounting",
      "Risk Assessment",
      "Financial Reporting",
      "Data Analysis",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Experience
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have
            shaped my career
          </p>
        </div>

        <div>
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-700 opacity-40" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-all duration-500 z-10" />

                  {/* Experience Card */}
                  <div className="ml-8 sm:ml-16 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                      <div className="flex-1">
                        <div className="flex items-start mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg shadow-cyan-500/20 shrink-0">
                            <i className="fas fa-briefcase text-white text-sm sm:text-lg" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 break-words">
                              {exp.title}
                            </h3>
                            <h4 className="text-base sm:text-xl text-cyan-600 font-semibold break-words">
                              {exp.company}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-100 px-3 sm:px-4 py-2 rounded-xl border border-gray-200 mt-2 lg:mt-0 shrink-0">
                        <i className="fas fa-calendar-alt mr-2 text-cyan-600 text-sm" />
                        <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h5 className="text-cyan-600 font-semibold mb-3 flex items-center text-sm sm:text-base">
                        <i className="fas fa-chart-bar mr-2" />
                        Key Responsibilities
                      </h5>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20 whitespace-nowrap"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
