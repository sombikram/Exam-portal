package com.exam.controller;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import com.exam.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    //add Quiz
    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){

        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update Quiz
    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    // get Quizzes
    @GetMapping("/")
    public ResponseEntity<?> getQuizzes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    // get single quiz
    @GetMapping("/{qid}")
    public Quiz getQuiz(@PathVariable("qid") Long qid){
        return this.quizService.getQuiz(qid);
    }


    //delete the quiz
    @DeleteMapping("/{qid}")
    public void deleteQuiz(@PathVariable("qid") Long qid){
        this.quizService.deleteQuiz(qid);
    }


    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid){
        Category c = new Category();
        c.setCid(cid);
        return this.quizService.getQuizOfCategory(c);
    }

    //get active Quizzes
    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes(){
        return this.quizService.getActiveQuizzes();
    }

    //get active Quizzes of Category
    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return this.quizService.getActiveQuizzesOfCategory(category);
    }
}
