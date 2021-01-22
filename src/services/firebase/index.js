import analytics from '@react-native-firebase/analytics'
import perf from '@react-native-firebase/perf'
import crashlytics from '@react-native-firebase/crashlytics'

// performance monitor
export const setPerformanceCollection = async (enabled = true) => {
  try {
    await perf().setPerformanceCollectionEnabled(enabled)
  } catch (error) {
    console.warn('setPerformanceCollectionEnabled error', error.message)
  }
}

// crashlytics
export const setCrashlyticsCollection = async (enabled = false) => {
  try {
    await crashlytics().setCrashlyticsCollectionEnabled(enabled)
  } catch (error) {
    console.warn('setCrashlyticsCollectionEnabled error', error.message)
  }
}

// analytics
export const setAnalyticsCollection = async (enabled = true) => {
  try {
    await analytics().setAnalyticsCollectionEnabled(enabled)
  } catch (error) {
    console.warn('setAnalyticsCollectionEnabled error', error.message)
  }
}
