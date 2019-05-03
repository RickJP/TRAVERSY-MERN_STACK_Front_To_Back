import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []); // [] - So it only runs once

	return <div>Dashboard</div>;
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired, //ptfr
	auth: PropTypes.object.isRequired, // ptor
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
