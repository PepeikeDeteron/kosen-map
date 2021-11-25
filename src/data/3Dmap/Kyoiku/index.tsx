import React, { useEffect } from 'react'
import * as THREE from 'three'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { guideInitialValue } from '@/constants/common'

const Model: React.VFC = () => {
  const createModel = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
      alpha: true,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 16 / 10, 1, 1000000)
    const light = new THREE.AmbientLight(0x666666, 2.5)
    const controls = new OrbitControls(camera, renderer.domElement)

    camera.position.set(0, 0, 15000)
    controls.enableDamping = true
    controls.dampingFactor = 0.2
    scene.add(light)

    const mtlLoader = new MTLLoader()

    mtlLoader.setPath('kyoiku/')
    mtlLoader.load('kyoiku.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('kyoiku/')
        objLoader.load(
          // 読込処理
          'kyoiku.obj',
          (object) => {
            const objLoadEnd = () => {
              const objects: THREE.Group[] = []

              object.scale.set(40, 40, 40)
              object.rotation.set(120, 0, 0)
              object.position.set(200, 800, 0)

              scene.add(object)
              objects.push(object)
            }

            setTimeout(objLoadEnd, 10)
          },
          // 読込状況
          (xhr) => {
            const loader = document.getElementById('loader') as HTMLElement
            const progress = Math.ceil((xhr.loaded / xhr.total) * 100)

            if (progress < 100) {
              loader.innerHTML = `Loading... ${progress}%`
            } else {
              setInterval(() => {
                loader.style.display = 'none'
              }, 1000)
            }
          },
          // 読込失敗
          (error) => {
            console.error(`Three.js: ${error}`)
          }
        )
      }

      setTimeout(mtlLoadEnd, 10)
    })

    const tick = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }

    const onResize = () => {
      const width = document.getElementById('map-display')
        ?.clientWidth as number
      const height = document.getElementById('map-display')
        ?.clientHeight as number

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)
      renderer.render(scene, camera)

      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const guides: THREE.Mesh[] = []

    // 初期値
    guide1.position.y =
      guide2.position.y =
      guide3.position.y =
      guide4.position.y =
      guide5.position.y =
      guide6.position.y =
      guide7.position.y =
        guideInitialValue

    guides.push(guide1, guide2, guide3, guide4, guide5, guide6, guide7)
    scene.add(guide1, guide2, guide3, guide4, guide5, guide6, guide7)

    tick()
    onResize()
    window.addEventListener('resize', onResize, false)
  }

  useEffect(() => {
    createModel()
  }, [])

  return (
    <>
      <p id="loader">Loading... 0%</p>
      <canvas id="canvas" />
    </>
  )
}

// 特定の箇所を光らせるためのガイド -------------------
const guide1 = new THREE.Mesh(
  new THREE.BoxGeometry(4200, 1150, 1250),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

const guide2 = new THREE.Mesh(
  new THREE.BoxGeometry(2150, 1450, 1600),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

const guide3 = new THREE.Mesh(
  new THREE.BoxGeometry(2200, 1450, 800),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

const guide4 = new THREE.Mesh(
  new THREE.BoxGeometry(4200, 1150, 1650),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

const guide5 = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 3500, 1250),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

const guide6 = new THREE.Mesh(
  new THREE.BoxGeometry(1500, 1500, 800),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

const guide7 = new THREE.Mesh(
  new THREE.BoxGeometry(2000, 1500, 800),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

// ガイドを配置する位置 -------------------------
export const kyoiku100 = (): void => {
  guide1.visible = true
  guide2.visible = false
  guide3.visible = false
  guide4.visible = false
  guide5.visible = false
  guide6.visible = false
  guide7.visible = false

  guide1.rotation.set(65, 0, 0)
  guide1.position.set(-2200, 800, 1000)
}

export const kyoiku200 = (): void => {
  guide1.visible = false
  guide2.visible = true
  guide3.visible = false
  guide4.visible = false
  guide5.visible = false
  guide6.visible = false
  guide7.visible = false

  guide2.rotation.set(65, 0, 0)
  guide2.position.set(-1100, 2600, -1350)
}

export const kyoiku300 = (): void => {
  guide1.visible = false
  guide2.visible = false
  guide3.visible = true
  guide4.visible = false
  guide5.visible = false
  guide6.visible = false
  guide7.visible = false

  guide3.rotation.set(65, 0, 0)
  guide3.position.set(-3000, 2300, -1550)
}

export const kyoiku400 = (): void => {
  guide1.visible = false
  guide2.visible = false
  guide3.visible = false
  guide4.visible = true
  guide5.visible = false
  guide6.visible = false
  guide7.visible = false

  guide4.rotation.set(65, 0, 0)
  guide4.position.set(2200, 2500, -1100)
}

export const kyoiku500 = (): void => {
  guide1.visible = false
  guide2.visible = false
  guide3.visible = false
  guide4.visible = false
  guide5.visible = true
  guide6.visible = false
  guide7.visible = false

  guide5.rotation.set(65, 0, 0)
  guide5.position.set(500, 3500, -2800)
}

export const kyoiku600 = (): void => {
  guide1.visible = false
  guide2.visible = false
  guide3.visible = false
  guide4.visible = false
  guide5.visible = false
  guide6.visible = true
  guide7.visible = false

  guide6.rotation.set(65, 0, 0)
  guide6.position.set(-700, 3500, -3250)
}

export const kyoiku700 = (): void => {
  guide1.visible = false
  guide2.visible = false
  guide3.visible = false
  guide4.visible = false
  guide5.visible = false
  guide6.visible = false
  guide7.visible = true

  guide7.rotation.set(65, 0, 0)
  guide7.position.set(3400, 3300, -3000)
}

export default React.memo(Model)
