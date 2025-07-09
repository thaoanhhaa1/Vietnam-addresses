import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the user document
interface IWard extends Document {
    _id: string;
    name: string;
    parentId: string;
}

// Create a schema for the user
const WardSchema: Schema<IWard> = new Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        parentId: { type: String, required: true },
    },
    {
        collation: {
            locale: 'en',
        },
    },
);

// Create a model from the schema
const Ward = mongoose.model<IWard>('Ward', WardSchema);

export default Ward;
