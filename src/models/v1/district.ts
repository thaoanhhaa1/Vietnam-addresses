import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the user document
interface IDistrict extends Document {
    _id: string;
    name: string;
    parentId: string;
}

// Create a schema for the user
const DistrictSchema: Schema<IDistrict> = new Schema(
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
const District = mongoose.model<IDistrict>('District', DistrictSchema);

export default District;
