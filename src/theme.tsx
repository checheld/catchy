import { createTheme } from '@mui/material';
export const defaultTheme = createTheme({
  typography: {
    fontFamily: '"Proxima Nova", sans-serif',
  },

  palette: {
    primary: {
      main: '#5EA7D3',
    },
    secondary: {
      main: '#6997D3',
    },
  },
})

export const theme = createTheme(defaultTheme, {
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '44px',
          borderRadius: '72px',
        },

        text: {

        },

        contained: {
          backgroundColor: defaultTheme.palette.primary.main,
          fontFamily: '"Adieu", sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          letterSpacing: '1.5px',
          color: '#171717',
          '&:hover': {
            backgroundColor: '#6997D3'
          },
          '&:active': {
            backgroundColor: '#4282D3'
          },
        },
        outlined: {

        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: 0,
          fontWeight: 200,
        },
        notchedOutline: {
          width: '95.6%',
          height: '58px',
          borderColor: '#333333 !important',
          borderRadius: '8px',
          fontWeight: 400,
          fontSize: '18px',
          '&.Mui-focused': {
            outline: '1px solid #5EA7D3',
          }
        }
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      },
    },
  },

});
// export const secondaryTheme = createTheme(defaultTheme, {
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           maxHeight: defaultTheme.spacing(10),
//           padding: defaultTheme.spacing(4, 5),
//           fontWeight: 500,
//           lineHeight: '17px',
//           textTransform: 'none',
//         },
//         contained: {
//           backgroundColor: defaultTheme.palette.info.light,
//           color: defaultTheme.palette.info.main,
//           '&:hover': {
//             backgroundColor: '#e4ecf7'
//           },
//           '&:active': {
//             ackgroundColor: '#dae7f7'
//           },
//           '&:disabled': {
//             opacity: 0.4
//           }
//         },
//       }
//     },
//   }
// })