import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

export const ThreeAnimationKeyframe = ({
    seconds=150,
    images=[],
    style={},
    rendererConfig={
        width: window.innerWidth,
        height: window.innerHeight
    },
    cameraConfig={
        fov: 45,
        aspect: window.innerWidth/window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [0, 0, 10]
    },
    textureOfPlane={
        width: 4, 
        height: 6.5,
    },
    directionalLightConfig={
        color: 0xffffff,
        intensity: 1,
        position: [0, 0, 60]
    },
    ambientLightConfig={
        show: false,
        color: 0xffffff,// == 0x292929
    },
}) => {
    const ref = useRef();
    let [THREE, setTHREE] = useState();
    let [textures, setTextures] = useState([]);
    let [renderer, scene, camera, mesh, timer, index] = [null, null, null, null, null, 0];

    // == 动态导入 three.js
    useEffect(() => {
        Promise.all([
            // == 基础库：WebGLRenderer、Scene、PerspectiveCamera
            import('three/src/renderers/WebGLRenderer.js'),
            import('three/src/scenes/Scene.js'),
            import('three/src/cameras/PerspectiveCamera.js'),
            // == 贴图相关库：PlaneGeometry、ImageUtils、MeshLambertMaterial
            import('three/src/geometries/PlaneGeometry.js'),
            import('three/src/loaders/TextureLoader.js'),
            import('three/src/materials/MeshLambertMaterial.js'),
            import('three/src/objects/Mesh.js'),
            // == 光相关
            import('three/src/lights/DirectionalLight.js'),
            import('three/src/lights/AmbientLight.js'),
        ]).then(res => {
            if (res.length) {
                let temp = {};
                res.map(i => temp = {...temp, ...i})
                setTHREE(temp);
            }
        });
    }, []);

    // == 生成序列贴图
    useEffect(() => {
        if(images.length && THREE) genTextures();
    }, [images, THREE]);

    // == 图片序列动画
    useEffect(() => {
        if (textures.length) {
            initRenderer();
            initScene();
            initCamera();
            loopAnimation();
            return () => {
                if (timer) clearTimeout(timer);
            }
        }
    }, [textures]);
  
    const genTextures = () => {
        let temp = [];
        for (let i = 0, len = images.length; i < len; i++) { 
            const texture = new THREE.TextureLoader().load(images[i]);
            temp.push(texture);
        }
        setTextures(temp);
    }
   
    const initRenderer = () => {
        // == 渲染器
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(rendererConfig.width, rendererConfig.height);
        // renderer.setClearColor(0xffffff);
        const parent = ref.current;
        parent.appendChild(renderer.domElement);
    }

    const initScene = () => {
        scene = new THREE.Scene();

        // == 1、创建一个平行光并设置其位置
        const directionalLight = new THREE.DirectionalLight(
            directionalLightConfig.color,
            directionalLightConfig.intensity
        );
        directionalLight.position.set(...directionalLightConfig.position);
        scene.add(directionalLight);

        // == 2、增加一个环境光，提亮整个场景
        if (ambientLightConfig.show) {
            const ambientLight = new THREE.AmbientLight(ambientLightConfig.color);
            scene.add(ambientLight);
        }

        // == 3、添加贴图
        const geometry = new THREE.PlaneGeometry(textureOfPlane.width, textureOfPlane.height);
        const material = new THREE.MeshLambertMaterial({
            map: textures[index],
            side: 2,
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }

    const initCamera = () => {
        camera = new THREE.PerspectiveCamera(
            cameraConfig.fov,
            cameraConfig.aspect,
            cameraConfig.near,
            cameraConfig.far
        );
        camera.lookAt(scene.position);
        camera.position.set(...cameraConfig.position);
    }

    const loopAnimation = () => {
        // == 渲染
        renderer.render(scene, camera);

        // == 下一桢数据
        index++;
        mesh.material.map = textures[index];
        if (index === images.length - 1) index = 0;

        // == 重新渲染
        timer = setTimeout(loopAnimation, seconds);
    }

    return (
        <div ref={ref} style={style}>
        </div>
    );
}
