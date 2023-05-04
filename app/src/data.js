const data = {
  bio: {
    name: 'Brittany Grant',
    location: 'Maryland, USA',
    timeZone: 'Eastern Time (UTC-5)',
    intro: 'Highly motivated and detail-oriented DevOps Engineer with 5 years of full stack web development background.  Over 3 years of experience monitoring, maintaining, automating, and optimizing infrastructure on AWS. Knowledgeable of configuration management, source control, and infrastructure as code principles.',
    linkedin: 'https://linkedin.com/in/brittanylg',
    github: 'https://github.com/brittanylg',
  },
  experience: [
    {
      company: 'Imperfect Foods (acquired by Misfits Market Nov. 2022)',
      location: 'Remote',
      title: 'DevOps Engineer',
      dates: 'October 2022 - April 2023',
      duties: [
        'Managed all cloud-based infrastructure, including a microservices backend deployed to Elastic Beanstalk and ECS, with data persistence handled by PostgreSQL RDS instances.',
        'Collaborated with QA to migrate the internal test automation suite from GitHub and CircleCI to GitLab post-merger.',
        'Contributed to new CI/CD pipeline to build and release multiple “flavors” of Android and iOS mobile apps from a single codebase.',
      ],
      skills: [
        'AWS (ECS, RDS PostgreSQL, S3, Cognito)', 
        'Docker', 
        'Terraform', 
        'CI/CD (CircleCI, GitLab CI)', 
        'Datadog',
        'Bash',
      ],
    },
    {
      company: 'D3 Corp',
      location: 'Ocean City, MD (remote)',
      title: 'DevOps Engineer',
      dates: 'January 2020 - September 2022',
      duties: [
        'Deployed containerized web applications to AWS infrastructure provisioned using Terraform.',
        'Monitored infrastructure and mitigated vulnerabilities for maximum uptime.',
        'Collaborated with systems administrators to improve engineering tools, development procedures, and Ansible configurations.',
        'Performed periodic audits of AWS infrastructure and optimized services to lower company costs.',
      ],
      skills: [
        'AWS (EC2, RDS, Route53, S3, IAM)', 
        'Ansible', 
        'Docker', 
        'Terraform', 
        'CI/CD (GitLab CI)', 
        'Grafana',
        'Bash',
      ],
    },
    {
      company: 'D3 Corp',
      location: 'Ocean City, MD',
      title: 'Web Developer',
      dates: 'June 2016 - February 2021',
      duties: [
        'Developed and maintained fully responsive websites using WordPress and in-house CMS platforms which adhered to SEO and accessibility standards.',
        'Utilized code versioning tools and continuous deployment strategies to develop and maintain client websites.',
        'Assisted in training and onboarding junior employees and new hires, including writing and maintaining documentation for technical and non-technical staff.',
      ],
      skills: [
        'Git', 
        'HTML', 
        'CSS', 
        'JavaScript', 
        'PHP', 
        'Laravel', 
        'WordPress', 
        'Shopify',
      ],
    },
  ],
  projects: [
    {
      name: 'Cloud Resume Challenge',
      description: 'The original challege rules called for a simple HTML and CSS resume website to be built, including a visitor counter written in JavaScript.  Since I have a lot of front end experience, I decided to build a resume website using React instead.  The website is deployed to Amazon S3 as a static website.  DNS is managed in an Amazon Route 53 zone.',
      techStack: [
        'React',
        'Python',
        'Amazon S3',
        'Amazon Route 53',
        'Amazon CloudFront',
        'Amazon DynamoDB',
        'Amazon API Gateway',
        'AWS Lambda',
        'AWS Serverless Application Model (SAM)',
        'GitHub Actions',
      ],
      github: 'https://github.com/brittanylg/cloud-resume-challenge',
      link: 'https://brittanylg.com',
    },
  ],
  education: [
    {
      name: 'DeVry University',
      location: 'Online',
      dates: 'September 2013 - April 2016',
      degree: 'B.S. Computer Information Systems',
      concentration: 'Web Development & Administration Concentration',
    },
    {
      name: 'Wor-Wic Community College',
      location: 'Salisbury, MD',
      dates: 'September 2010 - May 2013',
      degree: 'Studied Computer Science',
      concentration: 'Web Development Concentration',
    },
  ],
}

export default data;