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
      'assets/3D/kyoiku_divide_draco.glb',
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
  new THREE.BoxGeometry(700, 800, 1200),
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
  new THREE.BoxGeometry(1000, 800, 1000),
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
];

// 非表示にするガイドの番号を抽出
const hideNumber = (i: number) => {
  return [...Array(guide.length)].map((_, m) => m + 1).filter((n) => n !== i);
};

// ガイドを配置する位置
export const kyoiku0101 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2450, -2600, 3200);
};

export const kyoiku0102 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2750, -2600, 3000);
};

export const kyoiku0103 = (): void => {
  hideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(-3500, -2600, 2200);
};

export const kyoiku0104 = (): void => {
  hideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-4500, -2600, 1450);
};

export const kyoiku0105 = (): void => {
  hideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-5050, -2600, 1075);
};

export const kyoiku0106 = (): void => {
  hideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-4560, -2600, 290);
};

export const kyoiku0107 = (): void => {
  hideNumber(4).map((i) => (guide[i - 1].visible = false));

  guide4.visible = true;
  guide4.rotation.set(0, -120, 0);
  guide4.position.set(-3900, -2600, 550);
};

export const kyoiku0108 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-3450, -2600, 850);
};

export const kyoiku0109 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-3185, -2600, 1040);
};

export const kyoiku0110 = (): void => {
  hideNumber(5).map((i) => (guide[i - 1].visible = false));

  guide5.visible = true;
  guide5.rotation.set(0, -120, 0);
  guide5.position.set(-2800, -2600, 1375);
};

export const kyoiku0111 = (): void => {
  hideNumber(6).map((i) => (guide[i - 1].visible = false));

  guide6.visible = true;
  guide6.rotation.set(0, -120, 0);
  guide6.position.set(-2900, -2500, 4650);
};

export const kyoiku0112 = (): void => {
  hideNumber(5).map((i) => (guide[i - 1].visible = false));

  guide5.visible = true;
  guide5.rotation.set(0, -120, 0);
  guide5.position.set(-1950, -2600, 4000);
};

export const kyoiku0113 = (): void => {
  hideNumber(7).map((i) => (guide[i - 1].visible = false));

  guide7.visible = true;
  guide7.rotation.set(0, -120, 0);
  guide7.position.set(-1700, -2600, 3700);
};

export const kyoiku0114 = (): void => {
  hideNumber(4).map((i) => (guide[i - 1].visible = false));

  guide4.visible = true;
  guide4.rotation.set(0, -120, 0);
  guide4.position.set(-1050, -2600, 2750);
};

export const kyoiku0115 = (): void => {
  hideNumber(8).map((i) => (guide[i - 1].visible = false));

  guide8.visible = true;
  guide8.rotation.set(0, -120, 0);
  guide8.position.set(-700, -2600, 2250);
};

export const kyoiku0116 = (): void => {
  hideNumber(9).map((i) => (guide[i - 1].visible = false));

  guide9.visible = true;
  guide9.rotation.set(0, -120, 0);
  guide9.position.set(-375, -2600, 1800);
};

export const kyoiku0117 = (): void => {
  hideNumber(10).map((i) => (guide[i - 1].visible = false));

  guide10.visible = true;
  guide10.rotation.set(0, -120, 0);
  guide10.position.set(-100, -2600, 1375);
};

export const kyoiku0118 = (): void => {
  hideNumber(10).map((i) => (guide[i - 1].visible = false));

  guide10.visible = true;
  guide10.rotation.set(0, -120, 0);
  guide10.position.set(325, -2600, 1750);
};

export const kyoiku0119 = (): void => {
  hideNumber(11).map((i) => (guide[i - 1].visible = false));

  guide11.visible = true;
  guide11.rotation.set(0, -120, 0);
  guide11.position.set(400, -2600, 500);
};

export const kyoiku0120 = (): void => {
  hideNumber(11).map((i) => (guide[i - 1].visible = false));

  guide11.visible = true;
  guide11.rotation.set(0, -120, 0);
  guide11.position.set(1050, -2600, -425);
};

export const kyoiku0201 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2250, 1500, 1875);
};

export const kyoiku0202 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2580, 1500, 1650);
};

export const kyoiku0203 = (): void => {
  hideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(-3000, 1500, 1375);
};

export const kyoiku0204 = (): void => {
  hideNumber(14).map((i) => (guide[i - 1].visible = false));

  guide14.visible = true;
  guide14.rotation.set(0, -120, 0);
  guide14.position.set(-3730, 1500, 810);
};

export const kyoiku0205 = (): void => {
  hideNumber(15).map((i) => (guide[i - 1].visible = false));

  guide15.visible = true;
  guide15.rotation.set(0, -120, 0);
  guide15.position.set(-1250, 1500, 2000);
};

export const kyoiku0206 = (): void => {
  hideNumber(16).map((i) => (guide[i - 1].visible = false));

  guide16.visible = true;
  guide16.rotation.set(0, -120, 0);
  guide16.position.set(-800, 1500, 1230);
};

export const kyoiku0207 = (): void => {
  hideNumber(16).map((i) => (guide[i - 1].visible = false));

  guide16.visible = true;
  guide16.rotation.set(0, -120, 0);
  guide16.position.set(-580, 1500, 930);
};

export const kyoiku0208 = (): void => {
  hideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(600, 1500, -750);
};

export const kyoiku0209 = (): void => {
  hideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(1225, 1500, -1650);
};

export const kyoiku0301 = (): void => {
  hideNumber(18).map((i) => (guide[i - 1].visible = false));

  guide18.visible = true;
  guide18.rotation.set(0, -120, 0);
  guide18.position.set(-1930, 3800, 1200);
};

