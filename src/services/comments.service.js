const Coffee = require('../database/models/coffees.model');
const Comment = require('../database/models/comments.models')

class CommentService {
    constructor() {

    }
    async find() {
        const res = await Comment.findAll(
            {include: [{ model: Coffee,attributes: ['name'] }]}
        )
        return res
    }
    async findOne(id) {
        const res = await Comment.findByPk(id);
        return res;
    }
    async create(data) {
        const newComment = await Comment.create(data);
        const res = await Comment.findOne({
            where: { id: newComment.id },
            include: [{ model: Coffee, attributes: ['name'] }],
          });
      
        return res
    }
    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true };
    }
}
module.exports = CommentService