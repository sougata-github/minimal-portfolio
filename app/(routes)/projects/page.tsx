import Connect from "@/components/Connect";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

const page = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="heading-text">Projects</h1>
          <p className="secondary-text">My personal projects.</p>
        </div>
        <ProjectsGrid />
      </div>

      {/* More Projects section - later */}

      <div className="flex flex-col gap-4 max-w-[420px] md:max-w-[480px]">
        <h2 className="heading-text">
          Interested in exploring more of my work?
        </h2>
        <p className="secondary-text">
          Check out my GitHub (@
          <a
            target="_blank"
            className="underline"
            href="https://github.com/sougata-github"
          >
            sougata-github
          </a>
          ). Feel free to browse the repositories, raise issues, share your
          feedback, and contribute to the projects.
        </p>
      </div>

      <Connect />
    </section>
  );
};

export default page;
