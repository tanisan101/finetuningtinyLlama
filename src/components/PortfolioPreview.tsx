import React from 'react';
import { ExternalLink, Github, Calendar, Star, Code } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
  date: string;
  status: 'Active' | 'Completed' | 'In Progress';
  category: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 'nokotan',
    name: 'Nokotan',
    description: 'An AI-powered chatbot designed to provide initial psychological help and mental health support to people in need. Built with advanced RAG (Retrieval-Augmented Generation) architecture.',
    githubUrl: 'https://github.com/tanisan101/nokotan',
    technologies: ['RAG', 'LangChain', 'Vector Database', 'JavaScript', 'HTML', 'CSS', 'Python', 'OpenAI API'],
    features: [
      'Real-time psychological support chat interface',
      'RAG-based knowledge retrieval system',
      'Contextual response generation',
      'Privacy-focused conversation handling',
      'Multi-language support capabilities'
    ],
    date: '2024',
    status: 'In Progress',
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'title-extractor',
    name: 'Title Extractor',
    description: 'A fine-tuned TinyLlama model specifically trained to extract headings and titles from uploaded research papers with high accuracy and contextual understanding.',
    githubUrl: 'https://github.com/tanisan101/title-extractor',
    technologies: ['LORA', 'PEFT', 'TinyLlama', 'Tokenization', 'Vector Database', 'PyTorch', 'Transformers'],
    features: [
      'Fine-tuned TinyLlama model for document analysis',
      'Automated heading extraction from research papers',
      'LORA (Low-Rank Adaptation) implementation',
      'Efficient parameter fine-tuning with PEFT',
      'Batch processing capabilities'
    ],
    date: '2024',
    status: 'Completed',
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'taniq-portfolio',
    name: 'TaniQ Portfolio',
    description: 'A modern minimalist portfolio website inspired by Japanese design philosophy, incorporating concepts of "Mono no aware" and "Wabi Sabi" for elegant simplicity.',
    githubUrl: 'https://github.com/tanisan101/taniq-portfolio',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CSS Animations'],
    features: [
      'Japanese-inspired minimalist design',
      'Smooth scroll animations and transitions',
      'Fully responsive across all devices',
      'Cherry blossom animation effects',
      'Clean typography and visual hierarchy'
    ],
    date: '2024',
    status: 'Active',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'pothole-detection',
    name: 'Pothole Detection System',
    description: 'A comprehensive deep learning solution for real-time pothole detection integrated with Google Maps API to visualize pothole locations and provide navigation assistance.',
    githubUrl: 'https://github.com/tanisan101/pothole-detection-system',
    technologies: ['YOLO', 'SSD', 'Fast R-CNN', 'Google Maps API', 'Flask', 'OpenCV', 'TensorFlow'],
    features: [
      'Real-time pothole detection using multiple CNN architectures',
      'Google Maps integration for location visualization',
      'REST API for mobile app integration',
      'Batch processing for road survey data',
      'Performance comparison between YOLO, SSD, and Fast R-CNN'
    ],
    date: '2023',
    status: 'Completed',
    category: 'Computer Vision',
    imageUrl: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'protein-structure-prediction',
    name: 'Protein Structure Prediction System',
    description: 'An interactive Streamlit application that predicts 3D protein structures from amino acid sequences using ESMFold, capable of handling over 600 million protein predictions.',
    githubUrl: 'https://github.com/tanisan101/protein-structure-prediction',
    technologies: ['ESMFold', 'Streamlit', 'py3Dmol', 'BioPython', 'PyTorch', 'Protein Analysis'],
    features: [
      'ESMFold integration for accurate structure prediction',
      'Interactive 3D protein visualization with py3Dmol',
      'Batch processing for multiple protein sequences',
      'Downloadable PDB files for further analysis',
      'User-friendly web interface with real-time predictions'
    ],
    date: '2023',
    status: 'Completed',
    category: 'Bioinformatics',
    imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const PortfolioPreview: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'bg-purple-100 text-purple-800';
      case 'Web Development': return 'bg-indigo-100 text-indigo-800';
      case 'Computer Vision': return 'bg-pink-100 text-pink-800';
      case 'Bioinformatics': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="portfolio-preview">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my work in AI/ML, web development, and data science. 
            Each project represents a journey of learning, innovation, and problem-solving.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Code className="w-4 h-4 mr-2" />
              <span>{projects.length} Projects</span>
            </div>
            <div className="flex items-center">
              <Github className="w-4 h-4 mr-2" />
              <span>All Open Source</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2" />
              <span>Production Ready</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="order-2 md:order-1">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Code className="w-16 h-16" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="order-1 md:order-2 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/tanisan101" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </a>
            <a 
              href="mailto:tanishkasingh1844@gmail.com"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};