import React, {Component} from 'react';

class AddButton extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        buttonClassName: 'btn btn-primary disabled',
                        message: '',
                        messageClassName: ''
                }
                this.buttonHandler = this.buttonHandler.bind(this);
        }
                          
        componentWillReceiveProps(nextProps) {
                if  (nextProps.submit) {
                        this.setState({
                                buttonClassName: 'btn btn-primary',
                                message: 'Ready to add',
                                messageClassName: 'readyMessage'
                        })
                } else {
                        this.setState ({
                                buttonClassName: 'btn btn-primary disabled',
                                message: ''
                        })  
                }   
        }

        buttonHandler() {
                let { submit, onClick } = this.props
                if (submit) {
                        this.setState({
                                buttonClassName: 'btn btn-success',
                                message: 'Success!',
                                messageClassName: 'successMessage'
                        })
                } else {
                        this.setState ({
                                buttonClassName: 'btn btn-danger disabled',
                                message: 'Fill all inputs with correct data',
                                messageClassName: 'errorMessage'
                    })
                } 
                onClick(submit);       
        }

        singleNameObject(object) {
                return object.slice(0, (object.length - 1));
        }

        render() {
                let {buttonClassName, message, messageClassName} = this.state;
                let {object} = this.props;
                return (
                        <div className='col-lg-12'>
                                <div 
                                        id="addButton" 
                                        className={buttonClassName} 
                                        onClick={this.buttonHandler}>
                                        Add {this.singleNameObject(object)}
                                </div>
                                <h4 className={messageClassName}>{message}</h4>
                        </div>
                )
        }   
}

export default AddButton;



