import React, { useState, useEffect } from "react";
import axios from "axios";

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  rating: string;
  author: {
    name: string;
    image: string;
  };
}

export function Hero({
  image,
  link,
  title,
  description,
  author,
  rating,
  ...others
}: any & ArticleCardProps) {
  const articlesPerPage = 6;

  const fetchArticleAPI = process.env.REACT_APP_API_Articles;

  const fetchRecord = async (pageNumber: number) => {
    try {
      const response = await axios.get(`${fetchArticleAPI}`);
      setRecord(response?.data.articles);
      setPageCount(response?.data.total_pages);
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  };

  const [record, setRecord] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    fetchRecord(page);
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(currentPage + 1, pageCount));
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(1, currentPage - 1));
  };

  return (
    <div className=" max-w-screen-2xl mx-auto flex flex-wrap">
      {record && record.length > 0 ? (
        record
          .slice((page - 1) * articlesPerPage, page * articlesPerPage)
          .map((article: any) => (
            <div key={article.id} className="max-w-7xl mx-auto lg:px-32">
              <div className="pt-44 w-64">
                <div className="border rounded-md p-4">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="h-48 w-full object-cover"
                    />
                  </a>

                  <div className="flex justify-between mt-2">
                    <span className="text-sm font-medium">
                      Rating:{" "}
                      <span className="bg-gradient-to-r from-yellow-300 to-red-500">
                        {article.rating}
                      </span>
                    </span>

                    <div className="flex space-x-2">
                      <button className="text-red-600 hover:text-red-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 2.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="text-yellow-700 hover:text-yellow-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a1 1 0 01-2 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 01-2 0V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="text-blue-700 hover:text-blue-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a1 1 0 01-2 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 01-2 0V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-2">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {article.title.split(" ").slice(0, 2).join(" ")}...
                    </a>
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-4 mt-2">
                    {article.description.split(" ").slice(0, 13).join(" ")}...
                  </p>

                  <div className="flex justify-between mt-3">
                    {article.author?.image && (
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full mr-1"
                      />
                    )}
                    <span className="text-sm">{article.author?.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p className="text-center py-32 mx-auto">No articles found.</p>
      )}
      <div className="w-full mt-4 px-2 flex justify-between max-w-6xl mx-auto pt-40 pb-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleNextPage}
          disabled={currentPage >= pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
}
