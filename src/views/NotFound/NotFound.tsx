import React from "react";
import "./_not-found.scss";
import DefaultSkeleton from "../../components/DefaultSkeleton";

function NotFound() {
  return (
    <div className="not-found">
        <h1>Not Found Page</h1>
        <DefaultSkeleton></DefaultSkeleton>
    </div>
  );
}

export default NotFound;
