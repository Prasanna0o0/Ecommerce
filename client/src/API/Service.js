import { request } from './Client';



// Example function to send login credentials
export const loginUser = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/customers/getcustomer',
      // data: { email, password },
    });
    console.log(response);
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Example function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await request({
      method: 'post',
      url: '/customers/createcustomer',
      data: userData,
    });
    console.log(userData,'userDatauserDatauserData');
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Function to get customer details
export const getCustomerDetails = async (customerId) => {
  try {
    const response = await request({
      method: 'get',
      url: `/customers/${customerId}`,
    });
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error getting customer details:', error);
    throw error;
  }
};

// Function to create a new customer
export const createCustomer = async (customerData) => {
  try {
    const response = await request({
      method: 'post',
      url: '/customers',
      data: customerData,
    });
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

// Function to create a purchase
export const createPurchase = async (purchaseData) => {
  try {
    const response = await request({
      method: 'post',
      url: '/purchases',
      data: purchaseData,
    });
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error creating purchase:', error);
    throw error;
  }
};

// Function to get purchase details
export const getPurchaseDetails = async (purchaseId) => {
  try {
    const response = await request({
      method: 'get',
      url: `/purchases/${purchaseId}`,
    });
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error getting purchase details:', error);
    throw error;
  }
};

// Function to get product details
export const getProductDetails = async (productId) => {
  try {
    const response = await request({
      method: 'get',
      url: `/products/${productId}`,
    });
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error getting product details:', error);
    throw error;
  }
};

// Function to get all products
export const getAllProducts = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/products/getproduct',
    });
    return response; // Assuming your API returns appropriate data
  } catch (error) {
    console.error('Error getting all products:', error);
    throw error;
  }
};

// Add more API functions as needed
