import {DefaultTheme} from 'styled-components'

const light:DefaultTheme = {
  titulo: 'light',
  header: {
    background: '#f4fffd',
    titleForeground: '#00b3d3',
    toolbox: {
      foreground: '#00b3d3',
      hover: '#e9e5df',
      arrow: '#2f363d',
    },
    switch: {
      background: '#888888',
      foreground: '#2f363d',
      icon: '#ffdf5d'
    },
  },
  main: {
    background: '#d5d5d5',
    progressBar: '#00b3d3',
  },
  paginas: {
    login: {
      container: '#fcf9f9',
      top: '#3b4458',
      title: '#00b3d3'
    },
    profissional: {
      background: {
        top: '#fcf9f9',
        bottom: '#3b4458',
      },
      title: '#3b4458',
      table: {
        left: '#ffffff',
        right: '#ffffff'
      },
      img: '#bdb5b5',
    },
    busca: {
      background: '#fcf9f9',
      foreground: '#3b4458'
    },
    busca_404: {
      background: '#fcf9f9',
      foreground: '#3b4458'
    },
    busca_found: {
      top: {
        background: '#3b4458',
        title: '#ffffff',
      },
      bottom: {
        background: '#fcf9f9',
        table: {
          left: '#3b4458',
          right: '#3b4458'
        }
      }
    },
    doses: {
      top: {
        background: '#292d35',
        foreground: '#ffffff',
      },
      bottom: {
        background: '#fcf9f9',
        foreground: '#3b4458'
      },
      naoEncontrado: '#3b4458',
      doses: {
        background: '#3b4458',
        foreground: '#ffffff'
      }
    },
    adicionar: {
      top: {
        background: '#3b4458',
        foreground: '#ffffff',
      },
      bottom: {
        background: '#fcf9f9',
        foreground: '#3b4458'
      }
    },
    erro: {
      title: '#00b3d3',
      desc: '#215b63'
    }
  },
  componentes: {
    container: {
      background: '#fcf9f9',
    },
    input: {
      background: '#f3f3f3',
      foreground: '#433c3c',
      carret: '#433c3c',
      border: {
        default: '#707070',
        select: '#4646f0'
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
      background: '#ececec',
      foreground: '#433c3c',
      border: {
        default: '#707070',
        select: '#4646f0'
      }
    },
    checkbox: {
      color: '#3b4458'
    }
  }
}

export default light