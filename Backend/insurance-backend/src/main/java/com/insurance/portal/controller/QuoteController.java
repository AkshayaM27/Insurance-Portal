package com.insurance.portal.controller;

import com.insurance.portal.model.Quote;
import com.insurance.portal.repository.QuoteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "http://localhost:4200")
public class QuoteController {
    private final QuoteRepository quoteRepository;

    public QuoteController(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    @PostMapping
    public Quote createQuote(@RequestBody Quote quote) {
        double premium = quote.getCarValue() * 0.03;

        if (quote.getCarAge() > 5) {
            premium += 2000;
        }

        quote.setPremiumAmount(Math.round(premium));
        return quoteRepository.save(quote);
    }

    @GetMapping
    public List<Quote> getAllQuotes() {
        return quoteRepository.findAll();
    }
}