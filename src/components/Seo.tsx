import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="UI/UX Designer, Wireframing, Prototyping, User Experience"
      />
      <meta name="author" content="Kareem Yasser" />

      {/* Open Graph (OG) for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kareem Yasser",
          jobTitle: "UI/UX Designer",
          url: url,
          sameAs: [
            "https://linkedin.com/in/kareemyasser",
            "https://dribbble.com/kareemyasser",
            "https://behance.net/kareemyasser",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
