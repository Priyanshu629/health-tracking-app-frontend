import axios from "axios";
import toast from "react-hot-toast";
import { validateBloodPressure } from "./utilityFunction";
const BACKEND_URL = "http://localhost:5000/api/v1/health-records";

export const getHealthRecords = async () => {
  const response = await axios.get(BACKEND_URL);

  if (response.status == 200) {
    return response.data.healthRecords;
  }
};
export const getHealthRecord = async (id) => {
  const response = await axios.get(BACKEND_URL + `/${id}`);

  if (response.status == 200) {
    return response.data.healthRecord;
  }
};

export const addHealthRecord = async (
  e,
  date,
  heartRate,
  bloodPressure,
  bodyTemperature
) => {
  e.preventDefault();

  if (
    date == "" ||
    heartRate == "" ||
    bloodPressure == "" ||
    bodyTemperature == ""
  ) {
    return toast.error("All fields are required");
  }

  const checkHeartRate = Number(heartRate);
  const checkBodyTemperature = Number(bodyTemperature);

  if (isNaN(checkHeartRate)) {
    return toast.error("Heart Rate must be a number");
  }
  if (isNaN(checkBodyTemperature)) {
    return toast.error("Body Temperature must be a number");
  }
  if (!validateBloodPressure(bloodPressure)) {
    return toast.error(
      "Invalid blood pressure. Enter in the format '120/80' within valid ranges."
    );
  }
  try {
    const data = {
      date,
      heartRate,
      bloodPressure,
      bodyTemperature,
    };
    const response = await axios.post(BACKEND_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 201) {
      toast.success("Health Record Added successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateHealthRecord = async (
  e,
  id,
  date,
  heartRate,
  bloodPressure,
  bodyTemperature
) => {
  e.preventDefault();

  if (
    date == "" ||
    heartRate == "" ||
    bloodPressure == "" ||
    bodyTemperature == ""
  ) {
    return toast.error("All fields are required");
  }

  const checkHeartRate = Number(heartRate);
  const checkBodyTemperature = Number(bodyTemperature);

  if (isNaN(checkHeartRate)) {
    return toast.error("Heart Rate must be a number");
  }
  if (isNaN(checkBodyTemperature)) {
    return toast.error("Body Temperature must be a number");
  }
  if (!validateBloodPressure(bloodPressure)) {
    return toast.error(
      "Invalid blood pressure. Enter in the format '120/80' within valid ranges."
    );
  }
  try {
    const data = {
      date,
      heartRate,
      bloodPressure,
      bodyTemperature,
    };
    const response = await axios.put(BACKEND_URL + `/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteHealthRecord = async (id) => {
  try {
    const response = await axios.delete(BACKEND_URL + `/${id}`);

    if (response.status == 200) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = "/";
      },2000)
    }
  } catch (error) {
    toast.error(error.message);
  }
};
