const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing data (optional)
    await prisma.sensorPredictions.deleteMany();
    await prisma.sensorData.deleteMany();

    // Insert dummy data for SensorData
    const sensorData = await prisma.sensorData.createMany({
      data: [
        {
          accel_x: 0.1,
          accel_y: 0.2,
          accel_z: 0.3,
          gyro_x: 0.1,
          gyro_y: 0.2,
          gyro_z: 0.3,
          timestamp: new Date(),
        },
        {
          accel_x: 0.4,
          accel_y: 0.5,
          accel_z: 0.6,
          gyro_x: 0.4,
          gyro_y: 0.5,
          gyro_z: 0.6,
          timestamp: new Date(),
        },
        {
          accel_x: 0.7,
          accel_y: 0.8,
          accel_z: 0.9,
          gyro_x: 0.7,
          gyro_y: 0.8,
          gyro_z: 0.9,
          timestamp: new Date(),
        },
      ],
    });

    // Insert data for Login (assuming 'login' is the correct model name)
    // const login = await prisma.login.create({
    //   data: {
        
    //     username: "Petek",
    //     firstname: "angga",
    //     lastname: "patria",
    //     address: "jalan bunga",
    //     contact: "085269893676",
    //     city: "Malang",
    //     state: "nnkdanjkc",
    //     password: "malang",
    //   },
    // });

    // console.log({ login });

  } catch (e) {
    console.error(e);
    throw e; // Rethrow the error to ensure the process exits with an error code
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1); // Exit the process with a non-zero code on error
  });
