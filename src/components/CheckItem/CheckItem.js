import React, {Component} from 'react';
import {Checkbox} from "semantic-ui-react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';

class CheckItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.article.status,
            modalVisible:false
        };
        this.selected = false;
        this.deleteTask = this.deleteTask.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    selectItems(){
        this.setState({ selected: !this.state.selected})
    }

    componentDidUpdate(){
    }

    deleteTask() {
        // const messages = this.state.messages.filter((_, index) => index !== i)
        // this.setState({ messages });

        {
            this.setState({
                modalVisible :false
            })
        }
    }

    openModal() {
            {
            this.setState({
                modalVisible :true
            })
        }
    }
    render() {
        if(this.props.selected != null && this.props.selected.id === this.props.article.id){

            this.selected = true;

        }else {
            this.selected = false;
        }
        return (
            <div  className={ this.selected ? 'selectItem':'item'} onClick={this.props.onSelectedItems}>
                <Modal
                    open={this.state.modalVisible}
                    onClose={this.state.modalVisible}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={'modal'}>

                        <h1> model</h1>
                        <div className={'item-status'}>
                            <button onClick={() => {this.deleteTask()}}>Silme</button>
                            <button onClick={this.props.onDeletedItems}>Sil</button>

                        </div>

                    </div>
                </Modal>

                <h2>{this.props.article.text}</h2>


             <div className={'item-status'}>

                 <Checkbox className = {'checkBox'}
                           checked={this.state.checked}
                           onChange={() => this.setState({ checked: !this.state.checked})}

                 />
                 <IconButton aria-label="delete"
                             onClick={() => {this.openModal()}}>
                     <DeleteIcon />
                 </IconButton>
             </div>
            </div>
        );
    }
}

export default CheckItem;
