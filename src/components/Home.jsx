import bgImage from '../assets/images/bg.jpg';
import profileImage from '../assets/images/profile.jpg';

function Home() {
    return (
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${bgImage})`,
            opacity: 0.1,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Hi, I'm John Anderson</h1>
              <h2 className="text-2xl text-gray-600 mb-8">Senior Product Designer</h2>
              <p className="text-lg text-gray-600 mb-12">
                With over 8 years of experience in creating user-centered digital products, I help
                businesses transform their ideas into meaningful experiences.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <button className="bg-primary text-white px-8 py-3 rounded-button whitespace-nowrap hover:bg-primary/90">
                    View Portfolio
                  </button>
                  <a
                  href="/assets/Basic_Resume.docx.pdf"
                  download="John_Anderson_CV.pdf"
                  className="border border-primary text-primary px-8 py-3 rounded-button whitespace-nowrap hover:bg-primary/5 text-center"
                >
                  Download CV
                </a>
                  
                </div>
                <div className="flex gap-4">
                  {[
                    { href: 'https://github.com/', icon: 'ri-github-fill' },
                    { href: 'https://linkedin.com/', icon: 'ri-linkedin-fill' },
                    { href: 'https://instagram.com/', icon: 'ri-instagram-fill' },
                    { href: 'https://dribbble.com/', icon: 'ri-dribbble-fill' },
                    { href: 'https://behance.net/', icon: 'ri-behance-fill' },
                  ].map(({ href, icon }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg hover:bg-primary/20"
                    >
                      <i className={`${icon} text-xl text-primary`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={profileImage}
                alt="John Anderson"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;