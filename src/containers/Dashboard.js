import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

// write mapStateToProps function and connect and export it
const mapStateToProps = (state) => {
	return {
		cars: state.cars,
		user: state.user
	};
};

export default connect(mapStateToProps)(Dashboard);
