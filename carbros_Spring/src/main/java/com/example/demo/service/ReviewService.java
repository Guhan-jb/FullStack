package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CarBros;
import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepo;
@Service
public class ReviewService {
	 @Autowired
	    ReviewRepo reviewRepository;
	 @Autowired
	 	CarbrosService carservice;

	    public Review saveReview(Review review,int id) {
	    	CarBros car= carservice.getbyId(id).orElse(null);
	    	review.setCar(car);
	        return reviewRepository.save(review);
	    }

	    public Review getReviewById(int id) {
	        return reviewRepository.findById(id).orElse(null);
	    }

	    // Add other methods as needed (e.g., getReviewsByCarId, updateReview, deleteReview, etc.)
	}
