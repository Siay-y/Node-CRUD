import { FastifyRequest, FastifyReply } from "fastify";
import { ListVehicleService } from "../services/ListVehicleService";

class ListVehicleController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listVehicleService = new ListVehicleService();

    const vehicles = await listVehicleService.execute();

    reply.send(vehicles);
  }
}

export { ListVehicleController };
