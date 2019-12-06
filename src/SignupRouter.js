import React from 'react'
import { createBrowserApp } from '@react-navigation/web'
import { createSwitchNavigator } from '@react-navigation/core'

import { Platform } from 'react-native'
import { isMobileSafari } from 'mobile-device-detect'
import Signup from './components/signup/SignupState'
import SigninInfo from './components/signin/SigninInfo'
import IOSWebAppSignIn from './components/signin/IOSWebAppSignIn'
import Auth from './components/auth/Auth'
import InvalidW3TokenError from './components/signup/InvalidWeb3TokenError'
import Blurred from './components/common/view/Blurred'
import './components/appNavigation/blurFx.css'
import SimpleStore from './lib/undux/SimpleStore.js'
import { fireEventFromNavigation } from './lib/analytics/analytics'
import isWebApp from './lib/utils/isWebApp'
import { Support } from './components/webView/webViewInstances'

const initialRouteName = isMobileSafari && isWebApp ? 'IOSWebAppSignIn' : 'Auth'
const router = createSwitchNavigator(
  {
    Auth,
    Signup,
    InvalidW3TokenError,
    SigninInfo,
    Support,
    IOSWebAppSignIn,
  },
  {
    initialRouteName,
  }
)
let WebRouter
if (Platform.OS === 'web') {
  WebRouter = createBrowserApp(router)
}

const MIN_HEIGHT_TO_ERROR_MESSAGE = 407
const MIN_HEIGHT_TO_HIDE_BTN = 500
const fullScreenContainer = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  minHeight: window.innerHeight > 480 ? MIN_HEIGHT_TO_ERROR_MESSAGE : MIN_HEIGHT_TO_HIDE_BTN,
}

const Router = () => {
  const store = SimpleStore.useStore()
  const { visible: dialogVisible } = store.get('currentScreen').dialogData
  return (
    <>
      <Blurred style={fullScreenContainer} blur={dialogVisible}>
        <WebRouter onNavigationStateChange={(prevNav, nav, action) => fireEventFromNavigation(action)} />
      </Blurred>
    </>
  )
}
export default Router
