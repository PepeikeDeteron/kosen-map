import { VFC, useEffect } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Spinner from '@/components/molecules/Spinner';
import { guideBoxProperties } from '@/constants/common';

const Model: VFC = () => {
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
    dracoLoader.setDecoderPath(
      'https://www.gstatic.com/draco/versioned/decoders/1.4.3/'
    );

    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.load(
      'assets/3D/top_draco.glb',
      (gltf) => {
        const model = gltf.scene;

        model.scale.set(40, 40, 40);
        model.rotation.set(120, 0, 0);
        model.position.set(200, 800, 0);

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
          }, 3000);
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
  new THREE.BoxGeometry(1150, 7000, 1500),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide2 = new THREE.Mesh(
  new THREE.BoxGeometry(4200, 1150, 1250),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide3 = new THREE.Mesh(
  new THREE.BoxGeometry(2150, 1450, 1600),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide4 = new THREE.Mesh(
  new THREE.BoxGeometry(2200, 1450, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide5 = new THREE.Mesh(
  new THREE.BoxGeometry(4200, 1150, 1650),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide6 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 3500, 1250),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide7 = new THREE.Mesh(
  new THREE.BoxGeometry(1500, 1500, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide8 = new THREE.Mesh(
  new THREE.BoxGeometry(2000, 1500, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide9 = new THREE.Mesh(
  new THREE.BoxGeometry(2950, 1600, 1500),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide10 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 1400, 1250),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide = [
  guide1,
  guide2,
  guide3,
  guide4,
  guide5,
  guide6,
  guide7,
  guide8,
  guide9,
  guide10,
];

// 非表示にするガイドの番号を抽出
const hideNumber = (i: number) => {
  return [...Array(guide.length)].map((_, m) => m + 1).filter((n) => n !== i);
};

// ガイドを配置する位置
export const kyoiku0000 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide9.visible = true;
  guide1.rotation.set(65, 0, 0);
  guide9.rotation.set(65, 0, 0);
  guide1.position.set(500, 150, 1950);
  guide9.position.set(-1550, -200, 2500);
};

export const kyoiku1000 = (): void => {
  hideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide10.visible = true;
  guide2.rotation.set(65, 0, 0);
  guide10.rotation.set(65, 0, 0);
  guide2.position.set(-2300, 800, 1000);
  guide10.position.set(-2820, 1425, 35);
};

export const kyoiku2000 = (): void => {
  hideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(65, 0, 0);
  guide3.position.set(-1100, 2600, -1350);
};

export const kyoiku3000 = (): void => {
  hideNumber(4).map((i) => (guide[i - 1].visible = false));

  guide4.visible = true;
  guide4.rotation.set(65, 0, 0);
  guide4.position.set(-3000, 2300, -1550);
};

export const kyoiku4000 = (): void => {
  hideNumber(5).map((i) => (guide[i - 1].visible = false));

  guide5.visible = true;
  guide5.rotation.set(65, 0, 0);
  guide5.position.set(2200, 2500, -1100);
};

export const kyoiku5000 = (): void => {
  hideNumber(6).map((i) => (guide[i - 1].visible = false));

  guide6.visible = true;
  guide6.rotation.set(65, 0, 0);
  guide6.position.set(500, 3500, -2800);
};

export const kyoiku6000 = (): void => {
  hideNumber(7).map((i) => (guide[i - 1].visible = false));

  guide7.visible = true;
  guide7.rotation.set(65, 0, 0);
  guide7.position.set(-700, 3500, -3250);
};

export const kyoiku7000 = (): void => {
  hideNumber(8).map((i) => (guide[i - 1].visible = false));

  guide8.visible = true;
  guide8.rotation.set(65, 0, 0);
  guide8.position.set(3400, 3300, -3000);
};

export default Model;
