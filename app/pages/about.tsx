import { useLoaderData } from 'react-router';

export async function loader() {
  return {
    title: 'About Lusia',
  };
}

export default function AboutPage() {
  const { title } = useLoaderData() as { title: string };

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>{title}</h1>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/about.jpg" alt="About Lusia" />
          </div>

          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Lusia is a travel blog dedicated to inspiring wanderlust and
              providing practical travel advice for solo travelers, especially
              women who want to explore the world safely and confidently.
            </p>

            <p>
              Founded in 2020, Lusia has grown from a personal travel journal
              into a community of passionate travelers sharing their
              experiences, tips, and stories from around the globe.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe that travel has the power to transform lives, broaden
              perspectives, and create meaningful connections. Our mission is to
              empower travelers with the knowledge, inspiration, and resources
              they need to embark on their own unforgettable journeys.
            </p>

            <h2>Meet the Team</h2>
            <p>
              Behind Lusia is a team of experienced travelers, writers, and
              photographers who are passionate about sharing the beauty and
              diversity of our world. Each team member brings their unique
              perspective and expertise to create content that is both
              informative and inspiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
