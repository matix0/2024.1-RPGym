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
const joinGroupByCode = async (userId, joinCode) => {
  try {
    // Encontre o grupo com o joinCode fornecido
    const group = await Group.findOne({ joinCode });

    if (!group) {
      return {
        success: false,
        message: "Código de adesão inválido",
      };
    }

    // Verifique se o usuário já está no grupo
    if (group.users.includes(userId)) {
      return {
        success: false,
        message: "O usuário já faz parte deste grupo",
      };
    }

    // Adicione o usuário ao grupo
    group.users.push(userId);
    await group.save();

    return {
      success: true,
      message: "Usuário adicionado ao grupo com sucesso",
      group,
    };
  } catch (error) {
    console.error("Erro ao adicionar o usuário ao grupo:", error);
    throw new Error("Erro ao adicionar o usuário ao grupo");
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
