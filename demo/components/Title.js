const Title = ({ title, content, isHashSelected, onClick = () => {} }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <h2 className="display-5 my-3 fw-normal ">
          <a
            href={`#${title?.replace(/\s+/g, "")}`}
            className={`display-5 ${
              isHashSelected ? "text-warning" : "text-muted"
            }`}
            onClick={onClick}
          >
            #{title}
          </a>
        </h2>
      </div>
      {content && <p className="text-muted text-lead lead ms-4">{content}</p>}
    </>
  );
};

export default Title;
