import React from 'react';
import CarouselView from './View';
import './Carousel.css';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CarouselView> = {
  title: 'Componentes/Carousel',
  component: CarouselView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description:
        'Objeto de configuração do carousel contendo items, autoplay e autoplaySpeed',
    },
  },
} satisfies Meta<typeof CarouselView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Primeiro Slide',
          description: 'Este é o primeiro slide do carousel',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Segundo Slide',
          description: 'Este é o segundo slide com conteúdo diferente',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Terceiro Slide',
          description: 'Este é o terceiro e último slide',
        },
      ],
      autoplay: true,
      autoplaySpeed: 3000,
    },
  },
};


export const SlideUnico: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Slide Único',
          description: 'Um carousel com apenas um slide',
        },
      ],
      autoplay: false,
    },
  },
};


export const NavegacaoManual: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Navegação Manual',
          description: 'Use as setas para navegar',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Segundo Slide',
          description: 'Clique nos indicadores abaixo para pular para um slide',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Terceiro Slide',
          description: 'Navegue no seu próprio ritmo',
        },
      ],
      autoplay: false,
    },
  },
};


export const AutoplayRapido: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Transições Rápidas',
          description: 'Os slides mudam a cada 1,5 segundos',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Slide Rápido',
          description: 'Outra transição rápida',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Carousel Veloz',
          description: 'Exibição de conteúdo em ritmo acelerado',
        },
      ],
      autoplay: true,
      autoplaySpeed: 1500,
    },
  },
};


export const AutoplayLento: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Transições Lentas',
          description: 'Os slides mudam a cada 6 segundos',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Ritmo Relaxado',
          description: 'Mais tempo para ler o conteúdo',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Visualização Estendida',
          description: 'Perfeito para informações detalhadas',
        },
      ],
      autoplay: true,
      autoplaySpeed: 6000,
    },
  },
};


export const ApenasImagens: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
        },
        {
          image: 'https://picsum.photos/800/400?random=4',
        },
      ],
      autoplay: true,
      autoplaySpeed: 3000,
    },
  },
};


export const ComVideoYoutube: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Slide de Imagem',
          description: 'Este é um slide de imagem regular',
        },
        {
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Vídeo do YouTube',
          description: 'Vídeo do YouTube incorporado no carousel',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'De Volta às Imagens',
          description: 'Outro slide de imagem após o vídeo',
        },
      ],
      autoplay: false,
    },
  },
};


export const ComVideoVimeo: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Introdução',
          description: 'Começando com uma imagem',
        },
        {
          videoUrl: 'https://vimeo.com/1132534575?fl=wc',
          title: 'Vídeo do Vimeo',
          description: 'Exemplo de vídeo incorporado do Vimeo',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Conclusão',
          description: 'Terminando com uma imagem',
        },
      ],
      autoplay: false,
    },
  },
};


export const ConteudoMisto: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Boas-vindas',
          description: 'Uma mistura de imagens e vídeos',
        },
        {
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Conteúdo em Vídeo',
          description: 'Vídeo do YouTube incorporado',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Recursos',
          description: 'Mostre os recursos do seu produto',
        },
        {
          videoUrl: 'https://vimeo.com/1132534575?fl=wc',
          title: 'Outro Vídeo',
          description: 'Exemplo de vídeo do Vimeo',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Obrigado',
          description: 'Obrigado por visualizar',
        },
      ],
      autoplay: false,
    },
  },
};

export const MuitosSlides: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Slide 1',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Slide 2',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Slide 3',
        },
        {
          image: 'https://picsum.photos/800/400?random=4',
          title: 'Slide 4',
        },
        {
          image: 'https://picsum.photos/800/400?random=5',
          title: 'Slide 5',
        },
        {
          image: 'https://picsum.photos/800/400?random=6',
          title: 'Slide 6',
        },
        {
          image: 'https://picsum.photos/800/400?random=7',
          title: 'Slide 7',
        },
        {
          image: 'https://picsum.photos/800/400?random=8',
          title: 'Slide 8',
        },
      ],
      autoplay: true,
      autoplaySpeed: 2000,
    },
  },
};


export const Vazio: Story = {
  args: {
    data: {
      items: [],
      autoplay: false,
    },
  },
};


export const DescricoesLongas: Story = {
  args: {
    data: {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Primeiro Slide Detalhado',
          description:
            'Este é um slide de carousel com uma descrição muito mais longa. Demonstra como o carousel lida com conteúdo de texto estendido. A descrição pode conter múltiplas frases e fornecer informações mais detalhadas sobre o conteúdo do slide.',
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Segundo Slide Detalhado',
          description:
            'Outro slide com informações abrangentes. Isso mostra como o layout do carousel se adapta para acomodar texto mais longo, mantendo o apelo visual e a legibilidade. Perfeito para conteúdo educacional ou informativo.',
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Terceiro Slide Detalhado',
          description:
            'O slide final neste exemplo demonstra que mesmo com texto extenso, o carousel mantém sua funcionalidade. Os usuários ainda podem navegar facilmente entre os slides usando as setas ou indicadores.',
        },
      ],
      autoplay: false,
    },
  },
};
