import { VFC, useEffect } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Spinner from '@/components/molecules/Spinner';
import { guideBoxProperties, facilityBoxProperties } from '@/constants/common';

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

    camera.position.set(0, 5500, 15000);
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
      'assets/3D/kyoiku_draco.glb',
      (gltf) => {
        const model = gltf.scene;

        model.scale.set(50, 50, 50);
        model.rotation.set(0, -120, 0);
        model.position.set(0, -2900, 0);

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
          }, 3500);
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

    facility.map((obj) => {
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
  new THREE.BoxGeometry(400, 800, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide2 = new THREE.Mesh(
  new THREE.BoxGeometry(1700, 800, 1000),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide3 = new THREE.Mesh(
  new THREE.BoxGeometry(700, 800, 1000),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide4 = new THREE.Mesh(
  new THREE.BoxGeometry(750, 800, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide5 = new THREE.Mesh(
  new THREE.BoxGeometry(300, 800, 300),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide6 = new THREE.Mesh(
  new THREE.BoxGeometry(1600, 1000, 1800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide7 = new THREE.Mesh(
  new THREE.BoxGeometry(700, 800, 300),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide8 = new THREE.Mesh(
  new THREE.BoxGeometry(600, 800, 300),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide9 = new THREE.Mesh(
  new THREE.BoxGeometry(600, 800, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide10 = new THREE.Mesh(
  new THREE.BoxGeometry(600, 800, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide11 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 800, 1200),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide12 = new THREE.Mesh(
  new THREE.BoxGeometry(400, 600, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide13 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 600, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide14 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 600, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide15 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 600, 1600),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide16 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 600, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide17 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 600, 1200),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide18 = new THREE.Mesh(
  new THREE.BoxGeometry(350, 600, 550),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide19 = new THREE.Mesh(
  new THREE.BoxGeometry(350, 600, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide20 = new THREE.Mesh(
  new THREE.BoxGeometry(300, 600, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide21 = new THREE.Mesh(
  new THREE.BoxGeometry(400, 600, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide22 = new THREE.Mesh(
  new THREE.BoxGeometry(500, 800, 500),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide23 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 800, 1200),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide24 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 800, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide25 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 800, 1800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide26 = new THREE.Mesh(
  new THREE.BoxGeometry(400, 800, 550),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide27 = new THREE.Mesh(
  new THREE.BoxGeometry(800, 600, 1800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide28 = new THREE.Mesh(
  new THREE.BoxGeometry(400, 600, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide29 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 600, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide30 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 800, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide31 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 800, 1000),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide32 = new THREE.Mesh(
  new THREE.BoxGeometry(1200, 600, 1600),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide33 = new THREE.Mesh(
  new THREE.BoxGeometry(1700, 600, 1000),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide34 = new THREE.Mesh(
  new THREE.BoxGeometry(700, 800, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide35 = new THREE.Mesh(
  new THREE.BoxGeometry(700, 600, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide36 = new THREE.Mesh(
  new THREE.BoxGeometry(700, 600, 1600),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide37 = new THREE.Mesh(
  new THREE.BoxGeometry(450, 800, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide38 = new THREE.Mesh(
  new THREE.BoxGeometry(1150, 800, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide39 = new THREE.Mesh(
  new THREE.BoxGeometry(450, 800, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide40 = new THREE.Mesh(
  new THREE.BoxGeometry(450, 600, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide41 = new THREE.Mesh(
  new THREE.BoxGeometry(600, 600, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide42 = new THREE.Mesh(
  new THREE.BoxGeometry(1150, 600, 800),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide43 = new THREE.Mesh(
  new THREE.BoxGeometry(450, 600, 400),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide44 = new THREE.Mesh(
  new THREE.BoxGeometry(1600, 800, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide45 = new THREE.Mesh(
  new THREE.BoxGeometry(1600, 600, 700),
  new THREE.MeshBasicMaterial(guideBoxProperties)
);

const guide46 = new THREE.Mesh(
  new THREE.BoxGeometry(2000, 600, 700),
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
  guide11,
  guide12,
  guide13,
  guide14,
  guide15,
  guide16,
  guide17,
  guide18,
  guide19,
  guide20,
  guide21,
  guide22,
  guide23,
  guide24,
  guide25,
  guide26,
  guide27,
  guide28,
  guide29,
  guide30,
  guide31,
  guide32,
  guide33,
  guide34,
  guide35,
  guide36,
  guide37,
  guide38,
  guide39,
  guide40,
  guide41,
  guide42,
  guide43,
  guide44,
  guide45,
  guide46,
];

const facility1 = new THREE.Mesh(
  new THREE.BoxGeometry(1150, 600, 8000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility2 = new THREE.Mesh(
  new THREE.BoxGeometry(3700, 600, 1900),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility3 = new THREE.Mesh(
  new THREE.BoxGeometry(1150, 400, 6000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility4 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility5 = new THREE.Mesh(
  new THREE.BoxGeometry(1150, 400, 6000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility6 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility7 = new THREE.Mesh(
  new THREE.BoxGeometry(5500, 600, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility8 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 600, 2000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility9 = new THREE.Mesh(
  new THREE.BoxGeometry(5500, 400, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility10 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 400, 2000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility11 = new THREE.Mesh(
  new THREE.BoxGeometry(5500, 400, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility12 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 400, 1900),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility13 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 600, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility14 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility15 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility16 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility17 = new THREE.Mesh(
  new THREE.BoxGeometry(1500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility18 = new THREE.Mesh(
  new THREE.BoxGeometry(4300, 600, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility19 = new THREE.Mesh(
  new THREE.BoxGeometry(4300, 400, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility20 = new THREE.Mesh(
  new THREE.BoxGeometry(4300, 400, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility21 = new THREE.Mesh(
  new THREE.BoxGeometry(4300, 400, 1000),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility22 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 600, 3800),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility23 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 400, 3800),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility24 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 400, 3800),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility25 = new THREE.Mesh(
  new THREE.BoxGeometry(1500, 600, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility26 = new THREE.Mesh(
  new THREE.BoxGeometry(1500, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility27 = new THREE.Mesh(
  new THREE.BoxGeometry(2300, 600, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility28 = new THREE.Mesh(
  new THREE.BoxGeometry(2300, 400, 1500),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility29 = new THREE.Mesh(
  new THREE.BoxGeometry(3200, 600, 2300),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility30 = new THREE.Mesh(
  new THREE.BoxGeometry(3200, 400, 2300),
  new THREE.MeshBasicMaterial(facilityBoxProperties)
);

const facility = [
  facility1,
  facility2,
  facility3,
  facility4,
  facility5,
  facility6,
  facility7,
  facility8,
  facility9,
  facility10,
  facility11,
  facility12,
  facility13,
  facility14,
  facility15,
  facility16,
  facility17,
  facility18,
  facility19,
  facility20,
  facility21,
  facility22,
  facility23,
  facility24,
  facility25,
  facility26,
  facility27,
  facility28,
  facility29,
  facility30,
];

// 非表示にするガイドの番号を抽出
const hideGuideNumber = (i: number) => {
  return [...Array(guide.length)].map((_, m) => m + 1).filter((n) => n !== i);
};

const hideFacilityNumber = (i: number) => {
  return [...Array(facility.length)]
    .map((_, m) => m + 1)
    .filter((n) => n !== i);
};

// ガイドを配置する位置
export const kyoiku0101 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2450, -2600, 3200);
};

export const kyoiku0102 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2750, -2600, 3000);
};

export const kyoiku0103 = (): void => {
  hideGuideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(-3500, -2600, 2200);
};

export const kyoiku0104 = (): void => {
  hideGuideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-4500, -2600, 1450);
};

export const kyoiku0105 = (): void => {
  hideGuideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-5050, -2600, 1075);
};

export const kyoiku0106 = (): void => {
  hideGuideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-4560, -2600, 290);
};

export const kyoiku0107 = (): void => {
  hideGuideNumber(4).map((i) => (guide[i - 1].visible = false));

  guide4.visible = true;
  guide4.rotation.set(0, -120, 0);
  guide4.position.set(-3900, -2600, 550);
};

export const kyoiku0108 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-3450, -2600, 850);
};

export const kyoiku0109 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-3185, -2600, 1040);
};

export const kyoiku0110 = (): void => {
  hideGuideNumber(5).map((i) => (guide[i - 1].visible = false));

  guide5.visible = true;
  guide5.rotation.set(0, -120, 0);
  guide5.position.set(-2800, -2600, 1375);
};

export const kyoiku0111 = (): void => {
  hideGuideNumber(6).map((i) => (guide[i - 1].visible = false));

  guide6.visible = true;
  guide6.rotation.set(0, -120, 0);
  guide6.position.set(-2900, -2500, 4650);
};

export const kyoiku0112 = (): void => {
  hideGuideNumber(5).map((i) => (guide[i - 1].visible = false));

  guide5.visible = true;
  guide5.rotation.set(0, -120, 0);
  guide5.position.set(-1950, -2600, 4000);
};

export const kyoiku0113 = (): void => {
  hideGuideNumber(7).map((i) => (guide[i - 1].visible = false));

  guide7.visible = true;
  guide7.rotation.set(0, -120, 0);
  guide7.position.set(-1700, -2600, 3700);
};

export const kyoiku0114 = (): void => {
  hideGuideNumber(4).map((i) => (guide[i - 1].visible = false));

  guide4.visible = true;
  guide4.rotation.set(0, -120, 0);
  guide4.position.set(-1050, -2600, 2750);
};

export const kyoiku0115 = (): void => {
  hideGuideNumber(8).map((i) => (guide[i - 1].visible = false));

  guide8.visible = true;
  guide8.rotation.set(0, -120, 0);
  guide8.position.set(-700, -2600, 2250);
};

export const kyoiku0116 = (): void => {
  hideGuideNumber(9).map((i) => (guide[i - 1].visible = false));

  guide9.visible = true;
  guide9.rotation.set(0, -120, 0);
  guide9.position.set(-375, -2600, 1800);
};

export const kyoiku0117 = (): void => {
  hideGuideNumber(10).map((i) => (guide[i - 1].visible = false));

  guide10.visible = true;
  guide10.rotation.set(0, -120, 0);
  guide10.position.set(-100, -2600, 1375);
};

export const kyoiku0118 = (): void => {
  hideGuideNumber(10).map((i) => (guide[i - 1].visible = false));

  guide10.visible = true;
  guide10.rotation.set(0, -120, 0);
  guide10.position.set(325, -2600, 1750);
};

export const kyoiku0119 = (): void => {
  hideGuideNumber(11).map((i) => (guide[i - 1].visible = false));

  guide11.visible = true;
  guide11.rotation.set(0, -120, 0);
  guide11.position.set(400, -2600, 500);
};

export const kyoiku0120 = (): void => {
  hideGuideNumber(11).map((i) => (guide[i - 1].visible = false));

  guide11.visible = true;
  guide11.rotation.set(0, -120, 0);
  guide11.position.set(1050, -2600, -425);
};

export const kyoiku0201 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2250, 1500, 1875);
};

export const kyoiku0202 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2580, 1500, 1650);
};

export const kyoiku0203 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(-3000, 1500, 1375);
};

export const kyoiku0204 = (): void => {
  hideGuideNumber(14).map((i) => (guide[i - 1].visible = false));

  guide14.visible = true;
  guide14.rotation.set(0, -120, 0);
  guide14.position.set(-3730, 1500, 810);
};

export const kyoiku0205 = (): void => {
  hideGuideNumber(15).map((i) => (guide[i - 1].visible = false));

  guide15.visible = true;
  guide15.rotation.set(0, -120, 0);
  guide15.position.set(-1250, 1500, 2000);
};

export const kyoiku0206 = (): void => {
  hideGuideNumber(16).map((i) => (guide[i - 1].visible = false));

  guide16.visible = true;
  guide16.rotation.set(0, -120, 0);
  guide16.position.set(-800, 1500, 1230);
};

export const kyoiku0207 = (): void => {
  hideGuideNumber(16).map((i) => (guide[i - 1].visible = false));

  guide16.visible = true;
  guide16.rotation.set(0, -120, 0);
  guide16.position.set(-580, 1500, 930);
};

export const kyoiku0208 = (): void => {
  hideGuideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(600, 1500, -750);
};

export const kyoiku0209 = (): void => {
  hideGuideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(1225, 1500, -1650);
};

export const kyoiku0301 = (): void => {
  hideGuideNumber(18).map((i) => (guide[i - 1].visible = false));

  guide18.visible = true;
  guide18.rotation.set(0, -120, 0);
  guide18.position.set(-1930, 3800, 1200);
};

export const kyoiku0302 = (): void => {
  hideGuideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-2125, 3800, 975);
};

export const kyoiku0303 = (): void => {
  hideGuideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-2450, 3800, 750);
};

export const kyoiku0304 = (): void => {
  hideGuideNumber(20).map((i) => (guide[i - 1].visible = false));

  guide20.visible = true;
  guide20.rotation.set(0, -120, 0);
  guide20.position.set(-2625, 3800, 630);
};

export const kyoiku0305 = (): void => {
  hideGuideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-2925, 3800, 425);
};

export const kyoiku0306 = (): void => {
  hideGuideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-3275, 3800, 185);
};

export const kyoiku0307 = (): void => {
  hideGuideNumber(20).map((i) => (guide[i - 1].visible = false));

  guide20.visible = true;
  guide20.rotation.set(0, -120, 0);
  guide20.position.set(-3450, 3800, 25);
};

export const kyoiku0308 = (): void => {
  hideGuideNumber(20).map((i) => (guide[i - 1].visible = false));

  guide20.visible = true;
  guide20.rotation.set(0, -120, 0);
  guide20.position.set(-3700, 3800, -150);
};

export const kyoiku0309 = (): void => {
  hideGuideNumber(16).map((i) => (guide[i - 1].visible = false));

  guide16.visible = true;
  guide16.rotation.set(0, -120, 0);
  guide16.position.set(-1170, 3800, 1780);
};

export const kyoiku0310 = (): void => {
  hideGuideNumber(21).map((i) => (guide[i - 1].visible = false));

  guide21.visible = true;
  guide21.rotation.set(0, -120, 0);
  guide21.position.set(-745, 3800, 1565);
};

export const kyoiku0311 = (): void => {
  hideGuideNumber(21).map((i) => (guide[i - 1].visible = false));

  guide21.visible = true;
  guide21.rotation.set(0, -120, 0);
  guide21.position.set(-530, 3800, 1290);
};

export const kyoiku0312 = (): void => {
  hideGuideNumber(21).map((i) => (guide[i - 1].visible = false));

  guide21.visible = true;
  guide21.rotation.set(0, -120, 0);
  guide21.position.set(-320, 3800, 1000);
};

export const kyoiku0313 = (): void => {
  hideGuideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(-175, 3800, 225);
};

export const kyoiku0314 = (): void => {
  hideGuideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(430, 3800, -600);
};

export const kyoiku0315 = (): void => {
  hideGuideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(1075, 3800, -1500);
};

export const kyoiku0316 = (): void => {
  hideGuideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(1700, 3800, -2400);
};

export const kyoiku1101 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1100, -2600, 700);
};

export const kyoiku1102 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1400, -2600, 475);
};

export const kyoiku1103 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1675, -2600, 260);
};

export const kyoiku1104 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1950, -2600, 45);
};

export const kyoiku1105 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2225, -2600, -170);
};

export const kyoiku1106 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2450, -2600, -335);
};

export const kyoiku1107 = (): void => {
  hideGuideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(-3200, -2600, -850);
};

export const kyoiku1108 = (): void => {
  hideGuideNumber(23).map((i) => (guide[i - 1].visible = false));

  guide23.visible = true;
  guide23.rotation.set(0, -120, 0);
  guide23.position.set(-4750, -2600, -2050);
};

export const kyoiku1109 = (): void => {
  hideGuideNumber(22).map((i) => (guide[i - 1].visible = false));

  guide22.visible = true;
  guide22.rotation.set(0, -120, 0);
  guide22.position.set(-4350, -2600, -1400);
};

export const kyoiku1110 = (): void => {
  hideGuideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-2750, -2600, -2050);
};

export const kyoiku1111 = (): void => {
  hideGuideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-2300, -2600, -2700);
};

export const kyoiku1201 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-925, 1500, -600);
};

export const kyoiku1202 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1250, 1500, -800);
};

export const kyoiku1203 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1525, 1500, -1025);
};

export const kyoiku1204 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1800, 1500, -1225);
};

export const kyoiku1205 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2075, 1500, -1400);
};

export const kyoiku1206 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(-2900, 1500, -1800);
};

export const kyoiku1207 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(-3475, 1500, -2200);
};

export const kyoiku1208 = (): void => {
  hideGuideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(-4400, 1500, -3050);
};

export const kyoiku1209 = (): void => {
  hideGuideNumber(15).map((i) => (guide[i - 1].visible = false));

  guide15.visible = true;
  guide15.rotation.set(0, -120, 0);
  guide15.position.set(-2425, 1500, -3710);
};

export const kyoiku1301 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-565, 3800, -1325);
};

export const kyoiku1302 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-820, 3800, -1525);
};

export const kyoiku1303 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1110, 3800, -1725);
};

export const kyoiku1304 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1400, 3800, -1925);
};

export const kyoiku1305 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1690, 3800, -2125);
};

export const kyoiku1306 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1975, 3800, -2325);
};

export const kyoiku1307 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2330, 3800, -2400);
};

export const kyoiku1308 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2630, 3800, -2625);
};

export const kyoiku1309 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2915, 3800, -2835);
};

export const kyoiku1310 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-3200, 3800, -3010);
};

export const kyoiku1311 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-3700, 3800, -3340);
};

export const kyoiku1312 = (): void => {
  hideGuideNumber(23).map((i) => (guide[i - 1].visible = false));

  guide23.visible = true;
  guide23.rotation.set(0, -120, 0);
  guide23.position.set(-4150, 3800, -3980);
};

export const kyoiku1313 = (): void => {
  hideGuideNumber(15).map((i) => (guide[i - 1].visible = false));

  guide15.visible = true;
  guide15.rotation.set(0, -120, 0);
  guide15.position.set(-2050, 3800, -4450);
};

export const kyoiku2101 = (): void => {
  hideGuideNumber(24).map((i) => (guide[i - 1].visible = false));

  guide24.visible = true;
  guide24.rotation.set(0, -120, 0);
  guide24.position.set(675, -2600, -2150);
};

export const kyoiku2102 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(225, -2600, -2480);
};

export const kyoiku2103 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-40, -2600, -2680);
};

export const kyoiku2104 = (): void => {
  hideGuideNumber(25).map((i) => (guide[i - 1].visible = false));

  guide25.visible = true;
  guide25.rotation.set(0, -120, 0);
  guide25.position.set(-350, -2600, -3500);
};

export const kyoiku2105 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(250, -2600, -3650);
};

export const kyoiku2106 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(550, -2600, -3450);
};

