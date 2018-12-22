package com.maximeclauss.branding.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HealthController {

    @RequestMapping(value = { "/health" })
    public String health() {
        return "{ \"status\": \"UP\" }";
    }

}
