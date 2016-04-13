const get = (filename) => {
  return function() { return new Audio(filename) }
}

let sampler = {
  samples: {
    kick: get('media/kick.wav')
  },
  play: function(name) {
    this.samples[name]().play()
  }
}

export default sampler;
