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

    guide1.position.y = -999999 // 初期値
    guide2.position.y = -999999
    guides.push(guide1, guide2)
    scene.add(guide1, guide2)

    tick()
    onResize()
    window.addEventListener('resize', onResize, false)
  }

  // 特定の箇所を光らせるためのガイド ---------------------------------

  // 講義室・ゼミ室・教室
  const guide1 = new THREE.Mesh(
    new THREE.BoxGeometry(2500, 1000, 2500),
    new THREE.MeshBasicMaterial({
      color: 0xee476e,
      transparent: true,
      opacity: 0.5,
    })
  )

  // コンピューター室・物質化学工学実験室・機器測定室・生産工学実験室・教官室
  const guide2 = new THREE.Mesh(
    new THREE.BoxGeometry(1250, 1000, 2500),
    new THREE.MeshBasicMaterial({
      color: 0xee476e,
      transparent: true,
      opacity: 0.5,
    })
  )

  // ガイドを配置する位置 -------------------------------------------

  // 専-101 講義室1
  const senkoka101 = () => {
    guide1.visible = true
    guide2.visible = false

    guide1.position.set(-1900, -4550, 1200)
  }

  // 専-102 コンピューター室
  const senkoka102 = () => {
    guide1.visible = false
    guide2.visible = true

    guide2.position.set(-2520, -4550, -1200)
  }

  // 専-103 生産工学実験室
  const senkoka103 = () => {
    guide1.visible = false
    guide2.visible = true

    guide2.position.set(-1270, -4550, -1200)
  }

  // 専-104 物質化学工学実験室
  const senkoka104 = () => {
    guide1.visible = false
    guide2.visible = true

    guide2.position.set(1270, -4550, -1200)
  }

  // 専-105 機器測定室
  const senkoka105 = () => {
    guide1.visible = false
    guide2.visible = true

    guide2.position.set(2520, -4550, -1200)
  }

  // 専-106 講義室2
  const senkoka106 = () => {
    guide1.visible = true
    guide2.visible = false

    guide1.position.set(1900, -4550, 1200)
  }

  useEffect(() => {
    createModel()
  }, [])

  return (
    <>
      <canvas id="canvas" />
      <button type="button" onClick={senkoka101}>
        講義室1
      </button>
      <button type="button" onClick={senkoka102}>
        コンピューター室
      </button>
      <button type="button" onClick={senkoka103}>
        生産工学実験室
      </button>
      <button type="button" onClick={senkoka104}>
        物質化学工学実験室
      </button>
      <button type="button" onClick={senkoka105}>
        機器測定室
      </button>
      <button type="button" onClick={senkoka106}>
        講義室2
      </button>
    </>
  )
}

export default React.memo(Model)
