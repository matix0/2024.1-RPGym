import Activity from "../mongodb/models/Atividades.js";
import User from "../mongodb/models/Usuario.js";
import moment from "moment";

const registerActivity = async (userId, activityData) => {
  const activity = new Activity({
    user: userId,
    ...activityData,
  });
  return await activity.save();
};

const getActivityDaysByUser = async (userId) => {
  try {
    const activities = await Activity.find({ user: userId });

    // Mapeia as atividades para o formato [[dd/mm/yyyy, duration, activityName]]
    const activityDetails = activities.map((activity) => [
      moment(activity.date).format("DD/MM/YYYY"), // Formata a data
      activity.duration, // Duração da atividade
      activity.activityName, // Nome da atividade
      activity.description, // Descrição da atividade
    ]);

    return activityDetails; // Retorna a lista no formato desejado
  } catch (error) {
    console.error("Error fetching activities:", error);
    return { error: error.message };
  }
};

const calculateIMC = async (userId) => {
  const user = await User.findById(userId);
  console.log("entrou imc");
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  console.log(user);
  const heightInMeters = parseFloat(user.height) / 100;
  const weight = parseFloat(user.weight);

  if (!heightInMeters || !weight) {
    throw new Error("Dados insuficientes para calcular IMC");
  }

  const imc = weight / (heightInMeters * heightInMeters);
  return imc.toFixed(2); // Retorna o IMC com duas casas decimais
};
export default {
  registerActivity,
  getActivityDaysByUser,
  calculateIMC,
};
