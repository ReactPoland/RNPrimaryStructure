import {
  setCrashlyticsCollection,
  setPerformanceCollection,
  setAnalyticsCollection
} from '../../services/firebase'

const DEBUG = false

export const setupAnalytics = () => {
  if (!__DEV__) {
    DEBUG && console.warn('Enable analytics services')
    setCrashlyticsCollection(true)
    setAnalyticsCollection(true)
    setPerformanceCollection(true)
  } else {
    DEBUG && console.warn('Disable analytics services')
    setCrashlyticsCollection(false)
    setAnalyticsCollection(false)
    setPerformanceCollection(false)
  }
}
