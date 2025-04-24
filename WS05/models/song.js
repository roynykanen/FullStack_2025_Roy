const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  songName: { 
    type: String, 
    required: true 
  },
  artist: { 
    type: String, 
    required: true 
  },
  album: { 
    type: String 
  },
  genre: { 
    type: String 
  },
  releaseYear: { 
    type: Number, 
    required: true 
  },
  duration: { 
    type: String 
  }
}, { collection: 'songs' });

module.exports = mongoose.model('Song', songSchema);

