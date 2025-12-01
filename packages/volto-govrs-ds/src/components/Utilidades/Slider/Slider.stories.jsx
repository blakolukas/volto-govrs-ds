import React, { useState } from 'react';
import CustomSlider from './Slider';

export default {
  title: 'Forms/Slider',
  component: CustomSlider,
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
    min: { control: 'number', defaultValue: 0 },
    max: { control: 'number', defaultValue: 100 },
    markGap: {
      control: 'number',
      defaultValue: 20,
      description: 'Espaçamento das marcas visíveis (ex: 10, 20).',
    },
    snapping: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Se TRUE, o handle só se move nos passos definidos pelo markGap.',
    },
    precision: {
      control: 'number',
      defaultValue: 0,
      description:
        'Número de casas decimais (0 = inteiros, 1 = 0.1, 2 = 0.01).',
    },
    range: {
      control: 'boolean',
      defaultValue: false,
      description: 'Se TRUE, usa dois handles para selecionar um intervalo.',
    },
    vertical: {
      control: 'boolean',
      defaultValue: false,
      description: 'Se TRUE, orienta o slider verticalmente.',
    },
    value: { control: false },
    onChange: { control: false },
  },
};

const SliderTemplate = (args) => {
  const isRange = args.range;

  const initialValue = isRange
    ? Array.isArray(args.value)
      ? args.value
      : [args.min || 0, args.max || 100]
    : typeof args.value === 'number'
      ? args.value
      : args.min || 0;

  const [value, setValue] = useState(initialValue);

  const displayValue = isRange
    ? `[${value[0].toFixed(args.precision)}, ${value[1].toFixed(args.precision)}]`
    : value.toFixed(args.precision);

  const codeExample = `
<CustomSlider
  label="${args.label}"
  value={${displayValue}}
  range={${args.range}}
  vertical={${args.vertical}}
  markGap={${args.markGap}}
  snapping={${args.snapping}}
  precision={${args.precision}}
  min={${args.min}}
  max={${args.max}}
/>`;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <p style={{ fontSize: '14px' }}>
        Valor Atual: <strong>{displayValue}</strong>
      </p>
      <div
        style={{
          padding: '20px',
          height: args.vertical ? '400px' : 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomSlider {...args} value={value} onChange={setValue} />
      </div>

      <details
        style={{
          marginTop: '20px',
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '5px',
          fontFamily: 'monospace',
        }}
      >
        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          Mostrar Código Utilizado
        </summary>
        <pre style={{ margin: 0, overflowX: 'auto', fontSize: '12px' }}>
          {codeExample}
        </pre>
      </details>
    </div>
  );
};

export const SliderDocumentacao = () => (
  <div
    style={{
      padding: 16,
      width: '100%',
      maxWidth: 720,
      fontSize: 14,
      lineHeight: 1.5,
      color: '#222',
    }}
  >
    <h3 style={{ margin: '4px 0' }}>Componente CustomSlider - Documentação</h3>
    <p>
      Este componente encapsula o <code>rc-slider</code>, oferecendo controle
      customizado sobre o comportamento (snapping), as marcas visuais e a
      precisão dos valores, além de layouts responsivos.
    </p>

    <div style={{ marginTop: 24 }}>
      <h4 style={{ margin: '8px 0' }}>Propriedades do Slider</h4>

      {/* markGap */}
      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>markGap (number)</h5>
        <p>
          Define o intervalo em que os números (marcas/labels) são exibidos sob
          o trilho do slider. Se não for informada essa propriedade, o padrão
          calcula 5 intervalos (6 marcas) entre <code>min</code> e{' '}
          <code>max</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CustomSlider markGap={10} min={0} max={100} /> // Mostra 0, 10, 20...`}</code>
        </pre>
      </div>

      {/* snapping */}
      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>snapping (boolean)</h5>
        <p>
          Controla o comportamento de "pulso" ou "steps" do handle. Se{' '}
          <code>TRUE</code>, o handle só pode ser arrastado e solto sobre os
          valores definidos pelo <code>markGap</code>
          Se <code>FALSE</code>, o movimento é livre (free move), permitindo
          selecionar qualquer valor dentro da <code>precision</code> definida.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// Snapping ON (só permite valores 0, 20, 40...)
<CustomSlider markGap={20} snapping={true} />

// Snapping OFF (permite 0, 0.1, 0.2, 1, 2... - depende da precision)
<CustomSlider markGap={20} snapping={false} precision={1} />`}</code>
        </pre>
      </div>

      {/* precision */}
      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>precision (number)</h5>
        <p>
          Usado apenas quando <code>snapping</code> é <code>FALSE</code>. Define
          o número de casas decimais que o slider deve suportar para o movimento
          livre. Se essa propriedade não for informada, o valor padrão é sem
          casas decimais.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// Permite seleção com duas casas decimais (ex: 1.23)
<CustomSlider precision={2} snapping={false} />`}</code>
        </pre>
      </div>

      {/* range & vertical */}
      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>
          range (boolean) / vertical (boolean)
        </h5>
        <p>
          <code>range</code> ativa a seleção de intervalo.
          <code>vertical</code> orienta o slider e reordena os inputs
          automaticamente.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// Horizontal Range (Inputs Start/End ao lado)
<CustomSlider range={true} />

// Vertical Single (Input abaixo)
<CustomSlider vertical={true} range={false} />`}</code>
        </pre>
      </div>

      {/* value / onChange */}
      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>value / onChange</h5>
        <p>
          Controla o valor do slider. Se <code>range</code> for{' '}
          <code>TRUE</code>, <code>value</code> deve ser um array de números (
          <code>[minVal, maxVal]</code>) e <code>onChange</code> retorna um
          array. Caso contrário, <code>value</code> e <code>onChange</code> usam
          um único número.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// Exemplo Range:
const [vals, setVals] = useState([20, 80]);
<CustomSlider range={true} value={vals} onChange={setVals} />`}</code>
        </pre>
      </div>

      {/* width e height */}
      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>width e height</h5>
        <p>
          O slider horizontal possui largura 100% do container pai por padrão. O
          slider vertical possui altura 100% do container pai por padrão. Ajuste
          o tamanho do container pai para controlar as dimensões do slider.
        </p>
      </div>
    </div>
  </div>
);
SliderDocumentacao.parameters = { controls: { disable: true } };

