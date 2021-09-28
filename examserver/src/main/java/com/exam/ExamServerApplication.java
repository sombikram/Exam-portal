package com.exam;

import com.exam.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ExamServerApplication implements CommandLineRunner {

	@Autowired
	private UserServiceImpl userService;

	public static void main(String[] args) {
		SpringApplication.run(ExamServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code: ");

//		User user1 = new User();
//
//		user1.setFirstName("Som");
//		user1.setLastName("Thakuri");
//		user1.setUserName("Som99");
//		user1.setPassword("abc");
//		user1.setEmail("abc@gmail.com");
//		user1.setProfile("default.png");
//
//		Role role1 = new Role();
//
//		role1.setRoleId(12L); //12 Long
//		role1.setRoleName("ADMIN");
//
//		Role role2 = new Role();
//
//		role2.setRoleId(22L); //12 Long
//		role2.setRoleName("USER");
//
//		role1.addUser(user1);
//		role2.addUser(user1);
//
//
//		Set<Role> roleSet = new HashSet<>();
//		roleSet.add(role1);
//		roleSet.add(role2);
//
//		this.userService.createUser(user1, roleSet);

		System.out.println("Successfully created");
	}


}
