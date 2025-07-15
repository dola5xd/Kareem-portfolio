import { SanityDocument } from "@sanity/client";
import { urlFor } from "../utils/Sanity";

export default function ProjectCard({ project }: { project: SanityDocument }) {
  const { title, description, image, link } = project;

  const imageUrl = image
    ? urlFor(image)?.height(1080).quality(100).url()
    : null;

  const shortDescription =
    description?.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <div className="flex flex-col h-full min-h-[400px] w-[calc(100%_-_28px)] md:w-auto md:min-h-fit md:max-w-xl mx-auto overflow-hidden text-white shadow-lg aspect-square rounded-xl bg-primary-900">
      <div className="relative h-1/2 bg-primary-900 rounded-t-xl">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover object-left-top w-full h-full rounded-t-xl"
          />
        )}
      </div>

      <div className="flex flex-col flex-grow p-4 max-h-1/2">
        <h3 className="mb-2 text-xl font-semibold md:text-3xl">{title}</h3>
        <p className="flex-grow text-gray-300 md:text-xl">{shortDescription}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-center inline-block w-full px-4 py-2 mt-4 font-medium text-center text-black transition bg-white rounded hover:bg-gray-200"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
