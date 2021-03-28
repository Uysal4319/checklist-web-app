import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
              <h1 className={'Header-header'} > Wellcome to Checklist App.</h1>
              <h4> Please login.</h4>
            </div>
        );
    }
}

export default Header;