// module.exports.create = async(req, res) => {
//     res.send({ message: "create handler" })
// }
// module.exports.findAll = async(req, res) => {
//     res.send({ message: "findAll handler" })
// }
// module.exports.findAllFavorite = async(req, res) => {
//     res.send({ message: "findAllFavorite handler" })
// }
// module.exports.findOne = async(req, res) => {
//     res.send({ message: "findOne handler" })
// }
// module.exports.update = async(req, res) => {
//     res.send({ message: "update handler" })
// }
// module.exports.delete = async(req, res) => {
//     res.send({ message: "delete handler" })
// }
// module.exports.deleteAll = async(req, res) => {
//     res.send({ message: "deleteAll handler" })
// }

module.exports = {
    create: async(req, res, next) => {
        res.send({ message: 'create handler' })
    },
    findAll: async(req, res, next) => {
        res.send({ message: 'findALl handler' })
    },
    findAllFavorite: async(req, res, next) => {
        res.send({ message: 'findALlFavorite handler' })
    },
    findOne: async(req, res, next) => {
        res.send({ message: 'findOne handler' })
    },
    update: async(req, res, next) => {
        res.send({ message: 'update handler' })
    },
    delete: async(req, res, next) => {
        res.send({ message: 'delete handler' })
    },
    deleteAll: async(req, res, next) => {
        res.send({ message: 'deleteAll handler' })
    },

}