import React, { useEffect, useRef, useState } from 'react';

export default ({
  seconds=150,
  images=[],
  width=window.innerWidth,
  height=window.innerHeight,  
}) => {
  const ref = useRef();
  let [THREE, setTHREE] = useState();
  let [Renderer, setRenderer] = useState(null);
  let [Scene, setScene] = useState(null);
  let [Camera, setCamera] = useState(null);
  let [Mesh, setMesh] = useState(null);
  let [Textures, setTextures] = useState([]);
  let [timer, index, forward] = [null, 0, true];

  // == 动态导入 three.js
  useEffect(() => {
    Promise.all([
      // == 基础库：WebGLRenderer、Scene、PerspectiveCamera
      import('three/src/renderers/WebGLRenderer.js'),
      import('three/src/scenes/Scene.js'),
      import('three/src/cameras/PerspectiveCamera.js'),
      import('three/src/math/Vector2.js'),
      // == 贴图相关库：PlaneGeometry、ImageUtils、MeshLambertMaterial
      import('three/src/geometries/PlaneGeometry.js'),
      import('three/src/loaders/TextureLoader.js'),
      import('three/src/materials/MeshLambertMaterial.js'),
      import('three/src/objects/Mesh.js'),
      // == 光相关
      import('three/src/lights/DirectionalLight.js'),
      import('three/src/lights/AmbientLight.js'),
    ]).then(modules => {
      if (modules.length) {
        let three = {};
        modules.map(i => three = {...three, ...i})
        setTHREE(three);
      }
    });
  }, []);

  // == 初始化渲染器、场景
  useEffect(() => {
    if (THREE) {
      initRenderer();
      initScene();
    }
  }, [THREE]);

  // == 初始化相机
  useEffect(() => {
    if (Renderer && Scene) initCamera();
  }, [Renderer, Scene]);

  // == 初始化贴图
  useEffect(() => {
    if (THREE && images.length) genTextures();
  }, [images, THREE]);

  // == 初始化材质
  useEffect(() => {
    if (Textures.length) initMesh();
  }, [Textures]);

  // == 添加到页面，同时循环播放
  useEffect(() => {
    if (Mesh) {
      addToPage();
      loopAnimation();
      return () => {
        if (timer) clearTimeout(timer);
      }
    }
  }, [Mesh]);
  
  // == 宽高参数校验，不能超出屏幕宽高，否则以某一个纬度等比缩放
  const getSafeSize = () => {
    let [safeWidth, safeHeight] = [width, height];
    const [widowWidth, windowHeight] = [window.innerWidth, window.innerHeight];
    const [widthRadio, heightRadio] = [safeWidth / widowWidth, safeHeight / windowHeight];

    // == 超出屏幕宽度
    if (widthRadio > 1) {
      safeWidth = widowWidth;
      safeHeight = safeHeight / widthRadio;
    }

    // == 超出屏幕高度
    if (heightRadio > 1) {
      safeWidth = safeWidth / heightRadio;
      safeHeight = windowHeight;
    }
    return [safeWidth, safeHeight];
  }

  const initRenderer = () => {
    const [safeWidth, safeHeight] = getSafeSize();
    // == 渲染器
    const renderer = new THREE.WebGLRenderer({
      antialias: false, 
      alpha: true,
      precision: 'highp'
    });
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    renderer.setSize(safeWidth, safeHeight);
    // renderer.setClearColor(0xffffff);
    setRenderer(renderer);
  }
  
  const initScene = () => {
    const scene = new THREE.Scene();

    // == 创建一个平行光并设置其位置
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set([0, 0, 60]);
    scene.add(directionalLight);

    // == 增加一个环境光，提亮整个场景 // == 0x292929
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    setScene(scene);
  }
  
  const getRendererSize = () => {
    const rendererSize = Renderer.getSize(new THREE.Vector2());
    return {
      width: rendererSize.width,
      height: rendererSize.height,
    };
  }

  const initCamera = () => {
    const { width, height } = getRendererSize();
    // == 这里很关键: 由于45度仰角，取渲染器宽高最大值，保证可以完整看到渲染器内容
    const far = Math.max(width, height);
    // == fov、aspect、near、far
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      far
    );
    camera.lookAt(Scene.position);
    camera.position.set(0, 0, far);
    setCamera(camera);
  }
  
  const genTextures = () => {
    let textures = [];
    for (let i = 0, len = images.length; i < len; i++) { 
      const texture = new THREE.TextureLoader().load(images[i]);
      textures.push(texture);
    }
    setTextures(textures);
  }
  
  const initMesh = () => {
    // == 保证贴图完整占满渲染器
    const { width, height } = getRendererSize();
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshLambertMaterial({
      map: Textures[0],
      side: 2,
      // == 透明贴图
      // == https://blog.csdn.net/qq_30100043/article/details/79737692
      // == https://segmentfault.com/q/1010000009677923
      transparent: true,// == 默认为 false
      alphaTest: 0.1, // == 默认为 0
    });
    const mesh = new THREE.Mesh(geometry, material);
    Scene.add(mesh);
    setMesh(mesh);
  }
  
  const addToPage = () => {
    const parent = ref.current;
    Renderer.domElement.style.margin = 'auto';
    parent.appendChild(Renderer.domElement);
  }
  
  const loopAnimation = () => {
    // == 渲染
    Renderer.render(Scene, Camera);

    // == 下一桢数据
    if (forward) index++;
    else index--;
    Mesh.material.map = Textures[index];

    if (index === images.length - 1) forward = false;
    if (index === 0) forward = true;

    // == 重新渲染
    timer = setTimeout(loopAnimation, seconds);
  }

  return <div ref={ref}></div>
}
