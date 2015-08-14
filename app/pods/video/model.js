import DS from 'ember-data';

var Video = DS.Model.extend({
  	
	title: DS.attr(),
	video_src_mp4: DS.attr(),
	video_src_webm: DS.attr(),
	video_src_ogg: DS.attr(),
	btn_img: DS.attr(),



});

Video.reopenClass({
	FIXTURES:[
		{
			id:1,
			title:'Traveler Video',
			video_src_mp4:'/video/traveler.mp4',
			video_src_webm:'/video/traveler.webm',
			video_src_ogg:'/video/traveler.ogv',
			btn_img: '/img/btn_traveler_video.jpg',
		},
		{
			id:2,
			title:'Yemen Case Study',
			video_src_mp4:'/video/yemen.mp4',
			video_src_webm:'/video/yemen.webm',
			video_src_ogg:'/video/yemen.ogv',
			btn_img: '/img/btn_yemen.jpg',
		},
		{
			id:3,
			title:'Critical Trac Video',
			video_src_mp4:'/video/critical_trac.mp4',
			video_src_webm:'/video/critical_trac.webm',
			video_src_ogg:'/video/critical_trac.ogv',
			btn_img: '/img/btn_critical_trac_video.jpg',
		},
		{
			id:4,
			title:'GIOC Video',
			video_src_mp4:'/video/gioc.mp4',
			video_src_webm:'/video/gioc.webm',
			video_src_ogg:'/video/gioc.ogv',
			btn_img: '/img/btn_gioc_video.jpg',
		},
	],
});

export default Video;
