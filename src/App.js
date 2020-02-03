import React, { Component } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	View,
	Image,
	Dimensions,
	Text,
} from 'react-native';
import Button from 'react-native-button';
import Carousel from 'react-native-snap-carousel';

import { connect } from 'react-redux';
const dimension = Dimensions.get('window');

let oldRender = Text.render;
Text.render = function(...args) {
	let origin = oldRender.call(this, ...args);
	return React.cloneElement(origin, {
		style: [{ fontFamily: 'Poppins-Regular' }, origin.props.style],
	});
};

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.welcome}>
				<ScrollView>
					<View>
						<Carousel
							data={[
								require('../assets/images/startup-screen-1.png'),
								require('../assets/images/startup-screen-2.png'),
								require('../assets/images/startup-screen-3.png'),
	
							]}
							renderItem={({ item, index }) => (
								<Image
									key={index}
									source={item}
									style={styles.image}
								/>
							)}
							loop={true}
							autoplay={true}
							autoplayInterval={3000}
							sliderWidth={dimension.width}
							itemWidth={dimension.width}
						/>
						{/* Carousel */}
						<View style={styles.container}>
							<Text style={styles.welcomeText}>
								Now buy Groceries directly.
							</Text>


							<Button
								containerStyle={{ padding: 10, height: 50, overflow: 'hidden', borderRadius: 4, backgroundColor: '#671257' }}
								style={{ fontSize: 16, color: 'white' }}
								styleDisabled={{ color: 'red' }}
								
								ref={ref => (this.buttonRef = ref)}>
								Get start here
                             </Button>

						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
				{/* <DrawerNavigator /> */}
				{/* <BottomNavigation /> */}
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcome: {
		flex: 1,
		overflow: 'scroll',
	},
	welcomeText: {
		fontSize: 18,
		textAlign: 'center',
		marginVertical: 30,
	},
	image: {
		height: dimension.height / 1.45,
		width: dimension.width,
	},
	container: {
		paddingHorizontal: 15,
	},
	button: {
		padding: 5,
	},
});


export default App;