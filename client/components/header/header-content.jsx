import React, { PropTypes } from 'react'

class HeaderContent extends React.Component{
  render() {
    const {name} = this.props;
    return (
      <div>this is header</div>
    );
  }
}

HeaderContent.propTypes = {
  name: PropTypes.bool
}

export default HeaderContent;
