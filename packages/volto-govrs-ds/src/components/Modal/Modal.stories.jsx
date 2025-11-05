import React from 'react';
import Modal from './Modal';
import './../../theme/components/Modal.scss';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentString =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <Modal
          title="Titulo"
          type="alert"
          buttonLeft={{ label: 'a', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'b', onClick: () => setIsOpen(false) }}
          onClose={() => setIsOpen(false)}
        >
          {contentString}
        </Modal>
      )}
    </div>
  );
};


export const LongAlert = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentString =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <Modal
          title="Titulo"
          type="alert"
          buttonLeft={{ label: 'a', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'b', onClick: () => setIsOpen(false) }}
          onClose={() => setIsOpen(false)}
        >
          The Comprehensive Guide to Modern Web Development: A Deep Dive into
          Contemporary Technologies and Best Practices In the ever-evolving
          landscape of web development, staying current with modern
          technologies, frameworks, and methodologies has become increasingly
          crucial for developers seeking to build robust, scalable, and
          maintainable applications. This comprehensive exploration delves into
          the multifaceted world of contemporary web development, examining the
          intricate relationships between various technologies, design patterns,
          and architectural decisions that shape the applications we build
          today. Chapter 1: The Foundation of Modern Web Applications The
          journey of web development has been nothing short of remarkable. From
          the early days of static HTML pages to today's dynamic, interactive
          applications, the evolution has been driven by continuous innovation
          and the relentless pursuit of better user experiences. Modern web
          applications are sophisticated software systems that leverage a
          complex stack of technologies, each serving a specific purpose in the
          overall architecture. At the core of any web application lies the
          fundamental trinity of HTML, CSS, and JavaScript. These three
          technologies, while seemingly simple in isolation, combine to create
          powerful and expressive user interfaces. HTML provides the semantic
          structure, defining the content and its meaning. CSS brings visual
          presentation, controlling layout, colors, typography, and responsive
          behavior across different devices. JavaScript adds interactivity and
          dynamic behavior, transforming static pages into living, breathing
          applications that respond to user input and update in real-time.
          Chapter 2: Component-Based Architecture and Modern Frameworks The
          paradigm shift towards component-based architecture has revolutionized
          how we think about building user interfaces. Instead of creating
          monolithic pages, modern development practices encourage breaking down
          interfaces into smaller, reusable components. Each component
          encapsulates its own logic, styling, and behavior, promoting
          modularity and maintainability. React, Vue, Angular, and other modern
          frameworks have embraced this component-based approach, providing
          developers with powerful tools to create sophisticated applications.
          These frameworks handle complex tasks such as state management,
          virtual DOM reconciliation, and efficient rendering, allowing
          developers to focus on building features rather than wrestling with
          low-level DOM manipulation. The concept of declarative programming,
          championed by these frameworks, represents a significant departure
          from imperative approaches. Instead of explicitly describing how to
          achieve a desired result, developers declare what they want, and the
          framework figures out how to make it happen. This abstraction reduces
          cognitive load and makes code more maintainable and easier to reason
          about. Chapter 3: State Management and Data Flow Managing application
          state is one of the most challenging aspects of building complex web
          applications. As applications grow in size and complexity, keeping
          track of data, ensuring consistency across components, and managing
          side effects becomes increasingly difficult. Modern state management
          solutions like Redux, MobX, Zustand, and Context API provide patterns
          and tools to handle these challenges. The unidirectional data flow
          pattern, popularized by Flux and Redux, brings predictability to state
          management. Data flows in a single direction: actions trigger state
          changes, which in turn trigger view updates. This predictable pattern
          makes debugging easier and helps prevent the spaghetti code that can
          result from bidirectional data binding. Chapter 4: Styling in the
          Modern Era CSS has evolved tremendously, gaining powerful features
          like Grid, Flexbox, custom properties, and advanced selectors. Modern
          CSS enables layouts that were once impossible or required complex
          JavaScript solutions. CSS Grid revolutionized two-dimensional layouts,
          while Flexbox simplified one-dimensional arrangements. The rise of
          CSS-in-JS libraries like styled-components and Emotion introduced a
          new paradigm where styles are written in JavaScript, co-located with
          components. This approach offers benefits like dynamic styling based
          on props, automatic vendor prefixing, and elimination of unused
          styles. However, it also sparked debates about separation of concerns
          and performance implications. Preprocessors like Sass and Less remain
          popular, offering variables, nesting, mixins, and other features that
          make CSS more maintainable. CSS Modules provide scoped styling,
          preventing global namespace pollution and style conflicts.
          Utility-first frameworks like Tailwind CSS offer yet another approach,
          providing low-level utility classes that can be composed to build
          designs directly in markup. Chapter 5: Performance Optimization and
          Best Practices Performance is not just a feature; it's a fundamental
          requirement for modern web applications. Users expect fast, responsive
          experiences, and search engines reward well-performing sites.
          Optimization strategies span multiple dimensions: reducing bundle
          sizes, minimizing network requests, optimizing images, implementing
          lazy loading, and leveraging browser caching. Code splitting allows
          applications to load only the code needed for the current view,
          reducing initial load times. Tree shaking eliminates unused code from
          bundles. Modern build tools like Webpack, Rollup, and Vite provide
          sophisticated optimization capabilities out of the box. The
          performance implications of third-party scripts, fonts, and analytics
          tools cannot be understated. Each additional resource impacts load
          time and runtime performance. Strategies like preloading critical
          resources, using web fonts efficiently, and deferring non-critical
          scripts help maintain optimal performance. Chapter 6: Accessibility
          and Inclusive Design Building accessible applications is both a moral
          imperative and often a legal requirement. Accessibility ensures that
          people with disabilities can use and benefit from web applications.
          This includes considerations for users with visual, auditory, motor,
          and cognitive impairments. Semantic HTML forms the foundation of
          accessible markup. Using appropriate elements (buttons, links,
          headings, landmarks) provides meaning that assistive technologies can
          interpret. ARIA attributes supplement HTML semantics where native
          elements fall short, but should be used judiciously as they don't
          provide functionality, only information. Keyboard navigation,
          sufficient color contrast, clear focus indicators, and descriptive
          text alternatives for images are essential accessibility features.
          Testing with screen readers and other assistive technologies helps
          identify issues that might not be apparent to sighted users navigating
          with a mouse. Chapter 7: Testing Strategies and Quality Assurance
          Comprehensive testing strategies are essential for maintaining code
          quality and preventing regressions. Modern testing approaches include
          unit tests for individual functions and components, integration tests
          for interactions between modules, and end-to-end tests that simulate
          real user scenarios. Testing frameworks like Jest, Mocha, and Jasmine
          provide the foundation for unit and integration testing. Testing
          libraries like React Testing Library encourage testing component
          behavior rather than implementation details, leading to more
          maintainable tests. End-to-end testing tools like Cypress and
          Playwright enable automated browser testing, catching issues that unit
          tests might miss. Conclusion The world of modern web development is
          vast and constantly evolving. Success requires not only technical
          skills but also the ability to make informed decisions about
          architecture, tools, and practices. By understanding fundamental
          principles, staying current with emerging technologies, and always
          keeping user needs at the forefront, developers can build applications
          that are not only functional but exceptional.
        </Modal>
      )}
    </div>
  );
};


