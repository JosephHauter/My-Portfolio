import React from 'react';
import Header from '../components/Header';
  // Add more posts here

const posts = [
  { title: 'Completed Okta Internship', content: 'During my Okta internship, I developed and deployed a Java app on AWS-ECS, integrating Boomi API and AWS S3. This project significantly reduced errors through proactive monitoring and notifications. I also implemented a Splunk dashboard and alert system that leverages Machine Learning to detect outliers, enhancing error detection and response times. Additionally, I designed and developed a monitoring service from concept to deployment, which continues to assist multiple teams, saving time and resources.', date: '2024-8-06', image: './images/okta-offer-accept-black.png' },
  { title: 'Final day of GSWEP x Basta', content: 'I was mentored for roughly 10 weeks with a Google Enginner and I can say it was one of the greatest experience ever. I was assigned MIT lecuture videos and practiced everyday my data strucutres and algorithems and had a great connection with my mentor. By the end I was really inspired by my mentor and hope to one day be just like him.', date: '2023-10-02', image: './images/GSwep.jpg' },
  { title: 'Finished my Internship @ American Express', content: 'Where do i begin... I met so many cool people, so many smart people who were passionite about their work, I learned the companys tech stack and used very awesome internal tools. My hiring manager and the other swes in my team really inspired me watching them work, talk, and taught me the importance and value of communication and networking with others.', date: '2023-08-11', image: './images/Amex photo.jpg' },
  { title: 'Won My First Hackathon', content: 'Entered this hackathon blindly and worked with people from all over the world, made so many friends, my team chose me to lead and honestly I was scared but wanted to give it my best. I stayed up 2 nights working with my team built the foundation for the page and assisted everyone in my team whenever they needed it. Shout to my team!!!', date: '2022-09-01', image: './images/HackathonWin.jpg' },
];

const Blog = () => {
  return (
    <div className="container mx-auto mb-10">
      <Header />
      <h1 className="text-4xl font-bold mb-5">Blog.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="mb-8 flex flex-col h-full">
            <div className="w-full h-60 rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
            </div>
            <div className="mt-5 flex-grow">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="mt-3 text-base">{post.content}</p>
              <span className="mt-2 text-sm text-gray-500">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
