package com.iamneo.feedback.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.feedback.dto.request.FeedbackRequest;
import com.iamneo.feedback.dto.response.FeedbackResponse;
import com.iamneo.feedback.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FeedbackController {
    private final FeedbackService feedbackService;

    @PostMapping("/feedback/addfeedback")
    public ResponseEntity<String> saveFeedback(@RequestBody FeedbackRequest request) {
        boolean isSaved = feedbackService.savefeedback(request);
        return isSaved ? ResponseEntity.ok().body("Feedback Saved") : ResponseEntity.badRequest().build();
    }

    @GetMapping("/getallfeedbacks")
    public ResponseEntity<List<FeedbackResponse>> getFeedbacks() {
        List<FeedbackResponse> feedbackList = feedbackService.getAllfeedbacksList();
        return !feedbackList.isEmpty() ? ResponseEntity.ok(feedbackList) : ResponseEntity.noContent().build();
    }
}
