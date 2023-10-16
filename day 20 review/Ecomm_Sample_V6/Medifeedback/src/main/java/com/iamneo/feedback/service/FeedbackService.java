package com.iamneo.feedback.service;

import java.util.List;

import com.iamneo.feedback.dto.request.FeedbackRequest;
import com.iamneo.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean savefeedback(FeedbackRequest request);

    List<FeedbackResponse> getAllfeedbacksList();

}
