import PropTypes from 'prop-types';

const Bookmark = ({
  className,
  stroke,
  width = 16,
  height = 17.5,
}) => {
  return (
    <svg className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      stroke={stroke}
      stroke-width={'2'}
      fill={'none'} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 1C5 0.447716 5.44772 0 6 0H18C18.5523 0 19 0.447715 19 1V17.5369C19 18.4346 17.9088 18.8776 17.283 18.2339L12.717 13.5375C12.3243 13.1336 11.6757 13.1336 11.283 13.5375L6.717 18.2339C6.09122 18.8776 5 18.4346 5 17.5369V1Z" fill="current" />
    </svg>

  );
};

export default Bookmark;

Bookmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
