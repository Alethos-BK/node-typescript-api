import express from "express";
import customerController from "../controllers/customerController";
import { validateUserData } from "../middlewares/customerMiddleware";

const router = express.Router();

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: retornando customer por id.
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/:id", customerController.getCustomer);

router.get('/', customerController.getCustomers);
 
router.post('/', validateUserData, customerController.postCustomer);

router.patch('/:id', customerController.patchCustomer);

router.delete('/:id', customerController.deleteCustomer);
 
export default router;