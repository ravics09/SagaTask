import React, { PureComponet } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			apiData: []
		}
	}

	componentDidMount() {
		// Will fetch data using saga
		// fetch('https://www.googleapis.com/calendar/v3/calendars/en.ae%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBrDZ2wOk_LCGD0hhjID80xiDfyGFE8zd8')
		// 	.then(res => res.json())
		// 	.then((data) => {
		// 		this.setState({ apiData: data })
		// 	})
		// 	.catch(err => { console.log("Error", err) });
	}

	keyExtractor = (item, index) => index.toString();
	
	renderItem = ({ item, index }) => {
		return (
			<View>
				{item}
			</View>
		)
	}

	render() {
		const { apiData } = state;
		return (
			<View>
				<FlatList
					data={apiData}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
				/>
			</View>
		)
	}
} 
const mapStateToProps = (state) =>{

}

const mapDipatchToProps = (dispatch) => {

}
export default connect(mapStateToProps,mapDipatchToProps)(Home)