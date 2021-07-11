import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
			<div key={alert.id} className={`alert ${alert.type}`} >
				{/* <div className="main-alert"> */}
				<i className="fas fa-times"></i> &nbsp;{alert.msg}
				{/* </div> */}
				
			</div>
		))
	);
};
export default Alerts;
