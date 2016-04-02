import React, { PropTypes } from 'react'

class HeaderContent extends React.Component{
  render() {
    const {name} = this.props;
    return (
      <div>{name}</div>
    );
  }
}

HeaderContent.propTypes = {
  name: PropTypes.bool
}

export default HeaderContent;
