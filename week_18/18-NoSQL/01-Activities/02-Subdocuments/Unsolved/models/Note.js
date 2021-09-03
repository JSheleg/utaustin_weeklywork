const { Schema,  Types } = require('mongoose');

const noteSchema = new Schema(
    {
        noteId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        noteText: {
            type: String,
            required: true,
        }
    }
)
// const Note = model('Note', noteSchema);

module.exports = noteSchema;