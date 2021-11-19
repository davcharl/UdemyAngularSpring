package com.luv2code.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.luv2code.ecommerce.entity.ProductCategory;

// This overrides defaults.
// "productCategory" will be the name of the JSON entry (that, i guess, binds to the entity of the same name).
// "path" will be the endpoint /product-category (otherwise Jpa will just append 's'/pluralises to the entity name: /productCategories, which is not what i want to be seen)
@RepositoryRestResource(collectionResourceRel = "productCategory", path="product-category") 
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long>  {

}
