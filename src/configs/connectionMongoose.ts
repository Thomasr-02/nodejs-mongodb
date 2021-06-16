import mongoose from 'mongoose';

mongoose.connect('mongodb://0.0.0.0:27017/nodemongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

export default mongoose;