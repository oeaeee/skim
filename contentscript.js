var view_mode; 

$(document).ready( function () {
	displayMenu();
	makeStage();

	$("button.menu").click( function() {
		view_mode = this.id;
		console.log(view_mode);

		// Add the story to #stage
		setStage();

		// Get all the text elements from the story
		var text_elements = $("#stage h1, #stage h2, #stage h3, #stage h4, #stage h5, #stage p, #stage span");
		$("#stage").show();
		$("#close").show();

		// For each text element...
		text_elements.each(function (index) {

			// Strip the tags from the text element string
			var string = $(this).html().stripTags();
			// Convert string to array of individual words
			var words = string.words();
			// Now that the words are saved, remove text from original text elements
			$(this).html("");


			// Loop through each word
			for (var i = 0; i < words.length; i++) {

				// Depending on the chosen view_mode, do things to the word
				switch(view_mode) {

				    case "disemvowel":
						// Ignore words with three or fewer characters
						if (words[i].length > 3) {
							// Remove vowels
							words[i] = words[i].replace(/\B[aeiou]\B/ig, "")
						}
				        break;

				    case "scramble":
						// Ignore words with three or fewer characters
						if (words[i].length > 3) {

							// Get interior letters
							var interior_chars = words[i].substring(1, words[i].length-1);

							// Jumble them
							var jumble = interior_chars.split('').sort( function() { return 0.5-Math.random() }).join('');

							// Put the pieces back together
							words[i] = words[i].substring(0,1) + jumble + words[i].substring(words[i].length);
						}
				        break;

				    case "shapes":
						// Ignore words with three or fewer characters
						if (words[i].length > 3) {

							// Make the middle of the word (ignore first and last characters) a span
							words[i] = words[i].substring(0,1) + "<span class='blacken'>" + words[i].substring(1, words[i].length-1) + "</span>" + words[i].substring(words[i].length-1);
						}
				        break;
				}

				// Append the updated words (with a whitespace) back to text element
				$(this).append(words[i] + " ");
			}
		});

		// Update the buttons to show which one is "on"
		$("button.menu").removeClass("highlight");
		$("button.menu#" + view_mode).addClass("highlight");

	});


	// Close Button functionality
	$("#close").click( function () {
		$("#stage").hide();
		$("#close").hide();
		$("button.menu").removeClass("highlight");
	});
	$("#close").mouseover( function () { $("#close").html("&#10005;"); });
	$("#close").mouseout(  function () { $("#close").html("Close"); });


});


// Insert menu
function displayMenu() {
	$("body").append('<div id="menu"></div>');
	$("#menu").append('<button class="menu" id="disemvowel">Disemvowel</button>');
	$("#menu").append('<button class="menu" id="scramble">Scramble</button>');
	$("#menu").append('<button class="menu" id="shapes">Shapes</button>');

	$("body").append('<button id="close">Close</button>');
}


// Insert #stage
function makeStage() {
	// Prepend to #shell to keep some of the existing styling
	$("body").append('<div id="stage"></div>');
	$("#stage").css( "min-height", $(document).height() );
}


// Set stage - clear #stage and then copy #story to it 
function setStage() {
	$("#stage").html("");
	$("#story #story-header").clone().appendTo("#stage");
	$("#story .lede-container").clone().appendTo("#stage");
	$("#story .story-content").clone().appendTo("#stage");
}






/* Provide functionality to keep words where the first letter is capitalized
// (A blunt method for keeping proper nouns intact)
	// Ignore words where the first letter are capitalized
	if (words[i].first() == words[i].first().toUpperCase()) {	}
*/
