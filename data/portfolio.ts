export const PORTFOLIO_DATA = {
  personal: {
    name: 'Ajaykumar Solanki',
    role: 'Full Stack Developer | Lecturer',
    location: 'Vadodara, Gujarat',
    phone: '+91-8320531282',
    email: 'ajay.solanki1106@gmail.com',
    bio: 'Full Stack Developer with experience in cloud-native applications, modern web technologies, and AI-driven solutions. IBM-certified developer skilled in scalable, secure, and containerized applications. Currently working as a Lecturer mentoring students and managing academic responsibilities.',
  },

  stats: [
    { label: 'Projects Completed', value: 15, prefix: '' },
    { label: 'Years of Experience', value: 1.5, prefix: '' },
    { label: 'Happy Students', value: 100, prefix: '+' },
    { label: 'Client Rating', value: 4.9, prefix: '' },
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      proficiency: 90,
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Flask', 'Django'],
      proficiency: 85,
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'SQL', 'PostgreSQL', 'Firebase', 'Redis'],
      proficiency: 80,
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Git', 'GitHub'],
      proficiency: 75,
    },
    {
      category: 'Other',
      items: ['GSAP', 'Framer Motion', 'RESTful APIs', 'GraphQL', 'Microservices'],
      proficiency: 85,
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Personal Tattoo Portfolio Website',
      description: 'A Personal Tattoo Portfolio Website Made Using Tailwind',
      tech: ['Tailwind CSS', 'GSAP', 'Framer Motion', 'HTML', 'CSS', 'JavaScript'],
      image: '/images/Project-1.png',
      link: 'https://wanheda011.github.io/Tattoo-Website/',
      github: 'https://github.com/wanheda011/Tattoo-Website',
      details: 'Built a scalable SaaS application using microservices architecture with containerization using Docker and orchestration with Kubernetes. Implemented CI/CD pipelines for automated deployment.',
    },
    {
      id: 2,
      title: 'AI-Powered Web Application',
      description: 'Python and Mediapipe web app with integrated AI/ML models for intelligent features.',
      tech: ['Python', 'Mediapipe', 'TensorFlow'],
      image: '/images/Project-2.png',
      link: '#',
      github: 'https://github.com/wanheda011/Computer_Vision_Project',
      details: 'Developed a sophisticated web application combining Python and Mediapipe, integrating machine learning models for predictive analytics and intelligent recommendations.',
    },
  ],

  experience: [
    {
      id: 1,
      title: 'Lecturer',
      company: 'Parul University',
      period: 'Oct 2023 – Present',
      duration: '9+ months',
      description: 'Mentoring students, managing academic responsibilities, and teaching modern web development technologies.',
      achievements: [
        'Taught web development fundamentals to 100+ students',
        'Developed curriculum for advanced web technologies',
        'Led projects involving microservices and cloud computing',
      ],
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Alite Projects Ltd',
      period: '2022 – Oct 2023',
      duration: '1.5 years',
      description: 'Full-stack development of cloud-native applications with focus on scalability and security.',
      achievements: [
        'Developed 5+ production applications using React and Node.js',
        'Implemented microservices architecture and CI/CD pipelines',
        'Certified IBM Full Stack Software Developer',
        'Deployed applications on Kubernetes and OpenShift',
      ],
    },
  ],

  certifications: [
    {
      title: 'IBM Full Stack Software Developer Professional Certificate',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'IBM-FULLSTACK-2023',
    },
  ],

  workshops: [
    {
      id: 1,
      title: 'Cloud-Native Development with Kubernetes',
      date: 'March 2024',
      attendees: 50,
      description: 'Comprehensive workshop on containerization and Kubernetes orchestration',
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Node.js',
      date: 'January 2024',
      attendees: 45,
      description: 'Advanced Node.js patterns and best practices for API development',
    },
    {
      id: 3,
      title: 'Modern React Patterns',
      date: 'November 2023',
      attendees: 60,
      description: 'React hooks, context API, and performance optimization',
    },
  ],

  social: [
    {
      icon: 'github',
      url: 'https://github.com/wanheda011',
      label: 'GitHub',
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/ajaykumar-solanki-b61b5a22b/',
      label: 'LinkedIn',
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com',
      label: 'Twitter',
    },
  ],
};
