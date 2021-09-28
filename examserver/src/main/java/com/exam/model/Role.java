package com.exam.model;

import com.exam.responseEntity.RoleResponse;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Table(name = "ROLES")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long roleId;
    private String roleName;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore //helps to prevent infinite loop
    private Set<User> users = new HashSet<>();

    public void addUser(User user) {
        this.users.add(user);
    }

}
