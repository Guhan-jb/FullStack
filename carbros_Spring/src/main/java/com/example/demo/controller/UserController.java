package com.example.demo.controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CarBros;
import com.example.demo.model.UserData;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/user")
//@CrossOrigin
public class UserController {
	@Autowired
	UserService uservice;
	@PostMapping("/signup")
	public ResponseEntity<UserData> createlogin(@RequestBody UserData login) {
		
		System.out.println(login);
		UserData createdlogins = uservice.create(login);
		System.out.print(login);
		return ResponseEntity.ok(createdlogins);
	}
 
 @PostMapping("/login")
 public boolean login(@RequestBody UserData web_data)
 {
	 Optional<UserData> data= uservice.loginbyId(web_data.getEmail());
	 UserData db_data=data.get();
	 String db_password=db_data.getPassword();
	 String web_password=web_data.getPassword();
	 if(db_password.equals(web_password))
		 return true;
	return false;
 }
// @PostMapping("/favcar")
// public String addfav(@RequestBody CarBros fav)
// {
//	 
// }
}
