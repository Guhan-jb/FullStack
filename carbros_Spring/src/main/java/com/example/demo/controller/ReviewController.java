package com.example.demo.controller;
import com.example.demo.model.Review;
import com.example.demo.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

	@Autowired
    private ReviewService reviewService;
    @PostMapping("/giveReview/{carId}")
    public ResponseEntity<Review> createReview(@RequestBody Review review,@PathVariable("carId") int carId) {
        Review savedReview = reviewService.saveReview(review,carId);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable int id) {
        Review review = reviewService.getReviewById(id);
        if (review == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    // Add other methods as needed (e.g., getReviewsByCarId, updateReview, deleteReview, etc.)
}
