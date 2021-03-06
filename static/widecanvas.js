$(document).ready(function() {
	$(".sectioned-social-bar > .row").on('onmouseenter', function() {
		$(this).addClass('hundred-perc-width');
	});
	
	$(".sectioned-social-bar > .row").on('onmouseleave', function() {
		$(this).removeClass('hundred-perc-width');
	});

	$(".menu-nav li").on('click', function() {
		$(".menu-nav li").not(this).removeClass('active');
		$(this).addClass('active');
	});

	$('.sliding_images').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.emailContact').click(function() {
		var name = $('.name').val(),
			emailID = $('.emailID').val(),
			emailBody = $('.emailBody').val();
		var link = "mailto:msurabh@gmail.com"
             + "?subject=" + escape("Widecanvas Contact Form")
             + "&body=" + escape(emailBody);		             
		window.location.href = link;            
	});

	$.get('docs/about-us.html').done(function(response) {
		$('.about-us-body').append($($.parseHTML(response)));
	});
	$.get('docs/projects.html').done(function(response) {		
		var projects=$($.parseHTML(response));
		$('.projects-body').append(projects);
		var allProjects = projects.children();		
		for (i=0; i<allProjects.length; i++)	{
			var projectList = $('<li><a href="#project1">Project1</a></li>');
			projectList.find('a').attr('href', '#project'+(i+1));
			projectList.find('a').text(
					allProjects.eq(i).find('.header').text()
				);
			$('.projects-dropdown-menu').append(projectList);
		}
		$('.project-data').expander({slicePoint: 400});
	});	
});
