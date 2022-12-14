package com.axsos.HelloHuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Controller
@RestController
public class HelloHumanController {

    @RequestMapping("/")
    public String index(@RequestParam(value="name", required=false) String name,@RequestParam(value="lname", required=false) String lname) {
        if(name==null) {
        	return "Hello Human" ;
        }
        else if(lname==null) {
        	return "Hello " + name;
        }
        else {
        	return "Hello " + name +" "+lname ;
        }
    	
    }
}
