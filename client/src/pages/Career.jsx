import AnimePoster from "../assets/anime-poster.png";
import { courses } from "../jsons/json";
import paper from "../assets/white-paper.png";

const Career = () => {
  return (
    <section className="w-full min-h-screen mx-auto mt-30 md:mt-18 text-white">
      <div
        className="w-full h-90 bg-cover bg-[50%] [filter: grayscale(40%) brightness(30%)]"
        style={{ backgroundImage: `url(${AnimePoster})` }}
      ></div>

      <div className="min-h-70 h-full max-w-4xl mx-auto text-center p-10">
        <h4 className="text-lg md:text-3xl font-semibold">
          We are <span className="text-vivid-red font-bold">RECRUITING</span>
        </h4>
        <h2 className="text-3xl md:text-5xl font-semibold">creative & awesome people</h2>
        <p className="text-lg font-normal my-10">
          Join our Internship Program and fast-track your growth...! <br />
          We’re onboarding smart, creative learners ready to upskill,
          collaborate, and build real-world projects with{" "}
          <span className="text-light-yellow font-bold">
            Anicomic International
          </span>
          .
        </p>
      </div>

      <div
        className="min-h-screen max-w-screen p-10 text-black bg-cover"
        style={{ backgroundImage: ` url(${paper})` }}
      >
        <h1 className="font-bold text-4xl">
          Our Learning{" "}
          <span className="text-vivid-indigo font-bold">Programs</span>
        </h1>
        <p className="text-lg font-medium my-5">
          Short, practical courses designed to help you learn fast, build real
          skills, and grow with hands-on experience.
        </p>
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 mx-auto max-w-screen-xl gap-2">
          {courses.map((course) => {
            return (
              <div
                key={course.id}
                className="max-w-80 min-h-50 h-full grid grid-rows-2 rounded-2xl overflow-hidden border"
              >
                <img src="/" className="row-span-0 bg-red-50" alt="" />
                <div className={`p-3 grid grid-rows-0 min-h-40 ${course.gradient}`}>
                  <h3 className="row-span-0 font-bold text-light-yellow">{course.title}</h3>
                  <p className="row-span-0 text-white font-light text-sm">{course.description}</p>
                  <div className="row-span-0 ml-auto">
                    {Object.keys(course.actions).map((btn) => (
                      <button key={btn} className="p-1 text-sm font-semibold rounded-xl ml-2 text-black capitalize bg-white">{btn}</button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
