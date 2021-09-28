package com.exam.services;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;

import java.util.Set;

public interface QuestionService {

    Question addQuestion(Question question);
    Question updateQuestion(Question question);
    Set<Question> getQuestions();
    Question getQuestion(Long questionId);
    Set<Question> getQuestionsOfQuiz(Quiz quiz);
    void deleteQuestion(Long questId);

    Question get(Long questionId);

}
