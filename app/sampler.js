const get = (filename) => {
  return new Audio(filename)
}

let sampler = {
  samples: {
    kick: get('media/kick.wav')
  },
  play: function(name) {
    this.samples[name].play()
  }
}

export default sampler;
