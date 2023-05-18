import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleWare = () => {
  const options = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Devjobs",
  };

  const swaggerDocument = YAML.load("./src/config/swagger.yaml");
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];
};

export default swaggerMiddleWare;
