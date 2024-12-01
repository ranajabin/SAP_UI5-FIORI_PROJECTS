sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("quiz.quizapp.controller.View1", {
            onInit: function () {

                this.currQueIndex = 0;
                this.score = 0;

                // var que = this.getView().byId("question").getText();
                // var ans = this.getView().byId("answerbtn").getValue();
                // var nxt = this.getView().byId("btnnxt").getValue();

                this.questions = [
                    {
                        question: "Which is largest animal in the world?",
                        answers: [
                            { text: "Shark", correct: false },
                            { text: "Blue Whale", correct: true },
                            { text: "Elephant", correct: false },
                            { text: "Giraffe", correct: false },
                        ]
                    },
                    {
                        question: "Which is the smallest continent in the world?",
                        answers: [
                            { text: "Asia", correct: false },
                            { text: "Australia", correct: true },
                            { text: "Arctic", correct: false },
                            { text: "Africa", correct: false },
                        ]
                    },
                    {
                        question: "Which is the largest desert in the world?",
                        answers: [
                            { text: "Kalahari", correct: false },
                            { text: "Gobi", correct: false },
                            { text: "Sahara", correct: false },
                            { text: "Antarctica", correct: true },
                        ]
                    },
                    {
                        question: "Which is the smallest country in the world?",
                        answers: [
                            { text: "Vatican City", correct: true },
                            { text: "Bhutan", correct: false },
                            { text: "Nepal", correct: false},
                            { text: "Shri Lanka", correct: false },
                        ]
                    }
                ]

                this.startQuiz();
            },

            startQuiz: function() {
                this.currQueIndex = 0;
                this.score = 0;
                this.getView().byId("btnnxt").setText("Next");
                this.showQuestion();
            },

            showQuestion: function() {
                 this.resetState();
                var queIndex = this.questions[this.currQueIndex];
                var queNo = this.currQueIndex + 1;
                var queval = queNo + "." + queIndex.question;

                this.getView().byId("question").setText(queval);

                queIndex.answers.forEach(answer => {

                    // for(var i = 0; i < queIndex.answers.length; i++) {
                    this.getView().byId("btn1").setText(queIndex.answers[0].text);
                    this.getView().byId("btn2").setText(queIndex.answers[1].text);
                    this.getView().byId("btn3").setText(queIndex.answers[2].text);
                    this.getView().byId("btn4").setText(queIndex.answers[3].text);
                    // }

                    if(queIndex.answers.correct) {
                        
                    }
                });
            },

            resetState:function(){

            },

            selectAnswer: function(val) {
               
            }

        });
    });
