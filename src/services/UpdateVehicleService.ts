import prismaClient from "../prisma";

interface UpdateVehicleProps {
  id: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}

class UpdateVehicleService {
  async execute({
    id,
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano,
  }: UpdateVehicleProps) {
    // Verifique se o veículo com o ID fornecido existe
    const existingVehicle = await prismaClient.vehicle.findUnique({
      where: {
        id,
      },
    });

    if (!existingVehicle) {
      throw new Error("Veículo não encontrado!");
    }

    // Atualize o veículo com os novos detalhes
    const updatedVehicle = await prismaClient.vehicle.update({
      where: {
        id,
      },
      data: {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano,
      },
    });

    return { message: "Veículo atualizado com sucesso!" };
  }
}

export { UpdateVehicleService };