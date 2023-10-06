import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "swagger apizinha",
            version: "1.0.0",
            description: "rushando node/typescript na velocidade"
        },
        basePath: "/"
    },
    apis: [path.resolve(__dirname, '../routers/customerRouter.ts')]
};

const specs = swaggerJSDoc(options);

export { specs };