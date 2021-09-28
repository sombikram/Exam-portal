package com.exam.model.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long quizId;
    private String title;
    @Column(length = 15000)
    private String description;
    private String maxMarks;
    private String numberOfQuestions;
    private boolean active = true;

    @ManyToOne(fetch = FetchType.LAZY) //I did EAGER earlier and got stackoverflow : ManyToOne uses LAZY
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Category category;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    //@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<Question> questionSet = new LinkedHashSet<>();

}
