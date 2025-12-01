import React from 'react';
import './Carousel.css';
import CarouselView from './View';

export default {
  title: 'Components/Carousel',
  parameters: { layout: 'padded' },
};

const lintWarnings = [
  "Warning: imports from '@plone/volto/*' barrel files are discouraged (no-restricted-imports)",
  'Warning: use Image component from @plone/volto/components/theme/Image/Image instead of <img> (no-restricted-syntax)',
];

export const CarouselDocumentacao = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <div style={{ width: '100%' }}>
      <CarouselView
        data={{
          items: [
            {
              title: 'Primeiro Slide',
              description: 'Esta é a descrição do primeiro slide',
              image: 'https://picsum.photos/800/400?random=1',
            },
            {
              title: 'Segundo Slide',
              description: 'Esta é a descrição do segundo slide',
              image: 'https://picsum.photos/800/400?random=2',
            },
            {
              title: 'Terceiro Slide',
              description: 'Esta é a descrição do terceiro slide',
              image: 'https://picsum.photos/800/400?random=3',
            },
          ],
          autoplay: true,
          autoplaySpeed: 3000,
          circular: true,
          width: 'default',
          indicators: 'default',
          enableSwipe: true,
          noArrowsMobile: false,
        }}
      />
    </div>

    <div
      style={{
        marginTop: 16,
        fontSize: 14,
        lineHeight: 1.5,
        color: '#222',
        maxWidth: 900,
      }}
    >
      <h4 style={{ margin: '4px 0' }}>
        Uso e atributos do componente Carousel
      </h4>
      <p>
        Componente de carrossel que suporta imagens e vídeos (YouTube, Vimeo e
        URLs diretas), com autoplay, navegação circular e controles acessíveis.
      </p>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>items</h5>
        <p>
          Array de objetos com as propriedades do slide: <code>title</code>,{' '}
          <code>description</code>, <code>image</code> e <code>videoUrl</code>.
          O vídeo tem prioridade sobre a imagem quando ambos estão presentes.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView
  data={{
    items: [
      {
        title: 'Título do slide',
        description: 'Descrição do slide',
        image: 'https://example.com/image.jpg',
      },
      {
        title: 'Slide com vídeo',
        videoUrl: 'https://www.youtube.com/watch?v=xxxxx',
      },
    ],
  }}
