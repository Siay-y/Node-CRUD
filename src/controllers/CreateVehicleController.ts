import { FastifyRequest, FastifyReply } from "fastify";
import { CreateVehicleService } from "../services/CreateVehicleService";

class CreateVehicleController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { placa, chassi, renavam, modelo, marca, ano } = request.body as {
      placa: string;
      chassi: string;
      renavam: string;
      modelo: string;
      marca: string;
      ano: number;
    };

    const vehicleService = new CreateVehicleService();
    const vehicle = await vehicleService.execute({ placa, chassi, renavam, modelo, marca, ano });

    reply.send(vehicle);
  }
}

export { CreateVehicleController };
