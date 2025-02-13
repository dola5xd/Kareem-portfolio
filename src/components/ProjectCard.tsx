import { SanityDocument } from "@sanity/client";
import { urlFor } from "../utils/Sanity";

function ProjectCard({ project }: { project: SanityDocument }) {
  const { title, description, image, link } = project;

  const imageUrl = image
    ? urlFor(image)?.height(1080).quality(100).url()
    : null;

  const shortDescription =
    description?.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <div className="relative flex flex-col items-center flex-shrink-0 w-screen h-full p-6 text-gray-300 lg:w-1/2">
      <div className="w-full overflow-hidden shadow-lg rounded-xl h-3/5">
        {image && (
          <img
            src={imageUrl!}
            alt={description}
            className="object-cover object-top w-full h-full rounded-xl"
          />
        )}
      </div>
      <h2 className="mt-4 text-4xl font-bold text-blue-zodiac-500">{title}</h2>

      {description && (
        <p
          className={`mt-2 text-base md:text-lg text-white text-center max-w-[400px] font-sans `}
        >
          {shortDescription}
        </p>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 mt-4 text-lg font-medium text-black transition bg-white rounded-lg shadow-md hover:bg-gray-200"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
