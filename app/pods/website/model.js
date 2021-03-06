import DS from 'ember-data';

var Website = DS.Model.extend({
  	
	title: DS.attr(),
	url: DS.attr(),
	username: DS.attr(),
	password: DS.attr(),
	btn_img: DS.attr(),
	placement: DS.attr(),



});

Website.reopenClass({
	FIXTURES:[
		{
			id: 101,
			title:'iJet.com',
			url:'http://www.ijet.com',
			
			btn_img:'/img/btn_ijet_com.jpg',
			placement:'top'
		},
		{
			id: 102,
			title:'Worldcue GCC Website Login',
			url:'https://secure.worldcue.com/openssoDistauth/UI/Login?goto=https%3A%2F%2Fgcc.worldcue.com%2Fgroup%2Fworldcue',
			
			btn_img:'img/btn_worldcue_gcc.jpg',
			placement:'main'
		},
		{
			id: 103,
			title:'Worldcue Traveler Website Login',
			url:'https://secure.worldcue.com/openssoDistauth/UI/Login?goto=https%3A%2F%2Ftraveler.worldcue.com%2Fdirector%2Fdirect',
			
			btn_img:'img/btn_worldcue_traveler.jpg',
			placement:'main'
		},
		// {
		// 	id: 104,
		// 	title:'Critical Trac Website Login',
		// 	url:'https://www.sicurotrack.com/Login.aspx',
		// 	
		// 	btn_img:'img/btn_critical_trac.jpg',
		// 	placement:'main'
		// },
		{
			id: 105,
			title:'Worldcue Application Platform',
			url:'https://gccaws.worldcue.com/wap/',
			
			btn_img:'img/btn_world_cue_2.jpg',
			placement:'main'
		},
		{
			id: 106,
			title:'Daily Brief',
			url:'http://www.ijet.com/node/1437',
			
			btn_img:'img/btn_daily_brief.jpg',
			placement:'bottom'
		},
		{
			id: 107,
			title:'Health Monitor',
			url:'http://www.ijet.com/node/1438',
			
			btn_img:'img/btn_health_monitor.jpg',
			placement:'bottom'
		},
		{
			id: 108,
			title:'Monthly Forecast',
			url:'http://www.ijet.com/node/1439',
			
			btn_img:'img/btn_monthly_forecast.jpg',
			placement:'bottom'
		},
	],
});

export default Website;
