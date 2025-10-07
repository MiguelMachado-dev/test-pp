// Global test setup file
// This file is run before all tests

// You can add global test configuration here
// For example, extending Jest matchers, setting up test databases, etc.

// Example: Custom matchers
// expect.extend({
//   toBeValidEmail(received) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const pass = emailRegex.test(received);
//     if (pass) {
//       return {
//         message: () => `expected ${received} not to be a valid email`,
//         pass: true,
//       };
//     } else {
//       return {
//         message: () => `expected ${received} to be a valid email`,
//         pass: false,
//       };
//     }
//   },
// });

// Example: Mock console methods in tests to avoid cluttering test output
// jest.spyOn(console, 'log').mockImplementation(() => {});
// jest.spyOn(console, 'error').mockImplementation(() => {});

export {};
