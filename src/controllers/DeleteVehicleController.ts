import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteVehicleService } from "../services/DeleteVehicleService";

class DeleteVehicleController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const vehicleService = new DeleteVehicleService();

    const vehicle = await vehicleService.execute({ id });

    reply.send(vehicle);
  }
}

export { DeleteVehicleController };