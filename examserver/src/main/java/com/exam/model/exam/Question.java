package com.exam.model.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long questId;
    @Column(length = 15000)
    private String content;
    private String image;
    private String option1;
    private String option2;
    private String option3;
    private String option4;


    private String answer;

    @Transient
    private String givenAnswer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Quiz quiz;
}
