import React from "react";
import EventCardContainer from "../components/EventCardContainer";

function IndexPage() {
  return (
    <div className="flex flex-wrap flex-1 gap-6 justify-center">
      <EventCardContainer />
    </div>
  );
}

export default IndexPage;
