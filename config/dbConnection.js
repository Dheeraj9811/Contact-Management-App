import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        // console.log(process.env.CONNECTION_STRING);
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB Connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (error) {
        console.log(`${error}`);
        console.log(`msg-> ${error.message}`);
        process.exit(1);
    }
    // finally {
    //     await mongoose.connection.close();
        
    // }
};

export default dbConnection;