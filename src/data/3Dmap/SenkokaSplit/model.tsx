import React, { useEffect } from 'react'
import * as THREE from 'three'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Model: React.VFC = () => {
  const guide = new THREE.Mesh(
    new THREE.BoxGeometry(7000, 1000, 4500),
    new THREE.MeshBasicMaterial({
      color: 0xee476e,
      transparent: true,
      opacity: 0.5,
    })
  )

  const createModel = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
      alpha: true,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 16 / 10, 1, 18745)
    const light = new THREE.AmbientLight(0x666666, 2.5)
    const controls = new OrbitControls(camera, renderer.domElement)

    camera.position.set(0, 0, 15000)
    controls.enableDamping = true
    controls.dampingFactor = 0.2
    scene.add(light)

    const objects: any = []

    const mtlLoader1 = new MTLLoader()

    mtlLoader1.setPath('senkoka_split/')
    mtlLoader1.load('senkoka1F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader1 = new OBJLoader()

        material.preload()
        objLoader1.setMaterials(material)
        objLoader1.setPath('senkoka_split/')
        objLoader1.load('senkoka1F.obj', (object1) => {
          const objLoadEnd = () => {
            object1.scale.set(100, 100, 100)
            object1.position.set(0, -5000, 0)

            scene.add(object1)
            objects.push(object1)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    const mtlLoader2 = new MTLLoader()

    mtlLoader2.setPath('senkoka_split/')
    mtlLoader2.load('senkoka2F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader2 = new OBJLoader()

        material.preload()
        objLoader2.setMaterials(material)
        objLoader2.setPath('senkoka_split/')
        objLoader2.load('senkoka2F.obj', (object2) => {
          const objLoadEnd = () => {
            object2.scale.set(100, 100, 100)
            object2.position.set(0, -3000, 0)

            scene.add(object2)
            objects.push(object2)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    const mtlLoader3 = new MTLLoader()

    mtlLoader3.setPath('senkoka_split/')
    mtlLoader3.load('senkoka3F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader3 = new OBJLoader()

        material.preload()
        objLoader3.setMaterials(material)
        objLoader3.setPath('senkoka_split/')
        objLoader3.load('senkoka3F.obj', (object3) => {
          const objLoadEnd = () => {
            object3.scale.set(100, 100, 100)
            object3.position.set(0, -1000, 0)

            scene.add(object3)
            objects.push(object3)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    const mtlLoader4 = new MTLLoader()

    mtlLoader4.setPath('senkoka_split/')
    mtlLoader4.load('senkoka4F.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader4 = new OBJLoader()

        material.preload()
        objLoader4.setMaterials(material)
        objLoader4.setPath('senkoka_split/')
        objLoader4.load('senkoka4F.obj', (object4) => {
          const objLoadEnd = () => {
            object4.scale.set(100, 100, 100)
            object4.position.set(0, 1000, 0)

            scene.add(object4)
            objects.push(object4)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    const mtlLoader5 = new MTLLoader()

    mtlLoader5.setPath('senkoka_split/')
    mtlLoader5.load('senkoka5F&R.mtl', (material) => {
      const mtlLoadEnd = () => {
        const objLoader5 = new OBJLoader()

        material.preload()
        objLoader5.setMaterials(material)
        objLoader5.setPath('senkoka_split/')
        objLoader5.load('senkoka5F&R.obj', (object5) => {
          const objLoadEnd = () => {
            object5.scale.set(100, 100, 100)
            object5.position.set(0, 3000, 0)

            scene.add(object5)
            objects.push(object5)
          }

          setTimeout(objLoadEnd, 10)
        })
      }

      setTimeout(mtlLoadEnd, 10)
    })

    scene.add(guide)
    objects.push(guide)
    guide.position.y = -99999 // 初期値

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

    tick()
    onResize()
    window.addEventListener('resize', onResize, false)
  }

  const senkoka1F = () => {
    guide.position.y = -4550
  }

  const senkoka2F = () => {
    guide.position.y = -2600
  }

  const senkoka3F = () => {
    guide.position.y = -650
  }

  const senkoka4F = () => {
    guide.position.y = 1400
  }

  const senkoka5F = () => {
    guide.position.y = 3400
  }

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
