import { SanityDocument } from "@sanity/client";
import { urlFor } from "../utils/Sanity";

export default function ProjectCard({ project }: { project: SanityDocument }) {
  const { title, description, image, link } = project;

  const imageUrl = image ? urlFor(image)?.height(720).quality(90).url() : null;

  const shortDescription =
    description?.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="flex flex-col h-full max-w-sm mx-auto overflow-hidden transition-transform duration-300 rounded-xl shadow-lg bg-primary-900 hover:scale-[1.02]">
      <div className="relative h-48 md:h-56 lg:h-60 bg-primary-800">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        )}
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h3 className="mb-2 text-lg font-semibold md:text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="flex-grow text-sm text-gray-300 md:text-base lg:text-lg">
          {shortDescription}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-4 py-2 mt-4 text-sm font-medium text-center text-black transition bg-white rounded hover:bg-gray-200 md:text-base"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
