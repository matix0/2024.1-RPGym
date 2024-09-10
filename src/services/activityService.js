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

    // Organize as atividades por dia, formatando a data para DD/MM/YYYY
    const activitiesByDay = activities.reduce((acc, activity) => {
      const formattedDate = moment(activity.date).format("DD/MM/YYYY");

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }

      // Adiciona a atividade com os parâmetros do esquema
      acc[formattedDate].push({
        activityName: activity.activityName,
        duration: activity.duration,
        description: activity.description,
      });

      return acc;
    }, {});

    const days = Object.keys(activitiesByDay);

    return {
      days: days, // Lista de dias
      count: days.length, // Contagem de dias únicos
      activitiesByDay, // Atividades organizadas por dia
    };
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
