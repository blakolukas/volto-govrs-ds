import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const HeaderDocumentacao = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
    <h3 style={{ margin: 0, padding: '20px 16px', backgroundColor: '#fff' }}>
      Header - Cabeçalho Governamental
    </h3>

    <section style={{ marginBottom: 24 , backgroundColor: '#fff' }}>
      <Header pathname="/" />
    </section>

    <div style={{ padding: 16, maxWidth: 1045, backgroundColor: '#fff', margin: '0 auto' }}>
      <section style={{ marginBottom: 12 }}>
        <p style={{ color: '#444' }}>
          O componente <code>Header</code> é o cabeçalho padrão do sistema governamental do Rio Grande do Sul.
          Ele integra três componentes principais:
        </p>
        <ul style={{ color: '#444' }}>
          <li><strong>BarraEstado</strong>: Barra superior com links para serviços do governo estadual (rs.gov.br)</li>
          <li><strong>BarraAcessibilidade</strong>: Barra de acessibilidade com atalhos de teclado e opções de contraste</li>
          <li><strong>HeaderContainer</strong>: Cabeçalho principal com logo, título do site, menu e busca</li>
        </ul>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Componentes integrados</h4>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>BarraEstado</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Exibe o logotipo rs.gov.br e links para:
          </p>
          <ul style={{ color: '#444' }}>
            <li>Notícias</li>
            <li>Serviços</li>
            <li>Central do Cidadão</li>
            <li>Transparência</li>
            <li>Locais e Órgãos</li>
            <li>Diário Oficial</li>
            <li>GurIA (assistente digital)</li>
          </ul>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>BarraAcessibilidade</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Oferece recursos de acessibilidade:
          </p>
          <ul style={{ color: '#444' }}>
            <li>Atalhos de teclado: [1] Conteúdo, [2] Menu, [3] Busca</li>
            <li>Botão de alternância de contraste alto/normal</li>
            <li>Link para página de acessibilidade</li>
            <li>Link para formulário de contato</li>
            <li>Link para mapa do site</li>
          </ul>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>HeaderContainer</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Contém os elementos principais de navegação:
          </p>
          <ul style={{ color: '#444' }}>
            <li>Menu hambúrguer (navegação mobile)</li>
            <li>Símbolo do Rio Grande do Sul</li>
            <li>Título do site</li>
            <li>Widget de busca</li>
            <li>Botão de scroll para o topo</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Propriedades</h4>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>pathname</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            <strong>Obrigatório</strong>. String que representa o caminho atual da página.
            Utilizado para controle de navegação e breadcrumbs.
          </p>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`<Header pathname="/" />`}</code>
          </pre>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>token (via Redux)</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Token de autenticação do usuário, obtido automaticamente via Redux store.
            Controla a exibição de elementos relacionados ao login.
          </p>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>siteTitle (via Redux)</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Título do site obtido via Redux store (<code>state.site.data['plone.site_title']</code>).
            Exibido ao lado do símbolo do RS no cabeçalho.
          </p>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>siteLabel (via config)</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Rótulo opcional do site, configurado via <code>config.settings.siteLabel</code>.
            Pode ser usado para identificar diferentes portais ou intranet.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Recursos de Acessibilidade</h4>
        <p style={{ color: '#444' }}>
          O Header implementa diversos recursos de acessibilidade seguindo as diretrizes WCAG:
        </p>
        <ul style={{ color: '#444' }}>
          <li><strong>Atalhos de teclado</strong>: Alt+1 (conteúdo), Alt+2 (menu), Alt+3 (busca)</li>
          <li><strong>Modo de alto contraste</strong>: Alternância via botão ou localStorage persistente</li>
          <li><strong>Navegação por teclado</strong>: Todos os elementos interativos são acessíveis via Tab</li>
          <li><strong>ARIA labels</strong>: Elementos semânticos com rótulos apropriados</li>
          <li><strong>Skip links</strong>: Links para pular direto ao conteúdo principal</li>
        </ul>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Comportamentos importantes</h4>
        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - O <strong>modo de alto contraste</strong> é persistente via localStorage e aplica
            classes CSS tanto no elemento <code>#main</code> quanto no <code>.header-wrapper</code>
          </p>
        </div>
        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - O <strong>widget de busca</strong> pode expandir e ocultar outros elementos do header
            quando ativado, otimizando o espaço em telas menores
          </p>
        </div>
        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - O <strong>botão de scroll</strong> utiliza scroll suave (smooth scrolling) e foca
            no elemento <code>#main</code> da página
          </p>
        </div>
        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - A <strong>BarraEstado</strong> possui um menu responsivo que se adapta a diferentes
            tamanhos de tela
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Exemplo de uso</h4>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`import Header from './components/theme/Header/Header';

// Uso básico
<Header pathname="/" />

// Em uma página específica
<Header pathname="/sobre" />

// O Header obtém automaticamente dados do Redux:
// - token de autenticação
// - título do site
// - ações do site
// - configurações de internacionalização`}</code>
        </pre>
      </section>
    </div>
  </div>
);

HeaderDocumentacao.storyName = 'Documentação';

export const HeaderInterativo = ({ pathname }) => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
    <Header pathname={pathname} />
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h4>Teste os recursos do Header</h4>
      <p>Use os controles abaixo para alterar o pathname</p>
      <p>Experimente também:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>🔍 Clique no ícone de busca para expandir o campo de pesquisa</li>
        <li>🎨 Clique no ícone de contraste (círculo meio preenchido) para alternar o modo de alto contraste</li>
        <li>⌨️ Use Alt+1, Alt+2, Alt+3 para navegar por atalhos de teclado</li>
        <li>☰ Clique no menu hambúrguer para abrir a navegação móvel</li>
        <li>⬆️ Clique no botão verde com seta para voltar ao topo</li>
      </ul>
    </div>
  </div>
);

HeaderInterativo.storyName = 'Interativo';
HeaderInterativo.argTypes = {
  pathname: {
    control: { type: 'text' },
    description: 'Caminho atual da página (usado para breadcrumbs e navegação)',
  },
};

HeaderInterativo.args = {
  pathname: '/',
};

export const HeaderComConteudo = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
    <Header pathname="/" />
    <main id="main" style={{ padding: '40px 20px', maxWidth: 1200, margin: '0 auto' }}>
      <h1>Página de exemplo</h1>
      <p>
        Este é um exemplo de como o Header aparece em uma página real com conteúdo.
        O cabeçalho fica fixo no topo e o conteúdo fica abaixo.
      </p>
      <div style={{ marginTop: 40, padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
        <h2>Teste de acessibilidade</h2>
        <p>Use os seguintes atalhos de teclado:</p>
        <ul>
          <li><kbd>Alt</kbd> + <kbd>1</kbd> - Ir para o conteúdo (este elemento)</li>
          <li><kbd>Alt</kbd> + <kbd>2</kbd> - Ir para o menu de navegação</li>
          <li><kbd>Alt</kbd> + <kbd>3</kbd> - Ir para o campo de busca</li>
        </ul>
      </div>
      <div style={{ marginTop: 40, padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
        <h2>Contraste</h2>
        <p>
          Clique no ícone de contraste (círculo meio preenchido) na barra de acessibilidade
          para alternar entre o modo normal e alto contraste. A preferência é salva no
          localStorage do navegador.
        </p>
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} style={{ marginTop: 40, padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
          <h3>Seção {i + 1}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      ))}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <p>Role até o topo e clique no botão verde com seta ⬆️ para testar o scroll suave</p>
      </div>
    </main>
  </div>
);

HeaderComConteudo.storyName = 'Header com Conteúdo';
