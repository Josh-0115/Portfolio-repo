import dashboardImage from '../assets/images/dashboard.jpg';
import webdesignImage from '../assets/images/webdesign.jpg';
import analyticsdashboardImage from '../assets/images/analytics dashboard.jpg';


function ProjectModal({ isOpen, closeModal, projectName }) {
    const projectData = {
      'FinTech Dashboard': {
        description:
          'A comprehensive financial management application designed for both personal and business users. The dashboard provides real-time analytics, transaction monitoring, and investment tracking.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        features: [
          'Real-time financial data visualization',
          'Customizable dashboard widgets',
          'Advanced filtering and sorting capabilities',
          'Responsive design for all devices',
        ],
        image: dashboardImage,
      },
      'E-commerce Platform': {
        description:
          'A modern e-commerce platform built with a focus on user experience and conversion optimization. Features include personalized recommendations, seamless checkout, and inventory management.',
        technologies: ['Vue.js', 'Vuex', 'SCSS', 'Firebase'],
        features: [
          'AI-powered product recommendations',
          'One-click checkout process',
          'Real-time inventory tracking',
          'Integration with multiple payment gateways',
        ],
        image: webdesignImage,
      },
      'Analytics Dashboard': {
        description:
          'An enterprise analytics platform that helps businesses make data-driven decisions. The platform includes advanced visualization tools and automated reporting capabilities.',
        technologies: ['Angular', 'D3.js', 'Material UI', 'Python'],
        features: [
          'Custom report builder',
          'Advanced data filtering',
          'Export functionality',
          'Role-based access control',
        ],
        image: analyticsdashboardImage,
      },
    };
  
    if (!isOpen || !projectName || !projectData[projectName]) return null;
  
    const project = projectData[projectName];
  
    return (
      <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{projectName}</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <div>
                <img
                  src={project.image}
                  alt={projectName}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href="#"
                    className="bg-primary text-white px-6 py-2 rounded-button hover:bg-primary/90"
                  >
                    View Live
                  </a>
                  <a
                    href="#"
                    className="border border-primary text-primary px-6 py-2 rounded-button hover:bg-primary/5"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectModal;