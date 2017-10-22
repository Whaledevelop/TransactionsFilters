import React, {Component} from 'react';

class FilterButton extends Component {
                constructor(props) {
                                super(props);
                                this.state = {
                                                className: 'btn btn-default'
                                }
                                this.changeFilter = this.changeFilter.bind(this);
                }

                changeFilter() {
                                const {name, className, onClick} = this.props;
                                if (this.state.className === 'btn btn-default') {					
                                                this.setState ({
                                                                className: className
                                                })
                                                onClick (name, true);           
                                } else {
                                                this.setState ({
                                                        className: 'btn btn-default'
                                                })
                                                onClick (name, false);
                                }
                }
    
                render (){
                                return (
                                                <a 
                                                                className = { this.state.className } 
                                                                onClick = {this.changeFilter}>
                                                                                {this.props.text}
                                                </a>
                                )         
                }
}

export default FilterButton ;