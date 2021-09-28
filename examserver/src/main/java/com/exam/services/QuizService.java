package com.exam.services;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface QuizService {

     Quiz addQuiz(Quiz quiz);
     Quiz updateQuiz(Quiz quiz);
     Set<Quiz> getQuizzes();
     Quiz getQuiz(Long quizId);
     void deleteQuiz(Long quizId);

    List<Quiz> getQuizOfCategory(Category c);

    List<Quiz> getActiveQuizzes();
    List<Quiz> getActiveQuizzesOfCategory(Category c);
}
