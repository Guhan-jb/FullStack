package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Review;

public interface ReviewRepo extends JpaRepository<Review,Integer> {

}
