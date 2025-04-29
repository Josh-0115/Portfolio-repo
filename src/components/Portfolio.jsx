import dashboardImage from '../assets/images/dashboard.jpg';
import webdesignImage from '../assets/images/webdesign.jpg';
import analyticsdashboardImage from '../assets/images/analytics dashboard.jpg';

function Portfolio({ openProjectModal }) {
    const projects = [
      {
        type: 'Mobile App',
        title: 'FinTech Dashboard',
        description:
          'A comprehensive financial management application with real-time analytics and intuitive interface.',
        image: dashboardImage,
      },
      {
        type: 'Web Design',
        title: 'E-commerce Platform',
        description:
          'A modern e-commerce platform with seamless checkout experience and personalized recommendations.',
        image: webdesignImage,
      },
      {
        type: 'SaaS Product',
        title: 'Analytics Dashboard',
        description:
          'An enterprise analytics platform with advanced data visualization and reporting capabilities.',
        image: analyticsdashboardImage,
      },
    ];
  
    return (
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600">A selection of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{project.type}</span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <button
                    onClick={() => openProjectModal(project.title)}
                    className="mt-4 text-primary hover:text-primary/80"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;