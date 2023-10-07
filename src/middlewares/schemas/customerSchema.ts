import { validateCpf }   from "./cpfSchema";
import * as Joi from 'joi';

const costumerSchema = Joi.object({
    name: Joi.string().min(3).max(45).required(),
    cpf: Joi.string().custom((value, helpers) => {
        if (!validateCpf(value)) { 
            return helpers.error('string.cpfInvalid'); 
        }
        return value;
    })
}).messages({
    'string.cpfInvalid': 'CPF INVÁLIDO :(' 
});

export default {
    costumerSchema
}