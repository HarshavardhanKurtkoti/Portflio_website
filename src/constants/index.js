export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Panda Sentiment Chat',
    desc: 'A modern, full-stack sentiment analysis chat application with user authentication, persistent chat history, real-time admin controls, and a beautiful UI inspired by ChatGPT and WhatsApp.',
    subdesc: 'Features real-time sentiment analysis, JWT authentication, persistent chat history, multi-session support, modern UI/UX, and an admin panel for user/chat management and stats.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/pandachatbot.ico',
    logoStyle: {
      backgroundColor: '#23263a',
      border: '0.2px solid #22c55e',
      boxShadow: '0px 0px 60px 0px #22c55e4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Flask', path: '/assets/flask.png' },
      { id: 4, name: 'MongoDB', path: '/assets/MongoDB.png' },
      { id: 5, name: 'Docker', path: '/assets/Docker.png' },
      { id: 6, name: 'JWT', path: '/assets/JWT.svg' },
      { id: 7, name: 'TextBlob', path: '/assets/textblob.png' },
    ],
    href: 'https://panda-chatbot-lxpt.vercel.app/',
  },
  {
    title: 'Phishing Domain Detection App',
    desc: 'Phising domain detector is a cutting-edge web app that revolutionizes phishing detection. It leverages cutting-edge AI technology to identify and prevent phishing attacks, ensuring secure online experiences for users.',
    subdesc:
      'Built as a unique Website which is designed for optimal performance and scalability.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'HTML5',
        path: '/assets/html.svg',

      },
      {
        id: 2,
        name: 'CSS3',
        path: '/assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.svg',
      },
      {
        id: 4,
        name: 'Scikit Learn',
        path: '/assets/sklearn.svg',
      },
    ],
  },
  {
    title: 'Water Potability Prediction with MLOps',
    desc: 'An end-to-end machine learning project predicting water potability using FastAPI backend and React + Vite frontend, incorporating MLOps best practices.',
    subdesc: 'Features include data processing, model training, deployment workflows, and a user-friendly UI for real-time predictions.',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#1E293B',
      border: '0.2px solid #2563EB',
      boxShadow: '0px 0px 60px 0px #2563EB4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.png' },
      { id: 2, name: 'FastAPI', path: '/assets/FastAPI.png' },
      { id: 3, name: 'React', path: '/assets/react.svg' },
      { id: 4, name: 'Docker', path: '/assets/Docker.png' },
      { id: 5, name: 'DVC', path: '/assets/dagshab.svg' },
    ],
    href: 'https://water-portability-front-end.vercel.app/',
  },
  {
    title: 'Machine Learning Streamlit App',
    desc: 'A Streamlit-based machine learning app that predicts penguin species using a Random Forest classifier. The app provides an interactive interface for users to input data and visualize predictions. It is designed to be user-friendly and educational, making it suitable for both beginners and experts in machine learning.',
    subdesc: 'Features include user input for real-time predictions, detailed data visualization, model inference using a trained Random Forest classifier, and dynamic updates to ensure accurate results. The app also includes a tutorial section to help users understand the underlying machine learning concepts.',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1E293B',
      border: '0.2px solid #10B981',
      boxShadow: '0px 0px 60px 0px #10B9814D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Streamlit', path: '/assets/st.png' },
      { id: 2, name: 'Pandas', path: '/assets/pandas.svg' },
      { id: 3, name: 'NumPy', path: '/assets/numpy.svg' },
      { id: 4, name: 'Scikit-learn', path: '/assets/sklearn.svg' },
      { id: 5, name: 'pytest', path: '/assets/pytest.svg' },
    ],
    href: 'https://penguin-species-prediction-harsha.streamlit.app/',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  
  {
    id: 1,
    name: 'Ahlbyte Fintech Pvt Ltd',
    pos: 'Data Science Intern',
    duration: 'November 2024 - present',
    title: "Currently working on data analysis and modeling projects to enhance business decision-making processes. Engaged in applying machine learning techniques to derive actionable insights from complex datasets.",
    icon: '/assets/pantech.jpg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Pantech.AI',
    pos: 'Generative AI intern',
    duration: 'September 2024 - November 2024',
    title: "Worked on projects involving generative AI models and deployed interactive applications using Streamlit. Assisted with containerization using Docker and managed deployments on AWS. Gained practical experience with version control and collaboration through Git and GitHub.",
    icon: '/assets/pantech.webp',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Oasis Infobyte',
    pos: 'Data Science Intern',
    duration: 'September 2024 - September 2024',
    title: "Assisted in maintaining machine learning pipelines and model deployment processes. Supported basic automation tasks for data workflows and model updates. Gained exposure to MLOps practices and tools used for model management.",
    icon: '/assets/oasis_infobyte.jpg',
    animation: 'victory',
  },
  {
    id: 4,
    name: 'CodSoft',
    pos: 'Data Science Intern',
    duration: 'August 2024 - August 2024',
    title: "Contributed to data-driven projects, applying statistical analysis and machine learning techniques. Assisted in data cleaning, visualization, and model development to support business insights. Learned and adhered to industry best practices for data handling and project management.",
    icon: '/assets/codsoft.avif',
    animation: 'clapping',
  },
  {
    id: 5,
    name: 'Prodigy InfoTech',
    pos: 'Machine Learning Intern',
    duration: 'July 2024 - June 2024',
    title: "Worked on ML projects, gaining exposure to industry standards and deep learning practices. Assisted in model training, data preparation, and project documentation. Enhanced skills in model optimization and collaboration within a professional setting.",
    icon: '/assets/Prodigy_InfoTech.svg',
    animation: 'salute',
  },
];
