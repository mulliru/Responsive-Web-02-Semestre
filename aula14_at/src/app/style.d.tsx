
import styled, { DefaultTheme } from 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme {
        title : string,
        colors : {
            primaryColor: string,
            secondaryColor: string, 
            textColor: string,
        }
    }
}