const z = require('zod');

const postSchema = z.object({
    title: z.string()
    .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), 'Name should contain only alphabets')
    .max(255, 'Name should not exceed 255 characters')
    .min(2, 'Name should have atleast 2 alphabets'),
    content: z.string(),
    authorName: z.string(),
    published: z.boolean()
});


module.exports = {
    postSchema,

};