package com.exam.services;

import com.exam.model.Role;
import com.exam.model.User;

import java.util.Set;

public interface UserService {

    //creating user
     Set<Role> createUser(User user, Set<Role> roleSet) throws Exception;

     //get user by userName
    User getUserByUserName(String username);

    //delete user by id
    void deleteUser(Long userId);

}
