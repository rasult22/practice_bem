var smartgrid = require('smart-grid');

const settings = {

	mobileFirst: false,
	columns: 12,
	outputStyle: 'less',
	offset: '30px',
	container:{
		maxWidth: '1200px',
		fields:'30px'
	},
	breakPoints:{
		lg:{
			width: "1116px",
			fields: "30px"
		},
		md: {
			width: "992px",
			fields: "20px"
		},
		sm:{
			width:"720px",
			fields:"10px"
		},
		xs: {
			width: "576px",
			fields: "5px"
		},
		xxs:{
			width:"380px",
			fields: "5px"
		}
	}

}

smartgrid('./src/less', settings);