export const kyoiku0302 = (): void => {
  hideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-2125, 3800, 975);
};

export const kyoiku0303 = (): void => {
  hideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-2450, 3800, 750);
};

export const kyoiku0304 = (): void => {
  hideNumber(20).map((i) => (guide[i - 1].visible = false));

  guide20.visible = true;
  guide20.rotation.set(0, -120, 0);
  guide20.position.set(-2625, 3800, 630);
};

export const kyoiku0305 = (): void => {
  hideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-2925, 3800, 425);
};

export const kyoiku0306 = (): void => {
  hideNumber(19).map((i) => (guide[i - 1].visible = false));

  guide19.visible = true;
  guide19.rotation.set(0, -120, 0);
  guide19.position.set(-3275, 3800, 185);
};

export const kyoiku0307 = (): void => {
  hideNumber(20).map((i) => (guide[i - 1].visible = false));

  guide20.visible = true;
  guide20.rotation.set(0, -120, 0);
  guide20.position.set(-3450, 3800, 25);
};

export const kyoiku0308 = (): void => {
  hideNumber(20).map((i) => (guide[i - 1].visible = false));

  guide20.visible = true;
  guide20.rotation.set(0, -120, 0);
  guide20.position.set(-3700, 3800, -150);
};

export const kyoiku0309 = (): void => {
  hideNumber(16).map((i) => (guide[i - 1].visible = false));

  guide16.visible = true;
  guide16.rotation.set(0, -120, 0);
  guide16.position.set(-1170, 3800, 1780);
};

export const kyoiku0310 = (): void => {
  hideNumber(21).map((i) => (guide[i - 1].visible = false));

  guide21.visible = true;
  guide21.rotation.set(0, -120, 0);
  guide21.position.set(-745, 3800, 1565);
};

export const kyoiku0311 = (): void => {
  hideNumber(21).map((i) => (guide[i - 1].visible = false));

  guide21.visible = true;
  guide21.rotation.set(0, -120, 0);
  guide21.position.set(-530, 3800, 1290);
};

export const kyoiku0312 = (): void => {
  hideNumber(21).map((i) => (guide[i - 1].visible = false));

  guide21.visible = true;
  guide21.rotation.set(0, -120, 0);
  guide21.position.set(-320, 3800, 1000);
};

export const kyoiku0313 = (): void => {
  hideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(-175, 3800, 225);
};

export const kyoiku0314 = (): void => {
  hideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(430, 3800, -600);
};

export const kyoiku0315 = (): void => {
  hideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(1075, 3800, -1500);
};

export const kyoiku0316 = (): void => {
  hideNumber(17).map((i) => (guide[i - 1].visible = false));

  guide17.visible = true;
  guide17.rotation.set(0, -120, 0);
  guide17.position.set(1700, 3800, -2400);
};

export const kyoiku1101 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1100, -2600, 700);
};

export const kyoiku1102 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1400, -2600, 475);
};

export const kyoiku1103 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1675, -2600, 260);
};

export const kyoiku1104 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-1950, -2600, 45);
};

export const kyoiku1105 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2225, -2600, -170);
};

export const kyoiku1106 = (): void => {
  hideNumber(1).map((i) => (guide[i - 1].visible = false));

  guide1.visible = true;
  guide1.rotation.set(0, -120, 0);
  guide1.position.set(-2450, -2600, -335);
};

export const kyoiku1107 = (): void => {
  hideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(-3200, -2600, -850);
};

export const kyoiku1108 = (): void => {
  hideNumber(23).map((i) => (guide[i - 1].visible = false));

  guide23.visible = true;
  guide23.rotation.set(0, -120, 0);
  guide23.position.set(-4800, -2600, -2000);
};

export const kyoiku1109 = (): void => {
  hideNumber(22).map((i) => (guide[i - 1].visible = false));

  guide22.visible = true;
  guide22.rotation.set(0, -120, 0);
  guide22.position.set(-4350, -2600, -1400);
};

export const kyoiku1110 = (): void => {
  hideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-2750, -2600, -2050);
};

export const kyoiku1111 = (): void => {
  hideNumber(3).map((i) => (guide[i - 1].visible = false));

  guide3.visible = true;
  guide3.rotation.set(0, -120, 0);
  guide3.position.set(-2300, -2600, -2700);
};

export const kyoiku1201 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-925, 1500, -600);
};

export const kyoiku1202 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1250, 1500, -800);
};

export const kyoiku1203 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1525, 1500, -1025);
};

export const kyoiku1204 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-1800, 1500, -1225);
};

export const kyoiku1205 = (): void => {
  hideNumber(12).map((i) => (guide[i - 1].visible = false));

  guide12.visible = true;
  guide12.rotation.set(0, -120, 0);
  guide12.position.set(-2075, 1500, -1400);
};

export const kyoiku1206 = (): void => {
  hideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(-2900, 1500, -1800);
};

export const kyoiku1207 = (): void => {
  hideNumber(13).map((i) => (guide[i - 1].visible = false));

  guide13.visible = true;
  guide13.rotation.set(0, -120, 0);
  guide13.position.set(-3475, 1500, -2200);
};

export const kyoiku1208 = (): void => {
  hideNumber(2).map((i) => (guide[i - 1].visible = false));

  guide2.visible = true;
  guide2.rotation.set(0, -120, 0);
  guide2.position.set(-4400, 1500, -3050);
};

export const kyoiku1209 = (): void => {
  hideNumber(15).map((i) => (guide[i - 1].visible = false));

  guide15.visible = true;
  guide15.rotation.set(0, -120, 0);
  guide15.position.set(-2425, 1500, -3710);
};

export default React.memo(Model);
