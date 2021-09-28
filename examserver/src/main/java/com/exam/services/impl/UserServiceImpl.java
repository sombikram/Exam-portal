package com.exam.services.impl;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.repo.UserRepository;
import com.exam.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Set<Role> createUser(User user, Set<Role> roleSet) throws Exception {

        User local = this.userRepository.findByUserName(user.getUserName());

        if(local != null){
            System.out.println("User is already there !!");

            throw new Exception("User already present!!");
        }
        else{
            try {
                userRepository.save(user);
                return roleSet;
                //roleSet.forEach(role -> roleRepository.save(role));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    @Override //getting user by userName
    public User getUserByUserName(String username) {return this.userRepository.findByUserName(username);}

    //delete User by userId
    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