export const kyoiku2107 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(800, -2600, -3260);
};

export const kyoiku2108 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(1080, -2600, -3080);
};

export const kyoiku2109 = (): void => {
  hideGuideNumber(26).map((i) => (guide[i - 1].visible = false));

  guide26.visible = true;
  guide26.rotation.set(0, -120, 0);
  guide26.position.set(1475, -2600, -2900);
};

export const kyoiku2201 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(880, 1500, -3400);
};

export const kyoiku2202 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(400, 1500, -3750);
};

export const kyoiku2203 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(125, 1500, -3950);
};

export const kyoiku2204 = (): void => {
  hideGuideNumber(27).map((i) => (guide[i - 1].visible = false));

  guide27.visible = true;
  guide27.rotation.set(0, -120, 0);
  guide27.position.set(-200, 1500, -4800);
};

export const kyoiku2205 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(450, 1500, -4900);
};

export const kyoiku2206 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(650, 1500, -4750);
};

export const kyoiku2207 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(950, 1500, -4525);
};

export const kyoiku2208 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(1400, 1500, -4150);
};

export const kyoiku2301 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(1450, 3800, -4075);
};

export const kyoiku2302 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(1125, 3800, -4300);
};

export const kyoiku2303 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(820, 3800, -4500);
};

export const kyoiku2304 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(550, 3800, -4715);
};

