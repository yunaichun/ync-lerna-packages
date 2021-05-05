'use strict'
const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: `index.js`,
    publicPath: '',
    library: 'AnimationKeyframe',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  // devtool: '#eval-source-map',
  devtool: false,

  plugins: [
  ],

  externals: {
    'react': {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    'three/src/renderers/WebGLRenderer.js': {
      root: "WebGLRenderer",
      commonjs2: "three/src/renderers/WebGLRenderer.js",
      commonjs: "three/src/renderers/WebGLRenderer.js",
      amd: "three/src/renderers/WebGLRenderer.js"
    },
    'three/src/scenes/Scene.js': {
      root: "Scene",
      commonjs2: "three/src/scenes/Scene.js",
      commonjs: "three/src/scenes/Scene.js",
      amd: "three/src/scenes/Scene.js"
    },
    'three/src/cameras/PerspectiveCamera.js': {
      root: "PerspectiveCamera",
      commonjs2: "three/src/cameras/PerspectiveCamera.js",
      commonjs: "three/src/cameras/PerspectiveCamera.js",
      amd: "three/src/cameras/PerspectiveCamera.js"
    },
    'three/src/math/Vector2.js': {
      root: "PerspectiveCamera",
      commonjs2: "three/src/math/Vector2.js",
      commonjs: "three/src/math/Vector2.js",
      amd: "three/src/math/Vector2.js"
    },
    'three/src/geometries/PlaneGeometry.js': {
      root: "PlaneGeometry",
      commonjs2: "three/src/geometries/PlaneGeometry.js",
      commonjs: "three/src/geometries/PlaneGeometry.js",
      amd: "three/src/geometries/PlaneGeometry.js"
    },
    'three/src/loaders/TextureLoader.js': {
      root: "TextureLoader",
      commonjs2: "three/src/loaders/TextureLoader.js",
      commonjs: "three/src/loaders/TextureLoader.js",
      amd: "three/src/loaders/TextureLoader.js"
    },
    'three/src/materials/MeshLambertMaterial.js': {
      root: "MeshLambertMaterial",
      commonjs2: "three/src/materials/MeshLambertMaterial.js",
      commonjs: "three/src/materials/MeshLambertMaterial.js",
      amd: "three/src/materials/MeshLambertMaterial.js"
    },
    'three/src/objects/Mesh.js': {
      root: "Mesh",
      commonjs2: "three/src/objects/Mesh.js",
      commonjs: "three/src/objects/Mesh.js",
      amd: "three/src/objects/Mesh.js"
    },
    'three/src/lights/DirectionalLight.js': {
      root: "DirectionalLight",
      commonjs2: "three/src/lights/DirectionalLight.js",
      commonjs: "three/src/lights/DirectionalLight.js",
      amd: "three/src/lights/DirectionalLight.js"
    },
    'three/src/lights/AmbientLight.js': {
      root: "AmbientLight",
      commonjs2: "three/src/lights/AmbientLight.js",
      commonjs: "three/src/lights/AmbientLight.js",
      amd: "three/src/lights/AmbientLight.js"
    }
  }
}
