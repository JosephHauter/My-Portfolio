import React from 'react';
import WorkCard from './Work';

const Projects = () => {
  return (
    <div className="container mx-auto mb-10 max-w-screen-xl" id="projects">
      <h1 className="tablet:m-10 text-2xl font-bold">Projects.</h1>
      <div className="grid grid-cols-2 gap-10">
        <WorkCard key={"Project 1"}
          img={"images/Monkeypox_Proj.png"}
          name={"Hackathon Project - Virus Tracker"}
          description={"Hackathon Project that won Public Favorite was my first ever hackathon alongside with my teammates. We had a ton of fun and worked all night long and learned so much. Built with Javascript, D3.js, Chart.js, HTML, CSS, Bootstrap."}
          onClick={() => window.open("https://josephhauter.github.io/Virus-Tracker/")}
        />
        <WorkCard key={"Project 5"} img={"images/CollegeClassFinder.png"} name={"HunterCollegeClassFinder"} description={"Finds which classes are available for whatever major, starting with Computer Science classes. Scrapes CUNY class finder website and sends alerts to a Discord webhook about available classes. This project scrapes detailed class info, uses cheerio to parse HTML data, and handles session cookies. Future plans include automating checks with a cron job to notify on new class availability. Learned about managing cookie sessions, reading API promises, parsing HTML data, and integrating Discord webhooks for alerts."} onClick={() => window.open("https://github.com/JosephHauter/HunterCollegeClassFinder")} />
        <WorkCard key={"Project 6"} img={"images/WeatherMatch.png"} name={"Weather Match"} description={"Weather Match provides activities to do based on the weather or sightseeing for your hangouts or dates! It scrapes weather data and suggests activities accordingly. The project includes both a server and a client setup, handles API keys securely, and can be run with separate commands for the server and client. Ideal for planning perfect outings based on the current weather conditions."} onClick={() => window.open("https://github.com/JosephHauter/weathermatch")} />
        <WorkCard key={"Project 7"} img={"images/DogSitterBoard.png"} name={"Dog Sitter Board"} description={"\"Woof Woof\" is a dogsitter website where users can look for a dogsitter to hire or become one themselves. Users can view a list of job listings and, when logged in, can create posts that show up in the job listings. Completed features include a functioning server, database, homepage, navbar, jobs listing page, login and signup pages, user authentication, dashboard, and a create post page. Future improvements include editing user bios, adding a comment section, and a 'like' button for posts."} onClick={() => window.open("https://github.com/JosephHauter/dog-sitter-board")} />
        <WorkCard key={"Project 2"} img={"/images/WorldHunger.png"} name={"Fight World Hunger"} description={"Built part of my bootcamp with CodePath for Web development, features finding your local food bank, news on food shortage, and teaches valuable lessons."} onClick={() => window.open("https://josephhauter.github.io/Fight-World-Hunger/")} />
        <WorkCard key={"Project 8"} img={"images/dashboard.png"} name={"Country Market Data Dashboard"} description={"This project is a data dashboard that allows you to explore different types of data for various countries. It uses data from the Quandl API and presents it in a user-friendly format using Dash and Plotly. The dashboard includes several interactive components such as dropdowns and sliders that allow you to filter the data, and it displays the data in various types of charts including line charts, bar charts, and a heatmap."} onClick={() => window.open("https://github.com/JosephHauter/country-market-dashboard")} />
        <WorkCard key={"Project 3"} img={"images/twitterClone.png"} name={"Twitter Clone"} description={"Twitter Clone built with teammate for a bootcamp built with Javascript, Next.js, HTML, CSS, MongoDB."} onClick={() => window.open("https://github.com/JosephHauter/Social-Media-App")} />
        <WorkCard key={"Project 4"} img={"images/Tracker.png"} name={"ToDoList Tracker"} description={"Wanted to learn React.js, and what better way than to start with an activity tracker, but with a motivational quote API every time you refresh."} onClick={() => window.open("https://todo-list-five-rose.vercel.app/")} />
      </div>
    </div>
  );
}

export default Projects;
