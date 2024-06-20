-- CreateTable
CREATE TABLE "sensor_data" (
    "id" SERIAL NOT NULL,
    "accel_x" DOUBLE PRECISION,
    "accel_y" DOUBLE PRECISION,
    "accel_z" DOUBLE PRECISION,
    "gyro_x" DOUBLE PRECISION,
    "gyro_y" DOUBLE PRECISION,
    "gyro_z" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3),

    CONSTRAINT "sensor_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor_predictions" (
    "id" SERIAL NOT NULL,
    "sensorDataId" INTEGER,
    "task_t01" DOUBLE PRECISION,
    "task_t06" DOUBLE PRECISION,
    "task_t20" DOUBLE PRECISION,
    "task_t21" DOUBLE PRECISION,
    "task_t22" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3),

    CONSTRAINT "sensor_predictions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sensor_predictions" ADD CONSTRAINT "sensor_predictions_sensorDataId_fkey" FOREIGN KEY ("sensorDataId") REFERENCES "sensor_data"("id") ON DELETE SET NULL ON UPDATE CASCADE;
