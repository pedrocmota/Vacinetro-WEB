import 'styled-components'

declare global {
  export type ListaTemas = 'light' | 'dark'
}

declare module 'styled-components' {

  export interface DefaultTheme {
    titulo: ListaTemas,
    header: {
      background: string,
      titleForeground: string,
      toolbox: {
        foreground: string,
        hover: string,
        arrow: string,
      }
      switch: {
        background: string,
        foreground: string,
        icon: string
      }
    },
    main: {
      background: string,
      progressBar: string
    },
    paginas: {
      login: {
        container: string,
        top: string,
        title: string
      },
      profissional: {
        background: {
          top: string,
          bottom: string
        },
        title: string,
        table: {
          left: string,
          right: string
        },
        img: string
      },
      busca: {
        background: string,
        foreground: string
      },
      busca_404: {
        background: string,
        foreground: string
      },
      busca_found: {
        top: {
          background: string,
          title: string
        },
        bottom: {
          background: string,
          table: {
            left: string,
            right: string
          },
        }
      },
      doses: {
        top: {
          background: string,
          foreground: string
        },
        bottom: {
          background: string,
          foreground: string
        },
        naoEncontrado: string,
        doses: {
          background: string,
          foreground: string
        }
      }
      adicionar: {
        top: {
          background: string,
          foreground: string
        },
        bottom: {
          background: string,
          foreground: string
        },
      }
      erro: {
        title: string,
        desc: string
      }
    },
    componentes: {
      container: {
        background: string,
      }
      input: {
        background: string,
        foreground: string,
        carret: string,
        border: {
          default: string,
          select: string
        }
      },
      button: {
        primary: {
          background: string,
          foreground: string,
          hover: string,
          active: string,
        },
        error: {
          background: string,
          foreground: string,
          hover: string,
          active: string,
        }
      },
      select: {
        background: string,
        foreground: string,
        border: {
          default: string,
          select: string
        }
      },
      checkbox: {
        color: string
      },
    }
  }
}
