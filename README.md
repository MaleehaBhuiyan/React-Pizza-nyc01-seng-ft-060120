# Access Labs Pizza

![Pizza Screen Recording](https://curriculum-content.s3.amazonaws.com/react/pizza.gif)

Welcome to your first day at the Access Labs Pizzeria!
Today, you are tasked to building an online menu of all the pizzas that the pizzeria offers.

The database of orders can be found in a json-server, under `http://localhost:3000/pizzas`.
Make sure that before you fire up your React server, you *first* fire up your json-server.

```text
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json
```

√After firing up your server, render the list of pizzas in to the table.
    - Fetch request to get pizza in app 
    - make a state for this pizza info b/ it will change 


√Each row in the table should be a pizza component and when you click the "Edit" button, it should send the pizza associated with that component into the Pizza form. The pizza form will then render the information about the pizza in the form, which will be editable.
    2 PARTS:
        √1) Passing the edit button info 
            - 
        √2) Populating the pizza form with the pizza associated with that edit button



When the form is submitted, the information should be reflected in your table and persist in the backend.
    2 PARTS:
        √1) Passing the submit button to the app so form has some sort of access to the data base 
        2) Making a PATCH request