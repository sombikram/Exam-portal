package com.exam.services.impl;

import com.exam.model.User;
import com.exam.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {

        User user =  this.userRepository.findByUserName(username);
        if(user==null){
            System.out.println("User not found !");
            throw new UsernameNotFoundException(username);
        }
        return user;
    }
}
