import { connect } from 'react-redux';
import Home from '../components/Home';

// write mapStateToProps function and connect and export it
const mapStateToProps = (state) => {
	return {
		cars: state.cars
	};
};

export default connect(mapStateToProps)(Home);
