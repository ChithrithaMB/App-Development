package com.iamneo.feedback.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.iamneo.feedback.dto.request.FeedbackRequest;
import com.iamneo.feedback.dto.response.FeedbackResponse;
import com.iamneo.feedback.model.Feedback;
import com.iamneo.feedback.repository.FeedbackRepository;
import com.iamneo.feedback.service.FeedbackService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Override
    public boolean savefeedback(FeedbackRequest request) {
        if (feedbackRepository.findByUsernameAndUseremail(request.getUsername(),
                request.getUseremail()).isPresent()) {
            return false;
        }

        var feedback = Feedback.builder()
                .username(request.getUsername())
                .useremail(request.getUseremail())
                .feedback(request.getFeedback())
                .build();
        feedbackRepository.save(feedback);
        return true;
    }

    @Override
    public List<FeedbackResponse> getAllfeedbacksList() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setFeedback(feedback.getFeedback());
                    return response;
                })
                .collect(Collectors.toList());
    }
}
