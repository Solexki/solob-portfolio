import React from "react";
import Icon from "../Common/Icon";
import useFeed from "../Hooks/useFeed";
import FeedForm from "./FeedForm";
import SkeletonLoader from "../Common/SkeletonLoader";
import { dataFetcher } from "../Services/dataFetcher";

type NewsFeedProps = {
  isAdmin: boolean;
};
const NewsFeed = (props: NewsFeedProps) => {
  const { isAdmin } = props;
  const [liked, setLiked] = React.useState<string[]>([]);

  const {
    formData,
    handleOnChange,
    handleOnSubmit,
    setShowForm,
    showForm,
    feedFormEntries,
    isloading,
  } = useFeed();

  type NewsItem = {
    id: string;

    author: string;
    image: string;
    post_tag?: string;
    post_title?: string;
    message?: string;
    post_image?: string;
    date?: string;
    pinned?: boolean;
    published?: boolean;
  };
  const toggleLike = (id: string) => {
    setLiked((prevLiked) =>
      prevLiked.includes(id)
        ? prevLiked.filter((likedId) => likedId !== id)
        : [...prevLiked, id]
    );
  };
  // let feedData;

  // if (feedFormEntries.length > 0) {
  //   feedData = feedFormEntries;

  // } else {
  //   feedData =  dataFetcher();

  // }
  const feedContent = feedFormEntries.map((entry) => ({
    id: entry.id,
    author: "Solomon O",
    image: "/images/solob.webp",
    post_tag: entry.post_tag,
    post_title: entry.post_title,
    message: entry.message,
    post_image: entry.post_image,
    pinned: entry.pinned || false,
    date:
      entry.date ||
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    published: entry.published || true,
  }));

  const sortedFeedContent = feedContent.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1; // Pinned items come first
    if (!a.pinned && b.pinned) return 1; // Unpinned items come last
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const feedContents: NewsItem[] = [...sortedFeedContent];
  if (isloading) {
    return <SkeletonLoader />;
  }
  return (
    <div>
      <div className="news-feed-area">
        {isAdmin && (
          <FeedForm
            setShowForm={setShowForm}
            showForm={showForm}
            formData={formData}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        )}
        {feedContents.map((news) => (
          <div key={news.id} className="news-item">
            <div className="pinned-cheep">
              {news.pinned && (
                <div className="pinned-cheep-text">
                  <Icon.TbPinnedFilled size={20} />
                  <span>Pinned Cheep</span>
                </div>
              )}
            </div>
            <div className="news-header">
              <img src={news.image} alt="News" />
              <div className="author-name-date">
                <div className="author-name">{news.author}</div>
                <div className="news-date">•</div>
                <div className="news-date">{news.date}</div>
              </div>
            </div>
            <div className="news-body">
              <div className="news-tag">{news.post_tag}</div>
              <div className="news-text">
                <h2>{news.post_title}</h2>
                <p>{news.message}</p>
                {news.post_image && (
                  <div className="feed-image">
                    <img src={news.post_image} alt="Post" />
                  </div>
                )}
              </div>
            </div>
            <div className="action-btn">
              <Icon.FaLink />

              <div onClick={() => toggleLike(news.id)} className="taggleLike">
                {!liked.includes(news.id) ? (
                  <Icon.FaRegHeart />
                ) : (
                  <Icon.FaHeart color="#f72585" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
