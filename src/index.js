let number
let zone
let list
let doings
let offset
let abstrac
let offset1
let nameEncode
let zoneEncode
let listEncode
let doingsEncode
let abstracEncode
let nameDecode
let zoneDecode
let abstracDecode
let listDecode
let doingsDecode
let usuario
let usuario1
let password1
let password2
let name 
name = document.getElementById('name')
zone = document.getElementById('zone')
abstrac = document.getElementById('abstrac')
list = document.getElementById('list')
doings = document.getElementById('doings')
offset = document.getElementById('offset')
offset1 = document.getElementById('offset1')
number = document.getElementById("document").value

document.getElementById("footer").classList.remove('ocultar');

document.getElementById('investigacion').addEventListener('click', () => {
    document.getElementById('introUsuario_Inves').classList.remove('ocultar');
    document.getElementById("inicio").classList.add('ocultar');
    document.getElementById("footer").classList.add('ocultar');
})
document.getElementById('comisaria').addEventListener('click', () => {
    document.getElementById("inicio").classList.add('ocultar');
    document.getElementById("introUsuario_comis").classList.remove('ocultar');
    document.getElementById("footer").classList.add('ocultar');
})
document.getElementById('login').addEventListener('click', () => {
    usuario = document.getElementById('email1').value
    password1 = document.getElementById('password1').value
    if (usuario == "" || password1 == '') {
        alert('Falta completar los casilleros obligatorios');
    } else {
        document.getElementById("inicio").classList.add('ocultar');
        document.getElementById("Datos_investigacion").classList.remove('ocultar');
        document.getElementById("introUsuario_Inves").classList.add('ocultar');
        document.getElementById("footer").classList.add('ocultar');

    }
})
document.getElementById('login1').addEventListener('click', () => {
    usuario1 = document.getElementById('email2').value
    password2 = document.getElementById('password2').value
    if (usuario1 == "" || password2 == '') {
        alert('Falta completar los casilleros obligatorios');
    } else {
        document.getElementById("inicio").classList.add('ocultar');
        document.getElementById('introUsuario_comis').classList.add('ocultar');
        document.getElementById("Datos_comisaria").classList.remove('ocultar');
        document.getElementById("footer").classList.add('ocultar');
    }
})
function encodes() {
    nameEncode = cipher.encode(offset.value, name.value)
    zoneEncode = cipher.encode(offset.value, zone.value)
    abstracEncode = cipher.encode(offset.value, abstrac.value)
    listEncode = cipher.encode(offset.value, list.value)
    doingsEncode = cipher.encode(offset.value, doings.value)
}
document.getElementById('codificar').addEventListener('click', () => {
    encodes()
    document.getElementById('documentEncode').value = number
    document.getElementById('nameEncode').value = nameEncode
    document.getElementById('zoneEncode').value = zoneEncode
    document.getElementById('abstracEncode').value = abstracEncode
    document.getElementById('listEncode').value = listEncode
    document.getElementById('doingsEncode').value = doingsEncode
    document.getElementById("inicio").classList.add('ocultar')
    document.getElementById("Datos_comisaria_codificado").classList.remove('ocultar')
    document.getElementById("Datos_comisaria").classList.add('ocultar')
    document.getElementById("footer").classList.add('ocultar');
})
document.getElementById('reciente').addEventListener('click', () => {
    document.getElementById('documentEncodeProcess').value = number
    console.log(nameEncode+"soy name");
    
    document.getElementById('nameEncodeProcess').value = nameEncode
    document.getElementById('zoneEncodeProcess').value = zoneEncode
    document.getElementById('abstracEncodeProcess').value = abstracEncode
    document.getElementById('listEncodeProcess').value = listEncode
    document.getElementById('doingsEncodeProcess').value = doingsEncode
    document.getElementById("Datos_comisaria_codificado_proceso").classList.remove('ocultar');
    document.getElementById("Datos_investigacion").classList.add('ocultar')
})
document.getElementById('decodificar').addEventListener('click', () => {
    encodes()
    nameDecode = cipher.decode(offset1.value, nameEncode)
    zoneDecode = cipher.decode(offset1.value, zoneEncode)
    abstracDecode = cipher.decode(offset1.value, abstracEncode)
    listDecode = cipher.decode(offset1.value, listEncode)    
    doingsDecode = cipher.decode(offset1.value, doingsEncode)

    document.getElementById('documentDecode').value = number
    document.getElementById('nameDecode').value= nameDecode
    document.getElementById('zoneDecode').value = zoneDecode
    document.getElementById('abstracEncodeProcess').value = abstracDecode
    document.getElementById('listDecode').value = listDecode
    document.getElementById('doingsDecode').value = doingsDecode
    document.getElementById("inicio").classList.add('ocultar')
    document.getElementById("Datos_comisaria_codificado_proceso").classList.add('ocultar')
    document.getElementById("DatosDecodificado").classList.remove('ocultar');
    document.getElementById("footer").classList.add('ocultar');
})
document.getElementById('salir').addEventListener('click', () => {
    document.getElementById("inicio").classList.remove('ocultar')
    document.getElementById("Datos_comisaria_codificado").classList.add('ocultar')
})

