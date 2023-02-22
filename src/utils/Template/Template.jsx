import {Loader} from "../Loader";
import React from "react";
import './Template.scss'

export const Template = ({userId, data, name}) => {
  return (
    !userId
      ? <Loader />
      : (<div className="data">
        <h1 className="data__header">
          {name} of #{userId} user
        </h1>
        <ol className="data__list">
          {data.map(item => (
              <li key={item.id} className="data__item">
                <h2 className="data__item__title">
                  {item.title}
                </h2>
                <article className="data__item__text">
                  {item.body}
                </article>
              </li>
          ))}
        </ol>
      </div>)
  )
}
