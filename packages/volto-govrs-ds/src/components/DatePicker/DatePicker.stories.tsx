import React, { useState } from 'react';
import FilterSection from './DatePicker';

import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof FilterSection> = {
  title: 'Widgets/DatePicker',
  component: FilterSection,
  parameters: {
    //layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select', 
      options: ['single', 'range', 'multiple'],
      description: 'Modo de seleção: "single" (data única), "range" (intervalo), "multiple" (múltiplas datas)',
      defaultValue: 'range',
    },
    enableTime: {
      control: 'boolean', 
      description: 'Habilita seleção de horário junto com a data',
      defaultValue: false,
    },
    noCalendar: {
      control: 'boolean', 
      description: 'Oculta o calendário e exibe apenas o seletor de horário',
      defaultValue: false,
    },
    maxDate: {
      control: 'text', 
      description: 'Data máxima selecionável (ex: "today", "2025-12-31" ou objeto Date). Se não definido, não há limite',
    },
    minDate: {
      control: 'text',
      description: 'Data mínima selecionável (ex: "2025-01-01" ou objeto Date)',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder exibido no campo',
      defaultValue: 'Selecione o período',
    },
  },
} satisfies Meta<typeof FilterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const DateDisplay = ({ dates }: { dates: Date[] | null }) => {
  if (!dates || dates.length === 0) return null;

  return (
    <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
      <strong>Data{dates.length > 1 ? 's' : ''} selecionada{dates.length > 1 ? 's' : ''}:</strong>
      <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
        {dates.map((date: Date, index: number) => (
          <li key={index}>{date.toLocaleDateString('pt-BR')}</li>
        ))}
      </ul>
    </div>
  );
};


export const Playground: Story = {
  args: {
    mode: 'range',
    enableTime: false,
    noCalendar: false,
    maxDate: 'today',
    placeholder: 'Selecione o período',
  },
  render: (args) => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            {...args}
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
          <DateDisplay dates={dateRange} />
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const DateRange: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="range"
            maxDate="today"
          />
          <DateDisplay dates={dateRange} />
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const SingleDate: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="single"
            maxDate="today"
          />
          <DateDisplay dates={dateRange} />
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const MultipleDates: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="multiple"
            maxDate="today"
          />
          <DateDisplay dates={dateRange} />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
            Segure Ctrl/Cmd para selecionar múltiplas datas
          </p>
        </div>
      );
    };
    return <Wrapper />;
  },
};



export const TimePicker: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="single"
            enableTime={true}
            noCalendar={true}
            placeholder="Selecione o horário"
          />
          <DateDisplay dates={dateRange} />
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const DateTimePicker: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="single"
            enableTime={true}
            placeholder="Selecione data e horário"
          />
          <DateDisplay dates={dateRange} />
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const DateTimeRange: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="range"
            enableTime={true}
            placeholder="Selecione período com horário"
          />
          <DateDisplay dates={dateRange} />
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const WithoutMaxDate: Story = {
  render: () => {
    const Wrapper = () => {
      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="range"
            maxDate={undefined}
            placeholder="Selecione qualquer data"
          />
          <DateDisplay dates={dateRange} />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
            Sem restrição de data máxima - datas futuras permitidas
          </p>
        </div>
      );
    };
    return <Wrapper />;
  },
};


export const WithDateRestrictions: Story = {
  render: () => {
    const Wrapper = () => {
      const today = new Date();
      const thirtyDaysAgo = new Date(today);
      thirtyDaysAgo.setDate(today.getDate() - 30);

      const [dateRange, setDateRange] = useState<Date[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <FilterSection
            dateRange={dateRange}
            setDateRange={setDateRange}
            mode="range"
            minDate={thirtyDaysAgo}
            maxDate={today}
            placeholder="Últimos 30 dias apenas"
          />
          <DateDisplay dates={dateRange} />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
            Restrito aos últimos 30 dias apenas
          </p>
        </div>
      );
    };
    return <Wrapper />;
  },
};