export const kyoiku2305 = (): void => {
  hideGuideNumber(27).map((i) => (guide[i - 1].visible = false));

  guide27.visible = true;
  guide27.rotation.set(0, -120, 0);
  guide27.position.set(125, 3800, -5550);
};

export const kyoiku2306 = (): void => {
  hideGuideNumber(28).map((i) => (guide[i - 1].visible = false));

  guide28.visible = true;
  guide28.rotation.set(0, -120, 0);
  guide28.position.set(675, 3800, -5400);
};

export const kyoiku2307 = (): void => {
  hideGuideNumber(28).map((i) => (guide[i - 1].visible = false));

  guide28.visible = true;
  guide28.rotation.set(0, -120, 0);
  guide28.position.set(925, 3800, -5750);
};

export const kyoiku2308 = (): void => {
  hideGuideNumber(29).map((i) => (guide[i - 1].visible = false));

  guide29.visible = true;
  guide29.rotation.set(0, -120, 0);
  guide29.position.set(1450, 3800, -5375);
};

export const kyoiku2309 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(2000, 3800, -4800);
};

export const kyoiku2401 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(1100, 5500, -4500);
};

export const kyoiku2402 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(650, 5500, -4850);
};

export const kyoiku2403 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(250, 5500, -5130);
};

export const kyoiku2404 = (): void => {
  hideGuideNumber(27).map((i) => (guide[i - 1].visible = false));

  guide27.visible = true;
  guide27.rotation.set(0, -120, 0);
  guide27.position.set(-200, 5500, -6000);
};

