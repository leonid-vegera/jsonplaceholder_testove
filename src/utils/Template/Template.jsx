import {Loader} from "../Loader";
import React from "react";
import './Template.scss'

export const Template = ({userId, data, name, username, title, isLoading, error}) => {
  const TemplateContent = () => {
    if (!data?.length && !isLoading && !name) {
      return (
        <div className="data">
          <h1 className="data__item__title" style={{textAlign: "center"}}>
            No {title} exist
          </h1>
        </div>
      )
    }

    return (
      <div className="data">
        {isLoading
          ? <Loader />
          : (
            <>
              <h1 className="data__header">
                {title} of {name}, known as {username}. ID #{userId}
              </h1>
              {!!error
                ? {error}
                : (
                    <ol className="data__list">
                      {data?.map(item => (
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
                )}
            </>
          )
        }
      </div>
    )
  }

  return (
    <TemplateContent />
  )
}
