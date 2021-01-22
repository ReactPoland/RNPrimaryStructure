import { setupAnalytics } from './analytics'

export const initServices = () => {
  setupAnalytics()

  return () => {}
}
