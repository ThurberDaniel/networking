import { NULL } from 'node-sass'
import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  // NOTE Account is Api Profile
  // NOTE user is Auth0Profile
  user: {},
  account: {},
  showAllPosts: [],
  activePost: [],
  showAllOne: [],
  activeProfile: NULL,
  billboards: []

})
