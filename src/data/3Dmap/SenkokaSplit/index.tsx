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
    mtlLoader.load('senkoka1F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('senkoka_split/')
        objLoader.load('senkoka1F.obj', (object) => {
          const objects: THREE.Group[] = []
          const objLoadEnd = () => {
            object.scale.set(100, 100, 100)
            object.position.set(0, -5000, 0)

            scene.add(object)
            objects.push(object)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    mtlLoader.setPath('senkoka_split/')
    mtlLoader.load('senkoka2F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('senkoka_split/')
        objLoader.load('senkoka2F.obj', (object) => {
          const objects: THREE.Group[] = []
          const objLoadEnd = () => {
            object.scale.set(100, 100, 100)
            object.position.set(0, -3000, 0)

            scene.add(object)
            objects.push(object)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    mtlLoader.setPath('senkoka_split/')
    mtlLoader.load('senkoka3F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('senkoka_split/')
        objLoader.load('senkoka3F.obj', (object) => {
          const objects: THREE.Group[] = []
          const objLoadEnd = () => {
            object.scale.set(100, 100, 100)
            object.position.set(0, -1000, 0)

            scene.add(object)
            objects.push(object)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    mtlLoader.setPath('senkoka_split/')
    mtlLoader.load('senkoka4F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('senkoka_split/')
        objLoader.load('senkoka4F.obj', (object) => {
          const objects: THREE.Group[] = []
          const objLoadEnd = () => {
            object.scale.set(100, 100, 100)
            object.position.set(0, 1000, 0)

            scene.add(object)
            objects.push(object)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    mtlLoader.setPath('senkoka_split/')
    mtlLoader.load('senkoka5F&R.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader = new OBJLoader()

        material.preload()
        objLoader.setMaterials(material)
        objLoader.setPath('senkoka_split/')
        objLoader.load('senkoka5F&R.obj', (object) => {
          const objects: THREE.Group[] = []
          const objLoadEnd = () => {
            object.scale.set(100, 100, 100)
            object.position.set(0, 3000, 0)

            scene.add(object)
            objects.push(object)
          }

          setTimeout(objLoadEnd, 10)
        })
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

    guide.position.y = -999999 // 初期値
    guides.push(guide)
    scene.add(guide)

    tick()
    onResize()
    window.addEventListener('resize', onResize, false)
  }

  // 特定の箇所を光らせるためのガイド
  const guide = new THREE.Mesh(
    new THREE.BoxGeometry(7000, 1000, 4500),
    new THREE.MeshBasicMaterial({
      color: 0xee476e,
      transparent: true,
      opacity: 0.5,
    })
  )

  // ガイドを配置する位置
  const senkoka1F = () => (guide.position.y = -4550)
  const senkoka2F = () => (guide.position.y = -2600)
  const senkoka3F = () => (guide.position.y = -650)
  const senkoka4F = () => (guide.position.y = 1400)
  const senkoka5F = () => (guide.position.y = 3400)

  useEffect(() => {
    createModel()
  }, [])

  return (
    <>
      <canvas id="canvas" />
      <button type="button" onClick={senkoka1F}>
        1F
      </button>
      <button type="button" onClick={senkoka2F}>
        2F
      </button>
      <button type="button" onClick={senkoka3F}>
        3F
      </button>
      <button type="button" onClick={senkoka4F}>
        4F
      </button>
      <button type="button" onClick={senkoka5F}>
        5F
      </button>
    </>
  )
}

export default React.memo(Model)
