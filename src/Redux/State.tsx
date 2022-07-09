export type PostType = {
  id: number
  post: string
  likeCount: number
}

export type DialogType = {
  id: number
  name: string
}

export type MassageType = {
  id: number
  massage: string
}

export type ProfilePageType = {
  posts: Array<PostType>
}

export type DialogPageType = {
  dialogs: Array<DialogType>
  massages: Array<MassageType>
}

export type StateType = {
  profilePage: ProfilePageType
  dialogPage: DialogPageType
}

export const State: StateType = {

  profilePage: {
    posts: [
      {id: 1, post: 'Hello', likeCount: 15},
      {id: 2, post: 'How are you', likeCount: 10},
      {id: 3, post: 'react', likeCount: 12},
      {id: 4, post: 'Hello', likeCount: 17}
    ],
  },

  dialogPage: {
    dialogs: [
      {id: 1, name: "Dmitriy"},
      {id: 2, name: "Alex"},
      {id: 3, name: "Valera"},
      {id: 4, name: "Sweta"},
      {id: 5, name: "Victor"},
    ],

    massages: [
      {id: 1, massage: "Hi"},
      {id: 2, massage: "How are you"},
      {id: 3, massage: "Hello"},
      {id: 4, massage: "YO"}
    ]
  }
}