export const OptionsModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Options Modal
      </button>

      {isOpen && (
        <Modal
          title="Opções"
          onClose={() => setIsOpen(false)}
          buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'Salvar', onClick: () => setIsOpen(false) }}
          type="options"
          options={['Option 1', 'Option 2', 'Option 3']}
          label="Aqui é a label de opções"
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      )}
    </div>
  );
};


export const NoFooter = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal without Footer
      </button>

      {isOpen && (
        <Modal
          title="Titulo"
          onClose={() => setIsOpen(false)}
          type="alert"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      )}
    </div>
  );
}

export const Items = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal with Items
      </button>

      {isOpen && (
        <Modal
          title="Titulo"
          type="items"
          buttonLeft={{ label: 'a', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'b', onClick: () => setIsOpen(false) }}
          onClose={() => setIsOpen(false)}
          items={[
            { label: 'Item 1', img: 'https://picsum.photos/id/237/150/150', content: (<><img src="https://picsum.photos/id/182/150/150" alt="Item 1" /><p>exemplo de item com imagem e texto</p></>) },
            { label: 'Item 2', img: 'https://picsum.photos/id/180/150/150', content: <p>Conteúdo do Item 2</p> },
            { label: 'Item 3', img: '', content: <p>Conteúdo do Item 3</p> },
            { label: 'Item 4', img: 'https://picsum.photos/id/1/150/150', content: <p>Conteúdo do Item 4</p> }
          ]}
        >
          Esses são alguns itens disponíveis: 
        </Modal>
      )}
    </div>
  );
}

export const Inputs = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal with Inputs
      </button>

      {isOpen && (
        <Modal
          title="Titulo"
          type="inputs"
          buttonLeft={{ label: 'a', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'b', onClick: () => setIsOpen(false) }}
          onClose={() => setIsOpen(false)}
          inputs={[
            { label: 'Input 1', placeholder: 'Digite algo...', auxiliaryText: 'Texto auxiliar para o input 1' },
            { label: 'Input 2', placeholder: 'Digite algo mais...', auxiliaryText: 'Texto auxiliar para o input 2' },
          ]}
        >
        </Modal>
      )}
    </div>
  );
}