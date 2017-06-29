define(['jquery','template','cookie'],function($,template){
	$(function(){
		if(location.pathname != "/dashboard/login"){
			var fileInfo = JSON.parse($.cookie('fileinfo'));
      var html = template("profile-tpl",fileInfo);
      $("#userinfo").html(html);
		}
  })
})