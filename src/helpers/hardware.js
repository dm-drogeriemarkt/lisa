import { factNames } from '../settings';
import Bytes from 'bytes'
import T from 'i18n-react';

export function description(factValues) {
  const nodes = factValues.map(factValue => factValue.node)

  let hardwareDescriptions = [];
  const cpuFactValue = nodes.find(({ factName: { name }}) => name === factNames.cpu);
  const memoryFactValue = nodes.find(({ factName: { name }}) => name === factNames.memory);
  const diskFactValue = nodes.find(({ factName: { name }}) => name === factNames.disk);

  if (cpuFactValue) {
    const cpuText = cpuFactValue.value === '1' ? 'cpu_singular' : 'cpu_plural'
    hardwareDescriptions.push(`${cpuFactValue.value} ${T.translate(`hardware.${cpuText}`)}`);
  }

  if (memoryFactValue) {
    hardwareDescriptions.push(`${Bytes(Bytes(`${memoryFactValue.value}MB`), {unit: 'GB'})} ${T.translate('hardware.memory')}`);
  }

  if (diskFactValue) {
    hardwareDescriptions.push(`${Bytes(Bytes(`${diskFactValue.value}B`), {unit: 'GB'})} ${T.translate('hardware.disk')}`);
  }

  return hardwareDescriptions.join(', ');
}