export const kyoiku2405 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(550, 5500, -6050);
};

export const kyoiku2406 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(775, 5500, -5900);
};

export const kyoiku2407 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(1200, 5500, -5575);
};

export const kyoiku2408 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(1650, 5500, -5275);
};

export const kyoiku3101 = (): void => {
  hideGuideNumber(30).map((i) => (guide[i - 1].visible = false));

  guide30.visible = true;
  guide30.rotation.set(0, -120, 0);
  guide30.position.set(-1400, -2600, -3675);
};

export const kyoiku3102 = (): void => {
  hideGuideNumber(31).map((i) => (guide[i - 1].visible = false));

  guide31.visible = true;
  guide31.rotation.set(0, -120, 0);
  guide31.position.set(-2450, -2600, -4600);
};

export const kyoiku3103 = (): void => {
  hideGuideNumber(22).map((i) => (guide[i - 1].visible = false));

  guide22.visible = true;
  guide22.rotation.set(0, -120, 0);
  guide22.position.set(-1650, -2600, -5100);
};

export const kyoiku3104 = (): void => {
  hideGuideNumber(30).map((i) => (guide[i - 1].visible = false));

  guide30.visible = true;
  guide30.rotation.set(0, -120, 0);
  guide30.position.set(-850, -2600, -4450);
};

