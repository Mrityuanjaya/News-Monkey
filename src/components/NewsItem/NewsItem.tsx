import { CustomButton } from "../CustomButton/CustomButton";
import { NewsItemProps } from "./types";

export const NewsItem = (props: NewsItemProps) => {
  const onClickHandler = () => {};
  return (
    <div className="card">
      <img src={props.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} target="_blank">
          <CustomButton>Read More</CustomButton>
        </a>
        <p className="card-text my-1">
          <small className="text-body-secondary">
            Published at: {new Date(props.publishedAt).toString()} by{" "}
            {props.author}
          </small>
        </p>
      </div>
    </div>
  );
};
