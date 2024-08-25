import Heading from "../components/Heading";

export default function ProjectsSection() {
  return (
    <section className="projectStn">
      <Heading>Projects</Heading>
      <p>Things I&apos;ve built so far</p>

      <div className="project">
        <div className="display"></div>
        <div className="info">
          <h4>Project Title</h4>
          <p>
            Project description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            recusandae magnam, natus similique dolorum voluptate?
          </p>
          <p>
            <strong>Tech Stack:</strong>Lorem ipsum dolor sit amet.
          </p>
          <div className="details">
            <a href="#">Live Preview</a>
            <a href="#">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}
