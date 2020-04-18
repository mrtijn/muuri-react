/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Layout from "@theme/Layout"; // eslint-disable-line
import classnames from "classnames";
import styles from "./styles.module.css";

const TITLE = "Showcase";
const DESCRIPTION = "See the demos built with Muuri-react";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function getDescription(type) {
  switch (type) {
    case "Demo":
      return "Demo showing Muuri-react features.";
    case "Example":
      return "Example showing how to implement a single Muuri-react functionality";
    case "Implementation":
      return "Implementation of a functionality with an external library.";
    default:
      return "";
  }
}

const users = [
  // Please add in alphabetical order of title.
  {
    type: "Demo",
    name: "Grid",
    id: "1czo5"
  },
  {
    type: "Demo",
    name: "Kanban",
    id: "zmypd"
  },
  {
    type: "Example",
    name: "Drag",
    id: "xlix7"
  },
  {
    type: "Example",
    name: "Sort",
    id: "959o8"
  },
  {
    type: "Example",
    name: "Refresh",
    id: "mz4di"
  },
  {
    type: "Implementation",
    name: "Resize",
    id: "ycldc"
  },
  {
    type: "Implementation",
    name: "Media-query",
    id: "q6sy6"
  }
].map((demo) => ({
  type: demo.type,
  title: `${demo.type} - ${demo.name}`,
  description: getDescription(demo.type),
  preview: `https://screenshots.codesandbox.io/${demo.id.toLowerCase()}.png`,
  website: `https://${demo.id}.csb.app/`,
  source: `https://codesandbox.io/s/muuri-react-${demo.name.toLowerCase()}-${
    demo.id
  }`,
  fbOpenSource: false,
  pinned: false
}));

function Showcase() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1 style={{ fontSize: "46px" }}>{TITLE}</h1>
          <p style={{ fontSize: "25px" }}>{DESCRIPTION}</p>
        </div>
        <div className="row">
          {users.map((user) => (
            <div key={user.title} className="col col--4 margin-bottom--lg">
              <div className={classnames("card", styles.showcaseCard)}>
                <div className="card__image">
                  <img src={user.preview} alt={user.title} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{user.title}</h4>
                      <small className="avatar__subtitle">
                        {user.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(user.website || user.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {user.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.website}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Website
                        </a>
                      )}
                      {user.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.source}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;