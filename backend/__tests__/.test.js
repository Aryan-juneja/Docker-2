// __tests__/env.test.js
require('dotenv').config();

test('Check CORS_ORIGIN', () => {
  expect(process.env.CORS_ORIGIN).toBeDefined();
});
