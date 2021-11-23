import React, { useEffect } from 'react'
import * as THREE from 'three'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

    mtlLoader.setPath('senkoka_split/')
    mtlLoader.load('senkoka-split.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('senkoka_split/')
        objLoader.load(
          // 読込処理
          'senkoka-split.obj',
          (object) => {
            const objLoadEnd = () => {
              const objects: THREE.Group[] = []

              object.scale.set(110, 110, 110)
              object.position.set(0, -4800, 0)

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
    guide1.position.y = -999999
    guide2.position.y = -999999

    guides.push(guide1, guide2)
    scene.add(guide1, guide2)

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

// 特定の箇所を光らせるためのガイド -----------------
const guide1 = new THREE.Mesh(
  new THREE.BoxGeometry(2500, 1200, 2500),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

// 専-102, 専-103, 専-104, 専-105, 専-203, 専-204
const guide2 = new THREE.Mesh(
  new THREE.BoxGeometry(1250, 1200, 2500),
  new THREE.MeshBasicMaterial({
    color: 0xee476e,
    transparent: true,
    opacity: 0.5,
  })
)

// ガイドを配置する位置 (専-101 ~) -------------
export const senkoka101 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, -4100, 1000)
}

export const senkoka102 = (): void => {
  guide1.visible = false
  guide2.visible = true

  guide2.position.set(-2700, -4100, -2000)
}

export const senkoka103 = (): void => {
  guide1.visible = false
  guide2.visible = true

  guide2.position.set(-1350, -4100, -2000)
}

export const senkoka104 = (): void => {
  guide1.visible = false
  guide2.visible = true

  guide2.position.set(1350, -4100, -2000)
}

export const senkoka105 = (): void => {
  guide1.visible = false
  guide2.visible = true

  guide2.position.set(2700, -4100, -2000)
}

export const senkoka106 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2100, -4100, 1000)
}

export const senkoka201 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, -2300, 1000)
}

export const senkoka202 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, -2300, -2000)
}

export const senkoka203 = (): void => {
  guide1.visible = false
  guide2.visible = true

  guide2.position.set(1350, -2300, -2000)
}

export const senkoka204 = (): void => {
  guide1.visible = false
  guide2.visible = true

  guide2.position.set(2700, -2300, -2000)
}

export const senkoka205 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2100, -2300, 1000)
}

export const senkoka301 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, -450, 1000)
}

export const senkoka302 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, -450, -2000)
}

export const senkoka303 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2100, -450, -2000)
}

export const senkoka304 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2100, -450, 1000)
}

export const senkoka401 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, 1500, 1000)
}

export const senkoka402 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2100, 1500, -2000)
}

export const senkoka403 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2100, 1500, -2000)
}

export const senkoka404 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2100, 1500, 1000)
}

export const senkoka501 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2200, 3400, 1000)
}

export const senkoka502 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(-2200, 3400, -2000)
}

export const senkoka503 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2200, 3400, -2000)
}

export const senkoka504 = (): void => {
  guide1.visible = true
  guide2.visible = false

  guide1.position.set(2200, 3400, 1000)
}

export default React.memo(Model)