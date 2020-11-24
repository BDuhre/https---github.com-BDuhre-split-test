Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Pre-Screening Questionnaire",
    pages: [{
            questions: [{
                    type: "comment",
                    name: "q1",
                    title: "How well did (Applicant's Name) work with co-workers?",


                },
                {

                    type: "comment",
                    name: "q2",
                    title: "Tell me about how well you and (Applicant's Name) worked together.",

                }
            ]
        },
        {
            questions: [{
                    type: "comment",
                    name: "q3",
                    title: "Did (Applicant's Name) have any major accomplishments working for you?",


                },
                {

                    type: "comment",
                    name: "q4",
                    title: "What are (Applicant's Name) greatest strengths?",

                }
            ]
        },
        {
            questions: [{
                    type: "comment",
                    name: "q5",
                    title: "What are (Applicant's Name) biggest weaknesses?",

                },
                {

                    type: "comment",
                    name: "q6",
                    title: "Is there any area you think (Applicant's Name) would need additional support?",

                }
            ]
        },
        {
            questions: [{
                    type: "comment",
                    name: "q7",
                    title: "Did (Applicant's Name) receive any promotions while at your company?",

                },
                {

                    type: "comment",
                    name: "q8",
                    title: "Why did (Applicant's Name) leave your company?",

                }
            ]
        },
        {
            questions: [{
                    type: "comment",
                    name: "q9",
                    title: "Would you ever hire (Applicant's Name) again?",

                },
                {

                    type: "comment",
                    name: "q10",
                    title: "Is there anybody else you could recommend I speak to about (Applicant's Name)?",

                }
            ]
        }


    ],
    completedHtml: "<h4>You have competed the questions Thank you</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function(result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });