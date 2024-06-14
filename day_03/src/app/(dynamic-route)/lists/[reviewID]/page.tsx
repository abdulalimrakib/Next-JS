import React from "react";

const ReviewPage = ({
  params,
}: {
  params: {
    reviewID: string;
  };
}) => {
  return (
    <div>
      <h1>this is review of {params.reviewID} no list</h1>
    </div>
  );
};

export default ReviewPage;
