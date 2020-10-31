import { url } from "inspector";
import React from "react";
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import './MenuItem.scss'

interface MyProps extends RouteComponentProps{
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FunctionComponent<MyProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match
}) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
