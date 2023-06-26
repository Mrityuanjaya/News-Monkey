import { useEffect, useState } from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { getNews } from "../../network/services";

export const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const getNewsItems = async () => {
    const newsList = await getNews();
    setNewsItems(newsList.articles);
    console.log(newsList);
  };
  useEffect(() => {
    getNewsItems();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Latest news!</h1>
      <div className="row">
        {newsItems &&
          newsItems.map((item) => {
            return (
              <div className="col-md-4 my-3" key={item["url"]}>
                <NewsItem
                  author={item["author"]}
                  description={item["description"]}
                  publishedAt={item["publishedAt"]}
                  title={item["title"]}
                  url={item["url"]}
                  urlToImage={
                    item["urlToImage"]
                      ? item["urlToImage"]
                      : "https://kchanews.com/wp-content/uploads/2014/09/bigstock-Breaking-News-Screen-36237841.jpg"
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
