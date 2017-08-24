// scripts here:

	var panelNum = 0;
	var nextPanel = 0;
	var displyndx = 0;
	
	var questions2Answer = [
		'<p class="question">1. Which of the following is NOT a type of fantasy football league?</p>',
		'<p class="question">2. How long is an official NFL football field?</p>',
		'<p class="question">3. Which of the following reasons will NOT stop the clock?</p>',
		'<p class="question">4. What is a turnover?</p>',
		'<p class="question">5. What team won the first ever Super Bowl</p>',
		'<p class="question">6. This question is intended to assess your general football and fantasy football knowledge. Manning throws a 45 yard bomb to Calvin Johnson for a touchdown. In majority of ff scoring formats this play is how many points for Johnson?</p>',
		"<p class='question'>7. You have the first pick of the draft. It's a PPR league. Who do you take first?</p>",
		"<p class='question'>8.  How many QB's are you allowed to start each week?</p>",
		"<p class='question'>9. Cam Newton just had a breakout seats this year. You know he could be as good but when it's your time to pick there is high level QB's on the block still. ESPN analysts say he won't do as good. Who do you take?</p>",
		"<p class='question'>10. It's 2016 in a PPR league and jerry rice catches a 40 yard pass. How many points does he get?</p>",
		"<p class='question'>11. Who was on the cover of last year's Madden 2016?</p>",
		"<p class='12. question'>What don't you do?</p>"
	]

	var answersOne = [
		'<p class="question">1. Which of the following is NOT a type of fantasy football league?</p>',
		'<input class="answer" type="radio" name="q1" value="1"> <label id="correctString1">A. Managers League</label>',
		'<input class="answer" type="radio" name="q1" value="0"> <label>B. Salary Cap League</label>',
		'<input class="answer" type="radio" name="q1" value="0"> <label>C. Pick -Em League</label>',
		'<input class="answer" type="radio" name="q1" value="0"> <label>D.  Veni Vidi Whiskey</label>'
		]
	var	answersTwo = [
		'<p class="question">2. How long is an official NFL football field?</p>',
		'<input class="answer" type="radio" name="q2" value="0"> <label>A. 100 Yards</label>',
		'<input class="answer" type="radio" name="q2" value="1"> <label id="correctString2">B. 120 Yards</label>',
		'<input class="answer" type="radio" name="q2" value="0"> <label>C. 140 Yards</label>',
		'<input class="answer" type="radio" name="q2" value="0"> <label>D. None of the above</label>'
		]
	var	answersThree = [
		'<p class="question">3. Which of the following reasons will NOT stop the clock?</p>',
		'<input class="answer" type="radio" name="q3" value="0"> <label>A. 4 Minute Warning</label>',
		'<input class="answer" type="radio" name="q3" value="1"> <label id="correctString3">B. Running Out of Bounds</label>',
		'<input class="answer" type="radio" name="q3" value="0"> <label>C. Incomplete Pass</label>',
		'<input class="answer" type="radio" name="q3" value="0"> <label>D. I need to tie my shoelaces</label>'
		]
	var	answersFour = [
		'<p class="question">4. What is a turnover?</p>',
		'<input class="answer" type="radio" name="q4" value="0"> <label>A. A Flaky Pastry</label>',
		'<input class="answer" type="radio" name="q4" value="1"> <label id="correctString4">B. When a team recovers a ball from the other teams fumble or interception</label>',
		'<input class="answer" type="radio" name="q4" value="0"> <label>C. When a team recovers a ball from a punt</label>',
		'<input class="answer" type="radio" name="q4" value="0"> <label>D. When the referee gives the ball to the other team</label>'
		]
	var	answersFive = [
		'<p class="question">5. What team won the first ever Super Bowl</p>',
		'<input class="answer" type="radio" name="q5" value="1"> <label id="correctString5>A. Green Bay Packers</label>',
		'<input class="answer" type="radio" name="q5" value="0"> <label>B. Kansas City Chiefs</label>',
		'<input class="answer" type="radio" name="q5" value="0"> <label>C. Oakland Raiders</label>',
		'<input class="answer" type="radio" name="q5" value="0"> <label>D. Pittsburgh Steelers</label>'
		]
	var	answersSix = [
		'<p class="question">6. This question is intended to assess your general football and fantasy football knowledge. Manning throws a 45 yard bomb to Calvin Johnson for a touchdown. In majority of ff scoring formats this play is how many points for Johnson?</p>',
		'<input class="answer" type="radio" name="q6" value="0"> <label>A. 6 points></label>',
		'<input class="answer" type="radio" name="q6" value="0"> <label>B. 10 points</label>',
		'<input class="answer" type="radio" name="q6" value="0"> <label>C. 8 points</label>',
		'<input class="answer" type="radio" name="q6" value="1"> <label id="correctString6">D. 10, but there is no fantasy football on pro bowl week</label>'
		]
	var	answersSeven = [
		"<p class='question'>7. You have the first pick of the draft. It's a PPR league. Who do you take first?</p>",
		'<input class="answer" type="radio" name="q7" value="0"> <label>A. Tom Brady</label>',
		'<input class="answer" type="radio" name="q7" value="0"> <label>B. Stephen Gostkowski </label>',
		'<input class="answer" type="radio" name="q7" value="0"> <label>C. Cam Newton</label>',
		'<input class="answer" type="radio" name="q7" value="1"> <label id="correctString7>D. Antonio Brown</label>'
		]
	var	answersEight = [
		"<p class='question'>8.  How many QB's are you allowed to start each week?</p>",
		'<input class="answer" type="radio" name="q8" value="0"> <label>A. 24</label>',
		'<input class="answer" type="radio" name="q8" value="0"> <label>B. Tom Brady + anyone cause he is that good</label>',
		'<input class="answer" type="radio" name="q8" value="1"> <label id="correctString8>C. 1</label>',
		'<input class="answer" type="radio" name="q8" value="0"> <label>D. As many as you want</label>'
		]
	var	answersNine = [
		"<p class='question'>9. Cam Newton just had a breakout seats this year. You know he could be as good but when it's your time to pick there is high level QB's on the block still. ESPN analysts say he won't do as good. Who do you take?</p>",
		'<input class="answer" type="radio" name="q9" value="0"> <label>A. Cam, no doubt he is gonna be amazing again</label>',
		'<input class="answer" type="radio" name="q9" value="1"> <label id="correctString9>B. Tom Brady, WTF? Cam just got lucky</label>',
		'<input class="answer" type="radio" name="q9" value="0"> <label>C. John Hickenlooper because he passed for more than any QB in 2015 season</label>',
		'<input class="answer" type="radio" name="q9" value="0"> <label>D. Peyton Manning because he is the best of all time</label>'
		]
	var	answersTen = [
		"<p class='question'>10. It's 2016 in a PPR league and jerry rice catches a 40 yard pass. How many points does he get?</p>",
		'<input class="answer" type="radio" name="q10" value="0"> <label>A. 11</label>',
		'<input class="answer" type="radio" name="q10" value="0"> <label>B. 8</label>',
		'<input class="answer" type="radio" name="q10" value="1"> <label id="correctString10>C. 0</label>',
		'<input class="answer" type="radio" name="q10" value="0"> <label>D. 15</label>'
		]
	var	answersEleven = [
		"<p class='question'>11. Who was on the cover of last year's Madden 2016?</p>",
		'<input class="answer" type="radio" name="q11" value="0"> <label>A. Peyton Manning</label>',
		'<input class="answer" type="radio" name="q11" value="0"> <label>B. Richard Sherman</label>',
		'<input class="answer" type="radio" name="q11" value="0"> <label>C. Russell Wilson</label>',
		'<input class="answer" type="radio" name="q11" value="1"> <label id="correctString11>D. Odell Becham Jr</label>'
		]
	var	answersTwelve = [
		"<p class='12. question'>What don't you do?</p>",
		'<input class="answer" type="radio" name="q12" value="0"> <label>A. Open up that window</label>',
		'<input class="answer" type="radio" name="q12" value="0"> <label>B. Go chasing waterfalls</label>',
		'<input class="answer" type="radio" name="q12" value="1"> <label id="correctString13>C. Draft a quarterback in the first round</label>',
		'<input class="answer" type="radio" name="q12" value="0"> <label>Wanna miss a thang</label>'
		]

	
	function startQuiz() {
		resetUI();
		incrementCounters();
		loadQuestions2Answer();
		setPanelTimer();
	}

	function incrementCounters() {
		displyndx++;
		panelNum++;
		if (panelNum < 4 ) {
			nextPanel = (panelNum + 1);
		}
	}
	
	function loadQuestions2Answer() {
		if (panelNum === 1) {
			for (var i = 0; i < 4; i++) {
				if (i === 0) {
					
					for (var j = 0; j < answersOne.length; j++) {
						console.log("This is the value of answersone.length " + answersOne.length);
						$('.answer-display1').append (	
							$('<div/>').addClass('shown-answer').html(answersOne[j] + "<br>"));
					}			
				}
				
				if (i === 1) {
					for (var j = 0; j < answersTwo.length; j++) {
						console.log("This is the value of answersTwo.length " + answersTwo.length);
						$('.answer-display2').append (	
							$('<div/>').addClass('shown-answer').html(answersTwo[j] + "<br>"));
					}
				}
				if (i === 2) {
					for (var j = 0; j < answersThree.length; j++) {
						console.log("This is the value of answersThree.length " + answersThree.length);
						$('.answer-display3').append (	
							$('<div/>').addClass('shown-answer').html(answersThree[j] + "<br>"));
					}
				}
				if (i === 3) {
					for (var j = 0; j < answersFour.length; j++) {
						console.log("This is the value of answersFour.length " + answersFour.length);
						$('.answer-display4').append (	
							$('<div/>').addClass('shown-answer').html(answersFour[j] + "<br>"));
					}
				}
			}
	
		} else if (panelNum === 2) {
			for (var i = 4; i < 8; i++) {
			$('.question-display').append (
				$('<p/>').addClass('shown-question question').html(questionAndAnswers[i].question));
				for (var j = 0; j < questionAndAnswers.answers.length; j++) {
					var correctAnswer = questionAndAnswers.answers[j].value;
					if (correctAnswer = 1) {			
						$('.answer-display').append (	
							$('<input/>').addClass('shown-answer answer').html(' type="radio" name="q1" value="1">' + questionAndAnswers.answers[j].answer));
					} else {
						$('.answer-display').append (	
							$('<input/>').addClass('shown-answer answer').html(' type="radio" name="q1" value="0">' + questionAndAnswers.answers[j].answer));
						}
				}
			}
	
		} 	else if (panelNum === 3) {
				for (var i = 8; i < 12; i++) {
					$('.question-display').append (
					$('<p/>').addClass('shown-question question').html(questionAndAnswers[i].question));
					for (var j = 0; j < questionAndAnswers.answers.length; j++) {
						var correctAnswer = questionAndAnswers.answers[j].value;
						if (correctAnswer = 1) {			
							$('.answer-display').append (	
								$('<input/>').addClass('shown-answer answer').html(' type="radio" name="q1" value="1">' + questionAndAnswers.answers[j].answer));
						} else {
							$('.answer-display').append (	
								$('<input/>').addClass('shown-answer answer').html(' type="radio" name="q1" value="0">' + questionAndAnswers.answers[j].answer));
							}
					}
				}
	
		}		else if (panelNum === 4) {
					for (var i = 12; i < 13; i++) {
						$('.question-display').append (
						$('<p/>').addClass('shown-question question').html(questionAndAnswers[i].question));
						for (var j = 0; j < questionAndAnswers.answers.length; j++) {
							var correctAnswer = questionAndAnswers.answers[j].value;
							if (correctAnswer = 1) {			
								$('.answer-display').append (	
									$('<input/>').addClass('shown-answer answer').html(' type="radio" name="q1" value="1">' + questionAndAnswers.answers[j].answer));
							} else {
								$('.answer-display').append (	
									$('<input/>').addClass('shown-answer answer').html(' type="radio" name="q1" value="0">' + questionAndAnswers.answers[j].answer));
								}
						}
					}
	
		}

	}
	
	function loadAnswers2Questions() {
	
		for (var j = 0; j < answersOne.length; j++) {
			console.log("This is the value of answersone.length " + answersOne.length);
			$('.answer-display1').append (	
				$('<div/>').addClass('shown-answer').html(answersOne[j] + "<br>"));
		}
	}
	
	function setPanelTimer() {
		alert("You are now in setPanelTimer");
	}
	
	function resetUI() {
		var panelNum = 0;
		var nextPanel = 0;
		var displyndx = 0;
		alert("You are now in resetUI");
	}
	
	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});