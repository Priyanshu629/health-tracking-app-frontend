export const getBloodPressureMessage = (bloodPressure) => {
  if (!bloodPressure) return "";

  const [systolic, diastolic] = bloodPressure.split("/").map(Number);

  // Generate the message based on systolic and diastolic values
  if (systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80) {
    return "Your blood pressure is normal (90-120 mmHg / 60-80 mmHg).";
  } else if (systolic < 90 || diastolic < 60) {
    return "Your blood pressure is low (below 90/60 mmHg). Consider consulting a healthcare provider if you have symptoms.";
  } else if (systolic > 120 || diastolic > 80) {
    return "Your blood pressure is high (above 120/80 mmHg). It's advisable to monitor it regularly and consult a healthcare provider.";
  }

  return "Blood pressure reading is out of expected range. Please check your measurement.";
};

export const getBodyTemperatureMessage = (bodyTemperature) => {
  if (bodyTemperature === undefined || bodyTemperature === null) return "";

  // Determine if the temperature is in Fahrenheit or Celsius
  const isFahrenheit = bodyTemperature >= 95 && bodyTemperature <= 105;
  const temperature = isFahrenheit
    ? ((bodyTemperature - 32) * 5) / 9 // Convert to Celsius
    : bodyTemperature;

  if (isFahrenheit) {
    if (bodyTemperature >= 97 && bodyTemperature <= 99) {
      return "Your body temperature is normal (97°F - 99°F).";
    } else if (bodyTemperature < 97) {
      return "Your body temperature is low (below 97°F). Please warm up and consult a healthcare provider if needed.";
    } else if (bodyTemperature > 99) {
      return "Your body temperature is high (above 99°F). Consider monitoring it and consulting a healthcare provider.";
    }
  } else {
    if (temperature >= 36.1 && temperature <= 37.2) {
      return "Your body temperature is normal (36.1°C - 37.2°C).";
    } else if (temperature < 36.1) {
      return "Your body temperature is low (below 36.1°C). Please warm up and consult a healthcare provider if needed.";
    } else if (temperature > 37.2) {
      return "Your body temperature is high (above 37.2°C). Consider monitoring it and consulting a healthcare provider.";
    }
  }

  return "Body temperature reading is out of expected range. Please check your measurement.";
};

export const getHeartRateMessage = (heartRate) => {
  if (heartRate === undefined || heartRate === null) return "";

  // Generate the message based on heart rate value
  if (heartRate >= 60 && heartRate <= 100) {
    return "Your heart rate is normal (60-100 bpm).";
  } else if (heartRate < 60) {
    return "Your heart rate is low (below 60 bpm). If you experience dizziness or fatigue, consider consulting a healthcare provider.";
  } else if (heartRate > 100) {
    return "Your heart rate is high (above 100 bpm). It may be due to various factors such as stress or physical activity. Monitor your symptoms and consult a healthcare provider if necessary.";
  }

  return "Heart rate reading is out of expected range. Please check your measurement.";
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  // Format the date to "YYYY-MM-DD"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const validateBloodPressure = (input) => {
  const pattern = /^\d{1,3}\/\d{1,3}$/;
  if (pattern.test(input)) {
    const [systolic, diastolic] = input.split("/").map(Number);
    if (
      systolic >= 90 &&
      systolic <= 180 &&
      diastolic >= 60 &&
      diastolic <= 120
    ) {
      return true; // Blood pressure is valid
    }
  }
  return false; // Invalid blood pressure
};

export const handleFilter = (selectedOption, healthRecords) => {
  let filteredRecord = healthRecords;


  switch (selectedOption) {
    case "less than equal 60":
      return healthRecords.filter((record) => record?.heartRate <= 60);
    case "more than equal 100":
      return healthRecords.filter((record) => record?.heartRate >= 100);
    case "between 60 to 100":
      return healthRecords.filter((record) => record?.heartRate > 60 && record?.heartRate < 100);
    case "no-filter":
      return filteredRecord;
}
}
