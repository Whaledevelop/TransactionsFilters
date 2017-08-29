import React from 'react';
import {FilterButton} from './FilterButton';




export class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				currentIncomeClassName: 'btn btn-default',
				currentConsumptionClassName: 'btn btn-default',
				currentLastMonthClassName: 'btn btn-default',
				currentMoreThanThousandRubClassName: 'btn btn-default'
    };
		this.handleIncomeFilter = this.handleIncomeFilter.bind(this);
		this.handleConsumptionFilter = this.handleConsumptionFilter.bind(this);
		this.handleLastMonthFilter = this.handleLastMonthFilter.bind(this);
		this.handleMoreThanThousandRubFilter = this.handleMoreThanThousandRubFilter.bind(this);
	}

	handleIncomeFilter(props) {
		const inverseIncome = !this.props.incomeFilter;
		//alert ('Это handleIncomeFilter из Filter. Это обратное значение от this props incomeFilter, т.е. переданного,        ' + inverseIncome);
		//alert ('Соответственно это сам this props income Filter                   ' + this.props.incomeFilter);
		//alert ('Т.е. поступил ' + this.props.incomeFilter + ', а вышел ' + inverseIncome)
		this.props.onClick(inverseIncome, this.props.consumptionFilter, this.props.lastMonthFilter, this.props.moreThanThousandFilter);
		//alert (this.props.filters.incomeFilter);
		//alert ('А я хочу рассказать про изменение классов. До setState класс инкома был ' + this.state.currentIncomeClassName);
		if (this.state.currentIncomeClassName === 'btn btn-default') {
				this.setState ({
				currentIncomeClassName: 'btn btn-success',			
				});
		} else {
				this.setState ({ 
				currentIncomeClassName: 'btn btn-default'						
				});
		}
		//alert ('После setState класс будет' + this.state.currentIncomeClassName);
	}

	handleConsumptionFilter(props) {
		const inverseConsumption = !this.props.consumptionFilter;
		this.props.onClick(this.props.incomeFilter, inverseConsumption, this.props.lastMonthFilter, this.props.moreThanThousandFilter);
		if (this.state.currentConsumptionClassName === 'btn btn-default') {
				this.setState ({
				currentConsumptionClassName: 'btn btn-warning'				
				});
		} else {
				this.setState ({ 
				currentConsumptionClassName: 'btn btn-default'						
				});
		}
	}

	handleLastMonthFilter(props) {
		const inverseLastMonth = !this.props.lastMonthFilter;
		this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, inverseLastMonth, this.props.moreThanThousandFilter);
		if (this.state.currentLastMonthClassName === 'btn btn-default') {
			this.setState ({
				currentLastMonthClassName: 'btn btn-info'				
			});
		} else {
			this.setState ({ 
				currentLastMonthClassName: 'btn btn-default'		
			});
		};
	}

	handleMoreThanThousandRubFilter(props) {
		const inverseMoreThanThousandRub = !this.props.moreThanThousandRubFilter;
		this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, this.props.lastMonthFilter, inverseMoreThanThousandRub);
		if (this.state.currentMoreThanThousandRubClassName === 'btn btn-default') {
			this.setState ({

				currentMoreThanThousandRubClassName: 'btn btn-primary'
				
			});
		} else {
			this.setState ({ 
				currentMoreThanThousandRubClassName: 'btn btn-default'			
			});
		};
		
	}

	render () {
		return (
			<div className="btn-group btn-group-justified">
		        <FilterButton 
		          			className={this.state.currentIncomeClassName}
		          			text= 'Income'
		          			onClick={this.handleIncomeFilter}
		          			
		        />
		        <FilterButton 
		          			className={this.state.currentConsumptionClassName}
		          			text= 'Consumption'
		          			onClick={this.handleConsumptionFilter}
		          			
		        />
		        <FilterButton 
		          			className={this.state.currentLastMonthClassName}
		          			text= 'Last Month'
		          			onClick={this.handleLastMonthFilter}
		          			
		        />
		        <FilterButton 
		          			className={this.state.currentMoreThanThousandRubClassName}
		          			text= 'More Than 1000 Rub'
		          			onClick={this.handleMoreThanThousandRubFilter}

		        />
	

		    </div>
			
				
				);
	}
   					
} 