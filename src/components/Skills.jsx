function Skills() {
  const skills = [
    {
      category: 'UI/UX Design',
      icon: 'ri-layout-4-line',
      tools: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 90 },
        { name: 'Sketch', level: 85 },
      ],
    },
    {
      category: 'Development',
      icon: 'ri-code-line',
      tools: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: 'ri-tools-line',
      tools: [
        { name: 'Git', level: 85 },
        { name: 'Jira', level: 90 },
        { name: 'Photoshop', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600">Technologies and tools I work with</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
                <i className={`${skill.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="space-y-3">
                {skill.tools.map((tool, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">{tool.name}</span>
                      <span className="text-sm text-gray-600">{tool.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-primary rounded-full"
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;