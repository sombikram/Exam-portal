package com.exam.controller;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.responseEntity.UserResponse;
import com.exam.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @PostMapping ("/")
    public User createUser(@RequestBody User user) throws Exception {

        user.setProfile("default.png");

        //encoding password with BCryptPasswordEncoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));


        Role role1 = new Role();
        role1.setRoleName("USER");

        role1.addUser(user);
        user.addRole(role1);

        if(user.getUserName() == null || user.getUserName().length()<= 0){
            return null;
        }
        else
        {
            this.userService.createUser(user,user.getRoles());
            return (user);
        }
    }

    @GetMapping(path = "/{userName}")
    public User getUser( @PathVariable("userName") String userName){
        return (this.userService.getUserByUserName(userName));
    }


    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        this.userService.deleteUser(userId);
    }


    //public void updateUser()
}
