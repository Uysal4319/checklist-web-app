import React from 'react'

class Typing extends React.Component {
     render() {
         const {value,onChangeText,placeHolder} =this.props;
        return (
            <div >
                <input type={'text'} className={'field'}
                       placeholder={placeHolder}
                       onChange={onChangeText}
                       value={value}
                />
            </div>
        );
    }
}

export  default Typing;