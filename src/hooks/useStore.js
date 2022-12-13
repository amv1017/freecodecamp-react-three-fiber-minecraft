import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [
    // {
    //   key: nanoid(),
    //   pos: [-1, 0, -4],
    //   texture: 'dirt',
    // },
    // {
    //   key: nanoid(),
    //   pos: [3, 0, -8],
    //   texture: 'wood',
    // },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), pos: [x, y, z], texture: prev.texture },
      ],
    }))
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos
        return X !== x || Y !== y || Z !== z
      }),
    }))
  },
  saveWorld: () => {},
  resetWorld: () => {},
}))
