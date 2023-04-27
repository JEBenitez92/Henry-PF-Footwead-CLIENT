/*En este archivo van las credenciales de mi proyecto creado en firebase, para obtenerlas voy a mi proyecto y 
selecciono el enganaje de configuracion que esta arriba a la izquierda. Despues selecciono "configuracion de proyecto" 
y voy abajo de todo que me da para eleguir para que aplicacion va a ser. En este caso un web. Esto nos va a tirar un codigo de 
configuracion que lo pegamos aca.
Ahora esto no tiene la configuracion para la autenticacion es solo para que se conecte a la base de datos de firebase.
para configurar la autenticacion vamos a importar:
import {getAuth} from 'firebase/auth'
y despues agrego esta linea al final: export const auth = getAuth(app)
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyArU5WhexH6DepeAdqV8CIyyRALXyV2UG8",
  authDomain: "footweard-6144c.firebaseapp.com",
  projectId: "footweard-6144c",
  storageBucket: "footweard-6144c.appspot.com",
  messagingSenderId: "768702479467",
  appId: "1:768702479467:web:394194a24a52e3052fc52e"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)