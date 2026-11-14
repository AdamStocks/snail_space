WebAssembly.instantiateStreaming(fetch("snail_space_bg.wasm"), importObject).then(
  (results) => {
        // Do something with the results!
  },
);