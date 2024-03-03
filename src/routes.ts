import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateVehicleController } from "./controllers/CreateVehicleController";
import { ListVehicleController } from "./controllers/ListVehicleController";
import { DeleteVehicleController } from "./controllers/DeleteVehicleController";
import { UpdateVehicleController } from "./controllers/UpdateVehicleController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", async (reques: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post(
    "/vehicle",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateVehicleController().handle(request, reply);
    }
  );

  fastify.get(
    "/vehicles",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListVehicleController().handle(request, reply);
    }
  );

  fastify.delete(
    "/vehicle",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteVehicleController().handle(request, reply);
    }
  );
      
  fastify.put("/vehicle/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateVehicleController().handle(request, reply);
  });
}
