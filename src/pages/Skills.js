import React from 'react';
import SkillsCard from '../components/Skills';

const Skills = () => {
  return (
    <div className="container mx-auto mb-10 max-w-screen-xl" id="skills">
      <h1 className="tablet:m-10 text-2xl font-bold">Skills.</h1>
      <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
        <SkillsCard key={"Skills 1"} name={"Programming Languages"} description={"Python, Java, C++, Javascript, HTML, CSS, PosgreSQL, SCSS, Ruby, SQL, GO"} />
        <SkillsCard key={"Skills 2"} name={"Frameworks"} description={"React, ExpressJs, NodeJs, AWS-ECS, AWS-S3, AWS-Secrets Manager"} />
        {/* <SkillsCard key={"Skills 3"} name={"Libraries"} description={""} /> */}
        <SkillsCard key={"Skills 4"} name={"Tools"} description={"Docker, Tailwindcss, selenium, Webdriverio, Axios, Cucumber, Maven, mobproxy, Splunk, Git, MongoDB, Gitlab, Postman, AWS, Unix, SonarQube, Snyk, OWASP"} />
        <SkillsCard key={"Skills 5"} name={"Vocal languages"} description={"English-Native, Spanish-Beginner, French-Beginner, Arabic-Beginner"} />
      </div>
    </div>
  );
};

export default Skills;
