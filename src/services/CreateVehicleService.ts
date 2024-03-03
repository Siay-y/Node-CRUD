import prismaClient from "../prisma";

interface CreateVehicleProps {
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}

class CreateVehicleService {
  async execute({
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano,
  }: CreateVehicleProps) {
    if (!placa || !chassi || !renavam || !modelo || !marca || !ano) {
      throw new Error("Preencha todos os campos!");
    }

    const vehicle = await prismaClient.vehicle.create({
      data: {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano,
      },
    });

    return { message: "Cadastrado com sucesso!" };
  }
}

export { CreateVehicleService };
