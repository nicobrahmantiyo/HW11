const { todo } = require('../models');

class todoController {
  static async getAll(req, res, next) {
    try {
      const data = await todo.findAll({ where: { status: 'active' } });
      if (!data) {
        throw { name: 'NotFound' };
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    const { id } = req.params;
    try {
      const data = await todo.findByPk(id);
      if (!data) {
        throw { name: 'Notfound' };
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { title, status } = req.body;
    try {
      const data = await todo.create({ title, status });
      res.status(200).json({
        message: 'create success',
      });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { title, status } = req.body;
    try {
      const data = await todo.update({ title, status }, { where: { id } });
      res.status(200).json({
        message: 'update success',
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      await todo.update({ status: 'inactive' }, { where: { id } });
      res.status(200).json({
        message: 'todo deleted successfully',
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = todoController;
