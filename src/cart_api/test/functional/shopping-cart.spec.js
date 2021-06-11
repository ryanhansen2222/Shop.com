'use strict'

const { test , trait, after } = use('Test/Suite')('Shopping Cart')

const Product = use("App/Models/Product")
trait("Test/ApiClient")


test("Test Product Creation", async({client}) => {
  const productData = {
  name: 'test',
  quantity: 0
  };

  const response = await client.post("/create").send(productData).end();

  response.assertStatus(200);



}).timeout(0);


test("Test Product Deletion", async({client}) => {
  const productData = {
  name: 'test',
  };

  const response = await client.post("/delete").send(productData).end();

  response.assertStatus(200);



}).timeout(0);