export const kyoiku3201 = (): void => {
  hideGuideNumber(32).map((i) => (guide[i - 1].visible = false));

  guide32.visible = true;
  guide32.rotation.set(0, -120, 0);
  guide32.position.set(-900, 1500, -5300);
};

export const kyoiku3202 = (): void => {
  hideGuideNumber(28).map((i) => (guide[i - 1].visible = false));

  guide28.visible = true;
  guide28.rotation.set(0, -120, 0);
  guide28.position.set(-1485, 1500, -6000);
};

export const kyoiku3203 = (): void => {
  hideGuideNumber(28).map((i) => (guide[i - 1].visible = false));

  guide28.visible = true;
  guide28.rotation.set(0, -120, 0);
  guide28.position.set(-1250, 1500, -6250);
};

export const kyoiku4101 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(2200, -2600, -1100);
};

export const kyoiku4102 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(2500, -2600, -900);
};

export const kyoiku4103 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(2775, -2600, -675);
};

export const kyoiku4104 = (): void => {
  hideGuideNumber(24).map((i) => (guide[i - 1].visible = false));

  guide24.visible = true;
  guide24.rotation.set(0, -120, 0);
  guide24.position.set(3185, -2600, -380);
};

export const kyoiku4105 = (): void => {
  hideGuideNumber(24).map((i) => (guide[i - 1].visible = false));

  guide24.visible = true;
  guide24.rotation.set(0, -120, 0);
  guide24.position.set(3750, -2600, 50);
};

