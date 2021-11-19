package com.luv2code.ecommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.luv2code.ecommerce.entity.Product;
import com.luv2code.ecommerce.entity.ProductCategory;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		
		RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
		
		HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
		
		// disable the methods listed in theUnsupportedActions for Product
		config.getExposureConfiguration()
			.forDomainType(Product.class)
			.withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions) );
		
		// disable the methods listed in theUnsupportedActions for Product Category
				config.getExposureConfiguration()
					.forDomainType(ProductCategory.class)
					.withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions) );
		
		
		
	}

}
