import React from "react";
import { Divider } from "antd";

import "./index.css";

function Academics() {
  return (
    <div className="container-main-academics">
      <header className="academics-header">
        <Divider orientation="left">
          <h2>Curriculum Overview</h2>
        </Divider>
        At CKGS , our curriculum is designed to provide a holistic education
        that nurtures intellectual, social, and emotional growth. Our approach
        integrates core academic subjects with enrichment activities to foster a
        well-rounded education, ensuring that every child builds a strong
        foundation for lifelong learning. Our curriculum aligns with national
        educational standards and is continually updated to reflect the latest
        in educational research and best practices.
      </header>
      <main>
        <Divider orientation="left">
          <h2>Introduction</h2>
        </Divider>
        a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes
        on purpose (injected humour and the like).
      </main>
    </div>
  );
}

export default Academics;
