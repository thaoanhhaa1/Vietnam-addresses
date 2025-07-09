import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the user document
interface ICity extends Document {
    _id: string;
    name: string;
}

// Create a schema for the user
const CitySchema: Schema<ICity> = new Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
    },
    {
        collation: {
            locale: 'en',
        },
    },
);

// Create a model from the schema
const City = mongoose.model<ICity>('CityV2', CitySchema);

export default City;
