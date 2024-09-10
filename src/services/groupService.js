import Group from "../mongodb/models/Grupo.js";

const createGroup = async (groupData) => {
  const group = new Group(groupData);
  return await group.save();
};

const getGroupById = async (groupId) => {
  return await Group.findById(groupId).populate("users creator");
};

const getAllGroups = async () => {
  return await Group.find().populate("users creator");
};

const joinGroupByCode = async (userId, joinCode) => {
  try {
    // 1. Procurar o grupo pelo código de ingresso
    const group = await Group.findOne({ joinCode });

    if (!group) {
      return {
        success: false,
        message: "Grupo não encontrado com este código.",
      };
    }

    // 2. Verificar se o usuário já faz parte do grupo
    const isUserInGroup = group.users.some(
      (user) => user.toString() === userId.toString()
    );

    if (isUserInGroup) {
      return { success: false, message: "Você já faz parte deste grupo." };
    }

    // 3. Adicionar o usuário ao grupo
    group.users.push(userId);
    await group.save();

    return {
      success: true,
      message: "Usuário adicionado ao grupo com sucesso.",
      group,
    };
  } catch (error) {
    console.error("Erro no serviço de grupo:", error);
    return { success: false, message: "Erro ao processar a requisição." };
  }
};

const updateGroup = async (groupId, updateData) => {
  return await Group.findByIdAndUpdate(groupId, updateData, { new: true });
};

const deleteGroup = async (groupId) => {
  return await Group.findByIdAndDelete(groupId);
};

const removeUser = async (groupId, userId) => {
  const group = await Group.findById(groupId);
  if (!group) {
    throw new Error("Group not found");
  }

  group.users = group.users.filter((user) => user.toString() !== userId);
  return await group.save();
};

const getAllGroupsUser = async (userId) => {
  try {
    // Busca todos os grupos que contêm o ID do usuário na lista de usuários
    const groups = await Group.find({ users: userId }).populate(
      "users",
      "name"
    );

    if (groups.length === 0) {
      return {
        success: false,
        message: "Este usuário não faz parte de nenhum grupo",
      };
    }

    return { success: true, groups };
  } catch (error) {
    console.error("Erro ao buscar grupos do usuário:", error);
    throw new Error("Erro ao buscar grupos do usuário");
  }
};

export default {
  removeUser,
  createGroup,
  getGroupById,
  getAllGroups,
  updateGroup,
  deleteGroup,
  joinGroupByCode,
  getAllGroupsUser,
};
