import {DefaultTheme} from 'styled-components'

const dark:DefaultTheme = {
  titulo: 'dark',
  header: {
    background: '#292d35',
    titleForeground: '#ffffff',
    toolbox: {
      foreground: '#00b3d3',
      hover: '#4C566A',
      arrow: '#ffffff',
    },
    switch: {
      background: '#6e40c9',
      foreground: '#6e40c9',
      icon: '#ffdf5d'
    },
  },
  main: {
    background: '#202225',
    progressBar: '#702dc9',
  },
  paginas: {
    login: {
      container: '#2E3440',
      top: '#3B4252',
      title: '#00b3d3'
    },
    profissional: {
      background: {
        top: '#292d35',
        bottom: '#252930',
      },
      title: '#ffffff',
      table: {
        left: '#ffffff',
        right: '#ffffff'
      },
      img: '#bdb5b5',
    },
    busca: {
      background: '#292d35',
      foreground: '#ffffff'
    },
    busca_404: {
      background: '#292d35',
      foreground: '#ffffff'
    },
    busca_found: {
      top: {
        background: '#292d35',
        title: '#ffffff',
      },
      bottom: {
        background: '#252930',
        table: {
          left: '#ffffff',
          right: '#ffffff'
        }
      }
    },
    doses: {
      top: {
        background: '#292d35',
        foreground: '#ffffff',
      },
      bottom: {
        background: '#252930',
        foreground: '#ffffff'
      },
      naoEncontrado: '#ffffff',
      doses: {
        background: '#3f4247',
        foreground: '#ffffff'
      }
    },
    adicionar: {
      top: {
        background: '#292d35',
        foreground: '#ffffff',
      },
      bottom: {
        background: '#252930',
        foreground: '#ffffff'
      },
    },
    erro: {
      title: '#ECEFF4',
      desc: '#D8DEE9'
    }
  },
  componentes: {
    container: {
      background: '#252930',
    },
    input: {
      background: '#434C5E',
      foreground: '#cecece',
      carret: '#cecece',
      border: {
        default: '#cecece',
        select: '#8f8ffa'
      }
    },
    button: {
      primary: {
        background: '#26a69a',
        foreground: '#ffffff',
        hover: '#2bbbad',
        active: '#09b086'
      },
      error: {
        background: '#ff5e5e',
        foreground: '#ffffff',
        hover: '#f5a5a8',
        active: '#f5a5a8'
      }
    },
    select: {
      background: '#434C5E',
      foreground: '#cecece',
      border: {
        default: '#cecece',
        select: '#8f8ffa'
      }
    },
    checkbox: {
      color: '#ffffff'
    }
  }
}

export default dark