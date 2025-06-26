const prisma = require("../helpers/prisma");

const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        return res.json({
            success: true,
            status: "get data posts success",
            data: posts,
        }); 

    }catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message : "get data posts failed",
        })
    }

}

const { postSchema } = require("../helpers/schema");
const { postSchemaWithId } = require("../helpers/schema");

const createPost = async (req, res) => {
    try {
        const parse = postSchema.safeParse(req.body);
        if (!parse.success) {
            const errorMessage = parse.error.issues.map(err=>`${err.path} - ${err.message}`);
            return res.json({
                success: false,
                status: "validation error",
                message: errorMessage,
                data: null,
            })
        }
        const post = await prisma.post.create({
            data :{
                authorName: parse.data.authorName,
                content: parse.data.content,
                title: parse.data.title,
                published: parse.data.published
            }
        })
        return res.json({
            success: true,
            status: "create post success",
            data: post,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "create post failed",
        });
    }
}

const updatePost = async (req,res) => {
    try {
        const { id } = req.params;
        const parse = postSchema.safeParse(req.body);
        if (!parse.success) {
            const errorMessage = parse.error.issues.map(err => `${err.path} - ${err.message}`);
            return res.json({
                success: false,
                status: "validation error",
                message: errorMessage,
                data: null,
            });
        }
        const post = await prisma.post.update({
            where: { id: Number(id) },
            data: {
                authorName: parse.data.authorName,
                content: parse.data.content,
                title: parse.data.title,
                published: parse.data.published
            }
        });
        return res.json({
            success: true,
            status: "update post success",
            data: post,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "update post failed",
        });
    }
}
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.post.delete({
            where: { id: Number(id) }
        });
        return res.json({
            success: true,
            status: "delete post success",
            data: null,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "delete post failed",
        });
    }
}


module.exports={
    getPosts,
    createPost,
    updatePost,
    deletePost
}