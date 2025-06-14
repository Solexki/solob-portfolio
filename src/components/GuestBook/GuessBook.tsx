import React from "react";
import Icon from "../Common/Icon";
import GuestForm from "./GuestForm";
import useGuestBook from "../Hooks/useGuestBook";
import defaultImages from "../Common/defaultImages";
import SkeletonLoader from "../Common/SkeletonLoader";
import Popup from "../Common/Popup";
import Image, { StaticImageData } from "next/image";

type GuestProps = {
  isAdmin: boolean;
};

const GuessBook = (props: GuestProps) => {
  const { isAdmin } = props;
  const {
    formData,
    handleOnChange,
    handleOnSubmit,
    setShowForm,
    showForm,
    guestBookEntries,
    isloading,
    submitting,
    submited,
    setSubmited,
    handlePublished,
  } = useGuestBook();

  type GuestBook = {
    id: string;
    name?: string;
    url?: string;
    organization?: string;
    avaterUrl?: string | StaticImageData;
    message?: string;
    date: string;
    pinned?: boolean;
    published?: boolean;
    component?: React.ReactNode;
  };

  const entrySection = {
    id: "no1",
    name: "Solomon Obafemi",
    url: "https://solob.dev",
    organization: "facebook",
    avaterUrl: defaultImages.profileImage,
    message: "Wanna leave me a message? Fill in this form.",
    date: "02 Jan 2025",
    pinned: true,
    published: true,
    component: (
      <GuestForm
        showForm={showForm}
        setShowForm={setShowForm}
        handleOnChange={handleOnChange}
        formData={formData}
        submitting={submitting}
        handleOnSubmit={handleOnSubmit}
      />
    ),
  };

  const guestEntry: GuestBook[] = guestBookEntries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    url: entry.url,
    organization: entry.organization,
    avaterUrl: entry.avater_url,
    message: entry.message,
    date: entry.date || new Date().toLocaleDateString(),
    pinned: entry.pinned || false,
    published: entry.published || false,
    component: null, // No additional component for fetched entries
  }));

  const sortedGuestBook = guestEntry.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Sort by date descending
  });
  const guestBookFilter = sortedGuestBook.filter(
    (guestEntry) => guestEntry.published === true
  );

  const publishedGuestEntries: GuestBook[] = [entrySection, ...guestBookFilter];
  const adminViewGuestBook: GuestBook[] = [entrySection, ...sortedGuestBook];
  const guestBook = isAdmin ? adminViewGuestBook : publishedGuestEntries;
  //generate avater
  const generateAvatarUrl = (name?: string): string => {
    const defaultName = name?.trim() || "Guest";
    const baseUrl = "https://ui-avatars.com/api/";
    const params = new URLSearchParams({
      name: defaultName,
      size: "150",
      background: "46074d",
      color: "fff",
    });
    return `${baseUrl}?${params.toString()}`;
  };

  if (isloading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <div className="news-feed-area">
        {guestBook.map((content) => (
          <div key={content.id} className="news-item">
            <div className="pinned-cheep">
              {content.pinned && (
                <div className="pinned-cheep-text">
                  <Icon.TbPinnedFilled size={20} />
                  <span>Pinned Cheep</span>
                </div>
              )}
            </div>
            <div className="news-header">
              {typeof content.avaterUrl === "string" ? (
                <img
                  src={content.avaterUrl || generateAvatarUrl(content.name)}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = generateAvatarUrl(content.name);
                  }}
                  alt="Avatar"
                />
              ) : (
                <Image
                  src={content.avaterUrl || generateAvatarUrl(content.name)}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = generateAvatarUrl(content.name);
                  }}
                  alt="Avatar"
                />
              )}
              <div className="author-name-date">
                <div className="author-name">{content.name}</div>
                <div className="news-date">•</div>
                <div className="news-date">{content.date}</div>
              </div>
            </div>
            <div className="news-body">
              <div className="news-text">
                <p>{content.message}</p>
              </div>
              {content.component && content.component}
            </div>
            <div className="action-btn">
              <a href={content.url}>
                <Icon.FaLink size={20} color="white" />
              </a>
              {isAdmin && !content.published && (
                <Icon.FaCheck
                  size={20}
                  onClick={() => handlePublished(content.id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {submited && (
        <Popup
          content="Your Guest Post is submitted and will be approve soon!"
          title="success"
          onClose={() => setSubmited(false)}
        />
      )}
    </div>
  );
};

export default GuessBook;
