import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the user document
interface ICity extends Document {
    _id: string;
    name: string;
}

// Create a schema for the user
const CitySchema: Schema<ICity> = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
});

// Create a model from the schema
const City = mongoose.model<ICity>('City', CitySchema);

export default City;
