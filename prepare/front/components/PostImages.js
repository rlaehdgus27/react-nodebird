import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = () => {
  return <div>구현중...</div>;
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
};

export default PostImages;