/>`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>autoplay</h5>
        <p>
          Habilita a transição automática entre slides. Padrão:{' '}
          <code>true</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ autoplay: true }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>autoplaySpeed</h5>
        <p>
          Tempo em milissegundos entre transições automáticas. Padrão:{' '}
          <code>3000</code> (3 segundos).
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ autoplaySpeed: 5000 }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>circular</h5>
        <p>
          Ativa navegação circular (do último slide volta ao primeiro). Quando
          desabilitado, os botões de navegação são desabilitados nos extremos.
          Padrão: <code>true</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ circular: false }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>width</h5>
        <p>
          Define a largura do carrossel. Opções: <code>default</code> (85% da
          largura) ou <code>full</code> (100% da largura). Padrão:{' '}
          <code>default</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ width: 'full' }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>indicators</h5>
        <p>
          Define o estilo dos indicadores de navegação. Opções:{' '}
          <code>default</code> (abaixo do carrossel), <code>inside</code> (sobre
          o carrossel) ou <code>numbers</code> (exibe "1 / 5"). Padrão:{' '}
          <code>default</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ indicators: 'numbers' }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>enableSwipe</h5>
        <p>
          Permite navegação por gestos de arrastar em dispositivos móveis.
          Padrão: <code>true</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ enableSwipe: true }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>noArrowsMobile</h5>
        <p>
          Oculta as setas de navegação em dispositivos móveis (abaixo de 768px).
          Útil quando combinado com <code>enableSwipe</code>. Padrão:{' '}
          <code>false</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<CarouselView data={{ noArrowsMobile: true }} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h4 style={{ margin: '8px 0' }}>Comportamentos</h4>

        <h5 style={{ margin: '8px 0' }}>Vídeos</h5>
        <p>
          O componente suporta URLs do YouTube e Vimeo. Para vídeos do YouTube,
          exibe uma thumbnail clicável antes de carregar o iframe. Vídeos
          diretos (MP4, etc.) são renderizados com controles nativos.
        </p>

        <h5 style={{ margin: '8px 0' }}>Navegação por teclado</h5>
        <p>
          Os botões de navegação e indicadores são totalmente acessíveis via
          teclado, com labels apropriados para leitores de tela.
        </p>

        <h5 style={{ margin: '8px 0' }}>Touch/Swipe</h5>
        <p>
          Em dispositivos móveis, o usuário pode arrastar horizontalmente para
          navegar entre slides (quando <code>enableSwipe</code> está ativo). A
          distância mínima de arraste é de 50 pixels.
        </p>

        <h5 style={{ margin: '8px 0' }}>Animações</h5>
        <p>
          As transições entre slides são animadas com duração de 500ms. Durante
          a transição, a navegação é bloqueada para evitar conflitos.
        </p>
      </div>
    </div>

    <div style={{ marginTop: 16 }}>
      <h5>Lint Warnings</h5>
      <pre style={{ background: '#fff8e1', padding: 12, borderRadius: 4 }}>
        {lintWarnings.join('\n')}
      </pre>
    </div>
  </div>
);

CarouselDocumentacao.story = { name: 'Documentação Carousel' };

export const CarouselInterativo = (args) => {
  const {
    autoplay,
    autoplaySpeed,
    circular,
    width,
    indicators,
    enableSwipe,
    noArrowsMobile,
  } = args;

  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <CarouselView
          data={{
            items: [
              {
                title: 'Primeiro Slide',
                description:
                  'Use os controles do Storybook para alterar as propriedades',
                image: 'https://picsum.photos/800/400?random=4',
              },
              {
                title: 'Segundo Slide',
                description: 'Teste autoplay, circular, indicadores e mais',
                image: 'https://picsum.photos/800/400?random=5',
              },
              {
                title: 'Terceiro Slide',
                description: 'Experimente diferentes configurações',
                image: 'https://picsum.photos/800/400?random=6',
              },
              {
                title: 'Quarto Slide',
                description: 'Navegue com as setas ou indicadores',
                image: 'https://picsum.photos/800/400?random=7',
              },
            ],
            autoplay,
            autoplaySpeed,
            circular,
            width,
            indicators,
            enableSwipe,
            noArrowsMobile,
          }}
        />

        <div style={{ marginTop: 16, fontSize: 13, color: '#444' }}>
          Observação: use os controles do Storybook (painel Controls) para
          editar as propriedades do carrossel em tempo real.
        </div>
      </div>
    </div>
  );
};

CarouselInterativo.argTypes = {
  autoplay: { control: 'boolean' },
  autoplaySpeed: { control: 'number' },
  circular: { control: 'boolean' },
  width: {
    control: 'select',
    options: ['default', 'full'],
  },
  indicators: {
    control: 'select',
    options: ['default', 'inside', 'numbers'],
  },
  enableSwipe: { control: 'boolean' },
  noArrowsMobile: { control: 'boolean' },
};

CarouselInterativo.args = {
  autoplay: true,
  autoplaySpeed: 3000,
  circular: true,
  width: 'default',
  indicators: 'default',
  enableSwipe: true,
  noArrowsMobile: false,
};

CarouselInterativo.story = { name: 'Carousel Interativo' };

export const CarouselIndicadoresNumeros = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Slide 1 de 5',
            description: 'Indicadores numéricos mostram progresso claramente',
            image: 'https://picsum.photos/800/400?random=8',
          },
          {
            title: 'Slide 2 de 5',
            description: 'Ideal para apresentações com muitos slides',
            image: 'https://picsum.photos/800/400?random=9',
          },
          {
            title: 'Slide 3 de 5',
            description: 'Formato compacto e informativo',
            image: 'https://picsum.photos/800/400?random=10',
          },
          {
            title: 'Slide 4 de 5',
            description: 'Mostra posição atual e total',
            image: 'https://picsum.photos/800/400?random=11',
          },
          {
            title: 'Slide 5 de 5',
            description: 'Último slide desta série',
            image: 'https://picsum.photos/800/400?random=12',
          },
        ],
        autoplay: true,
        autoplaySpeed: 3000,
        circular: true,
        width: 'default',
        indicators: 'numbers',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com indicadores numéricos (1 / 5, 2 / 5, etc.). Ideal para
      carrosséis com muitos itens.
    </div>
  </div>
);

CarouselIndicadoresNumeros.story = { name: 'Indicadores Numéricos' };

export const CarouselIndicadoresDentro = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Design Limpo',
            description: 'Indicadores posicionados sobre o carrossel',
            image: 'https://picsum.photos/800/400?random=13',
          },
          {
            title: 'Visual Moderno',
            description: 'Menos espaço vertical utilizado',
            image: 'https://picsum.photos/800/400?random=14',
          },
          {
            title: 'Navegação Intuitiva',
            description: 'Fácil de identificar e usar',
            image: 'https://picsum.photos/800/400?random=15',
          },
        ],
        autoplay: true,
        autoplaySpeed: 3000,
        circular: true,
        width: 'default',
        indicators: 'inside',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com indicadores posicionados sobre a imagem (dentro do
      carrossel). Economiza espaço vertical.
    </div>
  </div>
);

CarouselIndicadoresDentro.story = { name: 'Indicadores Dentro' };

export const CarouselLarguraTotal = () => (
  <div style={{ padding: 16, width: '100%' }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Largura Total',
            description: 'Carrossel ocupa toda a largura disponível',
            image: 'https://picsum.photos/1200/500?random=16',
          },
          {
            title: 'Visual Impactante',
            description: 'Ideal para banners principais',
            image: 'https://picsum.photos/1200/500?random=17',
          },
          {
            title: 'Destaque Máximo',
            description: 'Perfeito para hero sections',
            image: 'https://picsum.photos/1200/500?random=18',
          },
        ],
        autoplay: true,
        autoplaySpeed: 3000,
        circular: true,
        width: 'full',
        indicators: 'inside',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com largura total (width: 'full'). Os ícones de navegação se
      adaptam automaticamente.
    </div>
  </div>
);

CarouselLarguraTotal.story = { name: 'Largura Total' };

export const CarouselNaoCircular = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Primeiro Slide',
            description: 'Seta esquerda está desabilitada aqui',
            image: 'https://picsum.photos/800/400?random=19',
          },
          {
            title: 'Slide do Meio',
            description: 'Ambas as setas estão ativas',
            image: 'https://picsum.photos/800/400?random=20',
          },
          {
            title: 'Último Slide',
            description: 'Seta direita está desabilitada aqui',
            image: 'https://picsum.photos/800/400?random=21',
          },
        ],
        autoplay: false,
        circular: false,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com navegação não-circular (circular: false). As setas são
      desabilitadas nos extremos.
    </div>
  </div>
);

CarouselNaoCircular.story = { name: 'Não Circular' };

export const CarouselMobileOtimizado = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Mobile Friendly',
            description: 'Arraste para navegar, setas ocultas em mobile',
            image: 'https://picsum.photos/800/400?random=22',
          },
          {
            title: 'Touch Enabled',
            description: 'Interface otimizada para toque',
            image: 'https://picsum.photos/800/400?random=23',
          },
          {
            title: 'Design Responsivo',
            description: 'Funciona perfeitamente em todos os dispositivos',
            image: 'https://picsum.photos/800/400?random=24',
          },
        ],
        autoplay: true,
        autoplaySpeed: 3000,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: true,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel otimizado para mobile (noArrowsMobile: true). As setas ficam
      ocultas em telas menores que 768px. Teste redimensionando o viewport.
    </div>
  </div>
);

CarouselMobileOtimizado.story = { name: 'Mobile Otimizado' };

export const CarouselNavegacaoManual = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Controle Total',
            description: 'Use as setas ou indicadores para navegar',
            image: 'https://picsum.photos/800/400?random=25',
          },
          {
            title: 'Sem Autoplay',
            description: 'Os slides não mudam automaticamente',
            image: 'https://picsum.photos/800/400?random=26',
          },
          {
            title: 'Seu Ritmo',
            description: 'Você controla quando avançar',
            image: 'https://picsum.photos/800/400?random=27',
          },
        ],
        autoplay: false,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel sem autoplay (autoplay: false). O usuário controla totalmente a
      navegação.
    </div>
  </div>
);

CarouselNavegacaoManual.story = { name: 'Navegação Manual' };

export const CarouselAutoplayRapido = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Transição Rápida',
            description: 'Slides mudam a cada 1.5 segundos',
            image: 'https://picsum.photos/800/400?random=28',
          },
          {
            title: 'Dinâmico',
            description: 'Perfeito para destaques rápidos',
            image: 'https://picsum.photos/800/400?random=29',
          },
          {
            title: 'Ágil',
            description: 'Mantém o conteúdo sempre mudando',
            image: 'https://picsum.photos/800/400?random=30',
          },
        ],
        autoplay: true,
        autoplaySpeed: 1500,
        circular: true,
        width: 'default',
        indicators: 'numbers',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com autoplay rápido (autoplaySpeed: 1500ms = 1.5 segundos).
    </div>
  </div>
);

CarouselAutoplayRapido.story = { name: 'Autoplay Rápido' };

export const CarouselAutoplayLento = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Transição Lenta',
            description: 'Slides mudam a cada 6 segundos',
            image: 'https://picsum.photos/800/400?random=31',
          },
          {
            title: 'Mais Tempo',
            description: 'Permite leitura completa do conteúdo',
            image: 'https://picsum.photos/800/400?random=32',
          },
          {
            title: 'Contemplativo',
            description: 'Ideal para conteúdo com mais informação',
            image: 'https://picsum.photos/800/400?random=33',
          },
        ],
        autoplay: true,
        autoplaySpeed: 6000,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com autoplay lento (autoplaySpeed: 6000ms = 6 segundos). Dá mais
      tempo para ler o conteúdo.
    </div>
  </div>
);

CarouselAutoplayLento.story = { name: 'Autoplay Lento' };

export const CarouselComVideo = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Vídeo do YouTube',
            description: 'Clique no botão play para assistir',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            title: 'Imagem Normal',
            description: 'Voltando para imagem estática',
            image: 'https://picsum.photos/800/400?random=34',
          },
          {
            title: 'Outro Vídeo',
            description: 'Mais um exemplo de vídeo do YouTube',
            videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
          },
        ],
        autoplay: false,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com vídeos do YouTube. Autoplay desabilitado para não interferir
      com os vídeos. Clique no play para carregar o iframe.
    </div>
  </div>
);

CarouselComVideo.story = { name: 'Com Vídeos (YouTube)' };

export const CarouselMixtoVideoImagem = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Bem-vindo',
            description: 'Conheça nossos serviços',
            image: 'https://picsum.photos/800/400?random=35',
          },
          {
            title: 'Veja em Ação',
            description: 'Tutorial em vídeo',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            title: 'Galeria de Projetos',
            description: 'Nossos trabalhos recentes',
            image: 'https://picsum.photos/800/400?random=36',
          },
          {
            title: 'Depoimento',
            description: 'Cliente satisfeito',
            videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
          },
          {
            title: 'Entre em Contato',
            description: 'Estamos aqui para ajudar',
            image: 'https://picsum.photos/800/400?random=37',
          },
        ],
        autoplay: false,
        circular: true,
        width: 'default',
        indicators: 'numbers',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel misto com imagens e vídeos alternados. Caso de uso comum para
      páginas de apresentação.
    </div>
  </div>
);

CarouselMixtoVideoImagem.story = { name: 'Misto: Vídeos e Imagens' };

export const CarouselSomenteImagens = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            image: 'https://picsum.photos/800/400?random=38',
          },
          {
            image: 'https://picsum.photos/800/400?random=39',
          },
          {
            image: 'https://picsum.photos/800/400?random=40',
          },
          {
            image: 'https://picsum.photos/800/400?random=41',
          },
        ],
        autoplay: true,
        autoplaySpeed: 2500,
        circular: true,
        width: 'full',
        indicators: 'inside',
        enableSwipe: true,
        noArrowsMobile: true,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel sem texto, apenas imagens. Ideal para galerias fotográficas.
    </div>
  </div>
);

CarouselSomenteImagens.story = { name: 'Somente Imagens' };

export const CarouselSomenteTitulos = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Design Simples',
            image: 'https://picsum.photos/800/400?random=42',
          },
          {
            title: 'Foco no Visual',
            image: 'https://picsum.photos/800/400?random=43',
          },
          {
            title: 'Minimalista',
            image: 'https://picsum.photos/800/400?random=44',
          },
        ],
        autoplay: true,
        autoplaySpeed: 3000,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com apenas títulos (sem descrições). Design mais limpo e
      minimalista.
    </div>
  </div>
);

CarouselSomenteTitulos.story = { name: 'Somente Títulos' };

export const CarouselItemUnico = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Item Único',
            description:
              'Quando há apenas um item, autoplay é automaticamente desabilitado',
            image: 'https://picsum.photos/800/400?random=45',
          },
        ],
        autoplay: true,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com apenas um item. O autoplay é automaticamente desabilitado e
      os indicadores mostram apenas um ponto.
    </div>
  </div>
);

CarouselItemUnico.story = { name: 'Item Único' };

export const CarouselMuitosItens = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Slide 1',
            description: 'Primeiro de muitos',
            image: 'https://picsum.photos/800/400?random=46',
          },
          {
            title: 'Slide 2',
            description: 'Continuando...',
            image: 'https://picsum.photos/800/400?random=47',
          },
          {
            title: 'Slide 3',
            description: 'Mais conteúdo',
            image: 'https://picsum.photos/800/400?random=48',
          },
          {
            title: 'Slide 4',
            description: 'Ainda tem mais',
            image: 'https://picsum.photos/800/400?random=49',
          },
          {
            title: 'Slide 5',
            description: 'Quase lá',
            image: 'https://picsum.photos/800/400?random=50',
          },
          {
            title: 'Slide 6',
            description: 'Mais um',
            image: 'https://picsum.photos/800/400?random=51',
          },
          {
            title: 'Slide 7',
            description: 'Penúltimo',
            image: 'https://picsum.photos/800/400?random=52',
          },
          {
            title: 'Slide 8',
            description: 'Último slide!',
            image: 'https://picsum.photos/800/400?random=53',
          },
        ],
        autoplay: true,
        autoplaySpeed: 2000,
        circular: true,
        width: 'default',
        indicators: 'numbers',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com muitos itens (8 slides). Indicadores numéricos são
      recomendados para facilitar a navegação.
    </div>
  </div>
);

CarouselMuitosItens.story = { name: 'Muitos Itens' };

export const CarouselVazio = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [],
        autoplay: true,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Estado vazio do carrossel (sem itens configurados). Exibe mensagem para o
      editor adicionar itens.
    </div>
  </div>
);

CarouselVazio.story = { name: 'Estado Vazio' };

export const CarouselSemImagem = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Sem Imagem 1',
            description: 'Este slide não tem imagem nem vídeo',
          },
          {
            title: 'Sem Imagem 2',
            description: 'Exibe um placeholder visual',
          },
          {
            title: 'Slide com Imagem',
            description: 'Este tem imagem',
            image: 'https://picsum.photos/800/400?random=54',
          },
        ],
        autoplay: false,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Carrossel com slides sem imagem ou vídeo. Exibe um placeholder com ícone
      SVG.
    </div>
  </div>
);

CarouselSemImagem.story = { name: 'Sem Imagem (Placeholder)' };

export const CarouselSwipeHabilitado = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Arraste Horizontalmente',
            description: 'Deslize para a esquerda ou direita para navegar',
            image: 'https://picsum.photos/800/400?random=55',
          },
          {
            title: 'Touch Friendly',
            description: 'Funciona em qualquer dispositivo touch',
            image: 'https://picsum.photos/800/400?random=56',
          },
          {
            title: 'Gestos Naturais',
            description: 'Distância mínima de 50px para ativar',
            image: 'https://picsum.photos/800/400?random=57',
          },
        ],
        autoplay: false,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: true,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Swipe/arraste habilitado (enableSwipe: true). Teste em dispositivo móvel
      ou use as ferramentas de desenvolvedor para simular touch. Arraste
      horizontalmente com distância mínima de 50 pixels.
    </div>
  </div>
);

CarouselSwipeHabilitado.story = { name: 'Swipe Habilitado' };

export const CarouselSwipeDesabilitado = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Swipe Desabilitado',
            description: 'Use apenas os botões ou indicadores para navegar',
            image: 'https://picsum.photos/800/400?random=58',
          },
          {
            title: 'Navegação Controlada',
            description: 'Arraste não funciona, apenas cliques',
            image: 'https://picsum.photos/800/400?random=59',
          },
          {
            title: 'Somente Botões',
            description: 'Útil quando o conteúdo precisa ser scrollável',
            image: 'https://picsum.photos/800/400?random=60',
          },
        ],
        autoplay: false,
        circular: true,
        width: 'default',
        indicators: 'default',
        enableSwipe: false,
        noArrowsMobile: false,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Swipe/arraste desabilitado (enableSwipe: false). Mesmo em mobile, apenas
      os botões de navegação e indicadores funcionam. Útil quando há conteúdo
      scrollável dentro dos slides.
    </div>
  </div>
);

CarouselSwipeDesabilitado.story = { name: 'Swipe Desabilitado' };

export const CarouselMobileCompleto = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 1200 }}>
    <CarouselView
      data={{
        items: [
          {
            title: 'Experiência Mobile',
            description: 'Arraste para navegar, sem setas visíveis',
            image: 'https://picsum.photos/800/400?random=61',
          },
          {
            title: 'Interface Limpa',
            description: 'Máximo espaço para o conteúdo',
            image: 'https://picsum.photos/800/400?random=62',
          },
          {
            title: 'Touch First',
            description: 'Design pensado para touch',
            image: 'https://picsum.photos/800/400?random=63',
          },
        ],
        autoplay: true,
        autoplaySpeed: 4000,
        circular: true,
        width: 'full',
        indicators: 'inside',
        enableSwipe: true,
        noArrowsMobile: true,
      }}
    />

    <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
      Configuração ideal para mobile: swipe habilitado + setas ocultas em mobile
      + indicadores dentro + largura total. Teste redimensionando o viewport
      abaixo de 768px.
    </div>
  </div>
);

CarouselMobileCompleto.story = { name: 'Configuração Mobile Ideal' };
