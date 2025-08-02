module.exports = class CategoryService{
    async addCategory(body){
        try {
            const data = await Category.create(body);
            return res
              .status(201)
              .json({ message: "category created", data: data, error: false });
          } catch (error) {
            return res.status(401).json({
              message: error.message,
              error: true,
            });
          }
    }
}