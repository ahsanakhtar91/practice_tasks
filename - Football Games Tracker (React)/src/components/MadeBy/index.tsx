import React from "react";
import Link from "../Link";

const MadeBy = () => {
  return (
    <>
      <h3 className="copyrights">
        Made by <strong>Ahsan Akhtar</strong>
      </h3>
      <h3 className="copyrights-links">
        <Link
          label="LinkedIn"
          url={"https://www.linkedin.com/in/m-ahsan-akhtar-69772067"}
        />
        {" | "}
        <Link
          label="GitHub"
          url={"https://github.com/ahsanakhtar91/practice_tasks"}
        />
      </h3>
    </>
  );
};

export default MadeBy;