export const kyoiku4106 = (): void => {
  hideGuideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(4950, -2600, 600);
};

export const kyoiku4201 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(2500, 1500, -2250);
};

export const kyoiku4202 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(2900, 1500, -1925);
};

export const kyoiku4203 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3200, 1500, -1700);
};

export const kyoiku4204 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3475, 1500, -1500);
};

export const kyoiku4205 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3750, 1500, -1300);
};

export const kyoiku4206 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3975, 1500, -1125);
};

export const kyoiku4207 = (): void => {
  hideGuideNumber(33).map((i) => (guide[i - 1].visible = false));

  guide33.visible = true;
  guide33.rotation.set(0, -120, 0);
  guide33.position.set(5050, 1500, -575);
};

export const kyoiku4301 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(2750, 3800, -3100);
};

export const kyoiku4302 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3025, 3800, -2900);
};

export const kyoiku4303 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3325, 3800, -2650);
};

export const kyoiku4304 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3625, 3800, -2425);
};

export const kyoiku4305 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3900, 3800, -2200);
};

export const kyoiku4306 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(4180, 3800, -2000);
};

export const kyoiku4307 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(4440, 3800, -1820);
};

export const kyoiku4308 = (): void => {
  hideGuideNumber(33).map((i) => (guide[i - 1].visible = false));

  guide33.visible = true;
  guide33.rotation.set(0, -120, 0);
  guide33.position.set(5475, 3800, -1350);
};

export const kyoiku4401 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(2440, 5500, -3500);
};

export const kyoiku4402 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(2700, 5500, -3300);
};

export const kyoiku4403 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(3015, 5500, -3100);
};

export const kyoiku4404 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(3475, 5500, -2770);
};

export const kyoiku4405 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(4025, 5500, -2350);
};

export const kyoiku4406 = (): void => {
  hideGuideNumber(33).map((i) => (guide[i - 1].visible = false));

  guide33.visible = true;
  guide33.rotation.set(0, -120, 0);
  guide33.position.set(5100, 5500, -1750);
};

export const kyoiku5101 = (): void => {
  hideGuideNumber(24).map((i) => (guide[i - 1].visible = false));

  guide24.visible = true;
  guide24.rotation.set(0, -120, 0);
  guide24.position.set(2500, -2600, -2300);
};

export const kyoiku5102 = (): void => {
  hideGuideNumber(22).map((i) => (guide[i - 1].visible = false));

  guide22.visible = true;
  guide22.rotation.set(0, -120, 0);
  guide22.position.set(2950, -2600, -2650);
};

export const kyoiku5103 = (): void => {
  hideGuideNumber(22).map((i) => (guide[i - 1].visible = false));

  guide22.visible = true;
  guide22.rotation.set(0, -120, 0);
  guide22.position.set(3175, -2600, -2950);
};

export const kyoiku5104 = (): void => {
  hideGuideNumber(22).map((i) => (guide[i - 1].visible = false));

  guide22.visible = true;
  guide22.rotation.set(0, -120, 0);
  guide22.position.set(3375, -2600, -3225);
};

export const kyoiku5105 = (): void => {
  hideGuideNumber(34).map((i) => (guide[i - 1].visible = false));

  guide34.visible = true;
  guide34.rotation.set(0, -120, 0);
  guide34.position.set(3550, -2600, -3600);
};

export const kyoiku5106 = (): void => {
  hideGuideNumber(24).map((i) => (guide[i - 1].visible = false));

  guide24.visible = true;
  guide24.rotation.set(0, -120, 0);
  guide24.position.set(3875, -2600, -4150);
};

export const kyoiku5107 = (): void => {
  hideGuideNumber(24).map((i) => (guide[i - 1].visible = false));

  guide24.visible = true;
  guide24.rotation.set(0, -120, 0);
  guide24.position.set(4300, -2600, -4700);
};

export const kyoiku5201 = (): void => {
  hideGuideNumber(35).map((i) => (guide[i - 1].visible = false));

  guide35.visible = true;
  guide35.rotation.set(0, -120, 0);
  guide35.position.set(2650, 1500, -3425);
};

export const kyoiku5202 = (): void => {
  hideGuideNumber(35).map((i) => (guide[i - 1].visible = false));

  guide35.visible = true;
  guide35.rotation.set(0, -120, 0);
  guide35.position.set(2850, 1500, -3700);
};

export const kyoiku5203 = (): void => {
  hideGuideNumber(35).map((i) => (guide[i - 1].visible = false));

  guide35.visible = true;
  guide35.rotation.set(0, -120, 0);
  guide35.position.set(3050, 1500, -3980);
};

export const kyoiku5204 = (): void => {
  hideGuideNumber(35).map((i) => (guide[i - 1].visible = false));

  guide35.visible = true;
  guide35.rotation.set(0, -120, 0);
  guide35.position.set(3250, 1500, -4275);
};

