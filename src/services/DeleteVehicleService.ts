import prismaClient from "../prisma";

interface DeleteVehiclProps {
  id: string;
}

class DeleteVehicleService {
  async execute({ id }: DeleteVehiclProps) {
    if (!id) {
      throw new Error("Solicitação invalida!");
    }

    const findVehicle = await prismaClient.vehicle.findFirst({
      where: {
        id: id,
      },
    });

    if (!findVehicle) {
      throw new Error("Veiculo não existe!");
    }

    await prismaClient.vehicle.delete({
      where: {
        id: findVehicle.id,
      },
    });

    return { message: "Deletado com sucesso!" };
  }
}

export { DeleteVehicleService };