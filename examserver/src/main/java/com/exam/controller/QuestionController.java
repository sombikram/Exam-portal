package com.exam.controller;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.services.QuestionService;
import com.exam.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    // add Question
    @PostMapping("/")
    public ResponseEntity<Question> addQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    //update question
    @PutMapping("/")
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

//    //get all question of any quiz
//    @GetMapping("/quiz/{qid}")
//    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid){
//
//        Quiz quiz = new Quiz();
//        quiz.setQuizId(qid);
//        Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
//        return ResponseEntity.ok(questionsOfQuiz);
//
////        Quiz quiz = this.quizService.getQuiz(qid);
////        Set<Question> questionSet = quiz.getQuestionSet();
////        List list = new ArrayList<>(questionSet);
////
////            if(list.size() > Integer.parseInt(quiz.getNumberOfQuestions())){
////                     list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions() + 1));
////            }
////        Collections.shuffle(list);
////        return ResponseEntity.ok(list);
//   }


    //get all question of any quiz
    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qid") Long qid){

        Quiz quiz = new Quiz();
        quiz.setQuizId(qid);
        Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(questionsOfQuiz);

    }


    //get single question
    @GetMapping("/{questId}")
    public Question getQuestion(@PathVariable("questId") Long questId){
        return this.questionService.getQuestion(questId);
    }


    //delete question
    @DeleteMapping("/{questId}")
    public void deleteQuestion(@PathVariable("questId") Long questId){
        this.questionService.deleteQuestion(questId);
    }


//    //eval Quiz
//    @PostMapping("/eval-quiz")
//    public  ResponseEntity<?> evalQuiz(@RequestBody List<Question> questions){
//        System.out.println(questions);
//        Integer marksGot = 0;
//        Integer correctAnswers = 0;
//        Integer attemptedQuestions = 0;
//
//        for (Question q: questions) {
//         Question question =  this.questionService.get(q.getQuestId());
//
//         if(question.getAnswer().trim().equals(q.getGivenAnswer().trim())){
//             //correct
//             correctAnswers++;
//         }
//
//         ///////////////////
//
//
//        };
//        return ResponseEntity.ok("Got questions with answers");
//    }

}