export const kyoiku5205 = (): void => {
  hideGuideNumber(35).map((i) => (guide[i - 1].visible = false));

  guide35.visible = true;
  guide35.rotation.set(0, -120, 0);
  guide35.position.set(3475, 1500, -4575);
};

export const kyoiku5206 = (): void => {
  hideGuideNumber(35).map((i) => (guide[i - 1].visible = false));

  guide35.visible = true;
  guide35.rotation.set(0, -120, 0);
  guide35.position.set(3700, 1500, -4875);
};

export const kyoiku5207 = (): void => {
  hideGuideNumber(27).map((i) => (guide[i - 1].visible = false));

  guide27.visible = true;
  guide27.rotation.set(0, -120, 0);
  guide27.position.set(4200, 1500, -5750);
};

export const kyoiku5301 = (): void => {
  hideGuideNumber(36).map((i) => (guide[i - 1].visible = false));

  guide36.visible = true;
  guide36.rotation.set(0, -120, 0);
  guide36.position.set(3275, 3800, -4550);
};

export const kyoiku5302 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(3900, 3800, -5500);
};

export const kyoiku5303 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(4400, 3800, -6200);
};

export const kyoiku5304 = (): void => {
  hideGuideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(4825, 3800, -6850);
};

export const kyoiku6101 = (): void => {
  hideGuideNumber(37).map((i) => (guide[i - 1].visible = false));

  guide37.visible = true;
  guide37.rotation.set(0, -120, 0);
  guide37.position.set(2400, -2600, -4050);
};

export const kyoiku6102 = (): void => {
  hideGuideNumber(38).map((i) => (guide[i - 1].visible = false));

  guide38.visible = true;
  guide38.rotation.set(0, -120, 0);
  guide38.position.set(1675, -2600, -4580);
};

export const kyoiku6103 = (): void => {
  hideGuideNumber(38).map((i) => (guide[i - 1].visible = false));

  guide38.visible = true;
  guide38.rotation.set(0, -120, 0);
  guide38.position.set(2250, -2600, -5400);
};

export const kyoiku6104 = (): void => {
  hideGuideNumber(39).map((i) => (guide[i - 1].visible = false));

  guide39.visible = true;
  guide39.rotation.set(0, -120, 0);
  guide39.position.set(3075, -2600, -5025);
};

export const kyoiku6201 = (): void => {
  hideGuideNumber(40).map((i) => (guide[i - 1].visible = false));

  guide40.visible = true;
  guide40.rotation.set(0, -120, 0);
  guide40.position.set(2525, 1500, -5340);
};

export const kyoiku6202 = (): void => {
  hideGuideNumber(41).map((i) => (guide[i - 1].visible = false));

  guide41.visible = true;
  guide41.rotation.set(0, -120, 0);
  guide41.position.set(2125, 1500, -5625);
};

export const kyoiku6203 = (): void => {
  hideGuideNumber(41).map((i) => (guide[i - 1].visible = false));

  guide41.visible = true;
  guide41.rotation.set(0, -120, 0);
  guide41.position.set(1620, 1500, -6000);
};

export const kyoiku6204 = (): void => {
  hideGuideNumber(42).map((i) => (guide[i - 1].visible = false));

  guide42.visible = true;
  guide42.rotation.set(0, -120, 0);
  guide42.position.set(2400, 1500, -6675);
};

export const kyoiku6205 = (): void => {
  hideGuideNumber(43).map((i) => (guide[i - 1].visible = false));

  guide43.visible = true;
  guide43.rotation.set(0, -120, 0);
  guide43.position.set(3175, 1500, -6300);
};

export const kyoiku7101 = (): void => {
  hideGuideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(5450, -2600, -1375);
};

export const kyoiku7102 = (): void => {
  hideGuideNumber(44).map((i) => (guide[i - 1].visible = false));

  guide44.visible = true;
  guide44.rotation.set(0, -120, 0);
  guide44.position.set(6100, -2600, -900);
};

export const kyoiku7103 = (): void => {
  hideGuideNumber(44).map((i) => (guide[i - 1].visible = false));

  guide44.visible = true;
  guide44.rotation.set(0, -120, 0);
  guide44.position.set(6900, -2600, -1850);
};

export const kyoiku7201 = (): void => {
  hideGuideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(5600, 1500, -2675);
};

export const kyoiku7202 = (): void => {
  hideGuideNumber(45).map((i) => (guide[i - 1].visible = false));

  guide45.visible = true;
  guide45.rotation.set(0, -120, 0);
  guide45.position.set(6300, 1500, -2150);
};

export const kyoiku7203 = (): void => {
  hideGuideNumber(46).map((i) => (guide[i - 1].visible = false));

  guide46.visible = true;
  guide46.rotation.set(0, -120, 0);
  guide46.position.set(6825, 1500, -3200);
};