export const HorizontalSingleComSteps = SliderTemplate.bind({});
HorizontalSingleComSteps.args = {
  label: 'Horizontal: Single com Steps (Snapping ON)',
  markGap: 10,
  snapping: true,
  range: false,
  width: '400px',
};

export const HorizontalSingleSemSteps = SliderTemplate.bind({});
HorizontalSingleSemSteps.args = {
  label: 'Horizontal: Single Sem Steps (Movimento Livre)',
  markGap: 25,
  snapping: false,
  range: false,
};

export const HorizontalRangeComSteps = SliderTemplate.bind({});
HorizontalRangeComSteps.args = {
  label: 'Horizontal: Range com Steps (Snapping ON)',
  markGap: 20,
  snapping: true,
  range: true,
};

export const HorizontalRangeSemSteps = SliderTemplate.bind({});
HorizontalRangeSemSteps.args = {
  label: 'Horizontal: Range Sem Steps (Movimento Livre)',
  markGap: 10,
  snapping: false,
  range: true,
};

export const HorizontalComCasasDecimais = SliderTemplate.bind({});
HorizontalComCasasDecimais.args = {
  label: 'Horizontal: 2 Casas Decimais (Free Move)',
  markGap: 20,
  snapping: false,
  precision: 2,
  min: 0,
  max: 10,
  value: 3.45,
};

export const VerticalSingleComSteps = SliderTemplate.bind({});
VerticalSingleComSteps.args = {
  label: 'Vertical: Single com Steps (Snapping ON)',
  markGap: 20,
  snapping: true,
  range: false,
  vertical: true,
};

export const VerticalSingleSemSteps = SliderTemplate.bind({});
VerticalSingleSemSteps.args = {
  label: 'Vertical: Single Sem Steps (Movimento Livre)',
  markGap: 25,
  snapping: false,
  range: false,
  vertical: true,
};

export const VerticalRangeComSteps = SliderTemplate.bind({});
VerticalRangeComSteps.args = {
  label: 'Vertical: Range com Steps (Snapping ON)',
  markGap: 20,
  snapping: true,
  range: true,
  vertical: true,
};

export const VerticalRangeSemSteps = SliderTemplate.bind({});
VerticalRangeSemSteps.args = {
  label: 'Vertical: Range Sem Steps (Movimento Livre)',
  markGap: 10,
  snapping: false,
  range: true,
  vertical: true,
};

export const VerticalComCasasDecimais = SliderTemplate.bind({});
VerticalComCasasDecimais.args = {
  label: 'Vertical: Range com 1 Casa Decimal',
  markGap: 2,
  snapping: false,
  precision: 1,
  min: 0,
  max: 10,
  range: true,
  vertical: true,
  value: [2.5, 7.8],
};
