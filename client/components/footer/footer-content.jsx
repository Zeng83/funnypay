import React, { PropTypes } from 'react'

class FooterContent extends React.Component{
  render() {
    const {name} = this.props;
    return (
      <div>this is footer</div>
    );
  }
}

FooterContent.propTypes = {
  name: PropTypes.bool
}

export default FooterContent;
