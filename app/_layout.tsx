import { Platform, View } from 'react-native'

import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { globalStyles } from '@/styles/global-styles'

import * as NavigationBar from 'expo-navigation-bar'; //Para la barra de navegación en Android

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  //NavigationBar.setBackgroundColorAsync('#1E1E1E'); // Color de fondo oscuro
  // No es necesario setBackgroundColorAsync cuando el modo edge-to-edge está habilitado,
  NavigationBar.setButtonStyleAsync('dark'); // Establece los botones en estilo claro para mejor visibilidad
} //Esto no se ejecuta en iOS, ya que no tiene barra de navegación como Android


const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })



  if(!loaded){
    return null
  }

  return (
    <View style={globalStyles.background}>
      <Slot/> 
      {/* Renderiza los componentes que estén al mismo nivel que este componente, es esta caso el index.tsx va acá */}
      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout