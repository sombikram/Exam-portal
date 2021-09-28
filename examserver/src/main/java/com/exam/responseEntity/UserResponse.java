package com.exam.responseEntity;

import com.exam.model.Role;
import com.exam.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private boolean enabled;
    private String profile;

    public UserResponse generateUserResponse(User user){

        return new UserResponse(user.getId(),user.getUserName(), user.getFirstName(),
                user.getLastName(), user.getEmail(), user.getPhone(), user.isEnabled(), user.getProfile(), RoleResponse.generateRoles(user.getRoles()));
    }

    private Set<RoleResponse> roleResponses = new HashSet<>();

}
