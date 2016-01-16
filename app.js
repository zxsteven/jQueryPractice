$('#square').draggable().html("Food")
$('#drop').droppable({
	drop: function(ui, event) {
		$('#text').html("I'm not even kind of full");
	}
}).html("My stomach");

$('#dro').droppable({
	drop: function(ui, event) {
		$('#text').html("I'm super full");
	}
}).html("Your stomach");