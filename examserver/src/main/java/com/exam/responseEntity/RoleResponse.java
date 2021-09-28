package com.exam.responseEntity;

import com.exam.model.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleResponse {

    private Long roleId;
    private String roleName;

    public static Set<RoleResponse> generateRoles(Set<Role> roles){

        Set<RoleResponse> responses = new HashSet<>();
        roles.forEach(role -> {
            RoleResponse roleResponse = new RoleResponse(role.getRoleId(), role.getRoleName());
            responses.add(roleResponse);
        });
        return responses;
    }

}
