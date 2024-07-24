export default interface InterfaceDataResponse{
    temperatura: number,
    humedad: number,
    device: {
        fan: boolean,
        ligth: boolean,
        bomba: boolean,
        leds:{
            visible: boolean,
            UV:boolean ,
            IF: boolean
        }
    }
}


