import { prisma } from "../configs/prisma";
import Customer from "../models/customer";

const customers: Customer[] = [];

async function getCustomerById(id: number) {
    const customer = await prisma.customer.findFirst({
        where: {
            id,
        },
    })

    return customer
}

async function getCustomers() {
    const customers = await prisma.customer.findMany();
    return customers;
}

async function addCustomer(customer: Customer) {
    const newCustomer = await prisma.customer.create({
        data: {
            name: customer.name,
            cpf: customer.cpf
        }
    });
    return newCustomer;    
}

async function updateCustomer(id: number, customer: Customer, newCustomer: Customer) {
    const updatedCustomer = await prisma.customer.update({
        where: {id: id},
        data: {
            ...customer,
            ...newCustomer,
        }
    });

    return updatedCustomer;
}

async function deleteCustomer(id: number) {
    const customer = await prisma.customer.deleteMany({
        where: {
            id,
        },
    })

    return customer.count === 0 ? null : customer.count;
}

export default {
    getCustomerById,
    getCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer
}