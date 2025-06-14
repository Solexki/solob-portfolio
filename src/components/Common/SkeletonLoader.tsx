import "./common.css";

export function SkeletonPost() {
  return (
    <div className="skeleton-area">
      <div className="skeleton-item">
        <div className="pinned-cheep"></div>
        <div className="skeleton-header">
          <div className="skeleton-avater skeleton"></div>
          <div className="skeleton-name-date">
            <div className="skeleton-author-name skeleton"></div>

            <div className="skeleton-date skeleton"></div>
          </div>
        </div>
        <div className="skeleton-body">
          <div className="skeleton-tag skeleton"></div>
          <div className="skeleton-text">
            <div className="skeleton-title skeleton"></div>
            <div className="skeleton-paragraph skeleton"></div>
            <div className="skeleton-paragrap2 skeleton"></div>
          </div>
        </div>
        <div className="skeleton-action-btn">
          <div className="skeleton-link-icon skeleton"></div>
          <div className="skeleton-link-icon skeleton"></div>
        </div>
      </div>
    </div>
  );
}

const SkeletonLoader = ({ count = 5 }) => (
  <div className="skeleton-area">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonPost key={i} />
    ))}
  </div>
);

export default SkeletonLoader;
