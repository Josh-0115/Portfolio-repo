import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import HireModal from './components/HireModal';
import ProjectModal from './components/ProjectModal';
import { useState } from 'react';

function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openHireModal = () => {
    setIsHireModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeHireModal = () => {
    setIsHireModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openProjectModal = (projectName) => {
    setSelectedProject(projectName);
    setIsProjectModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-white font-inter">
      <Navbar openHireModal={openHireModal} />
      <Home />
      <Portfolio openProjectModal={openProjectModal} />
      <Skills />
      <Testimonials />
      <Contact />
      <HireModal isOpen={isHireModalOpen} closeModal={closeHireModal} />
      <ProjectModal
        isOpen={isProjectModalOpen}
        closeModal={closeProjectModal}
        projectName={selectedProject}
      />
    </div>
  );
}

export default App;