import CustomerRepository from '../repositories/customerRepository';
import Customer from '../models/customer';

async function getCustomerById(id: number): Promise<Customer | null> {
      const customer = await CustomerRepository.getCustomerById(id);
      return customer; 
}

async function getCustomers(): Promise<Customer[]> {
    return CustomerRepository.getCustomers();
}

async function addCustomer(customer: Customer): Promise<Customer> {
    return CustomerRepository.addCustomer(customer);
}

async function updateCustomer(id: number, newCustomer: any): Promise<Customer | null> {
    const existingCustomer = await CustomerRepository.getCustomerById(id);

    if (!existingCustomer) {
      return null;
    }

    return CustomerRepository.updateCustomer(id,existingCustomer, newCustomer);
}

async function deleteCustomer(id: number): Promise<number | null> {
    return CustomerRepository.deleteCustomer(id);
}

export default {
    getCustomerById,
    getCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer
}