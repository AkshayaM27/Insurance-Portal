package com.insurance.portal.model;

public class Plan {
    private String name;
    private double price;
    private String coverage;
    private String benefits;

    public Plan(String name, double price, String coverage, String benefits) {
        this.name = name;
        this.price = price;
        this.coverage = coverage;
        this.benefits = benefits;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getCoverage() {
        return coverage;
    }

    public String getBenefits() {
        return benefits;
    }
}