export const kyoiku0000 = (): void => {
  hideFacilityNumber(1).map((i) => (facility[i - 1].visible = false));

  facility1.visible = true;
  facility2.visible = true;
  facility3.visible = true;
  facility4.visible = true;
  facility5.visible = true;
  facility6.visible = true;
  facility1.rotation.set(0, -120, 0);
  facility2.rotation.set(0, -120, 0);
  facility3.rotation.set(0, -120, 0);
  facility4.rotation.set(0, -120, 0);
  facility5.rotation.set(0, -120, 0);
  facility6.rotation.set(0, -120, 0);
  facility1.position.set(-980, -2600, 2200);
  facility2.position.set(-3550, -2600, 1600);
  facility3.position.set(-180, 1500, 100);
  facility4.position.set(-2925, 1500, 850);
  facility5.position.set(300, 3800, -600);
  facility6.position.set(-2500, 3800, 200);
};

export const kyoiku1000 = (): void => {
  hideFacilityNumber(7).map((i) => (facility[i - 1].visible = false));

  facility7.visible = true;
  facility8.visible = true;
  facility9.visible = true;
  facility10.visible = true;
  facility11.visible = true;
  facility12.visible = true;
  facility7.rotation.set(0, -120, 0);
  facility8.rotation.set(0, -120, 0);
  facility9.rotation.set(0, -120, 0);
  facility10.rotation.set(0, -120, 0);
  facility11.rotation.set(0, -120, 0);
  facility12.rotation.set(0, -120, 0);
  facility7.position.set(-3000, -2600, -725);
  facility8.position.set(-2800, -2600, -2400);
  facility9.position.set(-2800, 1500, -2000);
  facility10.position.set(-2700, 1500, -3700);
  facility11.position.set(-2350, 3800, -2750);
  facility12.position.set(-2300, 3800, -4425);
};

export const kyoiku2000 = (): void => {
  hideFacilityNumber(13).map((i) => (facility[i - 1].visible = false));

  facility13.visible = true;
  facility14.visible = true;
  facility15.visible = true;
  facility16.visible = true;
  facility13.rotation.set(0, -120, 0);
  facility14.rotation.set(0, -120, 0);
  facility15.rotation.set(0, -120, 0);
  facility16.rotation.set(0, -120, 0);
  facility13.position.set(300, -2600, -3000);
  facility14.position.set(450, 1500, -4300);
  facility15.position.set(840, 3800, -5025);
  facility16.position.set(550, 5500, -5400);
};

export const kyoiku3000 = (): void => {
  hideFacilityNumber(13).map((i) => (facility[i - 1].visible = false));

  facility13.visible = true;
  facility17.visible = true;
  facility13.rotation.set(0, -120, 0);
  facility17.rotation.set(0, -120, 0);
  facility13.position.set(-1700, -2600, -4450);
  facility17.position.set(-1075, 1500, -5400);
};

export const kyoiku4000 = (): void => {
  hideFacilityNumber(18).map((i) => (facility[i - 1].visible = false));

  facility18.visible = true;
  facility19.visible = true;
  facility20.visible = true;
  facility21.visible = true;
  facility18.rotation.set(0, -120, 0);
  facility19.rotation.set(0, -120, 0);
  facility20.rotation.set(0, -120, 0);
  facility21.rotation.set(0, -120, 0);
  facility18.position.set(3800, -2600, -200);
  facility19.position.set(3950, 1500, -1450);
  facility20.position.set(4350, 3800, -2250);
  facility21.position.set(4050, 5500, -2625);
};

export const kyoiku5000 = (): void => {
  hideFacilityNumber(22).map((i) => (facility[i - 1].visible = false));

  facility22.visible = true;
  facility23.visible = true;
  facility24.visible = true;
  facility22.rotation.set(0, -120, 0);
  facility23.rotation.set(0, -120, 0);
  facility24.rotation.set(0, -120, 0);
  facility22.position.set(3175, -2600, -3675);
  facility23.position.set(3400, 1500, -4950);
  facility24.position.set(3800, 3800, -5675);
};

export const kyoiku6000 = (): void => {
  hideFacilityNumber(25).map((i) => (facility[i - 1].visible = false));

  facility25.visible = true;
  facility26.visible = true;
  facility25.rotation.set(0, -120, 0);
  facility26.rotation.set(0, -120, 0);
  facility25.position.set(2200, -2600, -4800);
  facility26.position.set(2300, 1500, -6100);
};

export const kyoiku7000 = (): void => {
  hideFacilityNumber(27).map((i) => (facility[i - 1].visible = false));

  facility27.visible = true;
  facility28.visible = true;
  facility27.rotation.set(0, -120, 0);
  facility28.rotation.set(0, -120, 0);
  facility27.position.set(6100, -2600, -1650);
  facility28.position.set(6250, 1500, -2900);
};

export const senkoka000 = (): void => {
  hideFacilityNumber(29).map((i) => (facility[i - 1].visible = false));

  facility29.visible = true;
  facility30.visible = true;
  facility29.rotation.set(0, -120, 0);
  facility30.rotation.set(0, -120, 0);
  facility29.position.set(2300, -2600, 2900);
  facility30.position.set(2400, 1500, 1600);
};

export default Model;
