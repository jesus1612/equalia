import React from 'react';
import PropTypes from "prop-types"

import '../styles/materialIcons.css'

const FeatureItem = ({ logo, text }) => {
  return (
    <div className="flex">
      <span className="material-icons pr-2">{logo}</span>
      <p className="text-base font-medium">{text}</p>
    </div>
  )
}

FeatureItem.protoTypes = {
  logo: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureItem
