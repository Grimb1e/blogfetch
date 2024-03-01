import { Blog } from "./Blog";

type BlogsCardProps = {
  blogs: Blog[];
};

const BlogsCard = ({ blogs }: BlogsCardProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.length > 0 ? (
          blogs.map((item) => (
            <div
              key={item.id}
              className="border border-sky-500 bg-black shadow-md rounded-lg overflow-hidden text-white"
            >
              <img
                src={item.previewURL}
                alt={item.tags}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-100 font-semibold text-lg">
                  {item.user}
                </p>
                <p className="text-gray-400 text-sm">{item.tags}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span>Likes: {item.likes}</span>
                  <span>Views: {item.views}</span>
                  <span>Comments: {item.comments}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white text-center">Product not found</div>
        )}
      </div>
    </div>
  );
};

export default BlogsCard;
