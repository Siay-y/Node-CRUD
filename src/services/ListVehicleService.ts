import prismaClient from "../prisma";

class ListVehicleService {
  async execute() {
    const vehicle = await prismaClient.vehicle.findMany();

    return vehicle;
  }
}

export { ListVehicleService };
