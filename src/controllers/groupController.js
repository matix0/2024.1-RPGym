import groupService from "../services/groupService.js";

const createGroup = async (req, res) => {
  try {
    const group = await groupService.createGroup(req.body);
    return res.status(201).json(group);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao criar o grupo", error: error.message });
  }
};

const getGroupById = async (req, res) => {
  try {
    const group = await groupService.getGroupById(req.params.id);
    if (!group) {
      return res.status(404).json({
        message: "Não foi possível encontrar o grupo",
        error: error.message,
      });
    }
    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível encontrar o grupo",
      error: error.message,
    });
  }
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await groupService.getAllGroups();
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível encontrar os grupos",
      error: error.message,
    });
  }
};

const updateGroup = async (req, res) => {
  try {
    const group = await groupService.updateGroup(req.params.id, req.body);
    if (!group) {
      return res.status(404).json({ message: "Esse grupo não existe" });
    }
    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao atualizar o grupo, por favor tente novamente",
      error: error.message,
    });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const group = await groupService.deleteGroup(req.params.id);
    if (!group) {
      return res.status(404).json({ message: "Esse grupo não existe" });
    }
    return res.status(200).json({ message: "Grupo deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível deletar o grupo, por favor tente novamente",
      error: error.message,
    });
  }
};

const removeUser = async (req, res) => {
  try {
    const { groupId, userId } = req.params;
    const updatedGroup = await groupService.removeUser(groupId, userId);
    return res.status(200).json(updatedGroup);
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível remover o usuário, por favor tente novamente",
      error: error.message,
    });
  }
};

const joinGroupByCode = async (req, res) => {
  try {
    const { joinCode } = req.body; // Código de adesão fornecido no corpo da requisição
    const userId = req.params.userId; // ID do usuário fornecido na URL

    // Chame o serviço para adicionar o usuário ao grupo
    const result = await groupService.joinGroupByCode(userId, joinCode);

    if (result.success) {
      return res
        .status(200)
        .json({ message: result.message, group: result.group });
    } else {
      return res.status(400).json({ message: result.message });
    }
  } catch (error) {
    console.error("Erro ao juntar grupo:", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
};

const getAllGroupsUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Pegamos o userId via parâmetros da URL
    const result = await groupService.getAllGroupsUser(userId);

    if (result.success) {
      return res.status(200).json(result.groups);
    } else {
      return res.status(404).json({ message: result.message });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar grupos do usuário",
      error: error.message,
    });
  }
};

export default {
  createGroup,
  getGroupById,
  getAllGroups,
  updateGroup,
  deleteGroup,
  removeUser,
  joinGroupByCode,
  getAllGroupsUser,
};
