/* eslint-disable react/prop-types */
function Content({ content, index }) {
  return (
    <div className={`content-wrapper item-${index}`}>
      <div className="content fade">
        <div className="content-bg">
          <video poster={content.videoThumb} loop muted>
            <source src={content.bgVideo} type="video/mp4" />
          </video>
        </div>
        <p className="title">{content.title}</p>
        <p className="text more">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eaque quaerat minus saepe facere repellat?
        </p>
        <p className="text less">Lorem ipsum dolor sit amet.</p>
      </div>
      <img
        className="poster"
        src={content.poster}
        alt={`${content.title} Poster`}
      />
    </div>
  );
}

export default Content;
