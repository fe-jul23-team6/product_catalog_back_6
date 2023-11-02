## Products catalog backend

**Demo link**: [Link](https://product-catalog-back-6.onrender.com/)

### Description
To get:

1)All products you should use:  `/products` endpoint.

2)Products by specific category(product categories can be as follows: `phones`, `tablets`, `accessories`): 
`/products?category=phones` 

2)Detailed phone info you should use `/phones/itemId` (itemId is string, exapmle - 'apple-iphone-11-64gb-black'). Example request:
`/phones/apple-iphone-11-64gb-black`

3)Products with pagination and specific category you should use both `page`, `limit` and `category`queries.Example:  
`/products?category=phones&limit=16&page=1`

4)Products with category,pagination and order that you want to, you should use previous one part with extra sortBy and orderDir (this means order direction - it could be 'ASC' (from smaller to bigger) or 'DESC' (opposite one).
For exapmle:
`/products?category=phones&limit=16&page=1&orderBy=year&orderDir=DESC`

5)Products by their ids (for exapmle to get your cart or favorites) you should use:
`/products?ids=1,2,3`

6)16 products with biggest discount you should use:  
`/products/discount`

7)10 recommended products you should use: 
`/products/itemId/recommended`

8)16 new models of products you should use:  
`/products/new`

### Installing
1)Fork and clone this repository.
2)Run `npm install` in your terminal.
3)Run `npm start`

### Troubleshooting
Any advise for common problems or issues.You can apply [here](https://fe-jul23-team6.github.io/product_catalog/#/contacts)