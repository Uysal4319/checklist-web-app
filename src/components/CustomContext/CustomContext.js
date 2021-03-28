import React, {Component} from 'react';

class CustomContext extends Component{
    constructor(props) {
        super(props);

        this.state={
            visible: false,
            x: 0,
            y: 0
        };
    }

    componentDidMount(){
        const self=this;
        document.addEventListener("contextmenu", function (event){
            event.preventDefault();
            const clickX = event.clientX;
            const clickY = event.clientY;
            self.setState({ visible: true, x: clickX, y: clickY });

        });

        document.addEventListener("click", function(event){
            event.preventDefault();
            self.setState({ visible: false, x:0, y:0});

        });
    }

    returnMenu(items){
        const myStyle = {
                position: "absolute",
                top: `${this.state.y}px`,
                left:`${this.state.x+5}px`
              }
        }

        render() {
            return (
                <div>

                </div>
            //     <div className={custom-context} id=’text’ style={myStyle}>
            // {items.map((item, index, arr) =>{
            //     if(arr.length-1==index){
            //         return <div key={index} className=’custom-context-item-last’>{item.label}</div>
            //     }else{
            //         return <div key={index} className=’custom-context-item’>{item.label}</div>
            //     }
            // })}
            // </div>;
            // }
            //
            // }

            );
        }
}
