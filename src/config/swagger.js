import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const schemaOption = {
  main: ["./src/schema/index.js"],
  chatbot: ["./src/schema/chatbot.schema.js"],
};

function swaggerDocs(app, { port = 8000, schema = "main", endpoint = "docs" }) {
  let options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Table Booking API Docs",
        version: "0.0.1",
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
          jwt: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: schemaOption[schema],
  };
  const swaggerSpec = swaggerJsdoc(options);
  app.use(`/${endpoint}`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get(`/${endpoint}.json`, (_, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.info(`Docs available at http://localhost:${port}/${endpoint}`);
}

export default swaggerDocs;
