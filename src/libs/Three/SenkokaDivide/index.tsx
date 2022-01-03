import React, { useEffect } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Spinner from '@/components/molecules/Spinner';
import { guideBoxProperties } from '@/constants/common';

const Model: React.VFC = () => {
  const createModel = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
      alpha: true,
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 16 / 10, 1, 1000000);
    const light = new THREE.AmbientLight(0xffffff, 1.65);
    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(0, 0, 15000);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    scene.add(light);

    const dracoLoader = new DRACOLoader();
    const gltfLoader = new GLTFLoader();

    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.load(
      'senkoka_divide_draco.glb',
      (gltf) => {
        const model = gltf.scene;

        model.scale.set(110, 110, 110);
        model.position.set(0, -4800, 0);

        scene.add(model);
      },
      // 読込状況
      (xhr) => {
        const spinner = document.getElementById('spinner') as HTMLElement;
        const progress = Math.ceil((xhr.loaded / xhr.total) * 100);

        if (progress < 100) {
          console.log(`nitic-map: Loading... ${progress}%`);
        } else {
          setInterval(() => {
            spinner.style.display = 'none';
          }, 1000);
        }
      },
      // 読込失敗
      (error) => {
        console.error(`nitic-map: ${error}`);
      }
    );

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    const onResize = () => {
      const width = document.getElementById('map-display')
        ?.clientWidth as number;
      const height = document.getElementById('map-display')
        ?.clientHeight as number;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.render(scene, camera);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const guides: THREE.Mesh[] = [];

    guide.map((obj) => {
      guides.push(obj);
      scene.add(obj);

      obj.visible = false;
    });

    tick();
    onResize();
    window.addEventListener('resize', onResize, false);
  };

  useEffect(() => {
    createModel();
  }, []);

  return (
    <>
      <canvas id="canvas" />
      <div id="spinner">
        <Spinner color="#90A4AE" size="default" />
      </div>
    </>
  );
};

// 特定の箇所を光らせるためのガイド
const guide1 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 1200, 2500),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide2 = new THREE.Mesh(
  new THREE.BoxGeometry(1250, 1200, 2500),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide = [guide1, guide2];

// ガイドを配置する位置
export const senkoka101 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, -4100, 1000);
};

export const senkoka102 = (): void => {
  guide1.visible = false;
  guide2.visible = true;

  guide2.position.set(-2700, -4100, -2000);
};

export const senkoka103 = (): void => {
  guide1.visible = false;
  guide2.visible = true;

  guide2.position.set(-1350, -4100, -2000);
};

export const senkoka104 = (): void => {
  guide1.visible = false;
  guide2.visible = true;

  guide2.position.set(1350, -4100, -2000);
};

export const senkoka105 = (): void => {
  guide1.visible = false;
  guide2.visible = true;

  guide2.position.set(2700, -4100, -2000);
};

export const senkoka106 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, -4100, 1000);
};

export const senkoka201 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, -2300, 1000);
};

export const senkoka202 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, -2300, -2000);
};

export const senkoka203 = (): void => {
  guide1.visible = false;
  guide2.visible = true;

  guide2.position.set(1350, -2300, -2000);
};

export const senkoka204 = (): void => {
  guide1.visible = false;
  guide2.visible = true;

  guide2.position.set(2700, -2300, -2000);
};

export const senkoka205 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, -2300, 1000);
};

export const senkoka301 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, -450, 1000);
};

export const senkoka302 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, -450, -2000);
};

export const senkoka303 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, -450, -2000);
};

export const senkoka304 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, -450, 1000);
};

export const senkoka401 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, 1500, 1000);
};

export const senkoka402 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, 1500, -2000);
};

export const senkoka403 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, 1500, -2000);
};

export const senkoka404 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, 1500, 1000);
};

export const senkoka501 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, 3400, 1000);
};

export const senkoka502 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(-2100, 3400, -2000);
};

export const senkoka503 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, 3400, -2000);
};

export const senkoka504 = (): void => {
  guide1.visible = true;
  guide2.visible = false;

  guide1.position.set(2100, 3400, 1000);
};

export default React.memo(Model);
