// scripts here:

	var questionAndAnswer = [
		{question: '<p class="question">1. Which of the following is NOT a type of fantasy football league?</p>',
		answers: {
			answerA: "<label id='correctString1'>A. Manager's League</label>",
			value: "1",
			answerB: '<label>B. Salary Cap League</label>',
			value: "0",
			answerC: "<label>C. Pick 'Em League</label>",
			value: "0",
			answerD: '<label>D.  Veni Vidi Whiskey</label>',
			value: "0"
		}},
		{question: '<p class="question">2. How long is an official NFL football field?</p>',
		answers: {
			answerA: '<label>A. 100 Yards</label>',
			value: "0",
			answerB: '<label id="correctString2">B. 120 Yards</label>',
			value: "1",
			answerC: '<label>C. 140 Yards</label>',
			value: "0",
			answerD: '<label>D. None of the above</label>',
			value: "0"
		}},
		{question: '<p class="question">3. Which of the following reasons will NOT stop the clock?</p>',
		answerA: '<label>A. 4 Minute Warning</label>',
		answerB: '<label id="correctString3">B. Running Out of Bounds</label>',
		answerC: '<label>C. Incomplete Pass</label>',
		answerD: '<label>D. I need to tie my shoelaces</label>'
		},
		{question: '<p class="question">4. What is a turnover?</p>',
		answerA: '<label>A. A Flaky Pastry</label>',
		answerB: "<label id='correctString4'>B. When a team recovers a ball from the other team's fumble or interception</label>",
		answerC: '<label>C. When a team recovers a ball from a punt</label>',
		answerD: '<label>D. When the referee gives the ball to the other team</label>'
		},
		{question: '<p class="question">5. What team won the first ever Super Bowl</p>',
		answerA: '<label id="correctString5>A. Green Bay Packers</label>',
		answerB: '<label>B. Kansas City Chiefs</label>',
		answerC: '<label>C. Oakland Raiders</label>',
		answerD: '<label>D. Pittsburgh Steelers</label>'
		},
		{question: '<p class="question">6. This question is intended to assess your general football and fantasy football knowledge. Manning throws a 45 yard bomb to Calvin Johnson for a touchdown. In majority of ff scoring formats this play is how many points for Johnson?</p>',
		answerA: '<label>A. 6 points></label>',
		answerB: '<label>B. 10 points</label>',
		answerC: '<label>C. 8 points</label>',
		answerD: "<label id='correctString6'>D. 10, but there isn't fantasy football on pro bowl week</label>"
		},
		{question: "<p class='question'>7. You have the first pick of the draft. It's a PPR league. Who do you take first?</p>",
		answerA: '<label>A. Tom Brady</label>',
		answerB: '<label>B. Stephen Gostkowski </label>',
		answerC: '<label>C. Cam Newton</label>',
		answerD: '<label id="correctString7>D. Antonio Brown</label>'
		},
		{question: "<p class='question'>8.  How many QB's are you allowed to start each week?</p>",
		answerA: '<label>A. 24</label>',
		answerB: "<label>B. Tom Brady + anyone cause he's that good</label>",
		answerC: '<label id="correctString8>C. 1</label>',
		answerD: '<label>D. As many as you want</label>'
		},
		{question: "<p class='question'>9. Cam Newton just had a breakout seats this year. You know he could be as good but when it's your time to pick there is high level QB's on the block still. ESPN analysts say he won't do as good. Who do you take?</p>",
		answerA: "<label>A. Cam, no doubt he's gonna be amazing again</label>",
		answerB: '<label id="correctString9>B. Tom Brady, WTF? Cam just got lucky</label>',
		answerC: '<label>C. John Hickenlooper because he passed for more than any QB in 2015 season</label>',
		answerD: "<label>D. Peyton Manning because he's the best of all time</label>"
		},
		{question: "<p class='question'>10. It's 2016 in a PPR league and jerry rice catches a 40 yard pass. How many points does he get?</p>",
		answerA: '<label>A. 11</label>',
		answerB: '<label>B. 8</label>',
		answerC: '<label id="correctString10>C. 0</label>',
		answerD: '<label>D. 15</label>'
		},
		{question: "<p class='question'>11. Who was on the cover of last year's Madden 2016?</p>",
		answerA: '<label>A. Peyton Manning</label>',
		answerB: '<label>B. Richard Sherman</label>',
		answerC: '<label>C. Russell Wilson</label>',
		answerD: '<label id="correctString11>D. Odell Becham Jr</label>'
		},
		{question: '<p class="question">12. True or False. Brett Favre was the 2010-2011 QB of the ravens.</p>',
		answerA: '<label>True</label>',
		answerB: '<label id="correctString12>False</label>'
		},
		{question: '<p class="question">13. Match the player to the correct team.</p>',
		answerA: '<label>A. Tom Brady </label>',
		answerB: '<label>B. Joe Montana</label>',
		answerC: '<label>C. O.J Simpson</label>',
		answerD: '<label>D. Archie Manning</label>',
		answerE: '<label>E. Craig Morton</label>'
		},
		{question: '<p class="question">14. Who is the best QB to play in history? Spelling counts.</p>',
		answerA: '<label></label>',
		answerB: '<label></label>',
		answerC: '<label></label>',
		answerD: '<label></label>'
		},
		{question: "<p class='15. question'>What don't you do?</p>",
		answerA: '<label>A. Open up that window</label>',
		answerB: '<label>B. Go chasing waterfalls</label>',
		answerC: '<label id="correctString15>C. Draft a quarterback in the first round</label>',
		answerD: '<label>Wanna miss a thang</label>'
		}
	]
	
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