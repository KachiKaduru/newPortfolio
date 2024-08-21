import Heading from "../components/Heading";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutStn}>
      <div>
        <Heading>About Me</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique nam ducimus
          nulla adipisci. Perspiciatis et quis dolorem accusamus unde molestiae iure a quibusdam?
          Beatae nihil nemo soluta nulla fugiat quod modi, ex minus a aspernatur officia tenetur
          autem laborum quibusdam consequatur aliquam odio cumque maxime dolorum facilis, quas nisi.
        </p>
      </div>

      <div>
        <Heading>Work experience</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo commodi, quam
          delectus nesciunt adipisci deserunt nisi in fuga sequi eum ratione totam numquam quaerat
          facere doloremque necessitatibus laboriosam ducimus laudantium obcaecati magnam earum?
          Totam ea, ducimus repellat quos quis mollitia ab laudantium debitis? Dignissimos
          voluptatibus magnam quam asperiores ut.
        </p>
      </div>

      <div>
        <Heading>education</Heading>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt officiis assumenda,
          beatae sequi nisi dolor, accusantium corporis vel accusamus atque incidunt soluta
          consequuntur, deleniti delectus molestiae est consectetur nesciunt natus.
        </p>
      </div>
    </section>
  );
}
