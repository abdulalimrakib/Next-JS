import React from "react";

const ReviewPage = ({
  params,
}: {
  params: {
    productID: string;
    reviewID: String;
  };
}) => {
  return (
    <div>
      <h3>This is the review {params.reviewID} of product {params.productID}</h3>
    </div>
  );
};

export default ReviewPage;
