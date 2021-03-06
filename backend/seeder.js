const fs = require('fs');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);


// Import into DB
const importData = async () => {
    try {
        // Encrypt password on DB
        const encryptedUserPromises = users.map(async user => {
            const hashedPassword = await bcrypt.hash(user.password, 12);
            return { ...user, password: hashedPassword };
        });

        const encryptedUsers = await Promise.all(encryptedUserPromises);

        await User.create(encryptedUsers);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// Delete Data
const deleteData = async () => {
    try {
        await User.deleteMany();

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// use command node seeder -i to populate DB and node seeder -d to erase data

if (process.argv[2] === '-i') {
    importData();

}else if (process.argv[2] === '-d') {
    deleteData();
}