package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CarBros;
import com.example.demo.model.UserData;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.CarbrosService;
import com.example.demo.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/Vehicles")
@CrossOrigin("*")
public class CarbrosController {
	@Autowired
	CarbrosService vservice;
	@Autowired
	UserService uservice;
	@Autowired
	UserRepo u;
	//POST CARS
	@Operation(summary="Adds a new car")
	@ApiResponses(value= {
			@ApiResponse(responseCode="201",description="Laptop created successfully"),
			@ApiResponse(responseCode="400",description="Laptop is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(produces="applicstion/json",consumes="application/json", value="/add")
	public String pt(@RequestBody CarBros s11)
	{
		vservice.create(s11);
		return "your record saved";
	}
	//GETS ALL CARS
	@Operation (summary= "gives all values present")
	@ApiResponses (value = {@ApiResponse(responseCode = "200",description= "successful"), @ApiResponse(responseCode = "401",description= "invalid credentials"),
	@ApiResponse(responseCode = "404",description= "not found")})
	@GetMapping(value="/allvehicles", produces="application/json")
	 public List<CarBros> get()
	 {
		 return vservice.readall();
	 }
	@Operation (summary= "gives all values present")
	@ApiResponses (value = {@ApiResponse(responseCode = "200",description= "successful"), @ApiResponse(responseCode = "401",description= "invalid credentials"),
	@ApiResponse(responseCode = "404",description= "not found")})
	@GetMapping(value="/bymodel/{model}", produces="application/json")
	public List<CarBros> getbymodel(@PathVariable("model") String model)
	{
		return vservice.getbymodel(model);
	}
	 @DeleteMapping("/delete/{id}")
	 public String delete(@PathVariable("id") long id) { 
		 vservice.delete(id);
		return "id : " + id + " is deleted";
	}
	 @PostMapping("/signup")
		public ResponseEntity<UserData> createlogin(@RequestBody UserData login) {
			
			System.out.println(login);
			UserData createdlogins = uservice.create(login);
			System.out.print(login);
			return ResponseEntity.ok(createdlogins);
		}
	 
	 @GetMapping("/login")
	 public List<UserData> login()
	 {
		 return u.findAll();
	 }
		}