import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      numbers: string
      operators: string
      defaultButton: string
      main: string
      secondary: string
    }
  }
}
