$(function(){
	$('audio').slideUp('slow');
	$('audio').slideDown('slow');

	var story_page = 1;
	loadStoryPage(1);

	$('.story-next').click(function(event) {
		event.preventDefault();		

		if (story_page >= 3) {
			return;
		}

		loadStoryPage(story_page + 1, function() {
			story_page += 1;
		})
	});

	$('.story-previous').click(function(event) {
		event.preventDefault();		

		if (story_page <= 1) {
			return;
		}

		loadStoryPage(story_page - 1, function() {
			story_page -= 1;
		})
	});
});

function loadStoryPage(page_number, callback) {
	var story = $('.story');

	story.fadeTo(500, 0.1, function() {
		$.ajax({
			url: '/story_pages/' + page_number + '.html',

			success: function(response) {
				story.html(response);
				story.fadeTo(500, 0.5);
				if (callback) {
					callback();
				}
			},

			error: function() {
				story.fadeTo(500, 0.5);
			}
		});
	});
}
