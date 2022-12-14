package com.axsos.DaikichiRoutes;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
// 1. Annotation
@RestController
@RequestMapping("/daikichi")
public class DaikichiRoutesApplication {
        public static void main(String[] args) {
                SpringApplication.run(DaikichiRoutesApplication.class, args);
        }
        
        @RequestMapping("")
        public String Welcome() { 
                return "Welcome!";
        }
        
        @RequestMapping("/today")
        public String today() { 
                return "Today you will find luck";
        }
        
        
        @RequestMapping("/tomorrow")
        public String tomorrow() { 
                return "tomorrow an opportunity will arise";
        }
}