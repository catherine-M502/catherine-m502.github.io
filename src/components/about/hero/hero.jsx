import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function AboutHero(block) {
  return (
    <section className="about-hero-two">
      <div className="container">
        <div className="about-hero-two-content position-relative">
          <h2>{block.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: md.render(block.description),
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: md.render(block.longDescription),
            }}
          />
          <div>
            {/* Subtitle for sideDescription */}
            <h3>Le domaine des landing pages</h3>
            {/* Main content from sideDescription */}
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(block.sideDescription),
              }}
            />
          </div>
          <div>
            {/* Subtitle for sideDescription */}
            <h3>Pourquoi j’ai opté pour la thématique des landing pages</h3>
            {/* Main content from sideDescription */}
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(block.otherDescription),
              }}
            />
          </div>
          <div>
            {/* Subtitle for sideDescription */}
            <h3>Ikigai : L'essence de mon être</h3>
            {/* Main content from sideDescription */}
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(block.newDescription),
              }}
            />
            {/* Image with a small description */}
            <figure style={{ maxWidth: "100%", margin: "0" }}>
              <img
                src="/images/about/ikigai.png"
                alt="SSG Image Alt Text"
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <figcaption style={{ fontSize: "smaller", fontStyle: "italic" }}>Image de mon Ikigai, basé sur le support du site web management30.com</figcaption>
            </figure>
          </div>
          <div>
            {/* Subtitle for sideDescription */}
            <h3>La taxonomie des landing pages </h3>
            {/* Main content from sideDescription */}
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(block.taxonomieDescription),
              }}
            />
          </div>
          <div>
            {/* Subtitle for sideDescription */}
            <h3>Astro, le SSG que j’ai choisi </h3>
            {/* Main content from sideDescription */}
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(block.ssgDescription),
              }}
            />
            {/* Image with a small description */}
            <figure style={{ maxWidth: "100%", margin: "0" }}>
              <img
                src="/images/about/astro.jpg"
                alt="SSG Image Alt Text"
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <figcaption style={{ fontSize: "smaller", fontStyle: "italic" }}>Image provenant du site web Astro, le 14 décembre 2023</figcaption>
            </figure>
          </div>
          <div className="scroll-down d-flex justify-content-center justify-content-xl-start">
            {block.button && (
              <a
                href={block.button.link}
                className="btn btn-primary btn-lg"
              >
                {" "}
                {block.button.text}{" "}
              </a>
            )}
          </div>
        </div>
        {/* Removed the entire block related to images */}
      </div>
    </section>
  );
}
