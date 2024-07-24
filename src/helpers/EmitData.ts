import InterfaceDataResponse from "../interface/IDataResponse";

let emitData: InterfaceDataResponse = {
    temperatura: 0,
    humedad: 0,
    device: {
        fan: false,
        ligth: false,
        bomba: false,
        leds: {
            visible: false,
            UV: false,
            IF: false
        }
    }
};

const emitSocket = (data: any): InterfaceDataResponse => {
    switch (data.type) {
        case 'Fan':
            const { FanOn } = data;
            emitData.device.fan = FanOn;
            break;

        case 'TemHum':
            const { temperature, humidity } = data;
            emitData.temperatura = temperature;
            emitData.humedad = humidity;
            break;

        case 'ligth':
            const { LightSensor } = data;
            emitData.device.ligth = LightSensor;
            break;

        case 'watherPump':
            const { bomba } = data;
            emitData.device.bomba = bomba;
            break;

        case 'leds':
            const { UV, visible, IF } = data;
           
            emitData.device.leds.UV = UV;
            emitData.device.leds.visible = visible;
            emitData.device.leds.IF = IF;
            break;

        default:
            break;
    }

    return emitData;
}

export default emitSocket;
