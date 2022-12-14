package com.axsos.DaikichiPathVariables;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class Daikichicontoller {

	@RequestMapping("/dakichi/travel/{country}")
	public String travelcountry(@PathVariable("country") String country){
    	return "you will soon travel to: " +country;
    }
	
	@RequestMapping("/dakichi/lotto/{num}")
	public String lotto(@PathVariable("num") int num){
		if(num%2 ==0) {
			return "You have enjoyed your labour fruits but now its family time ";
		}
		else {
	    	return "you will take grand journy in the near future,but be aware of the tempting offers";	
		}

    }


	
	
}
