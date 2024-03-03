import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateVehicleService } from "../services/UpdateVehicleService";

class UpdateVehicleController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { placa, chassi, renavam, modelo, marca, ano } = request.body as {
      placa: string;
      chassi: string;
      renavam: string;
      modelo: string;
      marca: string;
      ano: number;
    };

    // Chame o método de serviço para atualizar o veículo com base no ID
    const updateVehicleService = new UpdateVehicleService();
    const updatedVehicle = await updateVehicleService.execute({
      id,
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano,
    });

    reply.send(updatedVehicle);
  }
}

export { UpdateVehicleController };